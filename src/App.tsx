import React from "react";
import styles from "./App.module.css";
import About from "./components/Overview";
import Overview from "./components/Overview";
import Info from "./components/Info";

function App() {
    return (
        <div className={styles["Website"]}>
            <Overview />
            <Info />
        </div>
    );
}

export default App;
