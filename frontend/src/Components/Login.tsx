import {SetStateAction, useState, Dispatch} from 'react'
import { useNavigate } from 'react-router-dom'


export interface ILoginProps {
    setJwt: Dispatch<SetStateAction<string>>
}



export default function Login ({setJwt}: ILoginProps) {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()
    const handleSubmit = (e: any) => {
        e.preventDefault();
        fetch("http://localhost:1221/login", {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: new Headers({
                "Authorization": "Basic " + btoa(`${email}:${password}`)
            })
        })
            .then(data => data.json())
            .then(json => {
                console.log(json)
                if (json.jwt !== undefined) {
                    setJwt(json.jwt)
                    navigate('/menu')
                }
            })
    }

    return (
        
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
        <h1> Se Connecter </h1>
        <form className="mb-3" onSubmit={handleSubmit}>
            <label htmlFor="note" className="form-label mt-3">Email:</label>
            <input type="email" placeholder="Entrez Email" className="form-control" onChange={e => setEmail(e.target.value)} /> <br/>

            <label htmlFor="note" className="form-label mt-3">Mot de Passe:</label>
            <input type="password" placeholder="Entrez Mot de Passe " className="form-control" onChange={e => setPassword(e.target.value)}/> <br/>

            <button  type="submit">Se Connecter </button>
        </form>
    </div>
    );
}