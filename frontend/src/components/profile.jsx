import './profile.css'

function Profile(){
    return <>
        <div className='page-header'>
            <p className='head'>STUDENT INFO</p>
            <h1>My Profile</h1>
            <p>View and manage your personal, academics and contact details.</p>
        </div>
        <div className='main-content'>
            <div className='profile-hero'>
                <div className='p-photo'>U</div>
                <div className='p-info'>
                    <h2 className='s-firstname'>Ujjwal</h2>
                    <div className='branch'>
                        <span>CSE-AIML <b>&#183;</b> 3rd Semester</span>

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