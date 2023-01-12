import {useState, useEffect} from 'react'
import Menu  from './Menu';

interface dataUserI {
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string
}

export default function  ListesUsers(){

    const [dataUsers, setDataUsers] = useState<dataUserI[]>([]);

    useEffect( () => {
        fetch('http://localhost:1221//users')
        .then(res => res.json())
        .then(r=>setDataUsers(r.users))
    
    }, [])
    console.log(dataUsers)
    return (
        <div>
            <Menu/>
            
            {
                // @ts-ignore
                dataUsers.map((user: dataUserI)=>
                {
                    return (
                        <div>
                            {user.id} - {user.email} - {user.username} 
                        </div>
                    )
                })
            }
            
        </div>

    )

}