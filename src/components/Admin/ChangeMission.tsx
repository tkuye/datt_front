import React, {useEffect, useState, useContext} from 'react'
import axios from '../../axInstance'
import { RunningContext } from './AdminPanel'
import Home from './Home'


interface ChangeMissionProps {

}

const ChangeMission: React.FC<ChangeMissionProps> = () => {
    const [mission, setMission] = useState('')
    const context = useContext(RunningContext)
    useEffect(() => {
        axios.get('/mission').then((response) => {
            setMission(response.data.name)
        })
    },[])

    const sendNewMission = () => {
        axios.post('/mission', {
            mission
        }).then(() => {
            context.running()
        })
    }

        return (<div>
            <Home />
        <div id="new-user">
            <h2>Edit Our Mission Statement Here.</h2>
            <textarea value={mission} onChange={(e) => setMission(e.target.value)}/>
            <input type="submit" value="Change Mission" id="submit" onClick={() => sendNewMission()}/>
        </div></div>);
}
export default ChangeMission