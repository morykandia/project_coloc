export interface userStateI {
    jwt: string,
    username: string
}

export function UserReducer(state: userStateI = {jwt: "", username: ""}, action: any) {
    switch (action.type) {
        case 'CONNECT_USER':
            return fetch("http://back", {
                method: "POST",
                body: JSON.stringify({
                    username: action.payload.username,
                    password: action.payload.password
                })
            })
            .then(res => res.json())
            .then(json => {
                sessionStorage.setItem('jwt', json.jwt)
                return {
                    jwt: json.jwt,
                    username: json.username
                }
            })
        case "DISCONNECT_USER":
            sessionStorage.removeItem('jwt')
            return {
                jwt: "",
                username: ""
            }

        case "RESTORE_USER_FROM_SESSION":
            

        default:
            return state
    }
} 