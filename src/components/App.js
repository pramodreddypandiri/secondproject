import './App.css';
import Counter from './counter';

import axios from 'axios';
function App(){
   
     const fetchDetails = async() => {
        const { data } = await axios.get("https://randomuser.me/api/").then()
        console.log(data);
    }
    fetchDetails();
    return(
    <Counter/>
    
    )
}
export default App;
