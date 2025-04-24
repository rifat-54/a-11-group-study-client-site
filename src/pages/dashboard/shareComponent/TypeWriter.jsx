import React, { useEffect, useState } from "react";

const TypeWriter = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");


  useEffect(()=>{
    let index=0;
   const clear= setInterval(()=>{
       if(index<text.length){
        const nextChar=text[index]
         if(nextChar!==undefined){

             setDisplayedText((prev)=>prev+nextChar)
            }
            index++
       
       }else{
        clearInterval(clear)
       }
        
    },100)
   return ()=>clearInterval(clear)
  },[text,speed])

//   console.log('displaytext',displayedText);

  return (
    <p className="text-3xl mx-1 md:mx-3 font-mono whitespace-pre">{displayedText}</p>
  );
};

export default TypeWriter;
