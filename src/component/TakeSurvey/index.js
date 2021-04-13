import React from 'react';
import { useHistory } from 'react-router';

export default function TakeSurvey({questions}) {
    const history = useHistory();
    return (
        <>
        <div className="mt-5 text-left">
            {questions.length > 0 ? questions.map((q,key)=>(
               <div key={key}>
                   <h3 className="my-3">{key+1}.{q.qtext}</h3>
                   {
                       q.options.map((opt)=>(
                           q.qtype === 1 ?
                           <div className="form-check" key={opt.uid}>
                               <label className="form-check-label">
                                   <input type="checkbox" className="form-check-input" value="" />{opt.value?opt.value:"null"}

                               </label>
                               </div>
                               :
                            <div className="form-check" key={opt.uid}>
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="random" />{opt.value?opt.value:"null"}
                                </label>
                            </div> 
                      
                        )) }

                  
             </div>
            ))
            :
            <div className="text-center"><h2>No Questions Added</h2></div>

            }
            {questions?.length !==0 ?
      <div className="text-right">
      <button className="btn btn-primary" onClick={()=>{alert("Your Response's are Recorded");history.push("/")}}>Confirm</button>
  </div>  :
   null
            }
            
        </div>
        </>
    )
}
