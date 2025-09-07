import React, { useState } from "react";

const HandleCheckBox = () => {
  const [skills, setSkills] = useState([]);

  const handleCheckBox = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((item) => item !== value)); 
    }
  };

  return (
    <div className="flex flex-col m-4">
      <div className="flex gap-2">
        <input
          onChange={handleCheckBox}
          type="checkbox"
          id="php"
          value="PHP"
        />
        <label htmlFor="php">PHP</label>
      </div>

      <div className="flex gap-2">
        <input
          onChange={handleCheckBox}
          type="checkbox"
          id="js"
          value="JS"
        />
        <label htmlFor="js">JS</label>
      </div>

      <div className="flex gap-2">
        <input
          onChange={handleCheckBox}
          type="checkbox"
          id="java"
          value="Java"
        />
        <label htmlFor="java">Java</label>
      </div>

      <h3>Selected Skills: {skills.join(", ")}</h3>
    </div>
  );
};

export default HandleCheckBox;
