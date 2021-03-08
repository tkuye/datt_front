import React, {useContext, useEffect, useState} from 'react'
import {UpcomingContext, CurrentEventContext} from '../App'
import {Link} from 'react-router-dom'
import Axios from 'axios'
interface UpcomingEventsProps {

}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({}) => {
        let context = useContext(UpcomingContext)
        const [upcoming, setUpcoming] = useState<any>([])
        const eventContext = useContext(CurrentEventContext)

        useEffect( () => {
            if (context?.status === "LOADED") {
                setUpcoming(context.events.map( event => {
                    let data = ""
            Axios.get(event.url).then((response) => {
                    data = response.data
            })  
            const goToEvent = () => {
                
                eventContext?.getEvents(event, data)
            }
                    
                    return (<div className="upcoming-events">
                        
                        <Link to={`/events/${event.event_name.split(" ").join("-").toLowerCase()}`}  style={{textDecoration:'none'}}><img className="upcoming-img" src={event.image} alt={event.event_name} onClick={goToEvent}></img>
                            <h1 onClick={goToEvent}>{event.event_name}</h1></Link>
                    
                        </div>)
                }))
                
            }
        }, [context])
        return (<div>
        {upcoming.length?<div id="upcoming"><h1 id="head-upcoming">Upcoming Events</h1>
        <h3>Click below to check out our upcoming events.</h3>
        {upcoming}</div>:null}
        </div>
        );
}
export default UpcomingEvents