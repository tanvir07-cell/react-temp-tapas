import CloudIcon from "../assets/cloud.svg";
import HazeIcon from "../assets/haze.svg";
import SnowIcon from "../assets/icons/snow.svg";
import SunnyIcon from "../assets/icons/sunny.svg";
import RainIcon from "../assets/rainy.svg";
import ThunderIcon from "../assets/thunder.svg";



function getWeatherIcon(climate) {
    switch (climate) {
        case "Rain":
            return RainIcon;
        case "Clouds":
            return CloudIcon;
        case "Clear":
            return SunnyIcon;
        case "Snow":
            return SnowIcon;
        case "Thunder":
            return ThunderIcon;
        case "Fog":
            return HazeIcon;
        case "Haze":
            return HazeIcon;
        case "Mist":
            return HazeIcon;

        default:
            return SunnyIcon;
    }
}


function getFormattedDate(value, type, inMS) {
    if(!type) return value;

    if (!inMS) {
        value = value * 1000;
    }
  let date;
  let time;
    

    if (type === 'date') {
        date = new Date().toLocaleDateString("en-us",
        { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }
    
    )
    

    } else if(type === 'time') {
        time = new Date().toLocaleDateString("en-us",
    { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })
    }


    return type==="time"?time:date
}

export {getWeatherIcon,getFormattedDate};
