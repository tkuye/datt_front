import React, {useRef} from 'react'
import axios from '../axInstance'
interface EmailsProps {

}

const Emails: React.FC<EmailsProps> = ({}) => {
        const inputEl = useRef<any>('')
        const sendEmail = () => {
                const signedUp = document.getElementById('signed-up') as HTMLHeadElement
                let validEmail = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(inputEl.current.value)
                if (!validEmail) {
                        signedUp.innerHTML = "Please enter a valid email address."
                        signedUp.classList.add('errors')
                        signedUp.style.display = 'block'
                        window.scrollTo(0,document.body.scrollHeight);
                return
                }
                
                axios.post('/api/v1/email', {
                        email: inputEl.current.value
                }).then(() => {
                inputEl.current.value = ""
               signedUp.classList.remove('errors')
                signedUp.innerHTML = "Thank you for signing up! You will receive an email shortly."
                signedUp.style.display = 'block'
                window.scrollTo(0,document.body.scrollHeight);
                setTimeout(() => {signedUp.innerHTML = ''}, 3000)
                })
               
        }
        return (<div id="emails">
                <h2>Sign up to receive emails about our upcoming events.</h2>
                <input type="email" placeholder="email@example.com" ref={inputEl}/>
                <input type="submit" value="Join" onClick={sendEmail}/>
                <h3 style={{display: 'none'}}id="signed-up"></h3>
        </div>);
}
export default Emails