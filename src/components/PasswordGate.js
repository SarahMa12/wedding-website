// components/PasswordGate.js
import { useState } from "react";
import styles from "@/styles/PasswordGate.module.css";

export default function PasswordGate({ onUnlock }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const PASSWORD = "Kokoteddy";

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = input.trim()

    if (value === PASSWORD) {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("wedding_pw_ok", "true");
      }
      onUnlock?.(); // tell _app it's unlocked
    } else {
      setError("Incorrect password. Please try again ♡");
    }
  };

  return (
    <div className={styles.gateWrapper}>
      <div className={styles.gateCard}>
        <h1 className={styles.title}>Welcome</h1>
        <p className={styles.subtitle}>
          This wedding website is for invited guests only.  
          Please enter the password to continue. ♡
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="password"
            className={styles.input}
            placeholder="Enter password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (error) setError("");
            }}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.button}>
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
