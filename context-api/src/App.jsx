import React from "react";
import CartItem from "./component/cart";
import Item from "./component/item";
import CountIncrement from "./component/countincrement";

function complexApi() {
console.log("html")
// const CoutnerState=useContext(CounterContext)

return (
      <>
         <div style={{ display: "flex",gap:5, alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
         <CountIncrement/>
            <h1>Context API</h1>
            <br />
            <br />
         <Item name="macbook" prise={10000} />
         <Item name="pendrive" prise={30000}/>
         <Item name="mobile" prise={3400}/>
         </div>
         <CartItem/>
      </>
   )

}

export default complexApi;


{/* <h1>Count is {CoutnerState.count} </h1> */}
{/* <br />{console.log(CounterContext.count)} */}
{/* <Counter /> */}
{/* <Counter /> */}
{/* <Counter /> */}
{/* <Counter /> */}
