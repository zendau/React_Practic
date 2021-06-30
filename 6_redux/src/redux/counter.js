const initState = {
    counter: 0
}

export default function reduser (state = initState, action) {
    switch (action.type) {
        case "ADD":
            return {
                counter: state.counter + 1
            }
        case "SUB":
            return {
                counter: state.counter - 1
            }
        case "ADDFIVE":
            return {
                counter: state.counter + action.value
            }
        default:
            return state
    }
 
}