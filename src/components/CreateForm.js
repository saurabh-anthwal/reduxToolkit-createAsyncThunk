import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../redux/features/userDetailSlice";

const CreateForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: 0,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(formData));
    navigate("/show");
  };

  return (
    <div className="flex justify-center bg-slate-50 py-10">
      <form onSubmit={handleSubmit}>
        <label>Name: </label>{" "}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Email: </label>{" "}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Age: </label>{" "}
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />
          Male
        </label>
        <label className="mx-10">
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />
          female
        </label>
        <br />
        <br />
        <input type="submit" className="text-gray-700 px-2 bg-gray-200" />
      </form>
    </div>
  );
};

export default CreateForm;
