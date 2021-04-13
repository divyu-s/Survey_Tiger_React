import React from 'react'
import Options from '../Options.js'
import Question from '../Question'
import TypeSelector from '../TypeSelector'
import {useState} from "react"
import { useHistory } from 'react-router'


export default function CreateSurvey({squestions,setSquestions}) {
     
    const history = useHistory();
    const getRandom = ()=> {return Math.floor((Math.random()*1000)+1);}
    const [qText,setQText] = useState('');
    const [qType,setQtype] = useState(0);
    const [options, setOptions] = useState([{uid: getRandom(), value:''},{uid: getRandom(), value:''}]);
  

    const addOptions = ()=>{
             let newOptions = [...options,{uid: getRandom(), value:''}];
             setOptions(newOptions);
    }

    const deleteOptions = (id)=>{
        console.log("delete if",id)
        if(options.length === 2){
            alert("Error: A select type question should have atleast 2 options")
        }
        else{
        let newOptions = options.filter((item)=>{
            return item.uid!==id;
        })
        setOptions(newOptions);
        }
    }

    const updateOptionText = (id,text)=>{

        let updatedOptions = [...options];
        let changeIndex = updatedOptions.findIndex(x=>x.uid===id);
        updatedOptions[changeIndex].value=text.trim();
        setOptions(updatedOptions);
    }

    const updateSurveyQuestion =()=>{
        let flag = true;
        options.forEach((item)=>{
            if(item.value===""){
                flag = false;
            }
        });

        if(qText!=="" && flag){
        let newSurveyQuestions = [...squestions];
        let newQ = {
               qtext : qText,
               qtype : qType,
               options : options
        }
        newSurveyQuestions.push(newQ);
        alert("Question Added Successfully")
        setSquestions(newSurveyQuestions);
        setQtype(0);
        setQText("");
        setOptions([{uid: getRandom(), value:''},{uid: getRandom(), value:''}]);
    }
    else{
        alert("Question and Option's can't be empty");
    }
   return  qText!=="" && flag

    }

    const publish = ()=>{
        const flag = updateSurveyQuestion();
        if(flag)
        {history.push("/takeSurvey")}

    }

    return (
        <>
        <TypeSelector qType={qType} setQtype={setQtype}/>
        {qType !==0 ?
        <>
        <Question onTextUpdate={setQText}/>
        {
            options.map((opt,key)=>(
                <Options optValue={opt.value} key={key} addOptions={addOptions} deleteOptions={deleteOptions} uid={opt.uid} updateText={updateOptionText}/>
            ))
        }
        <button className="btn btn-primary m-1" onClick={updateSurveyQuestion}>Add Question</button>
        <button className="btn btn-primary m-1" onClick={()=>{publish()}}>Publish</button>
        </>
           : null
        }
  
        </>
    )
}
