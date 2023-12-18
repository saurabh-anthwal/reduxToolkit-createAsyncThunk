import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserApi,
  showUserApi,
  updateUserApi,
} from "../redux/features/userDetailSlice";

const ShowUserData = () => {
  const dispatch = useDispatch();
  const [editState, setEditState] = useState(false);
  const [formData, setFormData] = useState({});
  const { users, loading } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(showUserApi());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemove = (item) => {
    dispatch(deleteUserApi(item));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(updateUserApi(formData));
  };

  const handleEdit = (item) => {
    setEditState(true);
    setFormData({
      id: item.id,
      name: item.name,
      email: item.email,
      age: item.age,
    });
  };

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {editState && (
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
      )}
      <h1>All User</h1>
      {users &&
        users.map((el) => (
          <div key={el.id} className="bg-gray-100 m-5 p-5">
            <div>
              <h1>Name : {el.name}</h1>
              <h2>Email : {el.email}</h2>
              <h3>Age : {el.age}</h3>
              <div className="flex justify-between mt-5">
                <button
                  onClick={() => {
                    handleEdit(el);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    handleRemove(el);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ShowUserData;
