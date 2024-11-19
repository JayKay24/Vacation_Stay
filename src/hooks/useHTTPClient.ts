import { useState, useEffect } from 'react';

const useHTTPClient = <T>(path: string) => {
    const [data, setData] = useState<T>();
    const [isLoading, setIsLoading] = useState(false);
    const baseURL = 'https://laara-api-dev-3rc4fb3npa-ew.a.run.app/search/stays';

    useEffect(() => {
        setIsLoading(true);
        fetch(`${baseURL}/${path}`, { headers: { 'x-app-id': '3a2f3e5b-4a89-4fcb-a7e1-31421c7a6344' } })
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false));
    }, [path]);

    return { data, isLoading };
};

export default useHTTPClient;
