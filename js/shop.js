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
  const [prdList, setPrdList] = useState([]);
  axios.get("../mock/prd.json").then(({ data: { list } }) => {
    setPrdList(list);
  });
  return (
    <div className="containers">
      {prdList.map((prd, idx) => (
        <PrdWrap key={idx} />
      ))}
    </div>
  );
};

root.render(<Containers />);
