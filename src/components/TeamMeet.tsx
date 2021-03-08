import React from 'react'

interface TeamMeetProps {
    team:string
}

const TeamMeet: React.FC<TeamMeetProps> = ({team}) => {
        return (<div id="team-meet">
            <h2>{team}</h2>
        </div>);
}
export default TeamMeet

