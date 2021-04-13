import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className="m-3">
            <Link to="createSurvey">
            <button className="btn btn-danger m-1" >Create Survey</button>
            </Link><br/>
            <Link to="takeSurvey">
            <button className="btn btn-danger m-1">Take Survey</button>
            </Link>
        </div>
    )
}
