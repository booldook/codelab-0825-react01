const app = document.querySelector("#app");
const root = ReactDOM.createRoot(app);

// const el = React.createElement("h1", { className: "title" }, "Hello React");
// console.log(el);

// const data = axios.get("https://jsonplaceholder.typicode.com/users")
const greeting = "Hello React";
const users = [
  { id: 1, name: "홍길동", age: 23 },
  { id: 2, name: "홍길순", age: 28 },
  { id: 3, name: "홍길만", age: 22 },
];

const el = (
  <>
    <h1 className="mx-auto text-center text-4xl">{greeting}</h1>
    <ul>
      {users.map((user) => (
        <li className="border-b-1 p-3">
          <span>{user.id}</span> /<span>{user.name}</span> /
          <span>{user.age}</span>
        </li>
      ))}
    </ul>
  </>
);

root.render(el);
