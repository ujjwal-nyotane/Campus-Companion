import "./timetable.css"


function Timetable(){
    return <div className="timetable">
    <p className="head">TIMETABLE</p>
    <div className="tt-hero">
        <div className="tt-w">
            <h3 className="card-title">Weekly Timetable</h3>
            <div className="tt-weekly">
                <table className="tt-table">
                    <thead>
                        <tr>
                            <th>Lecture</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Lecture 1</th>
                            <td>Database Management System</td>
                            <td>Object Oriented Programming</td>
                            <td>Front End Engineering</td>
                            <td>Statistics and Data Engineering</td>
                            <td>Database Management System</td>
                        </tr>
                        <tr>
                            <th>Lecture 2</th>
                            <td>Database Management System</td>
                            <td>Object Oriented Programming</td>
                            <td>Front End Engineering</td>
                            <td>Statistics and Data Engineering</td>
                            <td>Database Management System</td>
                        </tr>
                        <tr>
                            <th>Lecture 3</th>
                            <td>Object Oriented Programming</td>
                            <td>Statistics and Data Engineering</td>
                            <td>Free</td>
                            <td>Front End Engineering</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <th>Lecture 4</th>
                            <td>Object Oriented Programming</td>
                            <td>Statistics and Data Engineering</td>
                            <td>Free</td>
                            <td>Front End Engineering</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <th>Break</th>
                            <th>Break</th>
                            <th>Break</th>
                            <th>Break</th>
                            <th>Break</th>
                            <th>Break</th>
                            
                        </tr>
                        <tr>
                            <th>Lecture 5</th>
                            <td>Front End Engineering</td>
                            <td>Free</td>
                            <td>Object Oriented Programming</td>
                            <td>Object Oriented Programming</td>
                            <td>Object Oriented Programming</td>
                            
                        </tr>
                        <tr>
                            <th>Lecture 6</th>
                            <td>Front End Engineering</td>
                            <td>Free</td>
                            <td>Object Oriented Programming</td>
                            <td>Object Oriented Programming</td>
                            <td>Object Oriented Programming</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    
    </div>

}

export default Timetable