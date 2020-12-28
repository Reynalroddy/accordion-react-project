import React from 'react';
import data from './data';
// import SingleQuestion from './Question';
import Questions from './Questions';

function App() {

  const[questions,setQuestions] = React.useState(data);
console.log(questions);
  return  <main>
    <section className="py-5">
      <div className="container">
      
 <Questions questions = {questions} ></Questions>
          
        
      </div>
    </section>
  </main>
}

export default App;
