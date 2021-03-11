import React, {useEffect, useState} from 'react'
import LogoHead from '../LogoHead'
import {Blog} from '../../App'
import axios from '../../axInstance'
import { url } from 'inspector'

interface FullBlogProps {
    data:Blog | null
}

const FullBlog: React.FC<FullBlogProps> = ({data}) => {
    const [pars, setPars] = useState<any>([])
    const [datum, setDatum] = useState(data)
    const [callAgain, setCallAgain] = useState(0)

    function formatString(string:string) {
        
        if (!string) return 
        let strings = string.split('.')
        let parNum = Math.round(strings.length / 5)
        parNum = parNum === 0?1:parNum
        let sentences:string[] = []
        let index = 0
        for (let i = 0; i < parNum; i++) {
            let sentence = ""
            while (index < (i+1)*5 && index !== strings.length - 1){
                sentence += strings[index] + ". "
                index++
            }
            sentences.push(sentence)
        }
        
        
         
        
        return sentences
}
function formatWords(words:string){
    let sentences = formatString(words)
        
        let i = 0
        
        setPars(sentences?.map(sentence => {
            if (i === 0) {
                i++
                return (<p>{<b id="first-letter">{sentence.split(' ')[0]}</b>} {sentence.split(' ').slice(1).join(' ')}</p>)
            }
            else {
                i++
                return (<p>{sentence}</p>)
            }
           
        }))

}
    useEffect(() => {
        let id = document.location.href.split('/').slice(-1).join('')

        axios.get('/blog', {params: {id}}).then(response => {
            if (!data?.id){
                setDatum({title:response.data.blog_title, details:response.data.blog_details, date:new Date(response.data.blog_date).toDateString(), id:response.data.blog_id,  url:response.data.url, name:response.data.name})
               
                formatWords(response.data.blog_details)
        
            }
        })
    

        
        let sentences = formatString(datum?.details as string)
        
        let i = 0
        setPars(sentences?.map(sentence => {
            if (i === 0) {
                i++
                return (<p>{<b id="first-letter">{sentence.split(' ')[0]}</b>} {sentence.split(' ').slice(1).join(' ')}</p>)
            }
            else {
                i++
                return (<p>{sentence}</p>)
            }
           
        }))
        
       
        
    },[])

        return (<div>
        <LogoHead />
        <div className="full-blog">
        
        <img src={datum?.url} alt="Blog" id="blog-image"/>
        <h1>{datum?.title}</h1>
        <h3>{datum?.date}</h3>
        <h4>By {datum?.name}</h4>
            <div id="formatted-text">{pars}</div>
        </div>
        </div>);
}
export default FullBlog