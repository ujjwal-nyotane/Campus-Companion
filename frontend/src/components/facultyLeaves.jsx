import { useState } from 'react';
import './css/faculty.css';
import { useCampus } from '../context/CampusContext.jsx';
import { CheckCircle, XCircle, Clock, Calendar, Search } from 'lucide-react';

function FacultyLeaves() {
    const { leaveRequests, updateLeaveStatus } = useCampus();
    const [statusFilter, setStatusFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredLeaves = leaveRequests.filter(leave => {
        const matchesStatus = statusFilter === 'All' || leave.status === statusFilter;
        const matchesSearch = leave.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              leave.rollNo.includes(searchTerm) ||
                              leave.reason.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    const pendingCount = leaveRequests.filter(l => l.status === 'Pending').length;
    const approvedCount = leaveRequests.filter(l => l.status === 'Approved').length;
    const rejectedCount = leaveRequests.filter(l => l.status === 'Rejected').length;

    return (
        <div className="faculty-page-container">
            <div className="faculty-hero-card">
                <div className='faculty-greeting'>
                    <h2>Student Leave Requests &amp; Approvals</h2>
                    <p >Review medical, academic, and event leave submissions</p>
                </div>

                <div className="status-filter-pills">
                    <button
                        type="button"
                        className={`filter-btn ${statusFilter === 'All' ? 'active' : ''}`}
                        onClick={() => setStatusFilter('All')}
                    >
                        All ({leaveRequests.length})
                    </button>
                    <button
                        type="button"
                        className={`filter-btn ${statusFilter === 'Pending' ? 'active' : ''}`}
                        onClick={() => setStatusFilter('Pending')}
                    >
                        Pending ({pendingCount})
                    </button>
                    <button
                        type="button"
                        className={`filter-btn ${statusFilter === 'Approved' ? 'active' : ''}`}
                        onClick={() => setStatusFilter('Approved')}
                    >
                        Approved ({approvedCount})
                    </button>
                    <button
                        type="button"
                        className={`filter-btn ${statusFilter === 'Rejected' ? 'active' : ''}`}
                        onClick={() => setStatusFilter('Rejected')}
                    >
                        Rejected ({rejectedCount})
                    </button>
                </div>
            </div>

            {/* Search Input */}
            <div className="table-search" style={{ maxWidth: '400px', marginBottom: '20px' }}>
                <Search size={16} />
                <input
                    type="text"
                    placeholder="Search by student name, roll number, or reason..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Leave Applications Grid */}
            <div className="leaves-grid-container">
                {filteredLeaves.length === 0 ? (
                    <div className="empty-leaves-box">
                        <Clock size={36} color="#94a3b8" />
                        <p>No leave requests found matching the current filter.</p>
                    </div>
                ) : (
                    filteredLeaves.map(leave => (
                        <div key={leave.id} className="faculty-leave-card">
                            <div className="leave-card-header">
                                <div className="student-profile-snippet">
                                    <div className="avatar-circle">
                                        {leave.studentName.charAt(0)}
                                    </div>
                                    <div>
                                        <h4>{leave.studentName}</h4>
                                        <span>Roll No: {leave.rollNo} &bull; {leave.department}</span>
                                    </div>
                                </div>
                                <span className={`leave-status-tag ${leave.status.toLowerCase()}`}>
                                    {leave.status}
                                </span>
                            </div>

                            <div className="leave-card-body">
                                <span className="lbl-title">Reason for Leave:</span>
                                <p className="reason-text">"{leave.reason}"</p>

                                <div className="leave-meta-grid">
                                    <div className="meta-box">
                                        <Calendar size={14} />
                                        <span>Duration: <strong>{leave.startDate} to {leave.endDate}</strong></span>
                                    </div>
                                    <div className="meta-box">
                                        <Clock size={14} />
                                        <span>Applied on: {leave.appliedOn || 'Recent'}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="leave-card-footer">
                                <span className="req-id">Request ID: {leave.id}</span>
                                <div className="leave-footer-actions">
                                    {leave.status === 'Pending' ? (
                                        <>
                                            <button
                                                type="button"
                                                className="btn-approve-lg"
                                                onClick={() => updateLeaveStatus(leave.id, 'Approved', leave.type)}
                                            >
                                                <CheckCircle size={15} /> Approve Leave
                                            </button>
                                            <button
                                                type="button"
                                                className="btn-reject-lg"
                                                onClick={() => updateLeaveStatus(leave.id, 'Rejected')}
                                            >
                                                <XCircle size={15} /> Reject
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            type="button"
                                            className="btn-revert"
                                            onClick={() => updateLeaveStatus(leave.id, 'Pending')}
                                        >
                                            Revert to Pending
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default FacultyLeaves;
