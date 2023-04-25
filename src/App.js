import React, { useState } from "react";
import questions from "./data";
import SingleQuestion from "./SingleQuestion";
function App() {
  const [clicked, setClicked] = useState("0");
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  return (
    <main>
      <div className="container">
        <h3> Questions</h3>
        <section className="info">
          {questions.map((question, index) => {
            return (
              <SingleQuestion
                onToggle={() => handleToggle(index)}
                active={clicked === index}
                key={index}
                {...question}
              ></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
