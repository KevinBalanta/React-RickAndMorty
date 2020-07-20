import React from 'react';
import './App.css';
import { getAllCharacters } from './lib/Api';

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

  renderCards(character) {
    return (
      <div
        key={character.id}
        className="Card"
        onClick={() => this.modalActivate(character)}
      >
        <div className="Card-image">
          <figure>
            <img src={character.image} alt={character.name} />
          </figure>
        </div>
        <div className="Card-description">
          <div className="Card-name">
            <h3>{character.name}</h3>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { showModal, characters, character } = this.state;
    const charactersCards = characters.map((a) => this.renderCards(a));
    return (
      <div className="App">
        <div className="App-container">
          <h1>Rick And Morty</h1>
          <div className="Cards-container">{charactersCards}</div>
          {showModal ? (
            <div className="modal" onClick={(e) => this.modalInactivate()}>
              <div className="modal-details">
                <div className="Card-image">
                  <figure>
                    <img src={character.image} alt={character.name} />
                  </figure>
                </div>
                <div className="Card-details-description">
                  <div className="description">
                    <h3>Name: {character.name}</h3>
                    <div className="feature">
                      <p>Status:</p>
                      <div className="feature-value">{character.status}</div>
                    </div>
                    <div className="feature">
                      <p>Gender:</p>
                      <div className="feature-value">{character.gender}</div>
                    </div>
                    <div className="feature">
                      <p>Specie:</p>
                      <div className="feature-value">{character.species}</div>
                    </div>
                    <div className="feature">
                      <p>Origin:</p>
                      <div className="feature-value">
                        {character.origin.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
