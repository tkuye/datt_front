import React from 'react'
import {RunningContext} from './AdminPanel'
interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {

        return (<div>
                <RunningContext.Consumer >
                    {(value:any) => {
                        return (
                        <h3 onClick ={() => value.running()} id="home">Go Home</h3>
                        )}}
            
            </RunningContext.Consumer>
        </div>);
}
export default Home