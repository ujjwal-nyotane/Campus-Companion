import { useState } from 'react';
import './css/faculty.css';
import { useCampus } from '../context/CampusContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { PlusCircle, Trash2, CheckCircle2, AlertCircle, RotateCcw } from 'lucide-react';

function FacultyNotices() {
    const { announcements, postAnnouncement, deleteAnnouncement } = useCampus();
    const { user } = useAuth();
    const facultyName = user?.Name || 'Dr. Sumit (Faculty)';

    // Controlled Form State
    const [formData, setFormData] = useState({
        title: '',
        category: 'Academics',
        targetSemester: '3rd Semester',
        body: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validate = () => {
        const errors = {};
        if (!formData.title.trim()) {
            errors.title = 'Announcement title is required.';
        } else if (formData.title.trim().length < 5) {
            errors.title = 'Title must be at least 5 characters.';
        }
        if (!formData.body.trim()) {
            errors.body = 'Notice content is required.';
        } else if (formData.body.trim().length < 10) {
            errors.body = 'Content must be at least 10 characters.';
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const created = postAnnouncement({
            title: formData.title.trim(),
            category: formData.category,
            body: formData.body.trim(),
            postedBy: facultyName
        });

        setSuccessMessage(`Announcement "${created.title}" published successfully to student portal!`);
        setFormData({
            title: '',
            category: 'Academics',
            targetSemester: '3rd Semester',
            body: ''
        });
        setFormErrors({});
    };

    const handleReset = () => {
        setFormData({
            title: '',
            category: 'Academics',
            targetSemester: '3rd Semester',
            body: ''
        });
        setFormErrors({});
        setSuccessMessage('');
    };

    return (
        <div className="faculty-page-container">
            <div className="faculty-ctrl-header">
                <div>
                    <h2 className="fac-page-title">Post Academic Materials &amp; Notices</h2>
                    <p className="fac-page-subtitle">Publish alerts, assignment guidelines, and exam schedules to students</p>
                </div>
            </div>

            <div className="faculty-main-grid">
                {/* Form Section */}
                <div className="faculty-card">
                    <div className="card-header-row">
                        <h3>Publish New Announcement</h3>
                    </div>

                    {successMessage && (
                        <div className="alert-toast-success" style={{ marginBottom: '16px' }}>
                            <CheckCircle2 size={18} />
                            <span>{successMessage}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} onReset={handleReset} noValidate className="fac-notice-form">
                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Category *</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                >
                                    <option value="Academics">Academics &amp; Lectures</option>
                                    <option value="Exams">Exams &amp; Evaluations</option>
                                    <option value="Assignments">Lab &amp; Assignments</option>
                                    <option value="Events">Hackathons &amp; Events</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Target Batch / Semester</label>
                                <select
                                    name="targetSemester"
                                    value={formData.targetSemester}
                                    onChange={handleInputChange}
                                >
                                    <option value="3rd Semester">BE CSE-AIML 3rd Sem (Batch 2025)</option>
                                    <option value="All Semesters">All CSE Batches</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Announcement Headline *</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="e.g. Evaluation Component 2 Submission Link"
                                value={formData.title}
                                onChange={handleInputChange}
                                className={formErrors.title ? 'error-input' : ''}
                            />
                            {formErrors.title && (
                                <span className="field-error-txt">
                                    <AlertCircle size={13} /> {formErrors.title}
                                </span>
                            )}
                        </div>

                        <div className="form-group">
                            <label>Detailed Notice Body *</label>
                            <textarea
                                name="body"
                                rows="4"
                                placeholder="Write clear instructions, submission dates, or room details..."
                                value={formData.body}
                                onChange={handleInputChange}
                                className={formErrors.body ? 'error-input' : ''}
                            />
                            {formErrors.body && (
                                <span className="field-error-txt">
                                    <AlertCircle size={13} /> {formErrors.body}
                                </span>
                            )}
                        </div>

                        <div className="form-btn-actions">
                            <button type="submit" className="btn-fac-primary">
                                <PlusCircle size={16} /> Publish Announcement
                            </button>
                            <button type="reset" className="btn-fac-secondary">
                                <RotateCcw size={15} /> Reset
                            </button>
                        </div>
                    </form>
                </div>

                {/* Published Notices Management */}
                <div className="faculty-card">
                    <div className="card-header-row">
                        <h3>Live Published Notices ({announcements.length})</h3>
                    </div>

                    <div className="published-notices-list">
                        {announcements.map(ann => (
                            <div key={ann.id} className="published-notice-item">
                                <div className="pub-notice-top">
                                    <span className="pub-category-tag">{ann.category}</span>
                                    <button
                                        type="button"
                                        className="btn-delete-ann"
                                        onClick={() => deleteAnnouncement(ann.id)}
                                        title="Delete notice"
                                    >
                                        <Trash2 size={15} />
                                    </button>
                                </div>
                                <h4 className="pub-title">{ann.title}</h4>
                                <p className="pub-body">{ann.body}</p>
                                <div className="pub-footer">
                                    <span>Date: {ann.date}</span>
                                    <span>By: {ann.postedBy}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FacultyNotices;
