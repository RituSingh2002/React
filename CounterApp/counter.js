 // class based component // stateful component
 class Counter extends React.Component{
     // 1. Initally constructor method call
     constructor(){
         super();// React.component constructor fire
         this.state={
             count:0
         } // initialize this.state as an empty object
     }
  // 2 render method call
   decrement=()=>{
      console.log("decrement the value");
      // setState => render method is called again
      this.setState({
          count:this.state.count-1
      })
  }
  increment=()=>{
    console.log("increment the value");
    this.setState({
        count:this.state.count+1
    })
  }
  reset=()=>{
    console.log("reset the value");
    this.setState({
        count:this.state.count=0
    })
  }
     render(){
        return  <React.Fragment>
            
            <div className="container">
             <p className="">{this.state.count}</p>
             <button className="btn btn-danger" onClick={this.decrement}>-</button>
             <button className="btn btn-primary"  onClick={this.increment}>+</button>
             <button className="btn btn-warning"  onClick={this.reset}>RESET</button>
             </div>
        </React.Fragment>
    }
 }
  
 // (what to render, where to render)
ReactDOM.render(<Counter/>,document.getElementById("root"));