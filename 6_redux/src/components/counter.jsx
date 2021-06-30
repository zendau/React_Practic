import React from 'react'

import {connect} from "react-redux"

function counter(props) {
    console.log(props)
    return (
        <div>
            <h1>Counter - {props.counter}</h1>
            <button onClick={() => props.add()}>Add</button>
            <button onClick={() => props.sub()}>Sub</button>

            <button onClick={() => props.addFive(5)}>Add Five</button>
        </div>
    )
}

function mapStateToProps(state) {
    
    return { 
        counter: state.counter.counter
     }
}

function mapDispatchToProps(dispatch) {
    return {
        add: () => dispatch({type: "ADD"}),
        sub: () => dispatch({type: "SUB"}),
        addFive: (num) => dispatch({type: "ADDFIVE", value: num}),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(counter)
