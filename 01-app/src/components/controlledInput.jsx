import React, { useState } from "react";

const ControlledInput = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1 className="text-center p-4">Controlled Input</h1>
      <div className="flex items-center flex-col gap-3 border p-10">
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            className="border p-1"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your name"
            id="name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="border p-1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your email"
            id="email"
          />
        </div>

        <div className="flex-col flex">
          <label htmlFor="password">Password</label>
          <input
            className="border p-1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your password"
            id="password"
          />
        </div>

      </div>

      <h2>Select Input : {`${name.toString(", ")}, ${email.toString(", ")}`}</h2>
    </div>
  );
};

export default ControlledInput;
