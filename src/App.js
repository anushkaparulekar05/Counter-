import { useState } from "react";
import Display from "./Display";
import Button from "./Button";


function App (){
    const[cnt,setCnt]=useState(0);

    const changeCnt =()=>
    {
        setCnt(cnt+1);

    }
    const changeCntd =()=>{
        if(cnt===0){
    
    }
    else{
        setCnt(cnt-1);
    }
}
   const changeCntr = ()=>{
    setCnt(0);

   }
    return(
        <>
        <p>This is parent</p>
        < Display cnt1={cnt} name1 = {"megha"}/>
        <Button changeCnt1 ={changeCnt} changeCnt2={changeCntd} changeCnt3={changeCntr}/>
        </>
    )
}
export default App;