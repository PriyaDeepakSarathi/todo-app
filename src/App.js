import React from "react";
import Todos from './components/Todos';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Button,Form,Container} from 'react-bootstrap';
import './App.css';
function App(){

    return(
    <div className='body'>


    <Todos/>

    </div>)}
export default App;