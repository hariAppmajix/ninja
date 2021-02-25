import React from "react";

// set the defaults
const toggleContext = React.createContext({
  showMenu: false,
  setShowMenu: () => {},
});

export default toggleContext;
