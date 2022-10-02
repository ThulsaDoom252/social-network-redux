import React from  'react'
import init from './initialize.module.css'
import loading from './initializing.gif'

let Initialize = (props) => {
    return  (
    <div>
        <img  className={init.loading} src={loading}/>
    </div>
    )
}

export default Initialize