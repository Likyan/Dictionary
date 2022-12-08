import React,{useState} from 'react'
import axios from 'axios'
import './Dic.css'

function Cet2() {

    const [engine,setEngine] = useState([])
    const [doll,setDoll] = useState("")


    const dall = (event) =>{

         setDoll(event.target.value)
    
     }
    
    
    const display= () =>{

            axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + doll)
            .then((result)=>{
             setEngine(result.data)})
            .catch((err)=>{
                console.log(err)
            })       
     };
     /* setCountryInfoDis(res.data[res.data.length - 1]) */


    return (
        <div>
            <div className="egi">
            {/* <input type="search" className="search" onInput={list} placeholder="What would you like to search for?" value={coll}>{}</input> */}
            <input type="text" className="search"  placeholder="What would you like to search for?" onChange={dall}></input>
            <button className="but" onClick={display}>Search</button>
            </div>
            <div className='try'>
            {/* {

            engine.map(dicFir => <h4>{dicFir.meanings.map(dicSec => dicSec.definitions.map(dicThir=>dicThir.definition))}</h4>)
            
            }    */}
            {engine.map(dicFir => <h1>{dicFir.word}</h1>)}
            {engine.map(dicFir => <h4>{dicFir.phonetics.map(dicSec => dicSec.text)}</h4>)}
            {engine.map(dicFir => <audio  src='' controls>{dicFir.phonetics.map(dicSec => dicSec.audio)}</audio>)}
            {engine.map(dicFir => <h4>{dicFir.meanings.map(dicSec => dicSec.definitions.map(dicThir=>dicThir.definition))}</h4>)}
            {engine.map(dicFir => 
            <h4>
                1.({dicFir.meanings.map(dicSec => dicSec.partOfSpeech)})<br/> 
                {dicFir.meanings.map(dicSec => dicSec.definitions.map(dicThir=>dicThir.definition))}<br/>
                {dicFir.meanings.map(dicSec => dicSec.definitions.map(dicThir=>dicThir.example))}                              
            </h4>)}   
            

            </div>
    
        </div>

    )
}

export default Cet2
