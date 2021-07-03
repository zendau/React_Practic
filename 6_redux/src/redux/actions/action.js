import {ADD, SUB, ADDFIVE} from "./actionTypes"

export function add() {
    return {
        type: ADD
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function addFive(num) {
    return {
        type: ADDFIVE, 
        value: num
    }
}

export function incrementAsync(num) {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(addFive(num));
      }, 3000);
    };
  }