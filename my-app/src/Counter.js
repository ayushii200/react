import {useState,useEffect ,useRef,React} from 'react';
import './Hooks.css'

function App(){
const[count,setCounter] = useState(0)
const[data,setData]=useState("Ayushi")
const refElement=useRef("");
const [name,setName]=useState("")
console.log(refElement)


useEffect(()=>{
console.log("mounted")
},[])
function update(){
    setCounter(count + 1)
}
function updateData(){
    setData("priyal")
}
function Reset(){
    setName("")
    refElement.current.focus()
    refElement.current.style.backgroundColor="white"
    
}
function handleInput(){
    refElement.current.style.color="black"
    refElement.current.style.backgroundColor="yellow"
} 
return(
    <>
    <center>
    <h1>Button clicked {count} times</h1>
    <button onClick={update}>Click</button><hr/>
    <h2>{data}</h2>
    <button onClick={updateData}>update data</button><br/><br/><hr/>
    <input ref={refElement} type="text" value={name} 
    placeholder='Enter Your Name'
    onChange={(e)=>setName(e.target.value)}></input>
    <button onClick={Reset}>Reset</button>
    <button onClick={handleInput}>handle input</button>
    <br>
    </br>
    <h5>Your Name is: {name}</h5>
    <hr></hr>
    </center>
    </>
    );
}

export default App;