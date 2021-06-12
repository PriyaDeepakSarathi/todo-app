import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Button,Form,Container} from 'react-bootstrap';

const Todos=()=>{
const[input,setInput]=useState('');
const[items,setItems]=useState([]);

const handleSubmit=(e)=>{
e.preventDefault();
const newInput={input,id:new Date().getTime().toString()};
 if(input){
    setItems((items)=> {return [...items,newInput]})
    console.log(items);
}
setInput(''); 
}

return(<div >
<Container >
<form action="" >
    <Row className="justify-content-md-center ">
        <Col  xs={3}>
    <h1 className='header'>Todo App</h1>
    </Col>
    </Row>
    <Row className='inputitem'>
        <Col >
<input type="text" name='input' value={input} placeholder='add Todo' onChange={e=>setInput(e.target.value)}/>
</Col>

<Col>
<Button onClick={handleSubmit}>Add Todo</Button>
</Col>
</Row>

</form>
<div>
    {items.map(item=>{
       const {id,input}=item; 
        return(
            <div key={id} className='item'>
                
                <h2>{input}</h2>
                
            </div>
        )
    })}
</div>
</Container> 

</div>)


}
export default Todos;


