import React from "react";

function Form() {
  return (
    <>
      <form className="form">
        <div className="name">
          <label htmlFor="name">Name:</label>
          <input type="text" name="" id="name" />
        </div>
        <div className="comment">
          <label htmlFor="comment">Comment</label>
          <textarea name="" id="comment" rows={8} />
        </div>
        <div className="mood">
          <label htmlFor="Mood">Mood</label>
          <select name="" id="">
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
