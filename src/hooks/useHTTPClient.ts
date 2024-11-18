import { useState, useEffect } from 'react';

const useHTTPClient = (url: string) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }, [url]);

    return { data, isLoading };
};

export default useHTTPClient;
