import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import fetchapi from './fetchapi'
import loadingGif from './assets/loader.gif'

function App() {
let [data, setdata] = useState([]);
let [loading, setLoading] =useState(true);


  useEffect(()=> {
   fetchapi().then((response)=>{
    if(response.status =="200")
      {
        setdata(response.data);
        setLoading(false)
      }

   }).catch(()=>{
    console.log('error featch data')
   });
   
  },[])

  return (
    <>
    {loading ? <img src={loadingGif}/>:(
      <div>
      <h1>Breaking News For Today</h1>
        {
          data.map((news, index)=>{
            <div key={index}>
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            <hr/>
            </div>
          })}
      </div>
    )
}
    
    </>
  );
}

export default App
