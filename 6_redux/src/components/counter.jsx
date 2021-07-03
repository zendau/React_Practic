import React from 'react'

import {connect} from "react-redux"

import {add, sub, addFive, incrementAsync} from "../redux/actions/action"

function counter(props) {
    console.log(props)
    return (
        <div>
            <h1>Counter - {props.counter}</h1>
            <button onClick={() => props.add()}>Add</button>
            <button onClick={() => props.sub()}>Sub</button>

            <button onClick={() => props.addFive(5)}>Add Five</button>

            <button onClick={() => props.addFive(50)}>Async Inc</button>
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
        add: () => dispatch(add()),
        sub: () => dispatch(sub()),
        addFive: (num) => dispatch(addFive(num)),
        asyncInc: (num) => dispatch(incrementAsync(num))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(counter)
