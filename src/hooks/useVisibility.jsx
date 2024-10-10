import { useReducer } from "react";

function visibilityReducer(state, action) {
  return {
    ...state,       //copy all old-properties
    [action.payload.type]: action.payload.value,
  };
}

function useVisibility() {
  const initialState = {
    showForm: false,
    showMore: false,
    showEdit: false,
  };

  const [state, dispatch] = useReducer(visibilityReducer, initialState);
  function toggle(type, value) {
    dispatch({ payload: { type, value } });
  }

  return { state, toggle };
}

export default useVisibility;
