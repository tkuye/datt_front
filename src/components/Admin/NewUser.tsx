import React, {useState, useRef, useContext} from 'react'
import axios from '../../axInstance'
import Home from './Home'
import {RunningContext} from './AdminPanel'
interface NewUserProps {
   
}

const NewUser: React.FC<NewUserProps> = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [existing, setExisting] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [totalTrue, setTotalTrue] = useState(false)
    const passwordVal = useRef<any>('')
    const ourContext = useContext(RunningContext)

    const checkUsername = () => {
        axios.post('/existing-user', {
            username: username
        }).then((response) => {
            if (response.data) {
                setExisting('There is already a user with that username.')
            }
            else {
                setExisting('')
            }
        })
    }

    const checkPasswords = (e:any) => {

        function hasNumber(myString:string) {
            return /\d/.test(myString);
          }

        if (e.target.value.length >= 8) {
            document.getElementById('charlen')?.classList.replace('errors', 'success')
            
        }
        else if (e.target.value.length < 8) {
            document.getElementById('charlen')?.classList.replace('success', 'errors')
        }
        let contains = false
        String(e.target.value).split('').forEach(char => {
            if (char.toUpperCase() === char && isNaN(Number(char))) {
                contains = true
            } 
        })
         if (contains){
        document.getElementById('charcase')?.classList.replace('errors', 'success')
         }
         else {
            document.getElementById('charcase')?.classList.replace('success', 'errors')
        }

        
          if (hasNumber(e.target.value)) {
            document.getElementById('charnum')?.classList.replace('errors', 'success')
          } else {
            document.getElementById('charnum')?.classList.replace('success', 'errors')
          }
          if (e.target.value === rePassword) {
            document.getElementById('charmatch')?.classList.replace('errors', 'success')
          }
          else {
            document.getElementById('charmatch')?.classList.replace('success', 'errors')
          }
          
        
    }
    const checkRePasswords = (e:any) => {
        if (e.target.value === password) {
            document.getElementById('charmatch')?.classList.replace('errors', 'success')
          }
          else {
            document.getElementById('charmatch')?.classList.replace('success', 'errors')
          }
    }

    const formSubmission = (e:any) => {
        e.preventDefault()
        if (!totalTrue || existing !== "" || password === "" || username === "" ) return

        axios.post('/new-user', {
            username: username,
            password: password

        }).then(response => {
            if (response.data === "success") {
                ourContext.newUser(`User ${username} Created.`)
                ourContext.running()
            }
        })
    }

    const allClass = () => {
        let valDiv = document.getElementById('password-validation') as HTMLDivElement

        if (Array.from(valDiv.children).every(child => child.classList.contains('success'))) {
            valDiv.style.borderColor = 'rgb(27, 141, 46)'
            setTotalTrue(true)
            
        }
        else {
            valDiv.style.borderColor = 'rgb(202, 32, 32)'
            setTotalTrue(false)
        }
    }
    
        return (<div>
            <Home />
        <div id="new-user">
            
            <form onSubmit={formSubmission} onChange={allClass}>
            <label htmlFor="username"><h2>Enter a Username</h2></label>

            <input type="text" id="username" value={username}  autoComplete="username"
            onChange={e => {setUsername(e.target.value)}}

           onBlur={checkUsername}/>
           <div className="errors">{existing}</div>
            <label htmlFor="password"><h2>Enter a Password</h2></label>
            <input type="password" 
            name="password"  autoComplete="new-password" 
            onChange={e => {setPassword(e.target.value);checkPasswords(e)}}
            onFocus={ () => passwordVal.current.style.display = "block"}
            />
            <label htmlFor="re-type"><h2>Confirm Password</h2></label>
            <input type="password" name="re-password" id="re-type" autoComplete="new-password" onChange={e => {setRePassword(e.target.value);checkRePasswords(e)}}/>
            
            <input type="submit" id="submit"value="Create New User"/>

    <div id="password-validation" ref={passwordVal} style={{display:'none'}}>
        <p className="errors" id="charlen">Password must be at least 8 characters.</p>
        <p className="errors" id="charcase"> Password must have an upper case character.</p>
        <p className="errors" id="charnum">Password must contain a number.</p>
        <p className="errors" id="charmatch">Passwords must match.</p>
    </div>
            </form>
        </div>
        
        </div>);

}
export default NewUser