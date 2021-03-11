import React, {useState, useEffect} from 'react'
import LogoHead from './LogoHead'
import {MdKeyboardArrowDown} from 'react-icons/md'
import EventModal from './EventModal'
import {Link, NavLink, useHistory, useLocation}  from 'react-router-dom'
import { setTimeout } from 'timers'

interface NavigationProps {

}


const Navigation: React.FC<NavigationProps> = () => {
    const [state, setState] = useState(true)
    const [open, setOpen] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [display, setDisplay] = useState(1)
    const [size, setSize] = useState<boolean | null>(null)
    const history = useHistory()
    const location = useLocation()
    useEffect( () => {
        
        if (window.innerWidth > 768) {
            setSize(true)
            
            
        } else {
            setDisplay(0)
            setSize(false)
        }

        let aTags = Array.from(document.querySelectorAll("li > h3 > a")  as unknown as HTMLCollectionOf<HTMLElement>)
        
        for (let a of aTags) {
            a.style.textDecoration = "none"
        }   
    },)

    const svgChange = () => {
        let svg = document.querySelector('svg') as SVGSVGElement
        svg.style.fill = '#f06f33'
        svg.style.transition =  'all 0.3s cubic-bezier(0.000, 0.000, 0.230, 1)'
        setState(false)

    }

    const svgChangeAgain = () => {
        let svg = document.querySelector('svg') as SVGSVGElement
        svg.style.fill = '#008e97'

            setState(true)
        
        
    }
    const clickBurger = (opt:boolean=false) => {
        setClicked(true)

       
        const nav = document.querySelector('#navigation-small') as HTMLDivElement
        const navUl = document.querySelector('#nav-ul-small') as HTMLUListElement
        

        if (opt)  {
            navUl.style.transition = 'none'
        }
        else {
            navUl.style.transition = "all ease 0.3s"
        }
        nav.style.transition = "all ease 0.35s"
        if (open) {
            nav.style.height = "50px"
            setOpen(false)
            navUl.style.opacity = "0"
            setTimeout(() => navUl.style.display = "none", 300)
        }
        else {
            navUl.style.display = "flex"
            navUl.style.opacity = "0"
            navUl.style.display = "block"
            setOpen(true)
            nav.style.height = "220px"

            setTimeout(() => navUl.style.opacity = "1", 100)
            
        }

        
        
    }

    window.addEventListener('resize', () => {
        
        if (window.innerWidth > 768) {
            setSize(true)
        }
        else {
            setSize(false)
            if (open) {
                clickBurger(true)
            }
        }
    
    })

    window.addEventListener("scroll", () => {
        let eventNav = document.querySelector("#event-nav") as HTMLElement
        if (window.scrollY > 60 && !state){
           
         
            
        }
       
        
        
        
        
    })

    history.listen(() => {
        if (!location.pathname.includes("blogs")){

        }
    })

    const changeState = () => {
        setState(true)
    }
        return (<div>{size?<nav id="navigation">
                
                <Link to="/"><LogoHead /></Link>
            <ul id="nav-ul">
                <li><h3 ><NavLink to="/our-team" activeStyle={{textDecoration:'none'}}>Our Team</NavLink></h3></li>
                
                <li id="event-nav" onMouseEnter={svgChange} onTouchStart={svgChange} onMouseLeave={svgChangeAgain}><h3>Events<MdKeyboardArrowDown /></h3>{state?<EventModal styling="none"/>:<EventModal changeState={changeState} styling="block"/>}</li>
                <li><h3><NavLink isActive={(match, location) => { console.log(match);if (!match) {return false} else {return true}}} to="/blogs" activeStyle={{textDecoration:'none'}}>Blogs</NavLink></h3></li>
                
            </ul>
        </nav>:<nav id="navigation-small">
                
                <Link to="/"><LogoHead /></Link>
            <ul id="nav-ul-small" style={{opacity:display}}>
                <li  id="our-team"><h3><NavLink to="/our-team" activeStyle={{textDecoration:'none'}}>Our Team</NavLink></h3></li>
                <li id="blog-head"><h3><NavLink to="/blogs" activeStyle={{textDecoration:'none'}}>Blogs</NavLink></h3></li>
                <li id="event-nav-small" onMouseEnter={svgChange} onTouchStart={svgChange} onMouseLeave={svgChangeAgain}><h3>Events<MdKeyboardArrowDown /></h3>{state?<EventModal styling="none"/>:<EventModal styling="block" changeState={changeState}/>}</li>
                
                
               
                
            </ul>
            <div id="hamburger" onClick={() => clickBurger()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
        </nav>}</div>);
}
export default Navigation