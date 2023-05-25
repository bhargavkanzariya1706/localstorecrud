import React, { useState } from "react";
import StudentForm from "./components/student/StudentForm";
import StudentList from "./components/student/StudentList";

export default function Crudlocal() {

    
  const [studentList, setStudentList] = useState([]);
  const [editStudentData, setEditSyudentData] = useState({});
  const [showAddEdit, setShowAddEdit] = useState(false);

  const addStudent = (studentDetails) => {

    if (!studentDetails.id) {
      setStudentList([
        { ...studentDetails, id: studentList.length + 1 },
        ...studentList,
      ]);
      alert("Student added successful");
    } else {
      const filterList = studentList.filter((s) => s.id !== studentDetails.id);
      filterList.unshift(studentDetails);
      setStudentList(filterList);
      setEditSyudentData({});
      alert("Student update successful");
    }
    setShowAddEdit(false);
  };

  const onEdit = (id) => {

    setEditSyudentData(studentList.find((s) => s.id === id));
    setShowAddEdit(true);
  };

  const onDelete = (id) => {

    setStudentList(studentList.filter((s) => s.id !== id));
  };

  return (
    <div>
      {showAddEdit ? (
        <StudentForm
          onAddStudent={addStudent}
          editStudent={editStudentData}
        ></StudentForm>
      ) : (
        <button onClick={() => setShowAddEdit(true)}>Add Student</button>
      )}
      <StudentList
        studentList={studentList}
        onEdit={onEdit}
        onDelete={onDelete}
      ></StudentList>
    </div>
  );
}
