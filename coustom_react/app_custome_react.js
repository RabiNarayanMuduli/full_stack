const main_container = document.querySelector('#root');
  




const react_element={
    type:"a",
    props:{
        id:"title",
        href:"https://google.com",
        class:"hello",
    },
    children:[
        "Hello World"
    ]
}
function render123(element,container){
    const domElement= document.createElement(element.type)
     domElement.textContent = element.children;
    // domElement.setAttribute("href",element.props.href)
    // domElement.setAttribute("id",element.props.id)
    // domElement.setAttribute("class",element.props.className)

    for (const key in element.props) {
        if(key=="children")continue;
        domElement.setAttribute(key,element.props[key])
    }
    container.appendChild(domElement)
}

render123(react_element,main_container);