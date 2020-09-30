import React, {useEffect} from 'react';
import './App.css';
import { useRecoilState } from "recoil"
import { userAtom, moviesAtom} from "./Atom"
import Login from "./components/Login"
import MovieContainer from "./containers/MovieContainer"
import Nav from "./containers/Nav"
import URL from "./Constants"

function App() {

  const [user, setUser] = useRecoilState(userAtom),
    [movies, setMovies] = useRecoilState(moviesAtom)


  useEffect(()=>{
    fetch(`${URL}/movies`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setMovies(data)})
  }, [])

  return (
    <div className="App">
      <div className="main-section">
        {/* <Login/> */}
        <MovieContainer/>
      </div>
      
      <Nav/>
    </div>
  );
}

export default App;
