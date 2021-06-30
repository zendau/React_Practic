const redux = require("redux")

const initState = {
    counter: 0
}

// Reduser

const reduser = (state = initState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                counter: state.counter + 1
            }
        case "ADDFIVE":
            return {
                counter: state.counter + action.value
            }
        default:
            return state
    }

    
}

// Store

const store = redux.createStore(reduser)

store.subscribe(() => console.log(store.getState()))

// Actions

const addCounter = {
    type: "ADD"
}


store.dispatch(addCounter)

store.dispatch({
    type: "ADDFIVE",
    value: 5
})

