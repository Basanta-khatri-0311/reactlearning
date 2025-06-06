import React from "react";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handelSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill all the forms");
      return
    }

    if(message.length > 30) {
      alert("Message must be less then 30 characters")
      return
    }

    setName("")
    setEmail("")
    setMessage("")
    
  };
  return (
    <>
      <div className="container">
        <h1>Feedback Form</h1>
        <form onSubmit={handelSubmit}>
          <div className="content">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="content">
            <label htmlFor="name">Email:</label>
            <input
              type="email"
              name="email"
              id="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="content">
            <label htmlFor="name">Message:</label>
            <textarea
              name="message"
              id="input"
              rows={15}
              cols={40}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
        <div >
          <h2 >Thankyou for your Feedback, {name}!</h2>
        </div>
      </div>
    </>
  );
}

export default App;
