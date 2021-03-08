import React, {useContext, useEffect, useState} from 'react'
import {EventContext, CurrentEventContext} from '../App'
import {Link} from 'react-router-dom'
import Axios from 'axios'
interface EventModalProps {
   styling: string
}



const EventModal: React.FC<EventModalProps> = ({styling}) => {
    const context = useContext(EventContext)
    const eventContext = useContext(CurrentEventContext)
    const [events, setEvents] = useState<any>([])
    const [dataUrl, setDataUrl] = useState<string>("")
    useEffect(() => {
       if (context?.status === "LOADED") {
            setEvents(context.events)
       } 
    }, [context])

    

        return (<div id="event-modal" style={{display:styling}}>{events.map((event:any) => {
                
            let data = ""
            Axios.get(event.url).then((response) => {
                    data = response.data
            })  
            const goToEvent = () => {
                
                eventContext?.getEvents(event, data)
            }
            return <Link 
            to={`/events/${event.event_name.split(" ").join("-").toLowerCase()}`} 
            style={{textDecoration:"none", color:"#404040"}} onClick={goToEvent}>
                <p className="modal-event">{event.event_name}</p>
                </Link>
        })}</div>);
}

export default EventModal