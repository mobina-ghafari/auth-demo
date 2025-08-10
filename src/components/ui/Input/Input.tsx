"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className={styles.inputWrapper}>
        {label && <label>{label}</label>}
        <input
          ref={ref}
          type="text"
          {...props}
          className={`${error ? styles.errorInput : ""}`}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;
