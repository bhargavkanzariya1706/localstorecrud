const StudentList=({studentList, onEdit, onDelete})=>{
    return(
        <div>
            <table border={2} cellSpacing={1} cellPadding={4} width={800}   >
                    
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>MobileNo</th>
                        <th scope='col'>Gender</th>
                        <th scope='col'>Hobbies</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                    
                <tbody>
                    {
                            studentList.map((data,i)=>{
                                return(
                                    
                                    <tr key={i}>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.mobileNo}</td>
                                        <td>{data.gender}</td>
                                        <td>{data.hobbies}</td>
                                        <td><button onClick={()=>onEdit(data.id)}>Edit</button><button onClick={()=>onDelete(data.id)}>Delete</button></td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default StudentList;