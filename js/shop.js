const { useState } = React;
const root = ReactDOM.createRoot(document.querySelector("#app"));


const PrdWrap = ({ children }) => {
  return (
    <div className="prd-wrap">
      <img src="../images/cherries.jpg" className="img" />
      <h2>title</h2>
      <div>description</div>
    </div>
  );
};

const Containers = (props) => {
  return (
    <div className="containers">
      <PrdWrap />
      <PrdWrap />
      <PrdWrap />
      <PrdWrap />
      <PrdWrap />
      <PrdWrap />
      <PrdWrap />
      <PrdWrap />
    </div>
  );
};

root.render(<Containers />);
