import React, {useState, useEffect} from 'react';
import './App.css';



const App = () => {

  //'https://fakestoreapi.com/products'

  const [fake, setFake] = useState([]);
  console.log(fake)

  const fakeStore = async() => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json()
    //console.log(jsonData)
    setFake(jsonData)
  }
  
  useEffect(() => {
   fakeStore();
  }, [])

  return(
   <div className="background justify-content-center py-5">
      <h2 className='py-4'>Fake API store</h2>
    <div className='container sm-md-lg-xl py-3'>
      {fake.map((values) =>{
        return(
           <div>
             <div className="container sm-md-lg-xl py-3" id="box">
              <div className="content m-3">
               <h5>{values.title}</h5>
               <p>{values.description}</p>
              </div>
              <img src={values.image} alt="image" />
             </div>
           </div>
          ) 
        })}
           </div>
   </div>
  
  )
    
}

export default App;