import "./grades.css";
import { useState } from "react";

function Grades() {
  const [search, setSearch] = useState("");

  const id = localStorage.getItem("id");
  const students = JSON.parse(
    localStorage.getItem("data") || "{}"
  );

  const student = students[id];

  if (!student) {
    return <p>Please log in again.</p>;
  }

  const grades = student.grades || [];  

  const filteredGrades = grades.filter((item) =>
    item.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <h1>My Grades</h1>

      <p>Student: {student.Name}</p>
      <p>Roll Number: {student.Roll_No}</p>

      <input
        type="text"
        placeholder="Search subject..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>Academic Results</h2>

      {filteredGrades.length === 0 ? (
        <p>No subjects found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Internal</th>
              <th>External</th>
              <th>Total</th>
              <th>Grade</th>
              <th>Result</th>
            </tr>
          </thead>

          <tbody>
            {filteredGrades.map((item, index) => (
              <tr key={index}>
                <td>{item.subject}</td>
                <td>{item.internal}</td>
                <td>{item.external}</td>
                <td>{item.total}</td>
                <td>{item.grade}</td>
                <td>{item.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Grades;
