import React, {useEffect} from 'react'
import logo from '../images/Copy_of_Datt-removebg-preview.png'

import {Link} from 'react-router-dom'

interface LogoHeadProps {

}

const LogoHead: React.FC<LogoHeadProps> = () => {

        useEffect(() => { 
        })
        
        return (<Link to="/"><div id="image-container"><img id="logo" alt="Logo spelling D.A.T.T" src={logo} /></div></Link>);

}



export default LogoHead


