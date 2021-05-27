import {useState, FC, useEffect} from 'react';
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
   function kopiuj(){
      navigator.clipboard.writeText('http://localhost:3000/Entities')

   }

  // ()=>{showEdit(isEdit == false? isEdit=true:isEdit=false)}
  /*const sortbyname = (tablica){

  }*/
  

  







  
  const [data, setData] = useState([{name:'Zenek',color:'red'},{name:'Katarzyna',color:'blue'},{name:'Aneta',color:'orange'}]);
  const [spr, setSpr] = useState(true)
  //console.log(data)

  //const [data, setData] = useState([{name:'Zenek'},{name:'Katarzyna'},{name:'Aneta'}]);

//let spr:boolean = true;
function zmiana(){
   if(spr===true){
   //alfabetyczne
   //console.log(listaosob.sort((a,b) => 0 - (a > b ? -1 : 1)));
   setSpr(false)
   setData(data.sort((a,b) => 0 - (a > b ? -1 : 1)))
   console.log(data)
   
console.log(spr)}
   

   else{
      setSpr(true)
      //nie alfabetyczne
      //console.log(listaosob.sort((a,b) => 0 - (a > b ? 1 : -1)));
      setData(data.sort((a,b) => 0 - (a > b ? 1 : -1)))
      console.log(data)
      
      console.log(spr)
   }
   
      
  
}
//console.log(listaosob.sort())

   return(
    <div >
       <button onClick={zmiana}>zmiana na alfabetycznie</button>
       {spr ===true?(
          <div>
               {data.map(lista =>(
                <p style={{color: lista.color}}>{lista.name}</p>
               
             ))}

          </div>

       ):(
          <div>
             
             {data.map(lista =>(
                <p style={{color: lista.color}}>{lista.name}</p>
             ))}
             
             
          </div>

       )}
       
       












   <p onClick={addcos}> liczba{counter}</p>
   <p onClick={addletter}> {letters}</p>
   <input type="date" />
   <br />
   <button onClick={kopiuj}>zmień </button>

   
   
   
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