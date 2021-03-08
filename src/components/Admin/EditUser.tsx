import React, {useState, useRef, useContext} from 'react'
import axios from '../../axInstance'
import getCookie from '../../getCookie'
import Home from './Home'
import ax from 'axios'
import {RunningContext} from './AdminPanel'
import imageCompression from 'browser-image-compression';
interface EditUserProps {
    dname:string;
    ddescription:string;
    dlocation:any;

}







const EditUser: React.FC<EditUserProps> = ({dname,ddescription, dlocation}) => {
    const [name, setName] = useState(dname)
    const [description, setDescription] = useState(ddescription)
    const [image, setImage] = useState<any>(null)
    const [fileType, setFileType] = useState('')
    const [fileVideoType, setFileVideoType] = useState('')
    const [video, setVideo] = useState<any>(null)
    const [vidMessage, setVidMessage] = useState('')
    const [imageMessage, setImageMessage] = useState('')
    const fileEl = useRef<any>(<input type="file" />) 
    const context = useContext(RunningContext)
    const videoEl = useRef<any>(<input type="file"/>)
    console.log(dlocation)
    const options = {
        maxSizeMB:0.1
    }

    const getImage = async (e:any, id:string) => {
        var reader = new FileReader();
        if (!e.target.files[0].type.includes("image")) {
            setImageMessage('That file is not an image.')
            return
        }
        else {
            setImageMessage('')
        }
        setFileType(e.target.files[0].type)
        let compressedFile = await  imageCompression(e.target.files[0], options)
       await setImage(compressedFile);
       console.log(e.target.files[0])
        reader.onloadend = (e) => {
            let previewImage = document.getElementById(id) as HTMLImageElement
            previewImage.src = reader.result as string 
            if (dlocation === "") {
                previewImage.style.display = "block"
            }
            
        }
        reader.readAsDataURL(e.target.files[0])
}   
    const getVideo = (e:any) => {
        setVidMessage('Video successfully loaded.')
        console.log(e.target.files[0])
        if (!e.target.files[0].type.includes("video")) {
            setVidMessage('That file is not a video.')
            return
        }
        
        let reader = new FileReader()
            setFileVideoType(e.target.files[0].type)
            setVideo(e.target.files[0])
        reader.onloadend = (e) => {
            console.log(e)
        }
        reader.readAsDataURL(e.target.files[0])
    }
    
    const clickButton = () => {
        fileEl.current.click();
        
    }   
    
    const clickButtonVideo = () => {
        videoEl.current.click();
        
    }   

    

    const formSubmit = () => {
        
        if (vidMessage !== 'Video successfully loaded.') return
        if (imageMessage !== '') return
        let id = getCookie('userid')
        
        if (!image && !video) {
            axios.post('/api/v1/user', {
                name:name, 
                description:description, 
                id:id, 
            }).then(() => {
                context.running()
            })
        }
        else if (!image && video) {
            axios.post('/api/v1/user', {
                name:name, 
                description:description, 
                id:id, 
                key:encodeURIComponent(name),
                vidtype:fileVideoType
            }).then(res => {
                const optionsVideo = {
                    headers: {
                        'Content-Type':fileVideoType
                      }
                }
                ax.put(res.data, video, optionsVideo).then(() => {
                    context.running()
                })
            })
        }
        else if (image && !video) {
            axios.post('/api/v1/user', {
                name:name, 
                description:description, 
                id:id, 
                key:encodeURIComponent(name),
                imgtype:fileType
            }).then(res => {
                const options = {
                    headers: {
                        'Content-Type':fileType
                      }
                }
                ax.put(res.data, image, options).then(() => {
                    context.running()
                })
            })
        }
        else {
        axios.post('/api/v1/user', {
            name:name, 
            description:description, 
            id:id, 
            key:encodeURIComponent(name),
            imgtype:fileType,
            vidtype:fileVideoType
        }).then(res => {
            const options = {
                headers: {
                    'Content-Type':fileType
                  }
            }
            const optionsVideo = {
                headers: {
                    'Content-Type':fileVideoType
                  }
            }
           console.log(res.data)

                Promise.all([ax.put(res.data.image,image, options), ax.put(res.data.video, video, optionsVideo)]).then(() => {
                    context.running()
                })
            })
        

           .catch(err => {
            console.log(err)
        })
    }
    }
        return (<div>
            <Home />
            <div id="edit-user">
            <h3>Name</h3>
            
            <input type="text" id="title" value={name} onChange={(e) => setName(e.target.value)}/>
            <h3>Description</h3>
            <textarea id="details" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <h3>Image File</h3>
            <input type="file" name="image" style={{display:'none'}}id="image" onChange={(e) => getImage(e, 'detail-photo')} ref={fileEl}/>
            <button style={{color: 'black', width:'fit-content', padding:"10px", marginBottom:"20px"}} onClick={clickButton}>Upload Your Image</button><br />
            
            <input type="file" name="video" style={{display:'none'}}id="video" onChange={(e) => getVideo(e)} ref={videoEl}/>
            {dlocation!==""?<img src={dlocation} alt="preview" id="detail-photo" />:<img src="" alt="preview" id="detail-photo" style={{display:'none'}}/>}<br />
            <button style={{color: 'black', width:'fit-content', padding:"10px", marginBottom:"20px"}} onClick={clickButtonVideo}>Upload Your Video</button>
            <h4>{vidMessage}</h4>
            <input type="submit" value="Set Description" id="submit" onClick={formSubmit}/>
           
        </div>
        </div>);
}

export default EditUser