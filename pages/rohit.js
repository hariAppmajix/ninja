import React, { useState, useEffect, useCallback, useRef } from "react";

import SliderNew from "../components/SliderNew/SliderNew";
import * as axios from "axios";

function rohit(props) {
  console.log(props);
  return (
    <div>
      <h1>My page.</h1>
      {props && props.data ? (
        <ul>
          {" "}
          {props.data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}{" "}
        </ul>
      ) : (
        <></>
      )}
      <SliderNew />
    </div>
  );
}

rohit.getInitialProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return {
    data: [...res.data],
  };
};

export default rohit;
