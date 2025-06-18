import React, { useState } from "react";

function Form({setSavedName}) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [mood, setMood] = useState("");
  
  const handelSubmit = (e) => {
    e.preventDefault();
    const tempName = name; 
    setSavedName (tempName)
    setName("");
    setComment("");
    setMood("");setSavedName
  };

  return (
    <>
      <form className="form" onSubmit={handelSubmit}>
        <div className="name">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name=""
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="comment">
          <label htmlFor="comment">Comment</label>
          <textarea
            name=""
            id="comment"
            rows={8}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div className="mood">
          <label htmlFor="Mood">Mood</label>
          <select
            name=""
            id=""
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          >
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="angry">Angry</option>
          </select>
        </div>
        <div className="btn">
          <button className="btnSub">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Form;
