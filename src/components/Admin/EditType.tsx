import React, {useState, useContext, useRef, useEffect} from 'react'
import imageCompression from 'browser-image-compression';
import axios from '../../axInstance'
import Axios from 'axios'
import Home from './Home'
import {RunningContext} from './AdminPanel'
import ReactQuill from 'react-quill';
import QuillComponent from './QuillComponent'
interface EditTypeProps {
    title: string
    id:number
    date:string
    type:string
    html:string
    img: string
    iframe: string
    upClicked?:boolean
}
const toolbarModules =  {
    toolbar:'#toolbar-container'
  }
  
const EditType:React.FC<EditTypeProps> = ({title, id, date, type, html, img, iframe, upClicked}) => {
    const [titleChange, setTitleChange] = useState(title)

    const fileEl = useRef<any>('')
    const context = useContext(RunningContext)
    const dater = new Date(date).toISOString().split('T')[0]
    const [dateChange, setDateChange] = useState(dater)
    const [image, setImage] = useState<any>(img)
    const [text, setText] = useState(html)
    const [notAnImage, setNotAnImage] = useState('')
        const [fileType, setFileType] = useState('')
        const [getImageCall, setGetImageCall] = useState(0)
        const [iframeForm, setIframeForm] = useState<string>(iframe)
        const [upcoming, setUpcoming] = useState(upClicked)

    const options = {
        maxSizeMB:0.1
    }
    function capitalizeFirstLetter(string:string) {
        return string.charAt(0).toUpperCase() + string.slice(1, -1);
      }

      const clickButton = () => {
          fileEl.current.click()
      }

      useEffect(() => {
        console.log(upClicked)
      },[])
      
      const formSubmit = (e:any) => {
        e.preventDefault()
        console.log(image)
        

        
        axios.post('/api/v1/edit', {
            title:titleChange, 
            iframe:iframeForm !== ""?iframeForm.split("?")[0] + "?embedded=true":"",
            date:dateChange,
            tbname:type, 
            id:id,
            upcoming:upcoming
            

        }).then((response) => {
           console.log(response.data)
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
              if (getImageCall === 0) {
                Axios.put(response.data[0]?.text, text, options).then(() => {
                    context.running()
                })
              }
              else {
                Promise.all([Axios.put(response.data[0]?.text, text, options), Axios.put(response.data[1]?.image, image, optionsImage)]).then(() => {
                    context.running()
                  })
              }
             
        
        
      })
    }

      const deletePost = () => {
        axios.delete('/api/v1/post', {
            params:{
                id:id, 
                type:type,
                title:title
            }
      })
      context.running()
    }

    const getImage = async (e:any, id:string) => {
      if (!e.target.files[0].type.includes('image')) {
        setNotAnImage('Your file is not an image.')
        return
      }
      else (setNotAnImage(''))
        setGetImageCall(getImageCall  + 1 )
        var reader = new FileReader();
        setFileType(e.target.files[0].type)
        const compressedFile = await imageCompression(e.target.files[0], options)
       await setImage(compressedFile);
       await console.log(compressedFile)
        reader.onloadend = (e) => {
            let previewImage = document.getElementById(id) as HTMLImageElement
            previewImage.src = reader.result as string 
            previewImage.style.display = 'block'
            
            
        }
        reader.readAsDataURL(e.target.files[0])
}   

        return (<div>
            <Home />
            <div id="type" >
                <label htmlFor="title"><h2>Title</h2></label>
                <input type="text" value={decodeURIComponent(titleChange)} name="title" id="title" onChange={(e) => {setTitleChange(e.target.value);}}/>
                <label htmlFor="date"><h2>Date</h2></label>
                <input type="date" value={dateChange} name="date" id="date" onChange={(e) => {setDateChange(e.target.value);}}/>
                {type==="events"?<div><h3>Put the form link here. (If it Exists)</h3>
                <input type="text" name="iframe" value={iframeForm} onChange={(e) => setIframeForm(e.target.value)}/>
                <div><h2>Check the box if it's an upcoming event.</h2><input type="checkbox" name="upcoming" checked={upcoming} onChange={(e) => {setUpcoming(e.target.checked);console.log(e.target.checked)}} /></div></div>:null}
                
                <label htmlFor="details"><h2>Edit Your Post Here</h2></label>
                <QuillComponent />
                <ReactQuill value={text} modules={toolbarModules} style={{width:"95%", height:"100%", paddingRight:"12px"}}   onChange={(content) => setText(content)}/>
                <br/><img src={image} alt="preview" id="detail-photo"/>
                <div><button style={{color: 'black', width:'fit-content', padding:"10px", marginTop:"20px", marginBottom:"20px"}} onClick={clickButton}>Change Image</button><br /></div>
                <input type="file" name="image" style={{display:'none'}}id="image" onChange={(e) => getImage(e, 'detail-photo')} ref={fileEl}/>
                <h3>{notAnImage }</h3>
                <input onClick={formSubmit} type="submit" id="submit" value={`Edit ${capitalizeFirstLetter(type)}`}/>
               
            </div>
            <div className="button-delete">
            <button id="delete" onClick={() => deletePost()}>Delete {capitalizeFirstLetter(type)}</button>
            </div>
           
            
        </div>);
}
export default EditType