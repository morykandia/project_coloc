import React, {useState, useEffect} from 'react';
import CreateUser from './CreateUser';
import Login from "./Login"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu  from './Menu';
import ListesUsers from './ListesUsers';

function App() {
  const [jwt, setJwt] = useState<string>("")

  useEffect(() => {
    if (jwt === "") {
      return
    }

    fetch("http://localhost:1221", {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: new Headers({
                "Authorization": "Bearer " + jwt
            })
        })
            .then(data => data.json())
            .then(json => console.log(json))
  }, [jwt])

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Login setJwt={setJwt}/>}/>
        <Route path='/create' element={<CreateUser setJwt={setJwt}/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/users' element={<ListesUsers/>}/>
      </Routes>



    </BrowserRouter>
    
  
  );
}

export default App;
