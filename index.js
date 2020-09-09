import { useState, useEffect } from "react";

let callbackFn = () => {};
const useStateX = initialState => {
  let [state, setState] = useState(initialState);
  const setStateX = (nextState, callback = () => {}) => {
    callbackFn = callback;
    setState(nextState);
  };
  useEffect(() => {
    try {
      callbackFn();
    } catch (err) {
      console.log(err);
    }
  }, [state]);
  return [state, setStateX];
};
export default useStateX;
