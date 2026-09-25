function Book(pops){
    const image=React.createElement("img",{src:pops.image,width:"100px",height:"100px"},null);
    const title=React.createElement("h2",{style:{color:"red"}},"Title:ReactJs"+props.title);
    const price=React.createElement("h2",{style:{color:"green"}},"Price:465/-"+props.price);
    const btn=React.createElement("btn",{style:{color:"blue"}},"Add to cart");
    const div=React.createElement("div",{className:"book"},[image,title,price,btn]);
    return div;
}
const bookdata=[
    {image:"",title:"React.js",price:465},
    {image:"",title:"Node.js",price:400},
    {image:"",title:"express.ejs",price:505},
    {image:"",title:"React.js",price:465}
]
function App(){
    const bookstore=bookdata.map((b)=>{
        return Book(b);
    })
    const div=React.createElement("div",{className:"bookstore"},bookstore)
    return div;
}
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(App())