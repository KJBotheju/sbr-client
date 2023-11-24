import React, { useEffect,useState } from 'react'
import axios from "axios";
import {FaTrashAlt,FaEdit,FaEye} from "react-icons/fa"
import { Link } from 'react-router-dom';

const StudentsView = () => {

    const[students, setStudents] = useState([]); // students is the state variable, setStudents is the function that updates the state variable
    
    useEffect(()=>{
        loadStudents();
    },[])
    
    const loadStudents = async()=>{
    const result = await axios.get(
        "http://localhost:8080/students",
        {
            validateStatus: () => {
                return true;
            },
        }
        );
        if(result.status === 302){
            setStudents(result.data);
        }
        
  };
    return (
    <section>
      <table className = "table table-bordered table-hover">
        <thead>
            <tr className="text-center">
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Faculty</th>
                <th colSpan="3">Actions</th>
            </tr>
        </thead>
        
        <tbody className='text-center'>
        {students.map((student,index) =>(
            <tr key={student.id}>
                <th scope='row'key={index}>
                    {index + 1}
                </th>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.faculty}</td>            
                <td className='mx-2'>
                    <Link to={`/student-profile/${student.id}`} className='btn btn-info'>
                    <FaEye />
                    </Link>
                </td>
                <td className='mx-2'>
                    <Link to={`/edit-student/${student.id}`} className='btn btn-warning'>
                    <FaEdit />
                    </Link>
                </td>
                <td className='mx-2'>
                    <button className='btn btn-danger'>
                    <FaTrashAlt />
                    </button>
                </td>
            </tr>
        ))}
        </tbody>
      </table>
    </section>
  )
}

export default StudentsView
