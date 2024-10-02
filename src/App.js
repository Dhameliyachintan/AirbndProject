import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import ClientOnly from "./component/Clientonly";
import Modal from "./component/modal/Modal";
import { useState } from "react";

function App() {
  return (
    <div>
      <ClientOnly/>
    </div>
  );
}

export default App;
