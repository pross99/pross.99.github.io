import React, { useState } from 'react';



const HoverImage = ({
    defaultImage, 
    hoverImage,
    classname = 'hover-image'
}) => {
    const [isHovered,setIsHovered] = useState(false)


return (
    <img
    src={isHovered? hoverImage : defaultImage}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    classname={classname}
    />
)}

export default HoverImage