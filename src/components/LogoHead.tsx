import React, {useEffect} from 'react'
import logo from '../images/Datt-removebg-preview.png'
import {history} from '../App'
import {Link} from 'react-router-dom'

interface LogoHeadProps {

}

const LogoHead: React.FC<LogoHeadProps> = ({}) => {

        useEffect(() => { 
                console.log('New Render')
        })
        const goHome = () => {
                history.push('/')
        }
        return (<Link to="/"><div id="image-container"><img id="logo" alt="Logo spelling D.A.T.T" src={logo} /></div></Link>);

}



export default LogoHead


