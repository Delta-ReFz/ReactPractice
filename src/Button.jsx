
function Button() {

    const handleClick = () => {
        alert("Button clicked!")
    }

    const handleclick2 = (name) => {
        alert(`Hello ${name} stop clicking me!`)
    }

    let count = 0;

    const handleclick3 = (name) => {
        if(count>=0) {
            count++;
            alert(`Yo ${name}, you clicked me ${count} times`)
        }
    }

    const handleclick4 = (e) => {
        e.target.textContent = "YOOOO"
    }


    return(
        <button onClick={(e) => handleclick4(e)} className="button">Click Me</button>
    )
}

export default Button