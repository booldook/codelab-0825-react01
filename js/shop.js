const { useState } = React;
const root = ReactDOM.createRoot(document.querySelector("#app"));

const PrdWrap = ({ children, img, title, description }) => {
  return (
    <div className="prd-wrap">
      <img src={img} className="img" />
      <h2 className="title">{title}</h2>
      <div className="description">{description}</div>
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
        <PrdWrap
          key={idx}
          img={prd.img}
          title={prd.title}
          description={prd.description}
        />
      ))}
    </div>
  );
};

root.render(<Containers />);
