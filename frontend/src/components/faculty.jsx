import './css/faculty.css';
import { useAuth } from '../context/AuthContext.jsx';
import { useCampus } from '../context/CampusContext.jsx';
import { Link } from 'react-router-dom';
import {
    Users,
    Calendar,
    Clock,
    CheckCircle,
    XCircle,
    ArrowRight,
    CheckSquare,
    FileText,
    TrendingUp
} from 'lucide-react';

function F_dashboard() {
    const { user } = useAuth();
    const { leaveRequests, updateLeaveStatus, attendanceRoster } = useCampus();
    const facultyName = user?.Name || 'Dr. Sumit';

    const pendingLeaves = leaveRequests.filter(l => l.status === 'Pending');

    return (
        <div className="faculty-dashboard-container">
            {/* Faculty Greeting & Stats Row */}
            <div className="faculty-hero-card">
                <div className="faculty-greeting">
                    <h1>Welcome, {facultyName}</h1>
                    <p>Department of Computer Science &amp; Engineering &bull; Faculty ID: {user?.id || 'CET0001'}</p>
                </div>
                <div className="faculty-actions-quick">
                    <Link to="/f-attendance" className="btn-fac-primary">
                        <CheckSquare size={16} /> Mark Today's Attendance
                    </Link>
                    <Link to="/f-notices" className="btn-fac-secondary">
                        <FileText size={16} /> Post Notice
                    </Link>
                </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="faculty-metrics-grid">
                <div className="fac-stat-box">
                    <div className="stat-icon-wrap icon-green">
                        <Users size={22} />
                    </div>
                    <div className="stat-txt">
                        <h3>120</h3>
                        <span>Total Enrolled Students</span>
                    </div>
                </div>

                <div className="fac-stat-box">
                    <div className="stat-icon-wrap icon-blue">
                        <Calendar size={22} />
                    </div>
                    <div className="stat-txt">
                        <h3>3 Classes</h3>
                        <span>Lectures Scheduled Today</span>
                    </div>
                </div>

                <div className="fac-stat-box">
                    <div className="stat-icon-wrap icon-amber">
                        <Clock size={22} />
                    </div>
                    <div className="stat-txt">
                        <h3>{pendingLeaves.length} Requests</h3>
                        <span>Pending Leave Approvals</span>
                    </div>
                </div>

                <div className="fac-stat-box">
                    <div className="stat-icon-wrap icon-purple">
                        <TrendingUp size={22} />
                    </div>
                    <div className="stat-txt">
                        <h3>89.4%</h3>
                        <span>Average Term Attendance</span>
                    </div>
                </div>
            </div>

            {/* Main Content: Teaching Schedule + Pending Leaves */}
            <div className="faculty-main-grid">
                {/* Teaching Schedule */}
                <div className="faculty-card">
                    <div className="card-header-row">
                        <h3>Today's Teaching Schedule</h3>
                        <span className="live-tag">Active Schedule</span>
                    </div>

                    <div className="schedule-items-list">
                        <div className="schedule-row current-lecture">
                            <div className="time-badge">8:30 AM</div>
                            <div className="sched-info">
                                <h4>Front End Engineering (Lab)</h4>
                                <p>Lab 3, Engineering Block &bull; 60 Students</p>
                            </div>
                            <span className="status-badge-active">In Session</span>
                        </div>

                        <div className="schedule-row">
                            <div className="time-badge">11:30 AM</div>
                            <div className="sched-info">
                                <h4>Object Oriented Programming</h4>
                                <p>Room MB 501 &bull; 60 Students</p>
                            </div>
                            <span className="status-badge-upcoming">Upcoming</span>
                        </div>

                        <div className="schedule-row">
                            <div className="time-badge">2:30 PM</div>
                            <div className="sched-info">
                                <h4>Database Systems Viva &amp; Review</h4>
                                <p>Lab 2 &bull; Batch B2</p>
                            </div>
                            <span className="status-badge-upcoming">Upcoming</span>
                        </div>
                    </div>
                </div>

                {/* Pending Leave Requests */}
                <div className="faculty-card">
                    <div className="card-header-row">
                        <h3>Student Leave Approvals</h3>
                        <Link to="/f-leaves" className="view-all-link">
                            Manage All <ArrowRight size={14} />
                        </Link>
                    </div>

                    <div className="leaves-preview-list">
                        {leaveRequests.slice(0, 3).map(leave => (
                            <div key={leave.id} className="leave-item-card">
                                <div className="leave-top">
                                    <div>
                                        <h4 className="student-name">{leave.studentName}</h4>
                                        <span className="roll-dept">{leave.rollNo} &bull; {leave.department}</span>
                                    </div>
                                    <span className={`leave-status-pill ${leave.status.toLowerCase()}`}>
                                        {leave.status}
                                    </span>
                                </div>
                                <p className="leave-reason-txt">"{leave.reason}"</p>
                                <div className="leave-bottom">
                                    <span className="leave-dates">{leave.startDate} to {leave.endDate}</span>
                                    {leave.status === 'Pending' && (
                                        <div className="leave-action-btns">
                                            <button
                                                type="button"
                                                className="btn-approve"
                                                onClick={() => updateLeaveStatus(leave.id, 'Approved')}
                                            >
                                                <CheckCircle size={13} /> Approve
                                            </button>
                                            <button
                                                type="button"
                                                className="btn-reject"
                                                onClick={() => updateLeaveStatus(leave.id, 'Rejected')}
                                            >
                                                <XCircle size={13} /> Reject
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Attendance Roster Summary */}
            <div className="faculty-card roster-card">
                <div className="card-header-row">
                    <h3>Front End Engineering Attendance Overview</h3>
                    <Link to="/f-attendance" className="view-all-link">
                        Full Attendance Roster <ArrowRight size={14} />
                    </Link>
                </div>
                <div className="table-responsive">
                    <table className="faculty-table">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Roll Number</th>
                                <th>Department</th>
                                <th>Subject</th>
                                <th>Current %</th>
                                <th>Status Today</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendanceRoster.slice(0, 4).map(s => (
                                <tr key={s.id}>
                                    <td className="fw-bold">{s.name}</td>
                                    <td>{s.rollNo}</td>
                                    <td>{s.dept}</td>
                                    <td>{s.subject}</td>
                                    <td>
                                        <span className={`att-score ${s.attendance >= 85 ? 'high' : 'medium'}`}>
                                            {s.attendance}%
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`roster-status-chip ${s.status.toLowerCase()}`}>
                                            {s.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default F_dashboard;
