// class Member {
//   constructor() {
//     this.a = "";
//     this.b = "";
//   }
//   run() {}
// }
// const member = new Member();
// console.log(member);

const { useState } = React;
const root = ReactDOM.createRoot(document.querySelector("#app"));
const users = [
  { id: 1, name: "홍길동", age: 23 },
  { id: 2, name: "홍길순", age: 28 },
  { id: 3, name: "홍길만", age: 22 },
];

// React 17 이전에 사용하던 문법 - 지금은 안쓴다.
// class Hello extends React.Component {}

const Hello = ({ clsNm, children }) => {
  return <h1 className={clsNm}>{children}</h1>;
};

const SpanCtt = ({ clsNm, children }) => {
  return <span className={clsNm}>{children}</span>;
};

const UserList = ({ clsNm, children }) => {
  return <li className={clsNm}>{children}</li>;
};

const UserLists = (props) => {
  return <ul className={props.clsNm}>{props.children}</ul>;
};

const Wrapper = (props) => {
  const [title, setTitle] = useState("");
  const [clsNm, setClsNm] = useState("");
  const onChangeText = (e) => {
    setTitle(e.target.value);
    setClsNm(e.target.value);
  };
  return (
    <div>
      <Hello title="Hello Component" clsNm={clsNm}>
        {title}
      </Hello>
      <Hello title="Hello Component" clsNm="text-2xl">
        {title}
      </Hello>
      <Hello title="Hello Component" clsNm="text-2xl">
        {title}
      </Hello>
      <Hello title="Hello Component" clsNm="text-2xl">
        {title}
      </Hello>
      <Hello title="Hello Component" clsNm="text-2xl">
        {title}
      </Hello>
      <Hello title="Hello Component" clsNm="text-2xl">
        {title}
      </Hello>
      <Hello title="Hello Component" clsNm="text-2xl">
        {title}
      </Hello>
      <Hello title="Hello Component" clsNm="text-2xl">
        {title}
      </Hello>
      <UserLists clsNm="text-base">
        {users.map((user, idx) => (
          <UserList clsNm="border-b-1 p-3" key={idx}>
            <span>{user.id}</span>
            <SpanCtt clsNm="text-xl">{user.name}</SpanCtt>
            <SpanCtt clsNm="text-xs">{user.age}</SpanCtt>
            <input className="border-1" onChange={onChangeText} />
          </UserList>
        ))}
      </UserLists>
    </div>
  );
};

// Hello({ title: "Hello Component", clsNm: "text-2xl" })
root.render(<Wrapper />);
