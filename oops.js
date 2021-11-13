 let obj={
     name:"sona",
     sayHii: function(){
         console.log(this);
         console.log("Inside say Hii !");
         callMe=()=>{
            console.log("Inside say Hello !");
            console.log(this);
          
        }
        callMe();
     }
 }
 obj.sayHii();