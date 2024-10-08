import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { scientists } from "../utils/data";
import { chronicle } from "../utils/descripe";
import Border from "./Border";
import Button from "./Button";
import Profile from "./Profile";
import Form from "./Form";

export default function Gallery() {
  const [state, setState] = useState({
    showMore: false,
    showForm: false,
  });

  const {showMore, showForm} = state;
  const navigate = useNavigate();
  const handleClickDetails = () => {
    navigate(`/scientists`);
  };

  function handleState(e) {
    setState((currState) => ({
      ...currState,       //copy all old-properties
      [e]: !currState[e]  //but, update this property
    }));
  }

  return (
    <>
      <div className="mx-auto flex h-screen flex-col items-center justify-center">
        <h1 className="text-center font-mono text-2xl font-semibold">
          Great Scientists
        </h1>
        <Border>
          <div className="flex flex-row flex-nowrap items-center">
            {scientists.map((scientist, index) => (
              //Throw data to Profile.jsx
              <Profile key={index} profile={scientist.profile} size={90} />
            ))}
          </div>
        </Border>
        <p className="max-w-md justify-center text-center font-mono text-sm">
          <span className="font-mono text-sm font-semibold">
            Who are them?{" "}
          </span>
          {chronicle[0].short} {state.showMore && chronicle[0].more}
        </p>

        {!showForm && (
          <div className="mt-5 flex flex-row items-center justify-center">
          <Button initial={"Newslatter"} onClick={() => handleState("showForm")} />
          <Button
            initial={showMore ? "Show Less" : "Show More"}
            onClick={() => handleState("showMore")}
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
            <Button initial={"x"} onClick={() => handleState("showForm")} />
            <Form />
          </div>
        )}

      </div>
    </>
  );
}