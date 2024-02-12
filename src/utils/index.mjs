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

    const date = new Date(value);
    let options;

    if (type === 'date') {
        options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
    } else if(type === 'time') {
        options = {
            hour: "numeric",
            minute: "numeric",
          };
    }


    return new Intl.DateTimeFormat("en-us", options).format(date);
}

const data = [
    {
        location: "London",
        latitude: 51.5073219,
        longitude: -0.1276474,
    },
    {
        location: "Kolkata",
        latitude: 22.5726723,
        longitude: 88.3638815,
    },
    {
        location: "Dhaka",
        latitude: 23.777176,
        longitude: 90.399452,
    },
    {
        location: "Singapore",
        latitude: 1.2899175,
        longitude: 103.8519072,
    },
    {
        location: "New York",
        latitude: 40.7127281,
        longitude: -74.0060152,
    },
    {
        location: "Toronto",
        latitude: 43.6534817,
        longitude: -79.3839347,
    },
];

function getLocations() {
    return data;
}

function getLocationByName(location) {
    if (!location) return null;

    const filtered = data.filter((item) => item.location.toLowerCase() === location);

    if (filtered.length > 0) {
        return filtered[0];
    } else {
        const defaultLocation = {
            location: "",
            latitude: 0,
            longitude: 0,
        };
        return defaultLocation;
    }
}

export {getWeatherIcon,getFormattedDate,getLocations,getLocationByName};
