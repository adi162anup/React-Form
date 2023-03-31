import { useState } from "react";
import classnames from "classnames";
// import './form.css';

function MyForm() {
    const [inputs, setInputs] = useState({});

    // const enabledButtonClass = "submit-button-enabled";
    // const disabledButtonClass = "submit-button-disabled";

    const validate = () => {
        return inputs.username && inputs.age;
      };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    // const isFormValid = Object.values(inputs).every((value) => value !== "");

    // const buttonClass = classnames({
    //     [enabledButtonClass]: isFormValid,
    //     [disabledButtonClass]: !isFormValid,
    //   });

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                  type = "text"
                  name = "username"
                  value = {inputs.username || ""}
                  onChange = {handleChange}
                />
            </label>
            <label>Enter your age:
                <input
                  type = "number"
                  name = "age"
                  value = {inputs.age || ""}
                  onChange = {handleChange}
                />
            </label>
            <input type = "submit" disabled={!validate()} />
        </form>
    )
    }

export default MyForm;