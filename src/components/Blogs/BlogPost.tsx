import React, {useEffect, useContext, useState}from 'react'
import {history} from '../../App'
import {CurrentBlogContext} from '../../App'
import Axios from 'axios'
import {htmlToText} from 'html-to-text'
import {NavLink} from 'react-router-dom'
interface BlogPostProps {
        title:string
        id:number
        date:string
        image:string
        url:string
        name:string
        returnBlog(data:string, image:string, title:string, date:string, blog_name:string):void
}

const BlogPost: React.FC<BlogPostProps> = ({title, date, image, id, url, name, returnBlog}) => {
        const [preview, setPreview] = useState<string>('')
        const [data, setData] = useState("")
        useEffect(() => {
        Axios.get(url).then(res => {
                try {
                        setPreview(htmlToText(res.data.slice(0, 80), {
                                tags: {
                                        'h1': { options: { uppercase: false }, 
                                 }
                        }}) + "...")
                } catch (err) {
                        setPreview('')
                }
               
                console.log(res.data.split('.')[0])
                setData(res.data)
        })
    
        })
        const context = useContext(CurrentBlogContext)
        const reRoute = () => {
      
        history.push(`/blogs/${id}`)

        
        }
        const goToBlog = () => {
                returnBlog(data, image, title, date, name)
        }
        return (
                <NavLink to={`blogs/blog/${id}`} style={{textDecoration:"none", color:"black"}} onClick={goToBlog}>
                <div className="blog">
                <h2  className="blog-title" >{title}</h2>
                
                <img src={image} alt="used for the blog in question" />
                <div className="date-name"><p>{date}</p>
                <p>By {name}</p></div>
                <div className="preview">   
                {preview}
                </div>
                </div>
                </NavLink>

                );
}
export default BlogPost