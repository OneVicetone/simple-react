import React from "./react";
import ReactDom from "./react-dom";

const welcome = "Welcome";

const Component = props => {
  const { prop, doSomeThing } = props;
  return (
    <>
      <h4> I'M CHILDREN COMPONENT</h4>
      <h5>NOW I GET PROPS IS {prop}</h5>
      <button onClick={doSomeThing}> click to start event</button>
    </>
  );
};

function doSomeThing(){
    alert('haha')
}
const element = (
  <div className="div" title="hhhh">
    <h1>{welcome},</h1>
    <span>this is React.js</span>
    {<Component prop="PROP" doSomeThing={doSomeThing} />}
  </div>
);

const textNode = "react";
console.log(element);

ReactDom.render(element, document.querySelector("#app"));
