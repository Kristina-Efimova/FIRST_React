import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './components/app/';
// import AppHeader from "./components/app-header/app-header";



// const Header = () => {
//     return <h2>Hello World!</h2>
// }
//
// const Field = () => {
//     return <input type='text' placeholder='Type here'/>
// }
//
// const Btn = () => {
//     const text = 'Log in';
//     return <button>{text}</button>
// }
//
// const App = () => {
//     return (
//         <div>
//             <Header/>
//             <Field/>
//             <Btn/>
//         </div>
//     )
// }


ReactDOM.render(<App/>, document.getElementById('root'));

