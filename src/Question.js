import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({question}) => {
  console.log(question)
const {id,title,info} = question;
let [show,setShow] = React.useState(false);
  return  <div className="col-12 mx-auto question px-5 py-3">
<div className="info">
  <div className="row py-2 justify-content-between">
     <h4>{title}</h4>
<button className="btnn">
 {show ?<AiOutlineMinus className="icons" onClick = {()=>setShow(!show)}></AiOutlineMinus>:<AiOutlinePlus className="icons" onClick = {()=>setShow(!show)}></AiOutlinePlus>}
</button>
    
 
  </div>
  <div className="row py-2">
 <p className="answer">{show?info:"" }</p>
  </div>
 

</div>
  </div>
};

export default Question;
