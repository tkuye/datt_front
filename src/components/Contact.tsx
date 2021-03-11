import React, {useState} from 'react'

import axios from '../axInstance'
import "../css/contact.scss"
import TextareaAutosize from "react-textarea-autosize"




interface ContactProps {

}

const Contact: React.FC<ContactProps> = ({}) => {
    const [show, setShow] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail]  = useState('')
    const [text, setText]  = useState('')
        const formSubmit =(e:React.FormEvent) => {
            
            
            e.preventDefault()
            //
            if (email === "" || name === "" || text === "") {
                setShow('Please fill in all the required fields.')
                return
            }
            
                
            axios.post('/email-request', {
                from_name: name,
                message: text,
                reply_to: email,
                reply_email: email,
                to_name:"DATT Team"
            }).then(() => {
                setShow('Thank you for your response, you will receive an email shortly.')
                setName('')
                setEmail('')
                setText('')
            })
            //
            
            setTimeout(() => setShow(''), 5000)
        }
        return (<div id="outer-contact">
            <h1 id="get-in-touch">Looking to get in touch with us?</h1>
        <div className="contact">
            <form   id="contact-form" onSubmit={(e) => formSubmit(e)}>
                <h2 style={{marginTop:'100px'}} >Your Name</h2>
                <input type="text" id="contact-name" value={name} onChange={(e) => setName(e.target.value)}/>
                <h2>Your Email Address</h2>
                <input type="email" name="contact-email" value={email} id="contact-email" onChange={(e) => setEmail(e.target.value)}/>
                <h2>What do you need help with?</h2>
                <TextareaAutosize  minRows={5} autoFocus id="contact-area" value={text} style={{ resize:"none"}}
                onChange={e => setText(e.target.value)}/>
                <input type="submit" value="Send" id="contact-send" />
                <h3 style={{textAlign:"center"}}>{show}</h3>
            </form >
            
                <h1>Contact Information</h1>
                <div id="contact-information">
            <h2>Email: <a href="mailto:help@justlikedatt.com">help@justlikedatt.com</a></h2>
            <h2>Phone: <a href="tel:+1-587-982-5244">587-982-5244</a></h2>
            </div>
            
            
        </div>
        </div>);
}
export default Contact