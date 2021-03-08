import React from 'react'

interface MemberImageProps {
name: string |undefined;
image: string |undefined;
}

const MemberImage: React.FC<MemberImageProps> = ({name, image}) => {
        return (<div className="format-member">
            <img src={image} alt="member" className='member-image'/>
            <h3>{name}</h3>
        </div>);
}
export default MemberImage