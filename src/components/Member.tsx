import React from 'react'

interface MemberProps {
description: string |undefined

name: string |undefined
}

const Member: React.FC<MemberProps> = ({name, description}) => {
        return (<div className="member">
            <div className="member-info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            
        </div>);
}
export default Member