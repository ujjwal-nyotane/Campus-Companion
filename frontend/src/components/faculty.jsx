import './faculty.css'

function F_dashboard() {
    return <div className='main'>
        <h1 class="head">FACULTY DASHBOARD</h1>
        <div className='f-grid'>
            <div class="card">
                <h3 class="card-title">Leaves Requests</h3>
                <div className='l-div'>
                <table class="leave-table">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Department</th>
                            <th>Roll Number</th>
                        </tr>
                    </thead>
                    <tbody class="leave-body">
                        <tr>
                            <td>Ujjwal</td>
                            <td>CSE-AIML</td>
                            <td>2510993689</td>
                        </tr>
                        <tr>
                            <td>Ujjwal</td>
                            <td>CSE-AIML</td>
                            <td>2510993797</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>

            <div class="card">
                <h3 class="card-title">Attendance Records</h3>
                <div className='a-div'>
                    <table class="att-table">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Department</th>
                                <th>Roll Number</th>
                                <th>Subject</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody class="att-s">
                            <tr>
                                <td>Ujjwal</td>
                                <td>CSE-AIML</td>
                                <td>2510993689</td>
                                <td>Front End Engineering</td>
                                <td>90%</td>
                            </tr>
                            <tr>
                                <td>Ujjwal Nyotane</td>
                                <td>CSE-AIML</td>
                                <td>2510993797</td>
                                <td>Front End Engineering</td>
                                <td>95%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    </div>



}


export default F_dashboard;