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

  const [state, setState] = useState({
    scientist: scientists[direction],
    editedData: scientists[direction],
    show: false,
  });

  const {scientist, editedData, show} = state;
  const navigate = useNavigate();

  function handleChange(e) {
    const {name, value} = e.target;  

    if (name.startsWith("profile.")) {  //if name started with profile
      const key = name.split(".")[1];   //
      setState((currState) => ({   //set state
        ...currState,              //copy all old-properties
        editedData: {              //update 'editedData'
          ...currState.editedData, //copy property from 'editedData'
          profile: {                          //update profile
            ...currState.editedData.profile,  //copy property from profile
            [key]: value,                     //copy property value based on key
          },
        },
      }));
    } else {
      setState((currState) => ({   //set state
        ...currState,              //copy all old-properties
        editedData: {              //update 'editedData'
          ...currState.editedData,    //copy property from 'editedData'
          [name]: value,              //change value properties based on the name
        }
      }));
    }
  }

  const toggleEdit= () => {
    setState((currState) => ({ //set state
      ...currState,            //copy old-properties
      scientist: show? editedData : currState.scientist,    //
      show: !show,
    }));
  };

  const closeDetails = () => {
    navigate(`/`)
  }

  useEffect(() => {
    setState((currState) => ({
      ...currState,
      scientist: scientists[direction],
      editedData: scientists[direction],
    }));
  }, [direction]);

  return (
    <div className="mx-10 flex h-screen flex-row items-center justify-center">
      {!show && (
        <div className="flex-shrink-0">
          <Button initial={"❮"} onClick={previous} />
        </div>
      )}

      {/* Content */}
      <div className="mx-10 flex flex-col items-center justify-center">
        {!state.show && (
          <h1 className="my-10 font-mono text-2xl font-bold text-black">
          {scientist.profile.name}
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
        {!state.show && (
          <div className="mb-5 mt-10 flex flex-col items-center justify-center">
            <p className="max-w-lg items-center justify-center font-mono text-black">
              {`${scientist.profession} known for 
                ${scientist.accomplisment} Born in 
                ${scientist.profile.details.nationality}, 
                ${scientist.profile.details.yearBorn}.`}
            </p>
          </div>
        )}

        {state.show && (
          <div className="mx-auto mb-5 mt-10 flex flex-col items-center justify-center">
              <TextArea 
                name={"profile.name"} 
                value={editedData.profile.name}
                placeholder={"Name"}
                handleChange={handleChange}
              />
              <TextArea 
                name={"profession"} 
                value={editedData.profession}
                placeholder={"Profession"}
                handleChange={handleChange}
              />
              <TextArea 
                name={"accomplisment"} 
                value={editedData.accomplisment}
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
