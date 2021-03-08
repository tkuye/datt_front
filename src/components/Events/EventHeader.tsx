import React from 'react'

interface EventHeaderProps {
        title: string;
        date: string;
}

const EventHeader: React.FC<EventHeaderProps> = ({title, date}) => {
        return (<div>
                <h2>{title}</h2>
                <h5 className="date">Date: {date}</h5>
        </div>);
}
export default EventHeader