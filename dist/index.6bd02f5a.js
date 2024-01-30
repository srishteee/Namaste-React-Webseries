// const heading = React.createElement("h1", {}, "hello world from react");
// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(heading);
// nested in react 
impor;
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {}, "I am an h1 tag")));
console.log(parent); // obj
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
