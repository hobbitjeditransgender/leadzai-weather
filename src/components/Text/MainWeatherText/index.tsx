import React from "react";

interface Props {
    value: string,
    isCelsius?: boolean
} 

// weather main text
const MainWeatherText: React.FC<Props> = ({value, isCelsius = true}) => {
    
    return (
        <div>
            <span>{value} {isCelsius ? "Celsius" : "Fahrenheit"}</span>
        </div>
    );
};

export default MainWeatherText;
