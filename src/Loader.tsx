import React from 'react'
import "./css/loader.scss"
interface LoaderProps {

}

const Loader: React.FC<LoaderProps> = () => {
        return (<div>
        <div className="lds-circle"><div></div><div className="orange"></div></div>
        </div>);
}
export default Loader