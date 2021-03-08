import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {Link} from 'react-router-dom'
interface FooterProps {

}

const Footer: React.FC<FooterProps> = ({}) => {
        return (<div className="footer">
            <div className="contact-privacy"><ul>
                <li><Link to="/contact" className="content-p">Contact Us</Link></li>
                <li><Link to="/privacy-policy" className="content-p">Privacy Policy</Link></li></ul>
                </div>
            <div className="social" onClick={() => {window.location.href = 'https://www.instagram.com/just.like.datt/'}}><AiFillInstagram /></div>
            <div className="help">
            <Link to="start-here" className="start-here">Cookie Policy</Link></div>
        </div>);
}
export default Footer