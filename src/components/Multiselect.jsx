import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import "./Contact.css";

const options = [
  { label: "Software Services", value: "software Services" },
  { label: "Digital Marketing", value: "digital Marketing" },
  { label: "Collateral Design ", value: "collateral Design" },
];

const Multi = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <h1 className="services_dropdown">Services</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        className="multi"
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

export default Multi;
