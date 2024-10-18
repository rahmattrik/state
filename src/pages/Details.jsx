import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Border from "../components/Border";
import Button from "../components/Button";
import TextArea from "../components/TextArea";
import useSwitch from "../hooks/useSwitch";
import useVisibility from "../hooks/useVisibility";
import { scientists } from "../utils/data";
import { getImageURL } from "../utils/utils";

const Details = () => {
  const { direction, next, previous } = useSwitch(scientists.length);
  const {state, toggle, reset} = useVisibility();
  const { showEdit } = state;
  const navigate = useNavigate();

  const [scientist, setScientitst] = useState(scientists[direction]);
  const updateScientist = { ...scientist };

  function handleChange(e) {
    const { name, value } = e.target;
    const [property, key] = name.split(".");

    setScientitst((curr) => ({
      ...curr, //copy all old-properties
      [property]: key ? { ...curr[property], [key]: value } : value,
    }));
  }

  useEffect(() => {
    setScientitst(scientists[direction]);
  }, [direction]); //Dependency array: only run if direction change

  const closeDetails = () => {
    reset();
    navigate(`/`);
  };

  return (
    <div className="mx-auto flex h-screen flex-row items-center justify-center">
      {!showEdit && (
        <div className="flex-shrink-0">
          <Button initial={"❮"} onClick={previous} />
        </div>
      )}

      {/* Content */}
      <div className="mx-5 flex flex-col items-center justify-center">
        
        <div className="mt-10">
          <Border>
            <img
              className="flex flex-nowrap rounded-full"
              src={getImageURL(scientist.profile)}
              height={195}
              width={195}
              alt={`Profile of ${scientist.profile.name}`}
            />
          </Border>
        </div>

        {!showEdit && (
          <h1 className="my-5 font-mono text-xl font-bold text-black">
            {scientist?.profile?.name || "Not Available"}
          </h1>
        )}

        {!showEdit && (
          <div className="mb-5 mt-2.5 flex flex-col items-center justify-center">
            <p className="max-w-lg items-center justify-center font-mono text-black">
              {`${scientist.profession} known for 
                ${scientist.accomplisment} Born in 
                ${scientist.profile.details.nationality}, 
                ${scientist.profile.details.yearBorn}.`}
            </p>
          </div>
        )}

        {showEdit && (
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

        <div className="my-2.5 flex flex-row items-center justify-center">
          <Button initial={"Back"} onClick={closeDetails} />
          <Button
            initial={showEdit ? "Save" : "Edit"}
            icon={false}
            onClick={() => toggle("showEdit")}
          />
        </div>
      </div>

      {!showEdit && (
        <div className="flex-shrink-0">
          <Button initial={"❯"} onClick={next} />
        </div>
      )}
    </div>
  );
};

export default Details;
