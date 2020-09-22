import React from "react"

export default function MovieCard(props){

    const movie = props.movie

    return (
        <div>
            
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}/>
        </div>
    )
}