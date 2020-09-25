import React from "react"

export default function HeroMovie(props){

    return (
        <div>
            <div className="hero-movie">
                
            {props.movie.title}
            </div>
        </div>
    )
}