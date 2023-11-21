import React from 'react'

const StudentsView = () => {

    const[students, setStudents] = useState([]); // students is the state variable, setStudents is the function that updates the state variable
  return (
    <section>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Faculty</th>
                <th>Actions</th>
            </tr>
        </thead>
        {students.map((student,index) =>(
            <tr key={student.id}>
                <th scope='row'key={index}>
                    {index + 1}
                </th>
                <td>{student.firstName}</td>
                <td>{student.LastName}</td>
                <td>{student.email}</td>
                <td>{student.faculty}</td>            
                <td>View</td>
                <td>Update</td>
                <td>Delete</td>
            </tr>
        ))}
        <tbody>
            
        </tbody>
      </table>
    </section>
  )
}

export default StudentsView
