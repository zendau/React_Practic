import React from 'react'

export default function TheAbout(props) {
    const id = props.match.params.id;
    return (
        <div>
            <h1>About - {id}</h1>
        </div>
    )
}
