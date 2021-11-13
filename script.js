//  sfc => stateless functional component
let names=["sona","ritu","bisu","ritika"];
function Hello(props){
    return <h1>Hello from {props.name} component</h1>
}
function BigHello(){
    return <React.Fragment>{
        names.map((name)=>
        
              <Hello name={name}></Hello>
        )
}</React.Fragment>
}
// (what to render, where to render)
ReactDOM.render(<BigHello></BigHello>,document.getElementById("root"));