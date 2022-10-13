import React from 'react'

const Conte = React.createContext({
    items:[],
    TotalAmount:0,
    add:(item)=>{},
    rem:(id)=>{}
});
export default Conte;