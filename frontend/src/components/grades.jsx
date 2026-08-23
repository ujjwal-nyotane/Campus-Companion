import './grades.css';
function Grades(){
    return (
        <div className='grades'>
            <h2 className='head'>Grades</h2>
            <div className='gradeshero'>
                <div>
                    <h2>9.86</h2>
                    <h3>CGPA</h3>
                </div>
                <div>
                    <h2>9.56</h2>
                    <h3>SGPA</h3>
                    
                </div>
            </div>
            <div className='select-semester'>
                <div>Semester 1</div>
                <div>Semester 2</div>
                <div>Semester 3</div>
                
            </div>
            <div className='gradeandmarks'>
            <table className='markstable'>
                <thead>
                    <tr>
                        <th>
                            Subject
                        </th>
                        <th>
                            Type
                        </th>
                        <th>
                            MO
                        </th>
                        <th>
                            MM
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            DBMS
                        </td>
                        <td>
                            PE-1
                        </td>
                        <td>
                            21
                        </td>
                        <td>
                            25
                        </td>
                    </tr>
                    <tr>
                        <td>
                            OPPS
                        </td>
                        <td>
                            CE-1
                        </td>
                        <td>
                            18
                        </td>
                        <td>
                            20
                        </td>
                    </tr>
                    <tr>
                        <td>
                            OPPS
                        </td>
                        <td>
                            CE-2
                        </td>
                        <td>
                            22
                        </td>
                        <td>
                            25
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Stats                        
                        </td>
                        <td>
                            ST-1
                        </td>
                        <td>
                            25
                        </td>
                        <td>
                            30
                        </td>
                    </tr>
                </tbody>
            </table>
        
        <table className='gradecard'>
            <thead>
                    <tr>
                        <th>
                            Code
                        </th>
                        <th>
                            Subject
                        </th>
                        <th>
                            Credit
                        </th>
                        <th>
                            Grade
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            24CSE0102
                        </td>
                        <td>
                            Fundamentals of C Programming
                        </td>
                        <td>
                            4.00
                        </td>
                        <td>
                            A+
                        </td>
                    </tr>
                    <tr>
                        <td>
                            24CSE0105
                        </td>
                        <td>
                            Foundations of AI Algorith
                        </td>
                        <td>
                            3.00
                        </td>
                        <td>
                            A
                        </td>
                    </tr>
                    <tr>
                        <td>
                            24CSE0107
                        </td>
                        <td>
                            Front End Engineering I
                        </td>
                        <td>
                            3.00
                        </td>
                        <td>
                            A+
                        </td>
                    </tr>
                    <tr>
                        <td>
                            24CSE0104
                        </td>
                        <td>
                            Operating System and Linux Fundamentals
                        </td>
                        <td>
                            3.00
                        </td>
                        <td>
                            0
                        </td>
                    </tr>
                    <tr >
                        <td className='SGPA' colSpan={3}>
                            SGPA
                        </td>
                        <td>9.45</td>
                    </tr>
                </tbody>
        </table>
        </div>
        </div>
    )
}
export default Grades;