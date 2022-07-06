import React,{useState} from 'react';
import {Button} from 'react-bootstrap';
import './Home.css';

const Home = () => {
  const [value, setValue] = useState(0)
  
  const handleDecrement = () => {
    if(value > 0){
      setValue(value -1);
    }
  }

  const handleIncrement = () => {
      setValue(value + 1);
  }

  return (
    <div className='container min-vh-100 p-5'>

        <div className="p-5 inner-container">
          <div className="heading">Counter</div>
          <div className="value">{value}</div>
          <div className="d-grid gap-4 p-5">
            <Button onClick={handleIncrement} className="btn increment">Increment + </Button>
            <Button onClick={handleDecrement} className="btn decrement">Decrement - </Button> 
          </div>
        </div>   
    </div>
  )
}

export default Home;
