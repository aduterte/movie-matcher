import React from "react"
import { moviesAtom} from "../Atom"
import { useRecoilState } from "recoil"
import MovieCard from "../components/MovieCard"

export default function MovieContainer(){

    const [movies, setMovies] = useRecoilState(moviesAtom)

    return (
        <div>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    )
    
}