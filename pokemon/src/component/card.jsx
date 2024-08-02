import { useEffect, useState } from "react";

export default function Card({name,url}) {

    let [data,dataset]=useState([]);
    useEffect(()=>{
let mydata=async()=>{

    try {
      
        
        
        const response = await fetch(url);
        
        const json = await response.json();
        // console.log(json);
        dataset(json);
    } catch (error) {
        // console.error(error.message);
    }
}
mydata();

},[name])



    return (
  <>
 {data.length!=0 &&<div className="w-full flex flex-col justify-center items-center p-2 pb-8 relative  bg-white mb-2 gap-y-2  hover:shadow-md hover:rounded-md  cursor-pointer hover:shadow-gray-700 group ...">
    <div className="overflow-hidden max-w-[350px] bg-green-50 w-[200px] flex items-center min-h[450px] my-4 justify-center rounded-full h-[200px]  group-hover:rounded-3xl group-hover:bg-blue-50">

    <img src={data.sprites.other.dream_world.front_default} className=" w-[80px] overflow-hidden " alt="" />
    </div>
    <div className="flex flex-col justify-center items-center  gap-y-2">
        <h1 className=" capitalize font-bold text-[20px] ">{name}</h1>
        <div className=" bg-green-500 flex  justify-center items-center text-white rounded-full py-2 px-3 ">{data.types.map((e)=>{return <span className="inline ml-1">{
            e.type.name}</span> }) }</div>
        <div className=" grid grid-cols-3 gap-x-1  gap-y-9  text-[10px]">
            <h3 className="font-bold  ">Height: <span className="font-light">{data.height}</span></h3>
            <h3 className="font-bold  ">weight: <span className="font-light">{data.weight}</span></h3>
            <h3 className="font-bold  ">speed: <span className="font-light">{13}</span></h3>
            <h3 className="font-bold ">Experience: <span className="font-light">{data.base_experience}</span></h3>
            <h3 className="font-bold  ">Height: <span className="font-light">{13}</span></h3>
            <h3 className="font-bold  ">Abilities: <span className="font-light">{data.abilities[0].ability.name}</span></h3>
         
           
        </div>
    </div>
 </div>
  
  
  
}
  </>
    );
  }
