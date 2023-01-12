import React from "react";

interface Props {
    src: string,
} 

// weather icon
const Icon: React.FC<Props> = ({src}) => {
    
    return (
        <img src={src} alt="weather icon" />
    );
};

export default Icon;
