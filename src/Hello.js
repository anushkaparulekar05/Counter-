import { useState } from "react";

function Hello(){
  // let cnt = 1;
  // const incnt =() =>{
  //   cnt = cnt+1;
  //   console.log(cnt);
  const[cnt,setCnt] = useState(0);
  const incnt = ()=>{
    setCnt(cnt+1);
  }
  
  console.log("Welcome"+cnt);
  return(
    <>
    <button onClick={incnt}>{cnt}</button>
    </>
  )
}
export default Hello;