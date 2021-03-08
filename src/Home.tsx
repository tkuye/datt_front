import React, {lazy} from 'react'
const Navigation = lazy(() => import('./components/Navigation'))
const MainHeader =  lazy(() => import('./components/MainHeader'))
const Emails  = lazy(() => import('./components/Emails'))
interface HomeProps {

}

const Home: React.FC<HomeProps> = ({}) => {
        return (<div>
             
            <MainHeader />
            <Emails />
        </div>);
}
export default Home