import React from "react"

class Card extends React.Component {

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
                <input onInput={(event) => this.props.printText(event, this.props)} type="text" />
                <input onInput={this.props.changeTitle} type="text" value={this.props.title} />
                <button onClick={this.props.deleteCard}>Delete card</button>
            </div>
        )
    }
  }
  
  export default Card;
  