import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const CrudAxios = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [editUserId, setEditUserId] = useState(null);

  // Read - GET
  const fetchUsers = async () => {
    const res = await axios.get(API_URL);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Create - POST
  const addUser = async () => {
    const res = await axios.post(API_URL, newUser);
    setUsers([res.data, ...users]);
    setNewUser({ name: "", email: "" });
  };

  // Update - PUT
  const updateUser = async (id) => {
    const res = await axios.put(`${API_URL}/${id}`, newUser);
    setUsers(users.map((user) => (user.id === id ? res.data : user)));
    setEditUserId(null);
    setNewUser({ name: "", email: "" });
  };

  // Delete - DELETE
  const deleteUser = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">CRUD with Axios</h1>

      <input
        className="border p-2 mr-2"
        placeholder="Name"
        required
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        className="border p-2 mr-2"
        placeholder="Email"
        required
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      {editUserId ? (
        <button onClick={() => updateUser(editUserId)} className="bg-blue-500 text-white px-3 py-1 rounded">
          Update
        </button>
      ) : (
        <button onClick={addUser} className="bg-green-500 text-white px-3 py-1 rounded">
          Add
        </button>
      )}

      <ul className="mt-6">
        {users.map((user) => (
          <li key={user.id} className="border-b py-2 flex justify-between items-center">
            <div>
              <strong>{user.name}</strong> - {user.email}
            </div>
            <div className="space-x-2">
              <button
                onClick={() => {
                  setEditUserId(user.id);
                  setNewUser({ name: user.name, email: user.email });
                }}
                className="bg-yellow-400 px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteUser(user.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudAxios;
