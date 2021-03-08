import React from 'react'

interface LogoutProps {

}

const Logout: React.FC<LogoutProps> = () => {
    const logout = () => {
        document.cookie = "userauth=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/admin"
        document.cookie = "userid=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/admin"
        
        document.location.reload()
    }
        return (<div id="logout">
            <h2 onClick={logout}>Logout</h2>
            </div>);
}
export default Logout