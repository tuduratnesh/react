import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

/*const ReactElement = {
    type : 'a',
    props : {
        href:'https://google.com',
        target: '_blank'
    },
    children: 'Click for google'
}*/

const anotherElement = (
    <a href = "https://google.com" target='_blank'>Visit google </a>
)
const anotheruser = "chai aur react"
const reactElement = React.createElement(
    'a',
    {href:"https://google.com" ,target:'_blank'},
    'click for google',
    anotheruser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    //<MyApp />
    //anotherElement
    reactElement
    //<App/>
  
)
