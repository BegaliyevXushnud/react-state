import React, { useState } from 'react';

const PeopleTable = () => {
  const [people] = useState([
    { ID: 1, FirstName: 'John', LastName: 'Smith', Age: 45, Dept_number: 100, City: 'Chicago', State: 'IL', Salary: 1000 },
    { ID: 2, FirstName: 'Jane', LastName: 'Doe', Age: 25, Dept_number: 100, City: 'Phoenix', State: 'AZ', Salary: 5000 },
    { ID: 3, FirstName: 'Mary', LastName: 'Smith', Age: 40, Dept_number: 200, City: 'Chicago', State: 'IL', Salary: 2500 },
    { ID: 4, FirstName: 'George', LastName: 'Edwards', Age: 50, Dept_number: 300, City: 'Phoenix', State: 'AZ', Salary: 3000 },
    { ID: 5, FirstName: 'Mary', LastName: 'Eva', Age: 14, Dept_number: 300, City: 'Phoenix', State: 'AZ', Salary: 3000 },
    { ID: 6, FirstName: 'Asta', LastName: 'Yuno', Age: 15, Dept_number: 300, City: 'Phoenix', State: 'AZ', Salary: 3000 }
  ]);

  const adults = people.filter(person => person.Age > 18);

  return (
    <div>
        <h1>Task-2</h1>
      <h2>People Older Than 18</h2>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Dept Number</th>
            <th>City</th>
            <th>State</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {adults.map(person => (
            <tr key={person.ID}>
              <td>{person.ID}</td>
              <td>{person.FirstName}</td>
              <td>{person.LastName}</td>
              <td>{person.Age}</td>
              <td>{person.Dept_number}</td>
              <td>{person.City}</td>
              <td>{person.State}</td>
              <td>{person.Salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PeopleTable;
