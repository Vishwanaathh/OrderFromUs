
import './App.css';
import{useState} from 'react';

function App() {
  const[dish,setData]=useState('');
  const[num,setNum]=useState('');
  const handleChange=(e)=>{
    setData(e.target.value);

  }
  const handleChanges=(e)=>{
    setNum(e.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const order={
      name:dish,
      quantity:num

    };
    const orderJ=JSON.stringify(order);
    fetch('http://localhost:3004/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: orderJ
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }})


  }
  return (
   <div id="main"><h1>Place An Order</h1>
   <div id="box"> 
   <form onSubmit={handleSubmit}><input type="text" placeholder="Dish Name" value={dish} onChange={handleChange}/><br></br><input type="text" placeholder="Number of Plates" value={num} onChange={handleChanges}/><br></br><input type="submit"/></form></div>
  </div>);
}

export default App;
