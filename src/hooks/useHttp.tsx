import { useState, useCallback } from 'react';
import ErrorMessage from "../components/UI/ErrorMessage";
import Loading from '../components/UI/Loading';
import { WeatherData } from '../components/Weather/WeatherInterfaces';

interface RequestConfig {
    url: string;
    method?: string;
    headers?: HeadersInit;
    body?: object;
};

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    const sendRequest = useCallback(async (config: RequestConfig, applyData: (data: WeatherData) => void) => {
        setIsLoading(true);
        setError('');
        try{
            const response = await fetch(config.url, {
                method: config.method ? config.method : 'GET',
                headers: config.headers ? config.headers : {},
                body: config.body ? JSON.stringify(config.body) : null
            });

            if(!response.ok){
                throw new Error('Data fetch error!!!');
            }

            const data = await response.json();

            if(data.cod === 200){
                applyData(data);
            }else{
                setError('Incorrect data!');
            }
        }catch{
            setError('Request failed!');
        }

        setIsLoading(false);
    }, []);

    const errorMsg = <ErrorMessage msg={error} />;
    const loading = <Loading state={isLoading} />

    return {
        isLoading,
        loading,
        errorMsg,
        sendRequest
    };
};

export default useHttp;