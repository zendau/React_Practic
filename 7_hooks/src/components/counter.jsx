import React, {useState, useEffect, useRef, useContext} from 'react'

import {Status} from "../App"

export default function Counter() {

    const status = useContext(Status)

    const [counter, setCounter] = useState(0)

    const count = useRef(0)

    const inputFocus = useRef(null)

    const prevCounter = useRef(null)

    useEffect(() => {
        console.log("rendered")
        count.current++
        console.log(inputFocus)
        inputFocus.current.focus()
    })

    useEffect(() => {
        console.log("rendered2")
        console.log("Status", status)

        return () => {
            console.log("cleaer")
        }
    })

    useEffect(() => {
        console.log("did mount")
    }, [])

    useEffect(() => {
        console.log("counter changed")

        prevCounter.current = counter

    }, [counter])

    return (
        <div>
            <h1>Number of render - {count.current}</h1>
            <h1>Count {counter}</h1>
            <h2>Prev value - {prevCounter.current}</h2>
            <button onClick={() => setCounter(counter+1)}>Add</button>
            <button onClick={() => setCounter(counter-1)}>Sub</button>
            <input ref={inputFocus} type="text" />
        </div>
    )
}
