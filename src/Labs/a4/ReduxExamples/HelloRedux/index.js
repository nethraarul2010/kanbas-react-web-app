import { useSelector, useDispatch } from "react-redux";
import React from "react";
function HelloRedux() {
  const { message } = useSelector((state) => state.helloReducer);
  console.log("Message from Redux:", message);
  return (
    <div>
      <h1>Hello Redux</h1>
      <h2>{message}</h2>
    </div>
  );
}
export default HelloRedux;