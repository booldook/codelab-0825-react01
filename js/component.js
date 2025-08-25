// class Member {
//   constructor() {
//     this.a = "";
//     this.b = "";
//   }
//   run() {}
// }
// const member = new Member();
// console.log(member);

const app = document.querySelector("#app");
const root = ReactDOM.createRoot(app);

const users = [
  { id: 1, name: "홍길동", age: 23 },
  { id: 2, name: "홍길순", age: 28 },
  { id: 3, name: "홍길만", age: 22 },
];

// React 17 이전에 사용하던 문법 - 지금은 안쓴다.
// class Hello extends React.Component {}

const Hello = ({ title, clsNm }) => {
  return <h1 className={clsNm}>{title}</h1>;
};

const SpanCtt = ({ clsNm, children }) => {
  return <span className={clsNm}>{children}</span>;
};

const UserList = ({ clsNm, children }) => {
  return <li className={clsNm}>{children}</li>;
};

const UserLists = ({ clsNm, children }) => {
  return <ul className={clsNm}>{children}</ul>;
};

// Hello({ title: "Hello Component", clsNm: "text-2xl" })
const el = (
  <>
    <Hello title="Hello Component" clsNm="text-2xl" />
    <Hello title="Hello Component2" clsNm="text-3xl" />
    <Hello title="Hello Component3" clsNm="text-4xl" />
    <Hello title="Hello Component4" clsNm="text-5xl" />
    <UserLists clsNm="text-base">
      {users.map((user) => (
        <UserList clsNm="border-b-1">
          <span>{user.id}</span>
          <SpanCtt clsNm="text-xl">{user.name}</SpanCtt>
          <SpanCtt clsNm="text-xs">{user.age}</SpanCtt>
        </UserList>
      ))}
    </UserLists>
  </>
);

root.render(el);
