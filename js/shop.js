const { useState } = React;
const root = ReactDOM.createRoot(document.querySelector("#app"));

const FormWrapper = ({ children, onGetPrd, onResetPrd, onChangeSearch }) => {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
    onChangeSearch(e.target.value);
  };
  const onDeleteSearch = (e) => {
    setSearch("");
    onChangeSearch("");
  };
  return (
    <div className="form-wrapper">
      <form className="form-wrap">
        <input
          type="text"
          className="search-input"
          onChange={onChange}
          value={search}
          autoFocus
        />
        <span
          className={`fa fa-times btn-delete ${search ? "active" : ""}`}
          onClick={onDeleteSearch}
        ></span>
      </form>
      <button className="btn" onClick={onGetPrd}>
        상품가져오기
      </button>
      <button className="btn" onClick={onResetPrd}>
        상품지우기
      </button>
    </div>
  );
};

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
  const [searchList, setSearchList] = useState([]);
  const onGetPrd = async (e) => {
    const { data } = await axios.get("../mock/prd.json");
    setPrdList(data?.list || []);
    setSearchList(data?.list || []);
  };
  const onResetPrd = (e) => {
    setPrdList([]);
    setSearchList([]);
  };
  const onChangeSearch = (search) => {
    if (search === "") {
      setSearchList(prdList);
    } else {
      const searchedList = prdList.filter((prd) => {
        return (
          prd.title.toLowerCase().includes(search.toLowerCase()) ||
          prd.description.toLowerCase().includes(search.toLowerCase())
        );
      });
      setSearchList(searchedList);
    }
  };
  return (
    <div className="containers">
      <FormWrapper
        onGetPrd={onGetPrd}
        onResetPrd={onResetPrd}
        onChangeSearch={onChangeSearch}
      />
      <div className="prd-wrapper">
        {searchList.map((prd, idx) => (
          <PrdWrap
            key={idx}
            img={prd.img}
            title={prd.title}
            description={prd.description}
          />
        ))}
      </div>
    </div>
  );
};

root.render(<Containers />);
