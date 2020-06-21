import React from './react'
import ReactDom from './react-dom'


const element = (
    <div className="div" title='hhhh'>
        <h1>Welcome,</h1>
        <span>this is React.js</span>
    </div>
)

const textNode = 'react'

ReactDom.render(element, document.querySelector("#app"))

