import './dashboard.css'
const hero = (
    <>
    <h4 className='pagename'>Dashboard</h4>
    <div className="hero">
        
        <div className="greetings">
            
            <h1>Good Morning,Ujjwal</h1>
            <p>Here's what's happening with your academics today.</p>
        </div>
        <div className="details">
            <h3>Semeter 3</h3>
            <h3>Year 2</h3>
            <h4>Batch 2025-29</h4>
            <h4>Roll no: 2510993689</h4>
        </div>
    </div>
    </>
)
const quickdetails=(
    <div className='quickdetails'>
        <div>
            <h3>Attendance</h3>
            <h2>89%</h2>
        </div>
        <div>
            <h3>CGPA</h3>
            <h2>9.76</h2>
        </div>
        <div>
            <h3>Fees Pending</h3>
            <h2>₹175000</h2>
        </div>
        <div>
            <h3>Upcoming Exam</h3>
            <h2>Oops on 23-08-2026</h2>
        </div>
    </div>
)

const quickaccess = (
    <div className='quickaccess'>
        <div>
            <h3>Attendance</h3>
            <h5>Track your Attendance Subject Wise</h5>
        </div>
        <div>
            <h3>Result</h3>
            <h5>Check your Academic Perfomance</h5>
        </div>
        <div>
            <h3>Fees Portal</h3>
            <h5>Quick pay your Fees</h5>
        </div>
        <div>
            <h3>My Info</h3>
            <h5>View your Information</h5>
        </div>
    </div>
)
const notices = (
    <>
        <div className='notices'>
            <div>
                <h2>Heading</h2>
                <h5>Context</h5>
            </div>
        </div>
    </>
)
function Dashboard() {
    return (
        <>
        {hero}
        {quickdetails}
        {quickaccess}
        {notices}
        </>

    )
}
export default Dashboard