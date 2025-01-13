
import styles from './Button.module.css'

function Button (){

    const inlineStyles = {
            fontFamily: "Poppins",
            fontSize: "10px",
            backgroundColor: "hsl(0, 0%, 15%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
    }

    return(
        <>
            <button className="sampleBtn">Click Me</button> // This in external styles (index.css)
            <button className={styles.sampleBtn}>Click Me</button> // This is module styles
            <button style={inlineStyles}>Click me</button> // This is inline style
        </>

    );
}

export default Button