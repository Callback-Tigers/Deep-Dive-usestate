import React, {useState} from "react";


function test(){
    console.log("I got hit")
    return 10 
    // 1!+2! .....+10000000!
}

// Lazy state loading in react
const Lazy = () => {
    const [count, setCount] = useState(()=>{console.log("I got hit")
                                            return 10 } );  // count = test() 

    

    return(
        <div>
            <h1>Counter App</h1>
            <h2>Current Value of Count is {count}</h2>
            <button onClick={() => setCount(count+1)}>Inc Counter</button>
        </div>
    )
}

export default Lazy;


// Logic based things, by design


// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }