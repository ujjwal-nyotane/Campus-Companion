import { useState } from 'react';
import './css/attendance.css';
import { useAuth } from '../context/AuthContext.jsx';
import { useCampus } from '../context/CampusContext.jsx';
import { CheckCircle2, PlusCircle, Calendar,ChevronLeft,ChevronRight } from 'lucide-react';



function Attendance() {
    const { user } = useAuth();
    const { leaveRequests, applyLeave, attendanceDataState } = useCampus();
    const studentName = user?.Name || 'Ujjwal';
    const rollNo = user?.id || '2510993689';

    // Controlled Form State for Student Leave Application
    const [formData, setFormData] = useState({
        reason: '',
        startDate: '',
        endDate: '',
        leaveType: 'Medical'
    });
    const [date,setDate] = useState(new Date());
    const [selectedsubject,setSelectedsubject] = useState("Database Management System"); 
    const generateCalendarDays = ()=>{

        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        const calendarDays = [];
        for (let i = 0; i < firstDay; i++) {
            calendarDays.push(<div key={`empty-${i}`} className="empty-day"></div>);
        }
        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = new Date(date.getFullYear(), date.getMonth(), day).toLocaleDateString('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric' });
            const status = attendanceDataState?.[user?.id]?.[selectedsubject]?.[dateStr] || '';
            calendarDays.push(<div key={`day-${day}`} className={"day-cell " + status}> {day}</div>);
        }
        return calendarDays;

        };

    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validate = () => {
        const errors = {};
        if (!formData.reason.trim()) {
            errors.reason = 'Reason for leave is required.';
        } else if (formData.reason.trim().length < 10) {
            errors.reason = 'Please explain in at least 10 characters.';
        }
        if (!formData.startDate) {
            errors.startDate = 'Start date is required.';
        }
        if (!formData.endDate) {
            errors.endDate = 'End date is required.';
        }
        if (formData.startDate && formData.endDate && formData.startDate > formData.endDate) {
            errors.endDate = 'End date cannot be before start date.';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }));
        if (successMessage) setSuccessMessage('');
    };

    const handleLeaveSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        applyLeave({
            studentName,
            rollNo,
            department: user?.dept || 'CSE-AIML',
            reason: `${formData.leaveType}: ${formData.reason.trim()}`,
            startDate: formData.startDate,
            endDate: formData.endDate
        });

        setSuccessMessage('Leave application submitted! Faculty mentor has received your request.');
        setFormData({
            reason: '',
            startDate: '',
            endDate: '',
            leaveType: ''
        });
        setFormErrors({});
    };

    const calculateclasses = (subject,present) => {
        const subjectData = attendanceDataState?.[user?.id]?.[subject] || {};
        console.log("Subject Data:", subjectData,subject);
        if(subject === undefined || subject === null) {
            const data = attendanceDataState?.[user?.id] || {};
            const count = Object.keys(data).reduce((total, sub) => {
                const subData = data[sub] || {};
                if(present === true){
                    return total + Object.values(subData).filter(status => status != 'Absent').length;
                }
                return total + Object.keys(subData).length;
            }
            , 0);
            return count;
                
        }
        if(present === true){
          
            return Object.values(subjectData).filter(status => status != 'Absent').length;
        }
        return Object.keys(subjectData).length;
    };
    

    // Filter leaves submitted by this student
    const myLeaves = leaveRequests.filter(l => l.rollNo === String(rollNo) || l.studentName.includes('Ujjwal'));

    return (
        <div className="attendance-page-container">
            {/* Hero Metrics */}
            <div className="attendancehero">
                <div className="att-metric-box">
                    <h2>{
                        calculateclasses()
                    }</h2>
                    <h3>Total Lectures</h3>
                </div>
                <div className="att-metric-box">
                    <h2>{
                        calculateclasses(null,true)
                    }</h2>
                    <h3>Attended Lectures</h3>
                </div>
                <div className="att-metric-box">
                    <h2>{myLeaves.filter(l => l.status === 'Approved').length}</h2>
                    <h3>Approved Leaves</h3>
                </div>
                <div className="att-metric-box">
                    <h2>{Math.round(calculateclasses(null,true) / calculateclasses() * 100) || 0}%</h2>
                    <h3>Overall Turnout</h3>
                </div>
            </div>

            {/* Subject Attendance Table & Calendar Grid */}
            <div className="subjectandcalender">
                {/* Subject Wise Table */}
                <div className="subjectattendance-card">
                    <h3 className="card-headline">Subject-wise Attendance Breakdown</h3>
                    <div className="table-wrapper">
                        <table className="subjecttable">
                            <thead>
                                <tr>
                                    <th>Subject Name</th>
                                    <th>Subject Code</th>
                                    <th>Attended</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr onClick={()=>setSelectedsubject("Front End Engineering")}>
                                    <td className="fw-bold">Front End Engineering</td>
                                    <td>25CSE0203</td>
                                    <td>{
                                        calculateclasses("Front End Engineering", true)}</td>
                                    <td>{
                                        calculateclasses("Front End Engineering", false)}
                                    </td>
                                    <td><span className="badge-good">91% (Good)</span></td>
                                </tr>
                                <tr onClick={()=>setSelectedsubject("Operating Systems")}>
                                    <td className="fw-bold">Operating Systems</td>
                                    <td>25CSE0207</td>
                                    <td>{
                                        calculateclasses("Operating Systems", true)
                                    }</td>
                                    <td>{
                                        calculateclasses("Operating Systems", false)
                                    }</td>
                                    <td><span className="badge-good">87.5% (Good)</span></td>
                                </tr>
                                <tr onClick={()=>setSelectedsubject("Database Management System")}>
                                    <td className="fw-bold">Database Management System</td>
                                    <td>25CSE0209</td>
                                    <td>{calculateclasses("Database Management System", true)}</td>
                                    <td>{calculateclasses("Database Management System", false)}</td>
                                    <td><span className="badge-good">83.3% (Good)</span></td>
                                </tr>
                                <tr onClick={()=>setSelectedsubject("Algorithms & Data Structures")}>
                                    <td className="fw-bold">Algorithms &amp; Data Structures</td>
                                    <td>25CSE0205</td>
                                    <td>{calculateclasses("Algorithms & Data Structures", true)}</td>
                                    <td>{calculateclasses("Algorithms & Data Structures", false)}</td>
                                    <td><span className="badge-good">85% (Good)</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Calendar View */}
                <div className="calender-card">
                    <button className="arrow-btn" onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()))}>
                        <ChevronLeft size={16} />
                    </button>
                    <h3 className="card-headline">{date.toLocaleString('en-US', { month: 'long', year: 'numeric' })} Attendance Log</h3>
                     <button className="arrow-btn" onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()))}>
                        <ChevronRight size={16} />
                    </button>
                    <div className="weekname">
                        <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                    </div>
                    <div className="days">
                      {
                        
                        generateCalendarDays()
                      }
                    
                        
                        
                    </div>
                    <div className="cal-legend">
                        <span className="legend-item"><span className="dot dot-green"></span> Present</span>
                        <span className="legend-item"><span className="dot dot-red"></span> Absent</span>
                        <span className="legend-item"><span className="dot dot-blue"></span> DL</span>
                        <span className="legend-item"><span className="dot dot-yellow"></span> ML</span>
                    </div>
                </div>
            </div>

            {/* Leave Application & Status Section */}
            <div className="leave-management-section">
                {/* Controlled Form */}
                <div className="leave-form-card">
                    <h3 className="card-headline">Apply for Student Leave</h3>
                    <p className="card-sub">Leave requests are forwarded to faculty for approval</p>

                    {successMessage && (
                        <div className="alert-leave-success">
                            <CheckCircle2 size={16} />
                            <span>{successMessage}</span>
                        </div>
                    )}

                    <form onSubmit={handleLeaveSubmit} noValidate className="student-leave-form">
                        <div className="form-grid-row">
                            <div className="input-field">
                                <label>Leave Type *</label>
                                <select
                                    name="leaveType"
                                    value={formData.leaveType}
                                    onChange={handleInputChange}
                                >
                                    <option value="Medical">Medical Leave</option>
                                    <option value="Duty">Academic Event / Hackathon</option>
                                    <option value="Medical">Family / Personal Emergency</option>
                                    <option value="Duty">Official Duty Leave</option>
                                </select>
                            </div>

                            <div className="input-field">
                                <label>Start Date *</label>
                                <input
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleInputChange}
                                    className={formErrors.startDate ? 'error-input' : ''}
                                />
                                {formErrors.startDate && <span className="err-txt">{formErrors.startDate}</span>}
                            </div>

                            <div className="input-field">
                                <label>End Date *</label>
                                <input
                                    type="date"
                                    name="endDate"
                                    value={formData.endDate}
                                    onChange={handleInputChange}
                                    className={formErrors.endDate ? 'error-input' : ''}
                                />
                                {formErrors.endDate && <span className="err-txt">{formErrors.endDate}</span>}
                            </div>
                        </div>

                        <div className="input-field">
                            <label>Reason / Justification *</label>
                            <textarea
                                name="reason"
                                rows="3"
                                placeholder="Explain reason for leave and attach medical / event proof details..."
                                value={formData.reason}
                                onChange={handleInputChange}
                                className={formErrors.reason ? 'error-input' : ''}
                            />
                            {formErrors.reason && <span className="err-txt">{formErrors.reason}</span>}
                        </div>

                        <button type="submit" className="btn-submit-leave">
                            <PlusCircle size={15} /> Submit Leave Request
                        </button>
                    </form>
                </div>

                {/* Submitted Leaves Status List */}
                <div className="my-leaves-card">
                    <h3 className="card-headline">My Leave History ({myLeaves.length})</h3>
                    <div className="myleaves-list">
                        {myLeaves.length === 0 ? (
                            <p className="no-leaves-txt">No leave applications filed this term.</p>
                        ) : (
                            myLeaves.map(leave => (
                                <div key={leave.id} className="leave-status-item">
                                    <div className="item-header">
                                        <span className="leave-type-badge">{leave.reason.split(':')[0] || 'Leave'}</span>
                                        <span className={`pill-status ${leave.status.toLowerCase()}`}>
                                            {leave.status}
                                        </span>
                                    </div>
                                    <p className="reason-snippet">{leave.reason}</p>
                                    <div className="item-meta">
                                        <Calendar size={13} />
                                        <span>{leave.startDate} to {leave.endDate}</span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Attendance;
