import React, {useState, useRef, useContext, useMemo} from 'react'
import axios from '../../axInstance'
import Axios from 'axios'
import Home from './Home'
import {RunningContext} from './AdminPanel'
import getCookie from '../../getCookie'
import ReactQuill from 'react-quill';
import QuillComponent from './QuillComponent'


interface AdminPostProps {

}
const styles = {
    root: {
      fontFamily: '\'Helvetica\', sans-serif',
      padding: 20,
      width: 600,
    },
    editor: {
      border: '1px solid #ccc',
      cursor: 'text',
      minHeight: 80,
      padding: 10,
    },
    button: {
      marginTop: 10,
      textAlign: 'center',
    },
  };
  

  const toolbarModules =  {
    toolbar:'#toolbar-container'
  }

const AdminPost: React.FC<AdminPostProps> = () => {

        
        const [showDate, setShowDate] = useState(true)
        const [title, setTitle] = useState("")
        const [date, setDate] = useState<any>("")
        const [text, setText] = useState("")
        const [currentSelection, setCurrentSelection] = useState("")
        const [fails, setFails] = useState("")
        const fileEl = useRef<any>('')
        const [image, setImage] = useState<any>('')
        const [fileType, setFileType] = useState('')
        const [iframeForm, setIframeForm] = useState<any>('')
        const [upcoming, setUpcoming] = useState(false)
        const runningCont = useContext(RunningContext)

        const inputCheckBlog = (e:any) => {
            let blogs =  document.getElementById('blogs') as HTMLInputElement
           blogs.checked = true
               setCurrentSelection("blogs")
               setFails("")
               setShowDate(false)
        }

        const inputCheckEvents = (e:any) => {
           let events =  document.getElementById('events') as HTMLInputElement
           events.checked = true
            setCurrentSelection("events")
            setFails("")
            setShowDate(true)
     }
            
     const clickButton = () => {
        fileEl.current.click();
    }   

    const getImage = (e:any, id:string) => {
      console.log(text)
        var reader = new FileReader();
        setFileType(e.target.files[0].type)
       setImage(e.target.files[0]);
       console.log(e.target.files[0])
        reader.onloadend = (e) => {
            let previewImage = document.getElementById(id) as HTMLImageElement
            previewImage.src = reader.result as string 
            previewImage.style.display = 'block'
            
            
        }
        reader.readAsDataURL(e.target.files[0])
}   
    
    
            
        
        const formSubmit = (e:any) => {
            
            if (!currentSelection) {
                setFails("You must select an option before submitting.")
                return
            }
            console.log(text)
            let id = getCookie('userid')

            axios.post('/api/v1/post', {
                tblname:currentSelection,
                title, 
                type:fileType,
                date:new Date().toISOString(), 
                id:id,
                iframe:iframeForm !== ""?iframeForm.split("?")[0] + "?embedded=true":"",
                upcoming:upcoming
            }).then(response => {
                console.log(response)
                const options = {
                  headers: {
                    "Content-type":"text/html; charset=UTF-8"
                  }
                  
                }
                const optionsImage = {
                  headers: {
                    "Content-type":fileType
                  }
                  
                }
                
               Promise.all([Axios.put(response.data[0]?.text, text, options), Axios.put(response.data[1]?.image, image, optionsImage)]).then(() => {
                 runningCont.running()
               })
            
        })
      }
        const changeEdit = (e:any) => {
            console.log(e)
        }
       
        
           
        
        return (<div>
            <Home />
            <div id="type" >
            <h2 style={{textAlign: 'center'}}>Choose the type of post.</h2> 
                <div id="post-type" >
                <div onClick={(e) => inputCheckEvents(e)} className="events">
                <label htmlFor="events">Event</label>
                <input type="radio" name="tbl" id="events" />
                </div>
                <div onClick={(e) => inputCheckBlog(e)} className="blogs">
                <label htmlFor="blogs" >Blog</label>
                <input type="radio" name="tbl" id="blogs"/>
                </div>
                </div>
                <label htmlFor="title"><h2>Title</h2></label>
                <input type="text"  name="title" id="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                
                {showDate?<div><h2>Check the box if it's an upcoming event.</h2><input type="checkbox" name="upcoming" onChange={(e) => {setUpcoming(e.target.checked);console.log(e.target.checked)}} /></div>:null}
                {showDate?<div><label htmlFor="date"><h2>Date</h2></label>
                <input type="date"  name="date" id="date" value={date} onChange={(e) => {setDate(e.target.value)}}/></div>:<div></div>}
                <h3>Put the form link here. (If it Exists)</h3>
                <input type="text" name="iframe" value={iframeForm} onChange={(e) => setIframeForm(e.target.value)}/>
                <label htmlFor="details"><h2>Create Your Post Here</h2></label>
                <input type="file" name="image" style={{display:'none'}}id="image" onChange={(e) => getImage(e, 'detail-photo')} ref={fileEl}/>
                <QuillComponent />
                <ReactQuill  modules={toolbarModules} style={{width:"95%", height:"100%", paddingRight:"12px"}} value={text}  onChange={(content) => setText(content)}/>
                <div><button style={{color: 'black', width:'fit-content', padding:"10px", marginTop:"20px", marginBottom:"20px"}} onClick={clickButton}>Upload Your Image</button><br /></div>
                <img src="" alt="preview" id="detail-photo" style={{display:'none'}}/>
                <input type="submit" id="submit" value="Create Post" onClick={formSubmit}/>
                <h3>{fails}</h3>

            </div>
            
        </div>);

}

export default AdminPost
//   <textarea  name="details" id="details" value={details} onChange={(e) => {setDetails(e.target.value)}}/>
