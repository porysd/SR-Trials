

function Button1() {

    const handClick= () => {
        console.log('Button clicked')
    }

    const handClick2 = (name) => {
        console.log(`${name} stop clicking me`)
    }

    let count = 0

    const handClick3 = (name) => {

        if (count < 3) {
            count++;
            console.log(`${name} you click me ${count} times`)
        }else {
            console.log(`${name} stop clicking me`)
        }
    }

    const handleClick = (e) => {
        e.target.textContent = 'Clicked'
    }

    return <button onClick={(e) => handleClick(e)}>Click me</button>
}

export default Button1