import React, {useEffect, useState} from 'react'
import {EventInterface, eventI} from '../../App'
import "../../css/event.scss"
import Emails from '../Emails'
import Interest from './Interest'
interface EventProps {
 
    data: EventInterface
}

const Event: React.FC<EventProps> = ({data}) => {
    const [event, setEvent] = useState<eventI | null>(null)
    const [getData, setData] = useState<string>("")
        useEffect(() => {
            document.body.scrollTop = 0
            if (data.status === "LOADED") {
                
                setEvent(data.event)

                    setData(data.urlData!)
            }
            
        }, [event, data])
        return (<div className="event">
            <img src={event?.image} alt="event" />
            <h2 id="event-name">{event?.event_name}</h2>
                <div id="event-data" dangerouslySetInnerHTML={{__html:getData}}></div>
                <h3 style={{display:event?.iframe_form===""?"none":"block"}}>Are you interested in this event? Complete our survey form!</h3>
                <iframe title="donation page" style={{display:event?.iframe_form===""?"none":"block"}}src={event?.iframe_form}></iframe>
                <Interest id={event?.event_id}/>
                
                <Emails />
            </div>);
}
export default Event