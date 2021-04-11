import Slider from '../components/Slider/Slider';

import Films from '../components/Films/Films';

import c from '../components/Catalog/Catalog.module.css';
import {useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [datafilm, setData] = useState([]);
    
    useEffect(()=> {
        const getfilm = async () =>{
            axios.defaults.withCredentials = true;
            const promise = await axios.get('http://localhost:3001/catalog',{withCredentials:true});      
            setData(promise.data);  
        };
        getfilm();
    }, []);
    
    return (
        <div className="Home">
            <Slider/>
            <div className={c.container}>
                {datafilm.map((film) => (
                    <Films key={film.id} work={film} />
                ))}
            </div>
        </div>
    );
}

export default Home;
