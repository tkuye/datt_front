import React, {useState, useEffect, useContext} from 'react'
import axios from '../axInstance'
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import {IoIosArrowDroprightCircle} from 'react-icons/io'
import {IoIosArrowDropleftCircle} from 'react-icons/io'
import UpcomingEvents from './UpcomingEvents'
import {CarouselContext} from '../App'

interface MainHeaderProps {

}

const MainHeader: React.FC<MainHeaderProps> = ({}) => {
        const [mission, setMission] = useState('')
        const [quote, setQuote] = useState('')
        const [person, setPerson] = useState('')
        const [carousel, setCarousel] = useState<any>()
        const [imgCount, setImgCount] = useState<number>(0)
        const context = useContext(CarouselContext)
        useEffect(() => { 

                if (context?.status === "LOADED") {
                        let i = 0
                        setImgCount(context.images.length)
                        setCarousel(context.images.map(image => {
                                i++
                                return (
                                <Slide index={i}><img className="image" src={image} alt="prev"/></Slide>
                                )
                        }))
                        
                }  
                axios.get('/mission').then((response) => {
                        setMission(response.data.name)
                        setQuote(response.data.quote.split('-')[0])
                        setPerson(response.data.quote.split('-')[1])
                })
        },[context])
        return (<div id="header">
                <h1><button>D. A. T. T.</button></h1>
                
                <CarouselProvider infinite
                isPlaying
                interval={5000}
                naturalSlideHeight={40}
                naturalSlideWidth={100}
                totalSlides={imgCount}
                isIntrinsicHeight
                className="carousel-provider"
                >
                        <div id="layout"></div>
                    
                <Slider className="slider">
                {carousel}
                </Slider>
                <ButtonBack className="back"><IoIosArrowDropleftCircle /></ButtonBack>
                <ButtonNext className="next"><IoIosArrowDroprightCircle /></ButtonNext>
                
                </CarouselProvider>
                
                <div id="main">
                        <UpcomingEvents />
                        
                </div>
                <div id="mission-div"><h2>Our Mission</h2>
                <h3><i>{mission}</i></h3></div>
                <div id="main-quote">
                <h3 id="quote">{quote} ~ {person}</h3>
                </div>
                
        </div>);
}
export default MainHeader