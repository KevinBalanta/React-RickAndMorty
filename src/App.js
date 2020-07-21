import React from 'react';
import './App.css';
import { getAllCharacters } from './lib/Api';
import CharacterCard from './characters/CharacterCard';
import CharacterModal from './characters/CharacterModal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      characters: [],
      character: {},
    };
  }

  componentDidMount() {
    getAllCharacters()
      .then((characters) => {
        this.setState({
          characters,
        });
      })
      .catch((e) => console.error(e));
  }

  modalActivate(character) {
    this.setState({
      showModal: true,
      character,
    });
  }

  modalInactivate() {
    this.setState({
      showModal: false,
      character: {},
    });
  }

  // renderCards(character) {
  //   return (
  //     <div
  //       key={character.id}
  //       className="Card"
  //       onClick={() => this.modalActivate(character)}
  //     >
  //       <div className="Card-image">
  //         <figure>
  //           <img src={character.image} alt={character.name} />
  //         </figure>
  //       </div>
  //       <div className="Card-description">
  //         <div className="Card-name">
  //           <h3>{character.name}</h3>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    const { showModal, characters, character } = this.state;
    //const charactersCards = characters.map((a) => this.renderCards(a));
    return (
      <div className="App">
        <div className="App-container">
          <h1>Rick And Morty</h1>
          <div className="Cards-container">
            {characters.map((obj) => (
              <CharacterCard
                key={obj.id}
                character={obj}
                modalActivate={this.modalActivate.bind(this)}
              />
            ))}
          </div>
          {showModal ? (
            <CharacterModal
              character={character}
              modalInactivate={this.modalInactivate.bind(this)}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
