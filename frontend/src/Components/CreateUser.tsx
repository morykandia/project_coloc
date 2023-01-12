import {SetStateAction, useState, Dispatch} from 'react'
import { useNavigate } from 'react-router-dom'
import Menu  from './Menu';

export interface ILoginProps {
    setJwt: Dispatch<SetStateAction<string>>
}

export default function CreateUser ({setJwt}: ILoginProps) 
{
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastNmae] = useState<string>("")
    const [gender, setGender] = useState<string>("")
    const navigate = useNavigate()

    const handleSubmit = (e: any) => {
        e.preventDefault();
        fetch("http://localhost:1221/create", {
            method: "POST",
            mode: "cors",
            credentials: "include",
            body: JSON.stringify({
                username: username,
                password: password,
                email:email,
                firstName: firstName,
                lastName:lastName,
                gender:gender
            })
        })
            .then(data => data.json())
            .then(json => {
                if (json.jwt !== undefined) {
                    setJwt(json.jwt)
                    
                }
            })
            navigate('/menu')
        }

        return (
           
            
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-10">
             <Menu/>
            <h1>S'inscrire </h1>
            <form className="mb-3" onSubmit={handleSubmit}>
               <label htmlFor="note" className="form-label mt-3">Username:</label>
                <input type="text" placeholder="Entrez Note" className="form-control" onChange={e => setUsername(e.target.value)} /> <br/>

                <label htmlFor="note" className="form-label mt-3">Mot de Passe:</label>
                <input type="password" placeholder="Entrez Mot de Passe " className="form-control" onChange={e => setPassword(e.target.value)}/> <br/>

                <label htmlFor="note" className="form-label mt-3">Email:</label>
                <input type="email" placeholder="Entrez Email" className="form-control" onChange={e => setEmail(e.target.value)} /> <br/>

                <label htmlFor="note" className="form-label mt-3">Prénom:</label>
                <input type="text" placeholder="Entrez Prénom" className="form-control" onChange={e => setFirstName(e.target.value)}/> <br/>

                <label htmlFor="note" className="form-label mt-3">Nom:</label>
                <input type="text"  placeholder="Entrez Nom" className="form-control" onChange={e => setLastNmae(e.target.value)}/> <br/>

                <label htmlFor="note" className="form-label mt-3">Genre:</label>
                <input type="text" placeholder="Entrez Genre" className="form-control" onChange={e => setGender(e.target.value)}/> <br/>
               
                <button  type="submit">Create Account</button>
            </form>

            </div>
        );

}