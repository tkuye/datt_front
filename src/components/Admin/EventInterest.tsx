import React, {useState} from 'react'
import axios from '../../axInstance'

interface EventInterestProps {

}

const EventInterest: React.FC<EventInterestProps> = () => {
    const [events, setEvents] = useState([])
    const getInterest = () => {
        axios.get('/api/v1/interest').then(response => {
            setEvents(response.data)
        })
    }

        return (<div className="admin-getter"><h1>Interest Total</h1>
        <p id="show" onClick={getInterest}>Click here to see the interest for each event.</p>
        {events.length > 0?events.map((e:any) => {
            return (<div className="i-total">
                <h2>{e.event_name}</h2>
                <h2> {e.int_total}</h2>
            </div>)
        }):<div></div>}
        </div>);

}   

export default EventInterest