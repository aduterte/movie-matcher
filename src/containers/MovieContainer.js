import React from "react"
import { moviesAtom} from "../Atom"
import { useRecoilState } from "recoil"
import MovieCard from "../components/MovieCard"
import HeroMovie from "../components/HeroMovie"

export default function MovieContainer(){

    const [movies, setMovies] = useRecoilState(moviesAtom)

    return (
        <div>
            <HeroMovie movie={movies[0]}/>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    )
    
}