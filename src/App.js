import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { useRecoilState } from "recoil"
import { userAtom, moviesAtom} from "./Atom"
import Login from "./components/Login"

function App() {

  const [user, setUser] = useRecoilState(userAtom),
    [movies, setMovies] = useRecoilState(moviesAtom)


  useEffect(()=>{
    fetch("http://localhost:3000/movies")
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setMovies(data)})
  }, [])

  return (
    <div className="App">
      <Login/>
      {movies.map(movie => <div key={movie.id}>{movie.title}</div>)}
    </div>
  );
}

export default App;
