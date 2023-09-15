import React, {useState} from "react";

// async behaviour of use state

const App = () => {
    const [count, setCount] = useState(0) 

    // console.log("hello") // 0


    function inc1(){
         setCount(count+1) // async
         setCount(count+1)
         console.log("value of count",count) // 0
    }

    function inc2(){
        setCount(count => count+1) // async
        setCount(count => count+1)
        // setCount(count => count+1) // async
        // setCount(count => count+1)
        // setCount(count => count+1) // async
        // setCount(count => count+1)
        console.log("value of count",count) // 0
   }

    

    return(
        <div>
            <h1>Counter App</h1>
            <h2>Current Value of Count is {count}</h2>
            <button onClick={inc2}>Inc Counter</button>
        </div>
    )
}

export default App;


// Logic based things, by design


// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }



// function hello(x, y){
//     // x = 7
//     y =  ()=>3+4

// }


// hello(3+4, ()=>3+4)