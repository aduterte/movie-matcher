import React from "react"

export default function HeroMovie(props){

        const movie = props.movie
    return (
        <div>
            {movie && 
            <div className="hero-movie" style={{background: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}>
                
            <img className="hero-test" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}/>
                
                    
                
            </div>}
        </div>
    )
}