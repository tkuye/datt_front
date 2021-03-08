import React from 'react'


interface TitleHeadProps {

}

const TitleHead: React.FC<TitleHeadProps> = (props) => {
        return (<div id="title-head">
            {props.children}
        </div>);
}
export default TitleHead