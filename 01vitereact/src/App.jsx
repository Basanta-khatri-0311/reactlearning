// import React, { useEffect, useState } from "react";
// import Neww from "./New";

// const App = () => {
//   const initialValues = {
//     name: "",
//     email: "",
//     number: "",
//     address: "",
//     status: "",
//   };
//   const [form, setForm] = useState(initialValues);

//   const handelName = (e) => {
//     const { name, value } = e.target;
//     setForm((prevValue) => ({ ...prevValue, [name]: value }));
//     console.log(e.target.name);
//   };

//   useEffect(() => {
//   console.log("Updated form state:", form);
// }, [form]);

//   return (
//     <React.Fragment>
//       <div>
//         <form
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             width: "40%",
//             margin: "20px",
//             padding: "20px",
//           }}
//         >
//           <label htmlFor="">Name:</label>
//           <input name="name" onChange={handelName} value={form.name} type="text" />
//           <label htmlFor="">Email:</label>
//           <input name="email" onChange={handelName} value={form.email} type="text" />
//           <label htmlFor="">Number:</label>
//           <input name="number" onChange={handelName} value={form.number} type="text" />
//           <label htmlFor="">Address:</label>
//           <input name="address" onChange={handelName} value={form.address} type="text" />
//           <label htmlFor="">Status:</label>
//           <input name="status"  onChange={handelName} value={form.status} type="text" />
//         </form>
//       </div>
//     </React.Fragment>
//     // <Neww/>
//   );
// };

// export default App;

// import React, { useState } from 'react'

// const App = () => {
//   const values ={
//     name:"",
//     email:"",
//     number:"",
//     address:"",
//     status:""
//   }

//   const [form, setForm] = useState(values)

//   const handleChange = (e) => {
//     const {name,value} = e.target
//     setForm((prevValue) => ({...prevValue, [name]:value}))

//   }
//   const submitedHandle = (e) => {
//     e.preventDefault()
//     console.log(form)
//     setForm(values)
//   }
//   return (
//     <form >
//       <label htmlFor="">Name:</label>
//       <input name='name' onChange={handleChange} value={form.name} type="text" />

//       <label htmlFor="">Email:</label>
//       <input name='email' onChange={handleChange} value={form.email} type="text" />

//       <label htmlFor="">Phone Number:</label>
//       <input name='number' onChange={handleChange} value={form.number} type="text" />

//       <label htmlFor="">Address:</label>
//       <input name='address' onChange={handleChange} value={form.address}  type="text" />

//       <label htmlFor="">Marital Status:</label>
//       <input name='status' onChange={handleChange} value={form.status} type="text" />

//       <button onClick={submitedHandle}>Submit</button>
//     </form>
//   )
// }

// export default App

// import React, { useState } from "react";

// function App() {
//   const initialValue = {
//     name: "",
//     email: "",
//     number: "",
//     address: "",
//   };
//   const [form, setForm] = useState(initialValue);


//   const handleForm = (e) => {
//     const{name,value} = e.target
//     setForm((prevValue) => ({...prevValue,[name]:value}))
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(form)
//     setForm(initialValue)
//   }

//   return (
//     <form>
//       <div>
//         <label htmlFor="">Name:</label>
//         <input name="name" type="text" value={form.name} onChange={handleForm}/>
//       </div>
//       <div>
//         <label htmlFor="">Email:</label>
//         <input name="email" type="text" value={form.email} onChange={handleForm}/>
//       </div>
//       <div>
//         <label htmlFor="">Phone Number:</label>
//         <input name="number" type="text" value={form.number} onChange={handleForm}/>
//       </div>
//       <div>
//         <label htmlFor="">Address:</label>
//         <input name="address" type="text" value={form.address} onChange={handleForm}/>
//       </div>
//       <button type="submit" onClick={handleSubmit}>submit</button>
//     </form>
//   );
// }

// export default App;
