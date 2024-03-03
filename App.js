// now here we understand how to create the nested tags usign the react
// for eg show it below
/**
 *
 * <div id ="parent">
 * <div id="child">
 *   <h1> Im h1 tag</h1>
 *    <h2> Im h2 tag</h2>
 * </div>
 *
 *  <div id="child">
 *   <h1> Im h1 tag</h1>
 *    <h2> Im h2 tag</h2>
 * </div>
 * </div>
 *
 */

// let us just do it->
const parent = React.createElement(
  // first div
  "div",
  { id: "parent" },

  [
    React.createElement(
      // second div
      "div",
      { id: "child" },
      // React.createElement("h1", {}, "I m an h1 tag") // children

      // now to understand how to create two children sbiling --->

      [
        React.createElement("h1", {}, "I m an h1 tag"),
        React.createElement("h2", {}, "I m an h2 tag"),
      ]
    ),

    React.createElement(
      // second div
      "div",
      { id: "child" },
      // React.createElement("h1", {}, "I m an h1 tag") // children

      // now to understand how to create two children sbiling --->

      [
        React.createElement("h1", {}, "I m an h1 tag"),
        React.createElement("h2", {}, "I m an h2 tag"),
      ]
    ),
  ]
);

// also print it at console to check it
console.log(parent);

// let render it
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//-------------------------------------------------------------->
// we create this file to write all the code using the
// react
// react code
// we use something know as createElement

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React"
// );

// console.log(heading); // the obejct

// ab hume isse heading ko div jiske id root h ushme dalna toh
// yaha pr aata concept of usign the reactdom

// basically yaad rkhna h ki ye jo root h vo ek place h react ke andar jaha
// pr sare changes honge

// sabkuch yahi pe render hoga
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // render jo vo kya
