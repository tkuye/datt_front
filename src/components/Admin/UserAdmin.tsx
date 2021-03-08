import React from 'react'
import EditUser from './EditUser';
import axios from '../../axInstance'
import getCookie from '../../getCookie'
interface UserAdminProps {
    getUserEdit:(components:JSX.Element) => void
}

const UserAdmin: React.FC<UserAdminProps> = ({getUserEdit}) => {
        const getUserInfo = () => {
            
            let id = getCookie('userid')
        
            axios.get('/api/v1/user', {
                params:{
                    id: id
                }

            }).then(res => {
                
                console.log(res.data.url)
               
                
                
                if(res.data.rows !== "") {
                    let row = res.data.rows[0]
                getUserEdit(<EditUser dname={row.name} ddescription={row.description} dlocation={res.data.url}/>)
            } else {
                getUserEdit(<EditUser dname={""} ddescription={""} dlocation={""}/>)
            }
        })
        }
        return (<div className="user-admin" onClick={() => getUserInfo()}>
            <h2>Click Here to Edit User</h2>
            </div>);
}
export default UserAdmin