import React from 'react'
import {Link} from 'react-router-dom'

const ShowList = ({id, name, image, summary}) => {

    const summaryAsText = summary 
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
    : 'No Description';

    return (
        <div>
            <div>
                <img src = {image} alt = "show" />
            </div>
            <h1> {name} </h1>
            <p>{summaryAsText}</p>

            <div>
                <Link to = {`/show/${id}`}> Read More</Link>
                <button type = "button"> Add to Favourite</button>
            </div>
        </div>
    )
}

export default ShowList