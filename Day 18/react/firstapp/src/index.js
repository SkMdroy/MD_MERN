import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Code from './Code1';
import reportWebVitals from './reportWebVitals';

 const root = ReactDOM.createRoot(document.getElementById('root'));//reactDOM =  virtual DOM
root.render(
      <Code name ="Guntur"/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

//---1
// const myEle = <h1>React is { 15 + 5} times better with react</h1>
// const container = document.getElementById("root");
// const md = ReactDOM.createRoot(container);
// md.render(myEle);

//----2
// const myEle =(
//   <ul>
//     <li>Apples</li>
//     <li>Orange</li>
//     <li>Banana</li>
//   </ul>
// );
// const md = ReactDOM.createRoot(document.getElementById('root'));
// md.render(myEle);

//----3
// const myEle = <h1 className='myclass'>--Welcome to Guntur--</h1>
// const md = ReactDOM.createRoot(document.getElementById('root'))
//  md.render(myEle)

//----4
/*const x = 150;
const myEle = <h1>{(x) < 100 ? "Google" : "Opera" > } </h1>;
const md = ReactDOM.createRoot(document.getElementById('root'));
md.render(myEle);*/


//----5
// const x = 150;
// let text = "G o o  g l e";
// if(x<100){
// 	text = "Opera";
// }

// const myEle = <h1 className='myclass'>{text} </h1>;
// const md = ReactDOM.createRoot(document.getElementById('root'));
// md.render(myEle);


//----6
// function Md(){
//   return <h1 className='myclass'> ---This is Guntur---</h1>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Md/>);


//----7
// const myEle = (
// 	<table >
// 	<tr className='a1'>
//     <td>Bike</td>
//     <td>speed</td>
//     <td>company</td>
//   </tr>
//   <tr className='a2'>
//     <th>rtr</th>
//     <th>180</th>
//     <th>tvs</th>
//   </tr>
//   <tr className='a3'>
//     <th>h2r</th>
//     <th>400</th>
//     <th>kawasaki</th>
//   </tr>
//   <tr className='a4'>
//     <th>v4 </th>
//     <th>390</th>
//     <th>ducati</th>
//   </tr>
// 	</table>
// 	);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myEle);

//----8
