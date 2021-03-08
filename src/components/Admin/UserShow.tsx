import React from 'react'
import NewUser from './NewUser'


interface UserShowProps {
    getNewUser:(components:JSX.Element) => void
}

const UserShow: React.FC<UserShowProps> = ({getNewUser}) => {
    const goNewUser = () => {
        getNewUser(<NewUser />)
    }
        return (<div onClick={goNewUser} className="user-admin">
            <h2>Create a New User</h2>
        </div>);
}
export default UserShow