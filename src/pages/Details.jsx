import React, { useEffect } from "react";
import { useState } from "react";
import { scientists } from "../utils/data";
import { getImageURL } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import { useImmer } from "use-immer";
import Button from "../components/Button";
import Border from "../components/Border";
import useSwitch from "../hooks/useSwitch";
import TextArea from "../components/TextArea";

const Details = () => {
  const { direction, next, previous } = useSwitch(scientists.length);
  const navigate = useNavigate();
  
  const [state, setState] = useImmer({
    scientist: scientists[direction],
    updateScientist: scientists[direction],
    show: false,
  });
  const {scientist, updateScientist, show} = state;

  function handleChange(e) {
    const {name, value} = e.target;

    setState((draft) => {
      const [property, key] = name.split(".");

      if (property === "profile" && key) {
        draft.updateScientist.profile[key] = value;
      } else {
        draft.updateScientist[name] = value;
      }
    });
  }

  const toggleEdit= () => {
    setState((draft) => {
      //reverse show value
      draft.show = !show; 
      if (!draft.show) {
        draft.scientist = {...draft.updateScientist};
      }
    });
  };

  useEffect(() => {
    setState((draft) => {
      draft.scientist = scientists[direction];
      draft.updateScientist = scientists[direction];
      draft.show = false;
    });
  }, [direction, setState]);

  const closeDetails = () => {
    navigate(`/`)
  }

  return (
    <div className="mx-10 flex h-screen flex-row items-center justify-center">
      {!show && (
        <div className="flex-shrink-0">
          <Button initial={"❮"} onClick={previous} />
        </div>
      )}

      {/* Content */}
      <div className="mx-10 flex flex-col items-center justify-center">
        {!show && (
          <h1 className="my-10 font-mono text-2xl font-bold text-black">
          {scientist?.profile?.name || "Not Available"}
        </h1>
        )}
        <div>
          <Border>
            <img
              className="flex flex-nowrap rounded-full"
              src={getImageURL(scientist.profile)}
              height={225}
              width={225}
              alt={`Profile of ${scientist.profile.name}`}
            />
          </Border>
        </div>
        {!show && (
          <div className="mb-5 mt-10 flex flex-col items-center justify-center">
            <p className="max-w-lg items-center justify-center font-mono text-black">
              {`${scientist.profession} known for 
                ${scientist.accomplisment} Born in 
                ${scientist.profile.details.nationality}, 
                ${scientist.profile.details.yearBorn}.`}
            </p>
          </div>
        )}

        {show && (
          <div className="mx-auto mb-5 mt-10 flex flex-col items-center justify-center">
              <TextArea 
                name={"profile.name"} 
                value={updateScientist.profile.name}
                placeholder={"Name"}
                handleChange={handleChange}
              />
              <TextArea 
                name={"profession"} 
                value={updateScientist.profession}
                placeholder={"Profession"}
                handleChange={handleChange}
              />
              <TextArea 
                name={"accomplisment"} 
                value={updateScientist.accomplisment}
                placeholder={"Accomplisment"}
                handleChange={handleChange}
              />
          </div>
        )}

        <div className="my-5 flex flex-row items-center justify-center">
            <Button initial={"Back"} onClick={closeDetails} />
            <Button initial={show? "Save" : "Edit"} icon={false} onClick={toggleEdit}/>
        </div>
      </div>

      {!show && (
        <div className="flex-shrink-0">
          <Button initial={"❯"} onClick={next} />
        </div>
      )}
    </div>
  );
};

export default Details;
