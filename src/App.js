import React, {useEffect} from 'react';
import './App.css';
import { useRecoilState } from "recoil"
import { userAtom, moviesAtom} from "./Atom"
import Login from "./components/Login"
import MovieContainer from "./containers/MovieContainer"

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
      <MovieContainer/>
    </div>
  );
}

export default App;
