const app = document.querySelector("#app");
const root = ReactDOM.createRoot(app);

const users = [
  { id: 1, name: "홍길동", age: 23 },
  { id: 2, name: "홍길순", age: 28 },
  { id: 3, name: "홍길만", age: 22 },
];

const el = (
  <>
    <ul></ul>
  </>
);

root.render(el);
