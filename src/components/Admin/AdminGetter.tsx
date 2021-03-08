import React, {useState, useContext} from 'react'
import axios from '../../axInstance'
import Axios from 'axios'
import ArrayMove from 'array-move'
import {BlogContext, EventContext}  from '../../App'

interface AdminGetterProps {
    item: string
    getData(data:any, type: string):any
}

const AdminGetter: React.FC<AdminGetterProps> = ({item, getData}) => {
    
    const [clicked, setClicked] = useState(false)
    const [display, setDisplay] = useState('none')
    const [data, setData] = useState<any>(<div></div>)
    const [htmlData, setHtmlData] = useState(<div></div>)
    let blogContext = useContext(BlogContext)
    let eventContext = useContext(EventContext)

     function capitalizeFirstLetter(string:string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      const editData = (data:any, imgUrl:string = "") => {
        getData(data, item)
      }
      const getItems = () => {
          console.log(item)
      if (clicked) return
          setDisplay('block')
       switch (item) {
           case 'events':
               if (eventContext?.status === "LOADED"){
                   console.log(eventContext.events)
                   setData(eventContext.events?.map(event => {
                    let ourData = ""

                const sendBlogData = () => {
                    
                    Axios.get(event.url).then(response => {
                        getData({...event, html:response.data}, item)
                    })
                }
                   
                return (
                    <div>

                        <h2 className="clickable" onClick={sendBlogData}>{decodeURIComponent(event.event_name)}</h2>
                        <h3>{new Date(event.event_date).toDateString()}</h3>
                        <img src={event.image} alt="preview" id="detail-photo" />
                        </div>
                )
                
                
            }))
               }
               break
            case 'blogs':
                if (blogContext?.status === "LOADED") {
                    console.log(blogContext.blogs)
                   setData(blogContext.blogs?.map(blog => {
                            let ourData = ""

                        const sendBlogData = () => {
                            
                            Axios.get(blog.url).then(response => {
                                getData({...blog, html:response.data}, item)
                            })
                        }
                           
                        return (
                            <div>

                                <h2 className="clickable" onClick={sendBlogData}>{decodeURIComponent(blog.blog_title)}</h2>
                                <h3>{new Date(blog.blog_date).toDateString()}</h3>
                                <img src={blog.image} alt="preview" id="detail-photo" />
                                </div>
                        )
                        
                        
                    }))
                }   
                

       }
        setClicked(true)
      }
      
        
        return (
        <div className="admin-getter"><h1>{capitalizeFirstLetter(item)}</h1>
        <p onClick={getItems} id="show">Click here to show all the {item}.</p>
        <div id="line-display" style={{display:display}}>
        <div id="inserted-content" ></div>
        </div>
        
        <div id="inserted-content" style={{marginBottom:'20px'}}>{data}</div>
        </div>
        );
}


export default AdminGetter