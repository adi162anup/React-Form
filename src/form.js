import { useState,useEffect } from "react";
import './form.css';

function MyForm() {
    const [inputs, setInputs] = useState({});
    const [mySkills, setMySkills] = useState("Choose your skills");

    // const enabledButtonClass = "submit-button-enabled";
    // const disabledButtonClass = "submit-button-disabled";

    const validate = () => {
        return inputs.username && inputs.email && inputs.pass && mySkills!=="Choose your skills";
      };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSelect = (event) => {
        setMySkills(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        // if (validate()) {
        //     document.getElementById("submit").style.backgroundColor = "green";
        // }
    }

    // const isFormValid = Object.values(inputs).every((value) => value !== "");

    // const buttonClass = classnames({
    //     [enabledButtonClass]: isFormValid,
    //     [disabledButtonClass]: !isFormValid,
    //   });

    return (
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <input
                  type = "text"
                  name = "username"
                  placeholder="Name"
                  id = "field"
                  value = {inputs.username || ""}
                  onChange = {handleChange}
                />
            </div>
            <div className="form-field">
                <input
                  type = "text"
                  name = "email"
                  id = "field"
                  placeholder="Email Address"
                  value = {inputs.email || ""}
                  onChange = {handleChange}
                />
            </div>
            <div className="form-field">
                <input
                  type = "password"
                  name = "pass"
                  id = "field"
                  placeholder="Password"
                  value = {inputs.pass || ""}
                  onChange = {handleChange}
                />
            </div>
            <div className="form-field">
            <select value = {mySkills || ""} onChange={handleSelect} id="options">
                <option default disabled>Choose your skills</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JS">JS</option>
            </select>
            </div>
            <div className="form-field">
            <button type = "submit" disabled={!validate()} id="submit" style={{ backgroundColor: validate() === true ? "#37CC8A" : validate() === false ? "#B5B5B5" : ""}}>CLAIM YOUR FREE TRIAL</button>
            </div>
            <p className="para">By clicking the button you are agreeing to our <span className="spa">Terms and Services</span></p>
        </form>
        </div>
    )
    }

export default MyForm;