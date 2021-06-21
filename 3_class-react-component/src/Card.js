import React from "react"

import PropTypes from 'prop-types';

import checkComponent from "./checkComponent"

class Card extends React.Component {

    constructor(props) {
        super(props);
        
        this.textInput = React.createRef()
      }

    biggerDesk = desk => {
        if (desk.length > 2) {
            // eslint-disable-next-line no-useless-concat
            return desk + " " + "EDITABLE"
        }
    }

    render() {
        return (
            <div style={{'border': "1px solid black", "display": "block", "width": "100px", "margin": "50px", "textAlign": "center"}}>
                <p>{this.props.title}</p>
                <p>{this.props.price > 150 ? this.props.price * 2 : this.props.price}</p>
                <small>{this.biggerDesk(this.props.children)}</small>
                <input ref={this.textInput} onInput={(event) => this.props.printText(event, this.props)} type="text" />
                <input onInput={this.props.changeTitle} type="text" value={this.props.title} />
                <button onClick={this.props.deleteCard}>Delete card</button>
                <button onClick={() => this.textInput.current.focus()}>Forus</button>
            </div>
        )
    }
  }
  
  export default checkComponent(Card)

Card.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    changeTitle: PropTypes.func,
    deleteCard: PropTypes.func,
    printText: PropTypes.func
}
