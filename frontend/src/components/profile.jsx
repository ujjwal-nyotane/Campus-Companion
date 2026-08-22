import './profile.css'

function Profile() {
    return <>
        <div className='page-header'>
            <p className='head'>STUDENT INFO</p>
            <h1>My Profile</h1>
            <p>View and manage your personal, academics and contact details.</p>
        </div>
        <div className='main-content'>
            <div className='profile-hero'>
                <div className='np'>
                    <div className='p-photo'>U</div>
                    <div className='p-info'>
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

            <div className='info'>

            </div>

            <div className='edit-section'>

            </div>

            <div className='password-form'>

            </div>

            <div className='buttons'>

            </div>
        </div>

    </>
}

export default Profile;