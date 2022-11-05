import './App.css';
import Counter from './counter';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Card from './Card';
function App(){
    const [details, setDetails] = useState({})
     const fetchDetails = async() => {
        const { data } = await axios.get("https://randomuser.me/api/").then()
        const details = data.results[0]
        console.log(details);
        setDetails(details)
    }
    useEffect(() => {
        fetchDetails();
    },[])
    
    return(
        <>
          <Counter/>
          <Card details={details} />
        </>
    
    )
}
export default App;
