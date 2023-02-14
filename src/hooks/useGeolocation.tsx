import { useState, useCallback } from "react";
import ErrorMessage from "../components/UI/ErrorMessage";

interface Position {
    latitude: number;
    longitude: number;
};

const useGeolocation = () => {
    const [currentLocation, setCurrentLocation] = useState<Position>();
    const [positionError, setPositionError] = useState('');

    const getLocation = useCallback(() => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        }else{
            setPositionError('Geolocation is not supported by this browser.');
        }
    }, []);

    const showPosition = (position: GeolocationPosition) => {
        setCurrentLocation({latitude: position.coords.latitude, longitude: position.coords.longitude});
    };

    const showError = (error: GeolocationPositionError) => {
        switch(error.code){
            case error.PERMISSION_DENIED:
                setPositionError('User denied the request for Geolocation.');
            break;
            case error.POSITION_UNAVAILABLE:
                setPositionError('Location information is unavailable.');
            break;
            case error.TIMEOUT:
                setPositionError('The request to get user location timed out.');
            break;
        }
    };

    const positionErrorMsg = <ErrorMessage msg={positionError} />;

    return {
        currentLocation,
        positionErrorMsg,
        getLocation
    };
};

export default useGeolocation;