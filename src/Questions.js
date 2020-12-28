import React from 'react';
import Question from "./Question"

const Questions = ({questions}) => {
console.log(questions)
    return <div className="row">
{
 questions.map((item)=>{
return <Question question = {item} key={item.id}></Question>
 }) 
}
    </div>



}

export default Questions
