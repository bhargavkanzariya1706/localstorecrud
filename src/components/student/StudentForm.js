import { useState, useEffect } from "react";

const initState = {

  name: "",
  email: "",
  mobileNo: "",
  gender: "",
  hobbies: "",

}

const StudentForm = ({onAddStudent, editStudent}) => {

  const [studentDetails, setStudentDetails] = useState(initState);
  const [error, setError] = useState([]);

  useEffect(() => {
    setStudentDetails(editStudent);
  }, [editStudent])

  const onDetailsChange = (field, name) => {
    setStudentDetails({ ...studentDetails, [field]: name });
    setError(error.filter(e=>e!=field));
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    const { mobileNo } = studentDetails;
    let tempError = [];
    if (!mobileNo || mobileNo < 10) tempError.push("mobileNo");
    ['name', 'gender', 'hobbies', 'email'].find((f) => {
      if (!studentDetails[f]) tempError.push(f);
    });
    if (tempError.length) {
      setError(tempError);
      return;
    }else setError([]);
    onAddStudent(studentDetails);
    setStudentDetails(initState);
  };

  return (
    <div className="card">
      <h2 className="h2">Student form</h2>
      <hr />
      <div>
        <form onSubmit={SubmitHandler}>
          <label htmlFor="name" className={error.includes('name')?'error':''}>StudentName:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Student Name"
            onChange={(e) => onDetailsChange("name", e.target.value)}
            value={studentDetails.name}
          />
          <br />
          <br />
          <label htmlFor="email" className={error.includes('email')?'error':''}>Email:</label>
          <input
            type="text"
            name="email"
            placeholder="Enter Student Email"
            onChange={(e) => onDetailsChange("email", e.target.value.toLowerCase())}
            value={studentDetails.email}
          />
          <br />
          <br />
          <label htmlFor="mobileNo" className={error.includes('mobileNo')?'error':''}>MobileNo:</label>
          <input
            type="number"
            name="mobileNo"
            placeholder="Enter Student MobileNo"
            onChange={(e) => onDetailsChange("mobileNo", e.target.value)}
            value={studentDetails.mobileNo}
          />
          <br />
          <br />
          <label htmlFor="gender" className={error.includes('gender')?'error':''}>Gender:</label>
          <select onChange={(e) => onDetailsChange("gender", e.target.value)} value={studentDetails.gender}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <br />
          <label htmlFor="hobbies" className={error.includes('hobbies')?'error':''}>Hobbies:</label>
          <input
            type="text"
            name="hobbies"
            placeholder="Enter Student Hobbies"
            onChange={(e) => onDetailsChange("hobbies", e.target.value)}
            value={studentDetails.hobbies}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default StudentForm;
