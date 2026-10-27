import { useState } from 'react';
import './css/faculty.css';
import { useCampus } from '../context/CampusContext.jsx';
import { Check, X, Search, Save, CheckCircle2 } from 'lucide-react';

function FacultyAttendance() {
    const { attendanceRoster = [], toggleAttendanceStatus = () => {} } = useCampus();

    const [selectedSubject, setSelectedSubject] = useState('Front End Engineering');
    const [selectedDate, setSelectedDate] = useState('2026-08-24');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [saveSuccess, setSaveSuccess] = useState('');

    const filteredStudents = attendanceRoster.filter(s => {
        const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              s.rollNo.includes(searchTerm);
        const matchesStatus = filterStatus === 'All' || s.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const presentCount = attendanceRoster.filter(s => s.status === 'Present').length;
    const absentCount = attendanceRoster.filter(s => s.status === 'Absent').length;
    const attPercentage = attendanceRoster.length > 0 ? Math.round((presentCount / attendanceRoster.length) * 100) : 0;

    const handleSave = () => {
        setSaveSuccess(`Attendance for ${selectedSubject} on ${selectedDate} saved successfully!`);
        setTimeout(() => setSaveSuccess(''), 4000);
    };

    return (
        <div className="faculty-page-container">
            {/* Header controls */}
            <div className="faculty-ctrl-header">
                <div>
                    <h2 className="fac-page-title">Daily Attendance Marker</h2>
                    <p className="fac-page-subtitle">Mark and verify student lecture presence</p>
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
                            <option value="Database Systems">Database Systems (25CSE0209)</option>
                        </select>
                    </div>

                    <div className="ctrl-group">
                        <label>Date</label>
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
                    <span className="lbl">Present Today</span>
                    <span className="val text-green">{presentCount}</span>
                </div>
                <div className="att-stat-item">
                    <span className="lbl">Absent Today</span>
                    <span className="val text-red">{absentCount}</span>
                </div>
                <div className="att-stat-item">
                    <span className="lbl">Daily Turnout</span>
                    <span className="val text-blue">{attPercentage}%</span>
                </div>
            </div>

            {/* Table Controls (Search + Filter) */}
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
                                <th>Today&apos;s Status</th>
                                <th>Toggle Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents.map(student => (
                                <tr key={student.id}>
                                    <td className="fw-bold">{student.rollNo}</td>
                                    <td>{student.name}</td>
                                    <td>{student.dept}</td>
                                    <td>
                                        <div className="term-att-box">
                                            <div className="att-bar">
                                                <div
                                                    className="att-fill"
                                                    style={{ width: `${student.attendance}%` }}
                                                ></div>
                                            </div>
                                            <span>{student.attendance}%</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`status-badge-interactive ${student.status.toLowerCase()}`}>
                                            {student.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            className={`btn-toggle-att ${student.status === 'Present' ? 'make-absent' : 'make-present'}`}
                                            onClick={() => toggleAttendanceStatus(student.id)}
                                            title="Click to toggle status"
                                        >
                                            {student.status === 'Present' ? (
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
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default FacultyAttendance;
