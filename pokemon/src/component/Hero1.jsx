import { useEffect, useState } from "react";
import Card from "./card";

export default function Hero() {

    let [search ,setsearch]=useState([]);


    let [data,dataset]=useState([]);



    useEffect(()=>{
        mydata();
        dataset(search)
       
        
    },[])
    let mydata=async()=>{
    
        try {
            let url ="https://pokeapi.co/api/v2/pokemon?limit=200";
            
            
            const response = await fetch(url);
            
            const json = await response.json();
            // console.log(json.results);
            setsearch(json.results);
            
        } catch (error) {
            console.error(error.message);
        }

    }

let onsearchHandle=async(event)=>{
    console.log(event.target.value)
    if(event.target.value=='')
    {
dataset(search)
    }
    else{

        
        // console.log(event.target.value)
        let newdata=search.filter(e=>e.name.includes(event.target.value));
        dataset(newdata)
    }
    console.log(data)


}



return (
    <>

  <div className=" w-[100%] mt-5 ">
    <div className="mx-auto w-10/12 flex justify-center items-center mb-5">

  <input type="text" name="" id="" placeholder="  Search Pokemon" className=" shadow-sm shadow-slate-400  w-[400px] h-[60px]  border-b-8 border-purple-950   outline-none  focus:border-l-4 text-[20px] font-bold " onChange={onsearchHandle} onKeyDownCapture={e=>console.log(e.target.value)} />

    </div>
    
    <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4  ">
    {
        data.map(e=>{
            return <Card name={e.name} url={e.url}/>
        })
    }
    </div>
  </div>
  
  
  
  </>
    );
  }
