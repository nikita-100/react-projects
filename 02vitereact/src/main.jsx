import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return(
        <div>
            <h1>Custom App | Nikita</h1>
        </div>
    )
}

// const ReactElement = {
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'click me to visit google'

// }
const anotherUser = "chai aur js"

const reactElement = React.createElement(
    'a',  //tag ->p,a,h1
    {href:'https://google.com',target:'_blank'}, //property tag
    'click me to visit google',
    anotherUser
)

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)




const newElement = React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'visit google'
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <App />
    // <MyApp />
    // ReactElement
    // anotherElement
    reactElement
    // newElement
)
