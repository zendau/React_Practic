import React from "react"

import Card from "./Card"

import "./App.css"

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
    console.log("constructor");
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

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps()")
    return null;
  }
  componentDidMount(){
    console.log("componentDidMount()")
  }
  componentWillUnmount(){
    console.log("componentWillUnmount()")
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate()")
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate()")
    return null;
  }
  componentDidUpdate(){
    console.log("componentDidUpdate()")
  }

  render() {
    console.log("render()")
    return (
      <div className="test">
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
