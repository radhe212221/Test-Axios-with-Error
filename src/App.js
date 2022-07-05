import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

export default function App() {
  const [a, seta] = useState([]);
  const [err, seterr] = useState();
  const boot = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/userts')
      .then((d) => seta(d.data))
      .catch((e) => seterr(e));
  };

  useEffect(boot, []);
  return (
    <div>
      <mark>{JSON.stringify(err)}</mark>
      <h1>Total : {a?.length}</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {a?.map((x) => (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.username}</td>
              <td>{x.email}</td>
              <td>{x.phone}</td>
              <td>{JSON.stringify(x.address)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
