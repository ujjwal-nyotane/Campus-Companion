import './dashboard.css';
import {Link} from 'react-router-dom';
const hero = (
    <>
    <p className='head'>DASHBOARD</p>
    <div className="hero">
        
        <div className="greetings">
            
            <h1>Good Morning,Ujjwal</h1>
            <p>Here's what's happening with your academics today.</p>
        </div>
        <div className="details">
            <h3>Semeter 3</h3>
            <h3>Year 2</h3>
            <p>Batch 2025-29</p>
            <p>Roll no: 2510993689</p>
        </div>
    </div>
    </>
)
const quickdetails=(
    <div className='quickdetails'>
        <div>
            <h2>89%</h2>
            <h3>Attendance</h3>
            
        </div>
        <div>
            
            <h2>9.76</h2>
            <h3>CGPA</h3>
        </div>
        <div>
           
            <h2>₹175000</h2>
             <h3>Fees Pending</h3>
        </div>
        <div>
            
            <h2>23-08-2026</h2>
            <h3>Upcoming Exam</h3>
        </div>
    </div>
)

const quickaccess = (
    <div className='quickaccess'>
        <div>
            <h3>Attendance</h3>
            <p>Track your Attendance Subject Wise</p>
        </div>
        <div>
            <h3>Result</h3>
            <p>Check your Academic Perfomance</p>
        </div>
        <div>
            <h3>Fees Portal</h3>
            <p>Quick pay your Fees</p>
        </div>
        <div>
            <h3>My Info</h3>
            <p>View your Information</p>
        </div>
    </div>
)
const notices = (
    <>
        <h2 className='noticeheading'>Notices</h2>
        <div className='notices'>
            <div>
                <h3>BE CSE-AIML & AIFT Batch 2025 : Evaluation Criteria for Coding Subjects</h3>
                <p>Dear students
Please find attached the Evaluation Criteria for your Coding Subjects.</p>
            </div>
            <div>
                <h3>
Datesheet of Reappear External Lab Viva Batch 2024, Entrepreneurship 101 (24UNI012), August 2026</h3>
                <p>Datesheet of Reappear External Lab Viva Batch 2024, Entrepreneurship 101 (24UNI012), August 2026

</p>
            </div>
            <div>
                <h3>Inner Engineering with Sadhguru</h3>
                <p>Dear All,

The Office of Student Life, Chitkara University, invites students to participate in Inner Engineering with Sadhguru from 8th September to 15th September.

Participants will learn Shambhavi Mahamudra Kriya, conducted by a trained teacher from the Isha Foundation.

Limited seats available. Students interested in participating are requested to register using the QR code provided in the poster.

For queries:
Akinchan: +91 6239711492
Khushank: +91 8708955450</p>
            </div>
            <div className='viewmore'>
                <Link>View More</Link>
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