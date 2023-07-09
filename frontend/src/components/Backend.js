import axios from 'axios';
import { useState, useEffect } from 'react';
export default function () {
    const [data, setData] = useState('');
    useEffect(() => {
        console.log("useEffect ran");
        const backendData = async () => {
            const d = await axios.get('http://localhost:8080/backend')
            setData(d.data);
        }
        backendData();
    }, [])
    return (
        <div>
            <h1>Hello from Frontend</h1>
            <h1>{data}</h1>
        </div>
    )
}