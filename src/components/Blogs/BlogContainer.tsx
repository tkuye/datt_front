import React, {useEffect, useState, useContext} from 'react'
import BlogPost from './BlogPost'
import "../../css/blogs.scss"
import {BlogContext} from '../../App'
import {Route} from 'react-router-dom'
import ShowBlog from './ShowBlog'
import { relative } from 'path'
interface BlogContainerProps {

}

type Blogs = {
  
                blog_date: Date;
                blog_id:number;
                blog_title:string;
                name:string;
                url:string;
                blog_details:string;
                
            
}[]

type Blog = {
  
        blog_date: Date;
        blog_id:number;
        blog_title:string;
        name:string;
        url:string;
        blog_details:string;
        
    
}
const BlogContainer: React.FC<BlogContainerProps> = () => {
        const [blogs, setBlogs] = useState<any>([])
        const [url, setUrl] = useState('')
        const [name, setName] = useState('')
        const [blog, setBlog] = useState<{blog:string,image:string, title:string, date:string, blog_name:string} | undefined>(undefined)
        let context = useContext(BlogContext)
        
        const returnBlog = (data:string, image:string, title:string, date:string, blog_name:string) => {
                
                setBlog({blog: data, image: image, title: title, date:date, blog_name})
        }
        useEffect(() => {
                if (context?.status === "LOADED") {
                        context.blogs?.sort((a, b) => a.blog_date < b.blog_date ?1:-1)
                        setBlogs(context.blogs?.map(blog => {
                                return <BlogPost key={blog.blog_id} 
                                title={blog.blog_title} 
                                url ={blog.url} 
                                image={blog.image} id={blog.blog_id} 
                                date={new Date(blog.blog_date).toDateString()}
                                name={blog.name}
                                returnBlog={returnBlog}/>
                        }))
                }
        },[context])
        return (
        
        <div >
                <Route exact path="/blogs">
        <h1 id="head-blog">Read Our Blogs</h1>
        <div id="blog-container">
              
        {blogs}

        </div> 
        </Route>
        <Route path="/blogs/blog/:id">
                <ShowBlog data={blog}/>
        </Route>
        </div>
        );
}
export default BlogContainer