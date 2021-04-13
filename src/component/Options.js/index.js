import React from 'react'

export default function Options({optValue,addOptions,deleteOptions,uid,updateText}) {
    const value = optValue;
    return (
        <>
        <div className="col-md-8 offset-md-2 col-12 input-group my-3">
            <input type="text" className="form-control" placeholder="Option Text" value={value} onChange={(e)=>updateText(uid,e.target.value)}/>
            <div className="input-group-append">
                <button className="btn button-outline-secondary" type="button" onClick={()=>addOptions()}>+</button>
                <button className="btn button-outline-secondary" type="button" onClick={()=>deleteOptions(uid)}>-</button>

            </div>
            
        </div>
        </>
    )
}
