import './profile.css'

function Profile() {
    return <>
        <p className='head'>STUDENT INFO</p>
        <div className='page-header'>
            <h1>My Profile</h1>
            <p>View and manage your personal, academics and contact details.</p>
        </div>
        <div className='main-content'>
            <div className='profile-hero'>
                <div className='np'>
                    <div className='p-photo'>U</div>
                    <div className='p-info-txt'>
                        <h1 className='s-firstname'>Ujjwal</h1>
                        <div className='branch'>
                            <span>CSE-AIML <b>&#183;</b> 3rd Semester</span>

                        </div>
                    </div>
                </div>
                <div className='student-stats'>
                    <div className='s-stats'>
                        <div className='d'>
                            9.34
                        </div>
                        <div className='l'>
                            CGPA
                        </div>

                    </div>
                    <div className='s-stats'>
                        <div className='d'>
                            87%
                        </div>
                        <div className='l'>
                            Attendance

                        </div>

                    </div>
                    <div className='s-stats'>
                        <div className='d'>
                            3
                        </div>
                        <div className='l'>
                            Semester
                        </div>

                    </div>
                </div>
            </div>
            <div className='grids'>
                <div className='p-info'>
                    <div className='g-title'>
                        Personal Information
                    </div>
                    <div className='i-grid'>
                        <div className='i-row'>
                            <span className='i-key'>Full Name</span>
                            <span className='i-val'>Ujjwal</span>
                        </div>
                        <div className='i-row'>
                            <span className='i-key'>Date of Birth</span>
                            <span className='i-val'>07-11-2006</span>
                        </div>
                        <div className='i-row'>
                            <span className='i-key'>Gender</span>
                            <span className='i-val'>Male</span>
                        </div>
                        <div className='i-row'>
                            <span className='i-key'>Nationality</span>
                            <span className='i-val'>Indian</span>
                        </div>
                        <div className='i-row'>
                            <span className='i-key'>Blood Group</span>
                            <span className='i-val'>B-</span>
                        </div>
                        <div className='i-row'>
                            <span className='i-key'>Aadhar No.</span>
                            <span className='i-val'>6131 6842 5075</span>
                        </div>
                        <div className='i-row'>
                            <span className='i-key'>Category</span>
                            <span className='i-val'>General</span>
                        </div>
                        <div className='i-row'>
                            <span className='i-key'>Religion</span>
                            <span className='i-val'>Hindu</span>
                        </div>
                    </div>
                </div>

                <div className='a-info'>
                    <div className='g-title'>
                        Academic Information
                    </div>
                    <div className='i-grid'>
                        <div className='i-row'>
                            <span className='i-key'>Roll No.</span>
                            <span className='i-val'>2510993689</span>
                        </div>
                        <div className='i-row'>
                            <span className='i-key'>Department</span>
                            <span className='i-val'>CSE - Aiml</span>
                        </div>
                        <div className='i-row'>
                            <span className='i-key'>Semester</span>
                            <span className='i-val'>3 sem</span>
                        </div>
                        <div className='i-row'>
                            <span className='i-key'>Batch</span>
                            <span className='i-val'>2025</span>
                        </div>
                        <div className='i-row'>
                            <span className='i-key'>Mentor</span>
                            <span className='i-val'>Ms Lakshita</span>
                        </div>
                        <div className='i-row'>
                            <span className='i-key'>Admission Type</span>
                            <span className='i-val'>Offline</span>
                        </div>
                    </div>
                </div>

                <div className='c-info'>
                    <div className='g-title'>
                        Contact Information
                    </div>
                    <div className='i-grid'>
                        <div className='i-row'>
                            <span className='i-key'>Personal Email</span>
                            <span className='i-val'>ujjwalgandhi@example.com</span>
                        </div>
                        <div className='i-row'>
                            <span className='i-key'>University Email</span>
                            <span className='i-val'>ujjwalgandhi@university.com</span>
                        </div>
                        <div className='i-row'>
                            <span className='i-key'>Mobile</span>
                            <span className='i-val'>999XXXXXXX</span>
                        </div>
                        <div className='i-row'>
                            <span className='i-key'>Address</span>
                            <span className='i-val'>Bawani Khera,Bhiwani,Haryana</span>
                        </div>
                    </div>
                </div>

                <div className='g-info'>
                    <div className='g-title'>
                        Guardian Information
                    </div>
                    <div className='i-grid'>
                        <div className='i-row'>
                            <span className='i-key'>Father's Name</span>
                            <span className='i-val'>Mukesh Kumar</span>
                        </div>
                        <div className='i-row'>
                            <span className='i-key'>Mother's Name</span>
                            <span className='i-val'>Kiran Bala</span>
                        </div>
                        <div className='i-row'>
                            <span className='i-key'>Father's Mobile</span>
                            <span className='i-val'>999XXXXXXX</span>
                        </div>
                        <div className='i-row'>
                            <span className='i-key'>Mother's Mobile</span>
                            <span className='i-val'>999XXXXXXX</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>
}

export default Profile;