import { useState } from 'react';
import './css/faculty.css';
import { useCampus, normalizeDateKey } from '../context/CampusContext.jsx';
import { Check, X, Search, Save, CheckCircle2, UserCheck, UserX } from 'lucide-react';

function FacultyAttendance() {
    const {
        attendanceRoster = [],
        attendanceDataState,
        updateAttendanceStatus,
        markBulkAttendance
    } = useCampus();

    const [selectedSubject, setSelectedSubject] = useState('Front End Engineering');
    const [selectedDate, setSelectedDate] = useState('2026-10-08');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [saveSuccess, setSaveSuccess] = useState('');

    const dateKey = normalizeDateKey(selectedDate);

    // Helper to get a student's status for the chosen subject & date
    const getStudentStatus = (rollNo) => {
        return attendanceDataState?.[rollNo]?.[selectedSubject]?.[dateKey] || 'Present';
    };

    // Helper to calculate student's overall term attendance percentage
    const getStudentTermAttendance = (rollNo) => {
        const studentData = attendanceDataState?.[rollNo] || {};
        let total = 0;
        let attended = 0;
        Object.values(studentData).forEach(subj => {
            const records = Object.values(subj || {});
            total += records.length;
            attended += records.filter(s => s !== 'Absent').length;
        });
        if (total === 0) return 88;
        return Math.round((attended / total) * 100);
    };

    const filteredStudents = attendanceRoster.filter(s => {
        const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              s.rollNo.includes(searchTerm);
        const status = getStudentStatus(s.rollNo);
        const matchesStatus = filterStatus === 'All' || status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const presentCount = attendanceRoster.filter(s => getStudentStatus(s.rollNo) === 'Present').length;
    const absentCount = attendanceRoster.filter(s => getStudentStatus(s.rollNo) === 'Absent').length;
    const attPercentage = attendanceRoster.length > 0 ? Math.round((presentCount / attendanceRoster.length) * 100) : 0;

    const handleToggleStudent = (rollNo) => {
        const current = getStudentStatus(rollNo);
        const nextStatus = current === 'Present' ? 'Absent' : 'Present';
        updateAttendanceStatus(rollNo, selectedSubject, selectedDate, nextStatus);
    };

    const handleMarkAll = (status) => {
        const batch = {};
        attendanceRoster.forEach(s => {
            batch[s.rollNo] = status;
        });
        markBulkAttendance(selectedSubject, selectedDate, batch);
    };

    const handleSave = () => {
        const batch = {};
        attendanceRoster.forEach(s => {
            batch[s.rollNo] = getStudentStatus(s.rollNo);
        });
        markBulkAttendance(selectedSubject, selectedDate, batch);
        setSaveSuccess(`Attendance for ${selectedSubject} on ${dateKey} saved to student portal!`);
        setTimeout(() => setSaveSuccess(''), 4000);
    };

    return (
        <div className="faculty-page-container">
            {/* Header controls */}
            <div className="faculty-hero-card">
                <div className='faculty-greeting'>
                    <h2 >Daily Attendance Marker</h2>
                    <p >Mark and publish student lecture presence in real time</p>
                </div>

                <div className="ctrl-selectors">
                    <div className="ctrl-group">
                        <label>Subject</label>
                        <select
                            value={selectedSubject}
                            onChange={(e) => setSelectedSubject(e.target.value)}
                        >
                            <option value="Front End Engineering">Front End Engineering (25CSE0203)</option>
                            <option value="Operating Systems">Operating Systems (25CSE0207)</option>
                            <option value="Database Management System">Database Management System (25CSE0209)</option>
                            <option value="Algorithms & Data Structures">Algorithms &amp; Data Structures (25CSE0205)</option>
                        </select>
                    </div>

                    <div className="ctrl-group">
                        <label>Lecture Date</label>
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                        />
                    </div>

                    <button type="button" className="btn-save-attendance" onClick={handleSave}>
                        <Save size={16} /> Save Attendance
                    </button>
                </div>
            </div>

            {saveSuccess && (
                <div className="alert-toast-success">
                    <CheckCircle2 size={18} />
                    <span>{saveSuccess}</span>
                </div>
            )}

            {/* Attendance Metrics summary */}
            <div className="att-stats-summary-bar">
                <div className="att-stat-item">
                    <span className="lbl">Total Enrolled</span>
                    <span className="val">{attendanceRoster.length} Students</span>
                </div>
                <div className="att-stat-item">
                    <span className="lbl">Present on {dateKey}</span>
                    <span className="val text-green">{presentCount}</span>
                </div>
                <div className="att-stat-item">
                    <span className="lbl">Absent on {dateKey}</span>
                    <span className="val text-red">{absentCount}</span>
                </div>
                <div className="att-stat-item">
                    <span className="lbl">Session Turnout</span>
                    <span className="val text-blue">{attPercentage}%</span>
                </div>
            </div>

            {/* Table Controls (Search + Quick Actions + Filter) */}
            <div className="roster-table-card">
                <div className="table-filter-bar">
                    <div className="table-search">
                        <Search size={16} />
                        <input
                            type="text"
                            placeholder="Search by student name or roll number..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="quick-batch-actions">
                        <button
                            type="button"
                            className="btn-batch-mark present"
                            onClick={() => handleMarkAll('Present')}
                            title="Mark all students present for this session"
                        >
                            <UserCheck size={14} /> Mark All Present
                        </button>
                        <button
                            type="button"
                            className="btn-batch-mark absent"
                            onClick={() => handleMarkAll('Absent')}
                            title="Mark all students absent for this session"
                        >
                            <UserX size={14} /> Mark All Absent
                        </button>
                    </div>

                    <div className="status-filter-pills">
                        <button
                            type="button"
                            className={`filter-btn ${filterStatus === 'All' ? 'active' : ''}`}
                            onClick={() => setFilterStatus('All')}
                        >
                            All ({attendanceRoster.length})
                        </button>
                        <button
                            type="button"
                            className={`filter-btn ${filterStatus === 'Present' ? 'active' : ''}`}
                            onClick={() => setFilterStatus('Present')}
                        >
                            Present ({presentCount})
                        </button>
                        <button
                            type="button"
                            className={`filter-btn ${filterStatus === 'Absent' ? 'active' : ''}`}
                            onClick={() => setFilterStatus('Absent')}
                        >
                            Absent ({absentCount})
                        </button>
                    </div>
                </div>

                {/* Students Attendance Table */}
                <div className="table-responsive">
                    <table className="faculty-table interactive-table">
                        <thead>
                            <tr>
                                <th>Roll Number</th>
                                <th>Student Name</th>
                                <th>Department</th>
                                <th>Term Attendance</th>
                                <th>Status on {dateKey}</th>
                                <th>Toggle Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents.map(student => {
                                const currentStatus = getStudentStatus(student.rollNo);
                                const termPct = getStudentTermAttendance(student.rollNo);
                                return (
                                    <tr key={student.id}>
                                        <td className="fw-bold">{student.rollNo}</td>
                                        <td>{student.name}</td>
                                        <td>{student.dept}</td>
                                        <td>
                                            <div className="term-att-box">
                                                <div className="att-bar">
                                                    <div
                                                        className="att-fill"
                                                        style={{ width: `${termPct}%` }}
                                                    ></div>
                                                </div>
                                                <span>{termPct}%</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`status-badge-interactive ${currentStatus.toLowerCase()}`}>
                                                {currentStatus}
                                            </span>
                                        </td>
                                        <td>
                                            <button
                                                type="button"
                                                className={`btn-toggle-att ${currentStatus === 'Present' ? 'make-absent' : 'make-present'}`}
                                                onClick={() => handleToggleStudent(student.rollNo)}
                                                title={`Click to mark ${currentStatus === 'Present' ? 'Absent' : 'Present'}`}
                                            >
                                                {currentStatus === 'Present' ? (
                                                    <>
                                                        <X size={13} /> Mark Absent
                                                    </>
                                                ) : (
                                                    <>
                                                        <Check size={13} /> Mark Present
                                                    </>
                                                )}
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default FacultyAttendance;
