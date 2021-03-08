import React, {useEffect, useContext, useState} from 'react'
import Member from './components/Member'
import MemberImage from './components/MemberImage'
import {UserContext} from './App'
import Emails from './components/Emails'
interface TeamProps {

}

interface User {
    description: string
    image: string
    img_location: string
    name: string
    video: string
} 

const Team: React.FC<TeamProps> = ({}) => {
    const [users, setUsers] = useState<User[] | undefined>([])
    const [images, setImages] = useState<Partial<User>[] | undefined>([])
    const context = useContext(UserContext)
    useEffect(() => {
        if (context?.status === "LOADED") {
            console.log(context.users)
            setUsers(context.users)
            setImages(context.users?.map((user) => {return {image:user.image, name:user.name}}))
        }
        
    }, [context])
        return (<div className="our-team"><h1>Meet Our Team</h1>
        <div className="images-members">{images?.map((image) => {
            return (
                <MemberImage image={image.image} name={image.name}/>
            )
        })}</div>
        <div className="members">
        {users?.map((user) => {
            return (
                <Member name={user.name} description={user.description}/>
            )
        })}

        </div>
       
        <Emails />
            </div>);
}
export default Team