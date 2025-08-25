const app = document.querySelector("#app");
const root = ReactDOM.createRoot(app);

const el = React.createElement("h1", { className: "title" }, "Hello React"); // jsx
console.log(el);

root.render(el);
