import React from 'react';
import Form from './Form'
import Card from './Card'

class App extends React.Component {
  state = { cards: [], editing: null }

  

  render() {
    const { editing, cards } = this.state

    return (
      <div className="container">
        <Form editing={editing} />
        { cards.length ? this.showCards() : <h1 className="center">No Cards</h1> }
      </div>
    )
  }
}

export default App;
