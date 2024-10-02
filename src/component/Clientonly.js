import React, { useState, useEffect } from "react";
import Modal from "./modal/Modal";
import Navbar from "./navbar/Navbar";

const ClientOnly = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <Ragistermodal/> */}
      <Modal isOpen title="Hello World" actionLabel="submit"/>
      <Navbar />
    </>
  ); 
};

export default ClientOnly;
