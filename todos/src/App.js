 
 import React, { Component } from 'react';
 import InputBox from './components/InputBox';
 
import Todos from './components/Todos';
 class App extends React.Component {
   state={
     todos:[{id:"1",todo:"Learm HTML"},
     {id:"2",todo:"Learm CSS"},
     {id:"3",todo:"Learm JS"},
     {id:"4",todo:"Learm REACT"},
     {id:"5",todo:"Learm NODEJS"}
    ],
   };
   addTodo=(todo)=>{
  this.setState({
    todos:[ ...this.state.todos,{id:this.state.todos.length+1,todo:todo}]
  })
   }
   deleteTodo=(id)=>{
     let filterTodo=this.state.todos.filter(todoobj=>{
       return todoobj.id!==id;
     })
     this.setState({
       todos:filterTodo
     })
     // this call triger render function again
   }

   render() { 
     return ( <div className="container"><InputBox addTodo={this.addTodo}/>
     <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
     </div>
      )
   }
 }
  
 
//only one app file export
export default App;
