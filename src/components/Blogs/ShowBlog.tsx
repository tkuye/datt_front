import React, {useEffect, useState, useContext} from 'react'
import "../../css/blog.scss"
import {BlogContext} from '../../App'
import Axios from 'axios'

interface ShowBlogProps {
    data:{blog:string,image:string, title:string, date:string, blog_name:string} | undefined;
}

const ShowBlog: React.FC<ShowBlogProps> = ({data}) => {
    const [state, setState] = useState<Partial<{blog:string,image:string, title:string, blog_date: Date; date:string, blog_name:string} | undefined>>(data)
    const [dataUrl, setDataUrl] = useState<string | undefined>(data?.blog)
    const context = useContext(BlogContext)
    useEffect(() => {
        
        let windowId = Number(document.location.href.split('/').slice(-1)[0])
        window.scrollTo(0, 0)
        let blogHeader = document.querySelector('a[href="/blogs"]')
        blogHeader?.classList.remove('active')
        if (context?.status === "LOADED") {
            let blog = context.blogs?.filter(blog => blog.blog_id === windowId)[0]
            if (!blog){
                context.set404(true)
            }
            setState({
                image:blog?.image,
                title:blog?.blog_title, 
                date:new Date(blog?.blog_date!).toDateString(),
                blog_name:blog?.name,
            })
            Axios.get(blog?.url!).then((response) => {
                setDataUrl(response.data)
            })
        }
        return () => {
            blogHeader?.classList.add('active')
        }
    }, [context])
        return (
            <div className="blog-post">
                <h2 id="blog-title">{state?.title}</h2>
                <img src={state?.image} id="blog-image" alt="for the blog" />
                <h3 id="blog-date">{state?.date}</h3>
                <h4 id="blog-name">By {state?.blog_name}</h4>
        <div id="show-blog" dangerouslySetInnerHTML={{__html:dataUrl!}}></div>
        </div>);
}
export default ShowBlog;