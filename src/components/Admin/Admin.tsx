import React, {useEffect, useState} from 'react'
import Authenticate from './Authenticate'
import AdminPanel from './AdminPanel'
import getCookie from '../../getCookie'
import '../../css/admin.scss'
interface AdminProps {

}

const Admin: React.FC<AdminProps> = () => {
    const [userAuth, setUserAuth] = useState<any>(undefined)
    const isUserAuthenticated = (arg:boolean) => {
        
        setUserAuth(arg)
    }
    const checkUserAuth = () => {
        let userAuth = getCookie('userauth')
        // Check if user cookie is valid
        if (userAuth !== "") {
            setUserAuth(true)
        }
        else {
            setUserAuth(false)
        }
    }
    useEffect(() => {
        checkUserAuth()
        console.log(userAuth)
    })

    const currentState = () => {
        if (userAuth === undefined) {
            return <div></div>
        }
        else if (userAuth === true) {
            return (
                <AdminPanel />
            )
        }
        else if (userAuth === false) {
            return <Authenticate isUserAuthenticated={isUserAuthenticated}/>
        }
    }
        return (<div>

            {
            currentState()
            }
                
        </div>);
}
export default Admin