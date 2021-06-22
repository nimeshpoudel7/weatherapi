import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Card from './components/Card'


function App() {
  const [city, setCity] = useState('')
  const [search, setSearch] = useState('Kathmandu')
  useEffect(() => {
    const fetchApi=async()=>{
      const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=959ed93923e06015e8d239305fd0389f`
      const response = await fetch(url)
      const resJson=await response.json();
      console.log(resJson.main)
      setCity(resJson.main)
    }
  
    fetchApi()
  },[search])
  

  console.log(city)
  return (
    <div className="App">
      {!city?(<Card><p>no data found</p> </Card>):( <div>     <Card
        name="hey"
        city={search}
        tep={(city.temp-273.15).toFixed(2)}/>
         </div>)}
         <input type='text' onChange={(event)=>{setSearch(event.target.value)}}  ></input>
         <p>{search}</p></div>

   
  );
}

export default App;
