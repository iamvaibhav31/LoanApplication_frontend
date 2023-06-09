import React from "react";
import styles from "./FormElements.module.css";

const JourneyInputs = ({ label, placeholder, name, Value, type, onChange }) => {
  return (
    <div className={styles.inputCon}>
      <label className={styles.inputLabel}>{label}</label>
      <input
        defaultValue={Value}
        type={type}
        name={name}
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

const JourneyInputGroup = ({ children }) => {
  return <div className={styles.formGroup}>{children}</div>;
};

const JourneySelector = ({ label, name, options, Value, onChange }) => {
  return (
    <div className={styles.inputCon}>
      <label className={styles.inputLabel}>{label}</label>
      <select
        className={styles.input}
        defaultValue={Value}
        name={name}
        onChange={onChange}
      >
        {options.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

const JourneyUploader = ({ label, name, onChange }) => {
  return (
    <div className={styles.inputCon}>
      <label className={styles.inputLabel}>{label}</label>
      <input
        type="file"
        name={name}
        className={styles.input}
        onChange={onChange}
      />
    </div>
  );
};

export { JourneyInputs, JourneyInputGroup, JourneySelector, JourneyUploader };
