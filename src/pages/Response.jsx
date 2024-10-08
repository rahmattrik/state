import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Response = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(`/`);
  };

  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center">
      <h1 className="font-mono text-2xl font-bold text-black">
        You Subscribed to Our Newslatter
      </h1>
      <div className="m-10 items-center justify-center">
        <Button initial={"x"} icon={false} onClick={handleClose} />
      </div>
    </div>
  );
};

export default Response;
