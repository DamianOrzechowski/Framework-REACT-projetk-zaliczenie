import {useState, FC, Component} from 'react';
import React from 'react';



export const Test: FC =()=>{
 
  const[counter,setCounter] = React.useState(0);
  const[letters,setLetter] = React.useState<string>('a');
  
   const addcos = () =>{
      setCounter(counter +1)
   }
   function addletter() {

      setLetter(letters + 'a')
   }
   
   let [name, setName] = useState('podaj imie');
   let [isEdit, showEdit] = useState(false);
   function Edytuj(){
      if (isEdit ==false){
         showEdit(true)
      }
      else{
         showEdit(false)
      }

   }

  // ()=>{showEdit(isEdit == false? isEdit=true:isEdit=false)}




   return(
    <div >
   <p onClick={addcos}> liczba{counter}</p>
   <p onClick={addletter}> {letters}</p>
   <input type="date" />
   <br />
   <button onClick={Edytuj}>zmień </button>

   
   
   
   {isEdit==false?
   (

   <p>{name}</p>
   ):(
<input type = 'text' placeholder ='wybierz imie' onChange={event => setName(event.target.value)}/>
   )

   }
   
   


  </div>
   );
};