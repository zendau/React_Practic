import React from "react"

import Card from "./Card"

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cards: [
          {
            title: "one",
            price: 100,
            desk: "One desk"
          },
          {
            title: "two",
            price: 200,
            desk: "Two desk"
          }
      ] 
    }
 }

 onTestClick(event) {
    console.log("test click", event)
    const newCards = [...this.state.cards].map(item => {
      item.title = "Changed title"
      return item
    })


   this.setState({
     cards: newCards
   })
 }

 onTestArgs(args) {

    const newCards = [...this.state.cards].map(item => {
    item.title = args
    return item
  })

 this.setState({
   cards: newCards
 })
 }

 printTextEvent(event, arg) {
    console.log(event.target.value)
    console.log(arg)
  }

  onChangeTitle(event, index) {
    const inputValue = event.target.value

    const newCards = [...this.state.cards]
    newCards[index].title = inputValue

    this.setState({
      cards: newCards
    })
 
  }

  onDeleteCard(index) {
    const newCards = [...this.state.cards]
    newCards.splice(index, 1)
  
    this.setState({
      cards: newCards
    })
  }

  render() {
    return (
      <div>
        {this.state.cards.map((item, index) => 
          <Card 
            printText={this.printTextEvent}
            changeTitle={(event) => this.onChangeTitle(event, index)}
            deleteCard={this.onDeleteCard.bind(this, index)}
            title={item.title} 
            price={item.price}
            key={index}
          >
            {item.desk}
        </Card>
          
          )}
        
        <button onClick={this.onTestClick.bind(this)} >Test event</button>
        <button onClick={this.onTestArgs.bind(this, "Func A")} >A</button>
        <button onClick={() => this.onTestArgs("func B")} >B</button>
      </div>
    );
  }
}

export default App;
