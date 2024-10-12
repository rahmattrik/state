import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Border from "../components/Border";

const Response = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(`/`);
  };

  return (
    <div className="mx-auto flex h-screen flex-row items-center justify-center">
      <Border>
        <h1 className="font-mono text-2xl font-bold text-black">
          You Subscribed to Our Newslatter
        </h1>
      </Border>
      <div className="m-10 items-center justify-center">
        <Button initial={"x"} icon={false} onClick={handleClose} />
      </div>
    </div>
  );
};

export default Response;
