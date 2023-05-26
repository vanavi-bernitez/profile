import React, { useState } from "react";
import "./App.css";
import selfie from "./images/icon.png";

const App = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleName = (event) => {
    if (isNaN(event.target.value)) {
      setName(event.target.value);
    }
    console.log(name);
  };

  const handleLastName = (event) => {
    if (isNaN(event.target.value)) {
      setLastName(event.target.value);
    }
    console.log(lastName);
  };

  const handleEmail = (event) => {
    if (isNaN(event.target.value)) {
      setEmail(event.target.value);
    }
    console.log(email);
  };

  const handlePhone = (event) => {
    if (!isNaN(event.target.value)) {
      setPhone(event.target.value);
    }
    console.log(phone);
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
    console.log(address);
  };

  const handleCity = (event) => {
    if (isNaN(event.target.value)) {
      setCity(event.target.value);
    }
    console.log(city);
  };

  const handleState = (event) => {
    if (isNaN(event.target.value)) {
      setState(event.target.value);
    }
    console.log(state);
  };

  const handleZipcode = (event) => {
    if (!isNaN(event.target.value)) {
      setZipcode(event.target.value);
    }
    console.log(zipcode);
  };

  const handleCountry = (event) => {
    if (isNaN(event.target.value)) {
      setCountry(event.target.value);
    }
    console.log(country);
  };

  const handlePassword = (event) => {
    if (password.length < 6) {
      setErrorMessage("Enter at least 6 characters");
      setPassword(event.target.value);
    } else {
      setErrorMessage("");
      setPassword(event.target.value);
    }
  };

  return (
    <div className="profile">
      <div className="imgIcon" >
        <img
          style={{ width: "100px", borderRadius: "50%"}}
          src={selfie}
          alt="photo"
        />
      </div>
      <div className="names double" style={{ display: "flex" }}>
        <div className="firstName label">
          <label htmlFor="firstNameIn">Fast Name</label>
          <input className="shortInput" id="firstNameIn" value={name} onChange={handleName} />
        </div>
        <div className="lastName label">
          <label htmlFor="lastNameIn">Last Name</label>
          <input className="shortInput" id="lastNameIn" value={lastName} onChange={handleLastName} />
        </div>
      </div>
      <div className="email label">
        <label htmlFor="emailIn">Email</label>
        <input className="largeInput" id="emailIn" value={email} onChange={handleEmail} />
      </div>

      <div className="number label">
        <label htmlFor="numberIn">Contacts Number</label>
        <input className="largeInput" id="numberIn" value={phone} onChange={handlePhone} />
      </div>

      <div className="adress label">
        <label htmlFor="addressIn">Address</label>
        <input className="largeInput" id="addressIn" value={address} onChange={handleAddress} />
      </div>

      <div className="cityState double">
        <div className="city label">
          <label htmlFor="cityIn">City</label>
          <input className="shortInput" id="cityIn" value={city} onChange={handleCity} />
        </div>
        <div className="state label">
          <label htmlFor="stateIn">State</label>
          <input className="shortInput" id="stateIn" value={state} onChange={handleState} />
        </div>
      </div>

      <div className="zipCountry double">
        <div className="zipCode label">
          <label htmlFor="zipcodeIn">Zip code</label>
          <input className="shortInput" id="zipcodeIn" value={zipcode} onChange={handleZipcode} />
        </div>
        <div className="country label">
          <label htmlFor="countryIn">Country</label>
          <input className="shortInput" id="countryIn" value={country} onChange={handleCountry} />
        </div>
      </div>

      <div className="password label">
        <label htmlFor="passwordIn">Password</label>
        <input
          className="largeInput"
          type="password"
          id="passwordIn"
          value={password}
          onChange={handlePassword}
        />
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default App;
