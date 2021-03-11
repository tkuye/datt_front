import React, {useState, useEffect, lazy, Suspense} from 'react'
import axios from './axInstance'
import Axios from 'axios'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import createHistory from 'history/createBrowserHistory'
import "./css/navigation.scss"
import './css/mission.scss'
import './css/emails.scss'
import './css/team.scss'
import './css/footer.scss'
import './css/upcoming.scss'
import './css/policy.scss'
import Team from './Team'
import Cookie from './Cookie'
import Privacy from './Privacy'
import Loader from './Loader'
import Error from './components/Admin/Error'





const Navigation  = lazy(() => import('./components/Navigation'))




const  Home = lazy(() => import('./Home'))

const Event = lazy(() => import('./components/Events/Event'))

const Admin = lazy(() => import('./components/Admin/Admin'))

const BlogContainer = lazy(() => import('./components/Blogs/BlogContainer'))

const Footer = lazy(() => import('./components/Footer'))
const Contact = lazy(() => import('./components/Contact'))

export const history = createHistory()

interface AppProps {

}


type ContextState = {
    status:"LOADING" | 'ERROR'
} | {
    status:"LOADED"; 
    set404:(found:boolean) => void;
    events?:{
        event_date: Date;
        event_id:number;
        event_name:string
        int_total:number;
        url:string;
        image: string
        iframe_form?:string
        upcoming:boolean;
    }[];
    blogs?: {
        blog_date: Date;
        blog_id:number;
        blog_title:string;
        name:string;
        url:string;
        image:string
        
    }[];
    users?:{
        description:string;
        img_location:string;
        name:string
        image:string;
        video:string;
    }[]
    getCurrentBlog?():any
}

export interface Blog {
    date: string;
    id:number;
    title:string;
    name:string;
    url:string;
    details:string;
    
}

export interface eventI {
    event_date: Date;
event_id:number;
event_name:string
int_total:number;
url:string;
image: string
iframe_form?:string;
upcoming:boolean;
}
export type EventInterface  = {
    status:"LOADING" | "ERROR" } | 
    {
    status:"LOADED";
    event:eventI
    urlData?:string
    }

    
export type EventUpcomingI  = {
    status:"LOADING" | "ERROR" 
} | {
    status:"LOADED"
    events:eventI[]
}

type CurrentEvent = {
    getEvents(data:eventI, urlData?:string):void
}
interface getBlog {
    getCurrentBlog(data:Blog):any
}

type Carousel = {
    status:"LOADING" | "ERROR" } | {
        status:"LOADED"
        images:string[]
    }

export const SelectedContext = React.createContext('events')
export const EventContext = React.createContext<ContextState | null>(null)
export const UserContext = React.createContext<ContextState | null>(null)
export const BlogContext = React.createContext<ContextState | null>(null)
export const CurrentBlogContext = React.createContext<getBlog| null>(null)
export const CurrentEventContext = React.createContext<CurrentEvent | null>(null)
export const UpcomingContext = React.createContext<EventUpcomingI | null>(null)
export const CarouselContext = React.createContext<Carousel | null>(null)
const fallBack = () => {
    return (
        <p>Loading...</p>
    )
}

const App = () =>  {

  
    const [blogs, setBlogs] = useState<ContextState>({status:"LOADING"})
    const [events, setEvents] = useState<ContextState>({status:"LOADING"})
    const [users, setUsers] = useState<ContextState>({status:"LOADING"})
    const [loaded, setLoaded] = useState<boolean>(false)
    const [currentEvent, setCurrentEvent] = useState<EventInterface>({status:"LOADING"})
    const [upcomingEvents, setUpcomingEvents] = useState<EventUpcomingI>({status:"LOADING"});
    const [carousel, setCarousel] = useState<Carousel>({status:"LOADING"})
    const [notFound, setNotFound] = useState(false)

    const noFind = (found:boolean) => {
        setNotFound(found)
    
    }

    useEffect(() => {
        
        setBlogs({status:"LOADING"})
        setEvents({status:"LOADING"})
        setUsers({status:"LOADING"})
        
        let isMounted = true
        let source = Axios.CancelToken.source()

       
            if (isMounted) {
                Promise.all([
                    axios.get('/users').then((response) => {
                        setUsers({status:"LOADED", users:response.data, set404:noFind})
                    }),
                    axios.get('/blogs', { cancelToken:source.token}).then((response) => {
                        setBlogs({status:"LOADED", blogs:response.data, set404:noFind})
                        
                    }),
                    axios.get('/carousel', { cancelToken:source.token}).then((res) => {
                        setCarousel({status:"LOADED", images:res.data})
        
                    }),
                    axios.get('/events', { cancelToken:source.token}).then((response) => {
                        setEvents({status:"LOADED", events:response.data, set404:noFind})
                        setUpcomingEvents({status:"LOADED", events:response.data.filter((event:eventI) => event.upcoming === true)})
                        if (window.location.href.includes("events")) {
                            let eventName = window.location.href.split('/').slice(-1)[0]
                        
                            let event:eventI = response.data.filter((event:eventI) => event.event_name.split(" ").join("-").toLowerCase() === eventName
                            )[0]
                            if (!event){
                                setNotFound(true)
                            }
                            else {
                                Axios.get(event.url).then((response) => {
                                    setCurrentEvent({status:"LOADED", event:event, urlData:response.data})
                                })
                            }
                            
                        
                           
                            
        
                        }
                    
                })

                ]).then(
                    () => setLoaded(true)
                )
                
                
                
       
        return () => {
            
                isMounted = false
                source.cancel()
        }

}},[])


    const getEvents = (data:eventI, urlData:string) => {
        setCurrentEvent({status:"LOADED", event:data, urlData:urlData})

    }


    return (
        <div>
            <Suspense fallback={fallBack}>
                {!notFound?<>{loaded?<Router>
                    <BlogContext.Provider value={blogs}>
                <EventContext.Provider value={events} >
                <UserContext.Provider value={users}>
                <CurrentEventContext.Provider value={{getEvents}}>
                <UpcomingContext.Provider value={upcomingEvents}>
                <CarouselContext.Provider value={carousel}>
                <Switch>
            <Route exact path="/">
            <Navigation />
            <Home />
            <Footer />
            </Route>
            <Route path="/admin">
                <Admin />
            </Route>

            <Route path="/our-team">
                <Navigation />
                <Team />
                <Footer />
            </Route>
            <Route path="/blogs">
                <Navigation />
                <BlogContainer />
                <Footer />

            </Route>
            <Route exact path="/events/:name">
                
                <Navigation />
                
                <Event data={currentEvent}/>
                
                <Footer />
                
            </Route>
            
            <Route exact path="/contact">
            <Navigation />
                <Contact />
                <Footer />
            </Route>
            <Route path="/cookie-policy">
            <Navigation />
                <Cookie />
                <Footer />
            </Route>
            <Route path="/privacy-policy">
            <Navigation />
                <Privacy />
                <Footer />
            </Route>
            <Route path="*" component={Error}/>
            </Switch>
            </CarouselContext.Provider>
            </UpcomingContext.Provider>
            </CurrentEventContext.Provider>
            </UserContext.Provider>
            </EventContext.Provider>
            </BlogContext.Provider>
            </Router>:<Loader />}</>:<Error />}
            </Suspense>
        </div>
)};


export default App
