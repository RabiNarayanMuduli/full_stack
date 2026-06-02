function Hey() {
    const save = () => {
        const a=document.getElementById("abc").style.color = "red";
        alert("idiot")
    }
    return (    
        <>
            <h1>hey</h1>
            <button id="abc" onClick={save}>click</button>
        </>
    )
}

// const b=(
//     <>
        
//         <h1>hey r u idiot</h1>
        
//     </>
// )


export default Hey
