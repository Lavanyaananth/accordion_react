import React, { useState, useRef } from "react";
import { AiOutlinePlus, AiFillMinusCircle } from "react-icons/ai";
const SingleQuestion = ({ title, info, onToggle, active }) => {
  const [showInfo, setShowInfo] = useState(false);
  const contentEl = useRef();
  return (
    <>
      <article className="question">
        <header className={`singleQuestion ${active ? "active" : ""}`}>
          <button className="btn" onClick={onToggle}>
            {active ? (
              <AiFillMinusCircle size={70}></AiFillMinusCircle>
            ) : (
              <AiOutlinePlus size={70}></AiOutlinePlus>
            )}
          </button>
          <h4>{title}</h4>
        </header>
        <div
          className="answer_wrapper"
          ref={contentEl}
          style={
            active
              ? { height: contentEl.current.scrollHeight }
              : { height: "0px" }
          }
        >
          {info}
        </div>
      </article>
    </>
  );
};
export default SingleQuestion;
