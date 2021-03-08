import React, {useState} from 'react'
import axios from '../../axInstance'


interface AuthenticateProps {
    isUserAuthenticated:(arg0:boolean) => void
}

const Authenticate: React.FC<AuthenticateProps> = ({isUserAuthenticated}) => {
    const [password,setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [noUser, setNoUser] = useState(<div></div>)
    const onPassChanged = (e:any) => {
        setPassword(e.target.value)
    }

    const onUserChanged = (e:any) => {
        setUsername(e.target.value)
    }
    const submitForm = (e:any) => {
        e.preventDefault();
        Array.from(document.getElementsByTagName('input')).forEach(input => {
            if (input.type !== 'submit') {
                input.value = '';
            }
        })
        axios.post('/', {
            username:username, 
            password:password,
        }).then(response => {
            if (response.data.token) {
               
                let d = new Date()
                d.setTime(d.getTime() + 7*24*60*60*1000)
                 document.cookie = `userauth=${response.data.token};expires=${d.toUTCString()};path=/admin`
                 document.cookie = `userid=${response.data.user_id};expires=${d.toUTCString()};path=/admin`
            }
            
            if (response.data === 'No username found') {
                setNoUser(<p>No username found or incorrect password.</p>)
                return 
            }
            isUserAuthenticated(response.data.result)
            if (!response.data.result) {
                setNoUser(<p>No username found or incorrect password.</p>)
            }
        })
    }
        return (
            <div className="container">
            <form id="authenticate" onSubmit={(e) => submitForm(e)}>
            <div className="login">
            <label htmlFor="login"><h3>Login</h3></label>
            <input type="text" name="login" id="login" onChange={(e) => onUserChanged(e)} autoComplete="username" onFocus={() => setNoUser(<div></div>)}/>
                
            </div>
            <div className="login">
            <label htmlFor="password"><h3>Password</h3></label>
            <input type="password" name="password" id="password" autoComplete="new-password" onChange={(e) => onPassChanged(e)} onFocus={() => setNoUser(<div></div>)}/>
            </div>
            <input type="submit" value="Login"/>
            {noUser}
            </form>
            </div>
        );
}

export default Authenticate