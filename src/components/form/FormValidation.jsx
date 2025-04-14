import React, { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Name: ', formData.name);
    console.log('Email: ', formData.email);
    console.log('Password: ', formData.password);

    setFormData({
      name: '',
      email: '',
      password: ''
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col gap-4 w-fit">
          <label>Name</label>
          <input
            className='border rounded-sm'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChanges}
          />
          <label>Email</label>
          <input
          className='border rounded-sm'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChanges}
          />
          <label>Password</label>
          <input
          className='border rounded-sm'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChanges}
          />
          <button className='border rounded-sm px-2 py-1' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormValidation;
