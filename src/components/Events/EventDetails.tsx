import React from 'react'

interface EventDetailsProps {
        details:string
}

const EventDetails: React.FC<EventDetailsProps> = ({details}) => {
        return (<div id="details">
                <h5 className="head-details">Details: </h5>
                <p>{details}
                </p></div>);
}
export default EventDetails