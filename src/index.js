import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./components/App";
import './index.css';

//component

//const Home = <h1>Hello Vijaya</h1>
//ReactDOM.render(<App/>,document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById('root'));
//fecth all components
root.render(<App/>)
 root.render(
  <React.StrictMode>
     <App />
   </React.StrictMode>
 );
 