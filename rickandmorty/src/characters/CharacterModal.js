import React from 'react';

class CharacterModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { character } = this.props;

    return (
      <div className="modal" onClick={(e) => this.props.modalInactivate()}>
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
                <div className="feature-value">{character.origin.name}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterModal;
