import React, { useState } from "react";


function IsPrimeorFibonacci() {
  const [invalue, setInvalue] = useState("");
  const [sets, setSets] = useState("");
  const handlerChange = e => {
    setInvalue(e.target.value)

  }

  
  let resultf ="";
  let resultp ="";
  let P = 0;
  
 
  
  if (sets ==="Prime"){
   
    for (let i=1; i< invalue; i++){
      if (invalue % i === 0){
          P = P+1;
      }
    
    }
  
  if (P ===1){
    resultp = "true";
  }
  if (P !==1){
    resultp = "false";
  }
  if (invalue === 1){
    resultp = "false";
  }
 
}
  // start fibonacci
  if (sets ==="Fibonacci"){
     resultp = "";
    if (invalue == 0 ){
      resultf = true;
    }
    if (invalue == 1 ){
      resultf = true;
    }
    if (invalue == 2 ){
      resultf = true;
    }
    if (invalue == 3 ){
      resultf = true;
    }
    if (invalue == 5 ){
      resultf = true;
    }
    if (invalue == 8 ){
      resultf = true;
    }
    if (invalue == 13 ){
      resultf = true;
    }
    if (invalue == 21 ){
      resultf = true;
    }
   
      }
    
    
 
  return (
    <body>

    <div className="main">
    <div className="section-left">
    <label>
          
          <input
            type="text"
            placeholder="input number"
            value={invalue}
            required
            onChange={(e) => setInvalue(e.target.value)}
          />

    </label>
    </div>

     <div className="section-middle">
      <label >
              <select
                
                id="category"
                name="category"
                value={sets}
                required
                onChange={(e) => setSets(e.target.value)}
              >
               <option value="">Select type</option>
               <option value="Prime">IsPrime</option>
               <option value="Fibonacci">IsFibonacci</option>
              </select>
            </label>
     </div>
  
      <div className="section-right">
      {/* <span>{`It is ${invalue}`}</span>
      <span>{`It is ${sets}`}</span>
      <span>{`It is ${P}`}</span> */}
       <span>{`${resultp}`}</span>
      
       {/* <span>{`${sets}`}</span>
       <span>{`${invalue}`}</span> */}
      
       <span>{`${resultf}`}</span>
       
     
      </div>
    </div>
    </body>
  );
    }

export default IsPrimeorFibonacci;