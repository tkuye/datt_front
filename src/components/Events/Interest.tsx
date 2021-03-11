import React, {useState, useEffect} from 'react'

import axios from '../../axInstance'
import getCookie from '../../getCookie'



interface InterestProps {
    id: number | undefined
}

const Interest: React.FC<InterestProps> = ({id}) => {
    const [clicked, setClicked] = useState(false)
    const [intNumber, setIntNumber] = useState<number>(-1)

    
   const [sentence, setSentence] = useState("")

    const sendRequest = (e:any) => {
        
            axios.put('/new-interest', {id}).then(response => {
                setIntNumber(response.data.int_total)
            })
            var d = new Date();
            d.setTime(d.getTime() + (5000*24*60*60*1000));
            document.cookie = `event-${id}=${id};expires=${d.toUTCString()}`
           setClicked(true)
    }
    
    
    

    useEffect(() => {
        axios.get('/int-number', {params:{
            id
        }}).then(response => {
            setIntNumber(response.data.int_total)
            
        })
        
        
       
        
        const eventExist = getCookie(`event-${id}`)
        if (eventExist !== "") {
           setClicked(true)
                
        }

           
           

            setSentence(intNumber! > 1 || intNumber === 0? `There are currently ${intNumber} people interested.`: ` There is currently ${intNumber} person interested.`)
        
        },[intNumber, id])
    
        return (<div >
            
            <div className="interest"><p>{sentence}</p>{clicked?<div><p>Thanks for showing your interest!</p></div>:<div><p>Let us know you're interested in this event by clicking below.</p><button className="click-here" onClick={(e) => sendRequest(e)}>I am Interested!</button></div>}
        </div>
        </div>);
}
export default Interest