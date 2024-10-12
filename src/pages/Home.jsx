import React from "react";
import { useNavigate } from "react-router-dom";
import { chronicle } from "../utils/descripe";
import Gallery from "../components/Gallery";
import Button from "../components/Button";
import Form from "../components/Form";
import useVisibility from "../hooks/useVisibility";

const Home = () => {
  // const { state, toggle } = useVisibility();
  const {state, toggle, reset} = useVisibility();
  const { showForm, showMore } = state;
  const navigate = useNavigate();

  const handleClickDetails = () => {
    reset();
    navigate(`/scientists`);
  };

  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center">
      <h1 className="text-center font-mono text-2xl font-semibold">
        Great Scientists
      </h1>

      <Gallery />

      <p className="max-w-md justify-center text-center font-mono text-sm">
        <span className="font-mono text-sm font-semibold">Who are them? </span>
        {chronicle[0].short} {showMore && chronicle[0].more}
      </p>

      {!showForm && (
        <div className="mt-5 flex flex-row items-center justify-center">
          <Button
            initial={"Newsletter"}
            // onClick={() => toggle("showForm", !showForm)}
            onClick={() => toggle("showForm")} 
          />
          <Button
            initial={showMore ? "Show Less" : "Show More"}
            // onClick={() => toggle("showMore", !showMore)}
            onClick={() => toggle("showMore")}
          />
          <Button
            initial={"Details"}
            onClick={handleClickDetails}
            icon={true}
            pathData="M13 5l7 7m0 0l-7 7m7-7H5"
          />
        </div>
      )}

      {showForm && (
        <div className="mx-auto mt-5 flex flex-row items-center justify-center text-center">
          <Button 
            initial={"x"} 
            // onClick={() => toggle("showForm", false)} 
            onClick={() => toggle("showForm")}
          />
          <Form />
        </div>
      )}
    </div>
  );
};

export default Home;
