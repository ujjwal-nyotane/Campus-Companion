import { useState } from 'react';
import './css/attendance.css';
import { useAuth } from '../context/AuthContext.jsx';
import { useCampus } from '../context/CampusContext.jsx';
import { CheckCircle2, PlusCircle, Calendar } from 'lucide-react';

const days = [0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const absentDays = new Set([5, 12, 21]);

function Attendance() {
    const { user } = useAuth();
    const { leaveRequests, applyLeave } = useCampus();
    const studentName = user?.Name || 'Ujjwal';
    const rollNo = user?.id || '2510993689';

    // Controlled Form State for Student Leave Application
    const [formData, setFormData] = useState({
        reason: '',
        startDate: '',
        endDate: '',
        leaveType: 'Medical'
    });

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
            department: 'CSE-AIML',
            reason: `${formData.leaveType}: ${formData.reason.trim()}`,
            startDate: formData.startDate,
            endDate: formData.endDate
        });

        setSuccessMessage('Leave application submitted! Faculty mentor has received your request.');
        setFormData({
            reason: '',
            startDate: '',
            endDate: '',
            leaveType: 'Medical'
        });
        setFormErrors({});
    };

    // Filter leaves submitted by this student
    const myLeaves = leaveRequests.filter(l => l.rollNo === String(rollNo) || l.studentName.includes('Ujjwal'));

    return (
        <div className="attendance-page-container">
            {/* Hero Metrics */}
            <div className="attendancehero">
                <div className="att-metric-box">
                    <h2>150</h2>
                    <h3>Total Lectures</h3>
                </div>
                <div className="att-metric-box">
                    <h2>132</h2>
                    <h3>Attended Lectures</h3>
                </div>
                <div className="att-metric-box">
                    <h2>{myLeaves.filter(l => l.status === 'Approved').length}</h2>
                    <h3>Approved Leaves</h3>
                </div>
                <div className="att-metric-box">
                    <h2>88%</h2>
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
                                <tr>
                                    <td className="fw-bold">Front End Engineering</td>
                                    <td>25CSE0203</td>
                                    <td>40</td>
                                    <td>44</td>
                                    <td><span className="badge-good">91% (Good)</span></td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Operating Systems</td>
                                    <td>25CSE0207</td>
                                    <td>35</td>
                                    <td>40</td>
                                    <td><span className="badge-good">87.5% (Good)</span></td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Database Management System</td>
                                    <td>25CSE0209</td>
                                    <td>40</td>
                                    <td>48</td>
                                    <td><span className="badge-good">83.3% (Good)</span></td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Algorithms &amp; Data Structures</td>
                                    <td>25CSE0205</td>
                                    <td>34</td>
                                    <td>40</td>
                                    <td><span className="badge-good">85% (Good)</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Calendar View */}
                <div className="calender-card">
                    <h3 className="card-headline">August Attendance Log</h3>
                    <div className="weekname">
                        <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                    </div>
                    <div className="days">
                        {days.map((i, idx) => (
                            i === 0 ? (
                                <div key={`empty-${idx}`} className="empty-day"></div>
                            ) : (
                                <div
                                    key={i}
                                    className={`day-cell ${absentDays.has(i) ? 'absent' : 'present'}`}
                                    title={absentDays.has(i) ? `Aug ${i}: Absent` : `Aug ${i}: Present`}
                                >
                                    <span>{i}</span>
                                </div>
                            )
                        ))}
                    </div>
                    <div className="cal-legend">
                        <span className="legend-item"><span className="dot dot-green"></span> Present</span>
                        <span className="legend-item"><span className="dot dot-red"></span> Absent</span>
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
                                    <option value="Academic Event / Hackathon">Academic Event / Hackathon</option>
                                    <option value="Family / Personal">Family / Personal Emergency</option>
                                    <option value="Duty Leave">Official Duty Leave</option>
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
