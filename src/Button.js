function Button(props){
    const changeData= ()=> props.changeCnt1();
    const changeData1=()=> props.changeCnt2();
    const changeData2=()=> props.changeCnt3();
    return(
        <>
        <p> This is Button component</p>
        <button onClick={changeData}>+1</button>
        <button onClick={changeData1}>-1</button>
        <button onClick={changeData2}>0</button>
        </>
    )
}
export default Button;