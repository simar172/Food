import React, { useReducer } from "react";
import Context from "./Cart-context";
const def = {
  items: [],
  TotalAmount: 0,
};
const reducer = (state, action) => {
  if(action.type==="ADD"){
    const ud=state.items.concat(action.itm);
    const pr=state.TotalAmount+action.itm.price*action.itm.TotalAmount;
    return {
      items:ud,
      TotalAmount:pr
    }
  }
  return def;
};
export default function Cart_context_prov(props) {
  const [state, dispatch] = useReducer(reducer, def);
  const add = (item) => {
    dispatch({ type: "ADD", itm: item });
  };
  const del = (id) => {
    dispatch({ type: "REMOVE", ids: id });
  };

  const data = {
    items: state.items,
    TotalAmount: state.TotalAmount,
    add: add,
    rem: del,
  };
  return <Context.Provider value={data}>{props.children}</Context.Provider>;
}
