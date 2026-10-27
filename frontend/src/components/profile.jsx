import { useState } from 'react';
import './css/profile.css';
import { useAuth } from '../context/AuthContext.jsx';
import {
    User,
    Mail,
    Award,
    BookOpen,
    ShieldCheck,
    Edit3,
    CheckCircle2,
    Lock,
    FileText,
    QrCode,
    CreditCard,
    AlertCircle,
    X,
    Key,
    Share2,
    Briefcase
} from 'lucide-react';

function Profile() {
    const { user, role } = useAuth();

    const isStudent = role !== 'Faculty';
    const studentName = user?.Name || (isStudent ? 'Ujjwal Nyotane' : 'Dr. Sumit');
    const studentId = user?.id || (isStudent ? '2510993797' : 'CET0001');
    const userRole = isStudent ? 'Undergraduate Student' : 'Assistant Professor';
    const department = isStudent ? 'Computer Science & Engineering (AI & ML)' : 'Department of Computer Applications';

    // Tabs: 'overview', 'idcard', 'security'
    const [activeTab, setActiveTab] = useState('overview');

    // Contact info state (editable)
    const [contactInfo, setContactInfo] = useState({
        personalEmail: isStudent ? 'ujjwal.nyotane@example.com' : 'sumit.faculty@example.com',
        universityEmail: isStudent ? `${studentId}@university.edu.in` : 'sumit.cet@university.edu.in',
        mobile: '+91 98765 43210',
        currentAddress: 'Room 304-B, Shivalik Hostel, Campus North, Tech City',
        permanentAddress: 'Bawani Khera, Bhiwani, Haryana - 127032',
        emergencyContact: 'Mr. Mukesh Kumar (Father)',
        emergencyPhone: '+91 99912 34567'
    });

    // Edit Modal State
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [editForm, setEditForm] = useState({ ...contactInfo });
    const [editErrors, setEditErrors] = useState({});
    const [editSuccessMessage, setEditSuccessMessage] = useState('');

    // Security / Password Form State
    const [passwordForm, setPasswordForm] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [passwordErrors, setPasswordErrors] = useState({});
    const [passwordSuccessMessage, setPasswordSuccessMessage] = useState('');

    // ID Card downloaded alert
    const [downloadedBadge, setDownloadedBadge] = useState(false);

    // Handle Edit Modal Open
    const openEditModal = () => {
        setEditForm({ ...contactInfo });
        setEditErrors({});
        setIsEditOpen(true);
    };

    // Handle Contact Form Change
    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditForm(prev => ({ ...prev, [name]: value }));
        if (editErrors[name]) {
            setEditErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    // Save Contact Form
    const handleSaveContact = (e) => {
        e.preventDefault();
        const errors = {};
        if (!editForm.personalEmail.trim() || !editForm.personalEmail.includes('@')) {
            errors.personalEmail = 'Please provide a valid personal email.';
        }
        if (!editForm.mobile.trim() || editForm.mobile.trim().length < 10) {
            errors.mobile = 'Please enter a valid 10-digit mobile number.';
        }
        if (!editForm.currentAddress.trim()) {
            errors.currentAddress = 'Current address is required.';
        }
        if (!editForm.emergencyPhone.trim()) {
            errors.emergencyPhone = 'Emergency phone is required.';
        }

        if (Object.keys(errors).length > 0) {
            setEditErrors(errors);
            return;
        }

        setContactInfo({ ...editForm });
        setIsEditOpen(false);
        setEditSuccessMessage('Profile contact details updated successfully!');
        setTimeout(() => setEditSuccessMessage(''), 4000);
    };

    // Handle Security Password Form
    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordForm(prev => ({ ...prev, [name]: value }));
        if (passwordErrors[name]) {
            setPasswordErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        if (!passwordForm.currentPassword) {
            errors.currentPassword = 'Enter current account password.';
        }
        if (!passwordForm.newPassword || passwordForm.newPassword.length < 4) {
            errors.newPassword = 'New password must be at least 4 characters.';
        }
        if (passwordForm.newPassword !== passwordForm.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match.';
        }

        if (Object.keys(errors).length > 0) {
            setPasswordErrors(errors);
            return;
        }

        setPasswordSuccessMessage('Account password updated securely!');
        setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
        setPasswordErrors({});
        setTimeout(() => setPasswordSuccessMessage(''), 4000);
    };

    const handleDownloadId = () => {
        setDownloadedBadge(true);
        setTimeout(() => setDownloadedBadge(false), 3500);
    };

    return (
        <div className="profile-page-container">
            {/* Success Alert Banner */}
            {editSuccessMessage && (
                <div className="profile-alert success">
                    <CheckCircle2 size={16} />
                    <span>{editSuccessMessage}</span>
                </div>
            )}

            {/* Profile Hero Card */}
            <div className="profile-hero-card">
                <div className="profile-hero-left">
                    <div className="profile-avatar-circle">
                        <span>{studentName.charAt(0).toUpperCase()}</span>
                        <div className="avatar-status-dot" title="Active on Campus" />
                    </div>

                    <div className="profile-hero-meta">
                        <div className="hero-badge-row">
                            <span className="role-chip">
                                <ShieldCheck size={13} /> {userRole}
                            </span>
                            <span className="id-chip">
                                ID: <strong>{studentId}</strong>
                            </span>
                        </div>
                        <h2>{studentName}</h2>
                        <p className="hero-dept-text">{department}</p>
                        <p className="hero-batch-text">Batch 2025-2029 &bull; Academic Year 2026-27 &bull; Section AIML-B</p>
                    </div>
                </div>

                <div className="profile-hero-actions">
                    <button type="button" className="btn-edit-profile" onClick={openEditModal}>
                        <Edit3 size={15} /> Edit Contact Info
                    </button>
                    
                </div>
            </div>

            {/* Quick Metrics Bar (For Students) */}
            {isStudent && (
                <div className="profile-metrics-bar">
                    <div className="p-metric-item">
                        <span className="p-metric-val">9.34</span>
                        <span className="p-metric-lbl">Cumulative CGPA</span>
                    </div>
                    <div className="p-metric-divider" />
                    <div className="p-metric-item">
                        <span className="p-metric-val text-green">88%</span>
                        <span className="p-metric-lbl">Overall Attendance</span>
                    </div>
                    <div className="p-metric-divider" />
                    <div className="p-metric-item">
                        <span className="p-metric-val">46 / 160</span>
                        <span className="p-metric-lbl">Credits Completed</span>
                    </div>
                    <div className="p-metric-divider" />
                    <div className="p-metric-item">
                        <span className="p-metric-val">3rd Sem</span>
                        <span className="p-metric-lbl">Current Term</span>
                    </div>
                    <div className="p-metric-divider" />
                    <div className="p-metric-item">
                        <span className="p-metric-val text-blue">Active</span>
                        <span className="p-metric-lbl">Enrolment Status</span>
                    </div>
                </div>
            )}

            {/* Profile Navigation Tabs */}
            <div className="profile-tabs-header">
                <button
                    type="button"
                    className={`p-nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                >
                    <User size={16} /> Personal &amp; Academic Overview
                </button>
                
                <button
                    type="button"
                    className={`p-nav-tab ${activeTab === 'security' ? 'active' : ''}`}
                    onClick={() => setActiveTab('security')}
                >
                    <Lock size={16} /> Account Security &amp; Password
                </button>
            </div>

            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
                <div className="profile-grid-container">
                    {/* Personal Details */}
                    <div className="profile-detail-card">
                        <div className="card-heading-row">
                            <div className="heading-icon-wrap"><User size={18} /></div>
                            <h3>Personal Information</h3>
                        </div>
                        <div className="info-keyval-list">
                            <div className="keyval-row">
                                <span className="kv-key">Full Legal Name</span>
                                <span className="kv-val">{studentName}</span>
                            </div>
                            <div className="keyval-row">
                                <span className="kv-key">Date of Birth</span>
                                <span className="kv-val">07 November 2006</span>
                            </div>
                            <div className="keyval-row">
                                <span className="kv-key">Gender</span>
                                <span className="kv-val">Male</span>
                            </div>
                            <div className="keyval-row">
                                <span className="kv-key">Blood Group</span>
                                <span className="kv-val badge-blood">B+ Positive</span>
                            </div>
                            <div className="keyval-row">
                                <span className="kv-key">Nationality</span>
                                <span className="kv-val">Indian</span>
                            </div>
                            <div className="keyval-row">
                                <span className="kv-key">Aadhar UID</span>
                                <span className="kv-val">•••• •••• 5075 (Verified)</span>
                            </div>
                            <div className="keyval-row">
                                <span className="kv-key">Admission Category</span>
                                <span className="kv-val">General Merit</span>
                            </div>
                        </div>
                    </div>

                    {/* Academic Enrolment */}
                    <div className="profile-detail-card">
                        <div className="card-heading-row">
                            <div className="heading-icon-wrap icon-blue"><BookOpen size={18} /></div>
                            <h3>Academic Enrolment</h3>
                        </div>
                        <div className="info-keyval-list">
                            <div className="keyval-row">
                                <span className="kv-key">Roll / Registration No.</span>
                                <span className="kv-val font-mono">{studentId}</span>
                            </div>
                            <div className="keyval-row">
                                <span className="kv-key">Degree Program</span>
                                <span className="kv-val">B.Tech Computer Science</span>
                            </div>
                            <div className="keyval-row">
                                <span className="kv-key">Specialization</span>
                                <span className="kv-val">Artificial Intelligence &amp; ML</span>
                            </div>
                            <div className="keyval-row">
                                <span className="kv-key">Academic Mentor</span>
                                <span className="kv-val">Dr. Saravjeet Singh</span>
                            </div>
                            <div className="keyval-row">
                                <span className="kv-key">Current Semester</span>
                                <span className="kv-val">3rd Semester (Fall 2026)</span>
                            </div>
                            <div className="keyval-row">
                                <span className="kv-key">Classroom / Section</span>
                                <span className="kv-val">Room MB 501 / Sec-B</span>
                            </div>
                            <div className="keyval-row">
                                <span className="kv-key">Admission Mode</span>
                                <span className="kv-val">JEE Main Regular Intake</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact & Communication */}
                    <div className="profile-detail-card">
                        <div className="card-heading-row">
                            <div className="heading-icon-wrap icon-amber"><Mail size={18} /></div>
                            <h3>Contact &amp; Addresses</h3>
                        </div>
                        <div className="info-keyval-list">
                            <div className="keyval-row">
                                <span className="kv-key">University Email</span>
                                <span className="kv-val mail-link">{contactInfo.universityEmail}</span>
                            </div>
                            <div className="keyval-row">
                                <span className="kv-key">Personal Email</span>
                                <span className="kv-val mail-link">{contactInfo.personalEmail}</span>
                            </div>
                            <div className="keyval-row">
                                <span className="kv-key">Primary Phone</span>
                                <span className="kv-val font-mono">{contactInfo.mobile}</span>
                            </div>
                            <div className="keyval-row">
                                <span className="kv-key">Current Residence</span>
                                <span className="kv-val">{contactInfo.currentAddress}</span>
                            </div>
                            <div className="keyval-row">
                                <span className="kv-key">Permanent Hometown</span>
                                <span className="kv-val">{contactInfo.permanentAddress}</span>
                            </div>
                        </div>
                    </div>

                    {/* Parent & Guardian Info */}
                    <div className="profile-detail-card">
                        <div className="card-heading-row">
                            <div className="heading-icon-wrap icon-purple"><Briefcase size={18} /></div>
                            <h3>Guardian &amp; Emergency Details</h3>
                        </div>
                        <div className="info-keyval-list">
                            <div className="keyval-row">
                                <span className="kv-key">Father&apos;s Name</span>
                                <span className="kv-val">Mr. Mukesh Kumar</span>
                            </div>
                            <div className="keyval-row">
                                <span className="kv-key">Mother&apos;s Name</span>
                                <span className="kv-val">Mrs. Kiran Bala</span>
                            </div>
                            <div className="keyval-row">
                                <span className="kv-key">Emergency Contact Person</span>
                                <span className="kv-val">{contactInfo.emergencyContact}</span>
                            </div>
                            <div className="keyval-row">
                                <span className="kv-key">Emergency Phone Number</span>
                                <span className="kv-val font-mono">{contactInfo.emergencyPhone}</span>
                            </div>
                            <div className="keyval-row">
                                <span className="kv-key">Residential State</span>
                                <span className="kv-val">Haryana, India</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* TAB 3: SECURITY & PASSWORD */}
            {activeTab === 'security' && (
                <div className="profile-security-grid">
                    {/* Password Form Card */}
                    <div className="profile-detail-card">
                        <div className="card-heading-row">
                            <div className="heading-icon-wrap icon-amber"><Key size={18} /></div>
                            <div>
                                <h3>Update Account Password</h3>
                                <p className="card-subtitle">Keep your campus login credentials safe and secure</p>
                            </div>
                        </div>

                        {passwordSuccessMessage && (
                            <div className="profile-alert success">
                                <CheckCircle2 size={15} />
                                <span>{passwordSuccessMessage}</span>
                            </div>
                        )}

                        <form onSubmit={handlePasswordSubmit} className="security-form" noValidate>
                            <div className="form-group">
                                <label>Current Password *</label>
                                <input
                                    type="password"
                                    name="currentPassword"
                                    placeholder="Enter current password (demo: 1234)"
                                    value={passwordForm.currentPassword}
                                    onChange={handlePasswordChange}
                                    className={passwordErrors.currentPassword ? 'input-error' : ''}
                                />
                                {passwordErrors.currentPassword && (
                                    <span className="field-error-msg">
                                        <AlertCircle size={12} /> {passwordErrors.currentPassword}
                                    </span>
                                )}
                            </div>

                            <div className="form-group">
                                <label>New Password *</label>
                                <input
                                    type="password"
                                    name="newPassword"
                                    placeholder="Minimum 4 characters"
                                    value={passwordForm.newPassword}
                                    onChange={handlePasswordChange}
                                    className={passwordErrors.newPassword ? 'input-error' : ''}
                                />
                                {passwordErrors.newPassword && (
                                    <span className="field-error-msg">
                                        <AlertCircle size={12} /> {passwordErrors.newPassword}
                                    </span>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Confirm New Password *</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Re-enter new password"
                                    value={passwordForm.confirmPassword}
                                    onChange={handlePasswordChange}
                                    className={passwordErrors.confirmPassword ? 'input-error' : ''}
                                />
                                {passwordErrors.confirmPassword && (
                                    <span className="field-error-msg">
                                        <AlertCircle size={12} /> {passwordErrors.confirmPassword}
                                    </span>
                                )}
                            </div>

                            <button type="submit" className="btn-update-pwd">
                                <Lock size={15} /> Save New Password
                            </button>
                        </form>
                    </div>

                </div>
            )}

            {/* EDIT CONTACT MODAL */}
            {isEditOpen && (
                <div className="modal-backdrop" onClick={() => setIsEditOpen(false)}>
                    <div className="modal-card" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <div>
                                <h3>Edit Contact &amp; Communication Details</h3>
                                <p>Update your phone, personal email, and address on the university database</p>
                            </div>
                            <button
                                type="button"
                                className="modal-close-btn"
                                onClick={() => setIsEditOpen(false)}
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <form onSubmit={handleSaveContact} className="edit-modal-form" noValidate>
                            <div className="form-group">
                                <label>Personal Email Address *</label>
                                <input
                                    type="email"
                                    name="personalEmail"
                                    value={editForm.personalEmail}
                                    onChange={handleEditChange}
                                    className={editErrors.personalEmail ? 'input-error' : ''}
                                />
                                {editErrors.personalEmail && (
                                    <span className="field-error-msg">
                                        <AlertCircle size={12} /> {editErrors.personalEmail}
                                    </span>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Mobile Phone Number *</label>
                                <input
                                    type="text"
                                    name="mobile"
                                    value={editForm.mobile}
                                    onChange={handleEditChange}
                                    className={editErrors.mobile ? 'input-error' : ''}
                                />
                                {editErrors.mobile && (
                                    <span className="field-error-msg">
                                        <AlertCircle size={12} /> {editErrors.mobile}
                                    </span>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Current Residential Address / Hostel Room *</label>
                                <input
                                    type="text"
                                    name="currentAddress"
                                    value={editForm.currentAddress}
                                    onChange={handleEditChange}
                                    className={editErrors.currentAddress ? 'input-error' : ''}
                                />
                                {editErrors.currentAddress && (
                                    <span className="field-error-msg">
                                        <AlertCircle size={12} /> {editErrors.currentAddress}
                                    </span>
                                )}
                            </div>

                            <div className="form-row-2">
                                <div className="form-group">
                                    <label>Emergency Contact Person</label>
                                    <input
                                        type="text"
                                        name="emergencyContact"
                                        value={editForm.emergencyContact}
                                        onChange={handleEditChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Emergency Contact Phone *</label>
                                    <input
                                        type="text"
                                        name="emergencyPhone"
                                        value={editForm.emergencyPhone}
                                        onChange={handleEditChange}
                                        className={editErrors.emergencyPhone ? 'input-error' : ''}
                                    />
                                    {editErrors.emergencyPhone && (
                                        <span className="field-error-msg">
                                            <AlertCircle size={12} /> {editErrors.emergencyPhone}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="modal-actions-row">
                                <button type="submit" className="btn-modal-save">
                                    Save Changes
                                </button>
                                <button
                                    type="button"
                                    className="btn-modal-cancel"
                                    onClick={() => setIsEditOpen(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
