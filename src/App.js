import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { useRecoilState } from "recoil"
import { userAtom} from "./Atom"

function App() {

  const [user, setUser] = useRecoilState(userAtom)


  useEffect(()=>{
    fetch("http://localhost:3000/users/1")
      .then(resp => resp.json())
      .then(data => setUser(data))

   
  }, [])
  return (
    <div className="App">
      {user.username}
      {user.email}
    </div>
  );
}

export default App;
