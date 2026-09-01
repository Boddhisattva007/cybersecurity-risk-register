
// Function for the reusable button. 
function Button({ type, buttonText, onClick }) {
    return(

        <button type={type} onClick={onClick}>

            {buttonText}

        </button>

    );

}



// Exporting Button
export default Button;