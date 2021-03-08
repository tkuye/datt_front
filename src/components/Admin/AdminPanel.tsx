import React, {lazy, Suspense } from 'react'
const AdminGetter = lazy(() => import('./AdminGetter'))
const EditType = lazy(() => import('./EditType'))
const AdminPost = lazy(() => import('./AdminPost'))
const UserAdmin = lazy(() => import('./UserAdmin'))
const Logout = lazy(() => import('./Logout'))
const UserShow = lazy(() => import('./UserShow'))
const ChangeMission = lazy(() => import('./ChangeMission'))
const EventInterest = lazy(() => import('./EventInterest'))
const EmailListing = lazy(() => import('./EmailListing'))

interface AdminPanelProps {

}

export const RunningContext = React.createContext({running:console.log, newUser:console.log})

class AdminPanel extends React.Component<AdminPanelProps> {
    state={currentEdit:<div></div>, running:false, newestUser:""}
    // running used to hide panel and show component

    getData = (data:any, type:string) => {
        this.setState({running:true})
        
        switch (type) {
            case'blogs': 
            
                this.setState({currentEdit:<EditType  
                date={data.blog_date} 
                id={data.blog_id}
                title={data.blog_title}
                html={data.html}
                type={type}
               img={data.image}
               iframe={""}
               
                />})

                    break
            case 'events':
                this.setState({currentEdit:<EditType 
                    id={data.event_id}
                    title={data.event_name}
                    date={data.event_date}
                    html={data.html}
                    img={data.image}
                    iframe={data.iframe_form}
                    type={type}
                    upClicked={data.upcoming}
                    />})
                    break
            
        }

    }
    createPost() {
        this.setState({running:true, currentEdit:<AdminPost />})

    }

    getUserEdit = (component:JSX.Element) => {
        this.setState({currentEdit:component, running:true})
       
    }
    setRunning =() => {
        this.setState({running:false})
    }

    getNewUser = (component:JSX.Element) => {
        this.setState({currentEdit:component, running:true})
    }

    newUser = (userString:string) => {
         let userShow = document.getElementById('show-user') as HTMLHeadElement
         userShow.innerHTML = userString

         setTimeout(() => userShow.innerHTML = "", 3000)
    }

    


    
render () {
    
    return (
        <div>
            <Suspense fallback={() => <p></p>}>
            <h1 id="show-user"> </h1>
            <RunningContext.Provider value={{running:this.setRunning, newUser:this.newUser}}>
            {this.state.running?this.state.currentEdit:
            <div>
            <div className="user-admin" onClick={() => this.getUserEdit(<ChangeMission />)}><h2>Change Our Mission</h2></div>
            <UserShow getNewUser={this.getUserEdit}/>
            <UserAdmin getUserEdit={this.getUserEdit}/>
            <EmailListing />
            <AdminGetter item="events" getData={this.getData}/>
            <AdminGetter item="blogs" getData={this.getData}/>
            <EventInterest />
            <div id="create-post" onClick={() => this.createPost()}><h2>Create a New Post</h2></div>
            <Logout />
            </div>}
            </RunningContext.Provider>
            </Suspense>
        </div>
)};
}
export default AdminPanel