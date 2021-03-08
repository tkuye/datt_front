import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../../axInstance'
interface EmailListingProps {

}

const EmailListing: React.FC<EmailListingProps> = ({}) => {
    const getEmailListing = () => {
        axios.get('/api/v1/emails').then(response => {
            let blob = new Blob([response.data], { type: 'text/plain'})
            let link = document.createElement('a') as HTMLAnchorElement
            link.href = window.URL.createObjectURL(blob)
            link.download = 'emails.txt'
            link.click()
        })
    }
        return (<div className="user-admin" onClick={() => getEmailListing()}>
            <h2>Current Email Listing</h2>
        </div>);
}
export default EmailListing