import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './css/faculty.css';
import { useAuth } from '../context/AuthContext.jsx';
import { PlusCircle, Trash2, CheckCircle2, AlertCircle, RotateCcw, SlidersHorizontal } from 'lucide-react';

// ─── Redux actions & selectors ────────────────────────────────────────────────
import {
    addNotice,
    deleteNotice,
    setFilter,
    clearStatus,
    selectFilteredNotices,
    selectFilter,
    selectNoticesStatus,
    selectLastPostedTitle,
    selectNoticesCount,
} from '../store/noticesSlice';

// All available category filter options
const CATEGORIES = ['All', 'Academics', 'Exams', 'Assignments', 'Events'];

function FacultyNotices() {
    // ── Redux wiring ──────────────────────────────────────────────────────────
    const dispatch = useDispatch();

    // useSelector reads a slice of Redux state (re-renders on change)
    const notices = useSelector(selectFilteredNotices);  // filtered list
    const activeFilter = useSelector(selectFilter);           // current filter tab
    const actionStatus = useSelector(selectNoticesStatus);    // 'idle' | 'success'
    const lastPostedTitle = useSelector(selectLastPostedTitle);  // for success toast
    const totalCount = useSelector(selectNoticesCount);     // raw total count

    // ── Local auth ────────────────────────────────────────────────────────────
    const { user } = useAuth();
    const facultyName = user?.Name || 'Dr. Sumit (Faculty)';

    // ── Local form state (UI only — not global, so local useState is correct) ──
    const [formData, setFormData] = useState({
        title: '',
        category: 'Academics',
        targetSemester: '3rd Semester',
        body: '',
    });
    const [formErrors, setFormErrors] = useState({});

    // Auto-clear success status after 4 seconds
    useEffect(() => {
        if (actionStatus === 'success') {
            const timer = setTimeout(() => dispatch(clearStatus()), 4000);
            return () => clearTimeout(timer);
        }
    }, [actionStatus, dispatch]);

    // ── Validation ────────────────────────────────────────────────────────────
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
    };

    // ── Form submit — dispatches Redux action ─────────────────────────────────
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        // dispatch(addNotice) sends the action to the Redux store
        dispatch(addNotice({
            title: formData.title.trim(),
            category: formData.category,
            body: formData.body.trim(),
            postedBy: facultyName,
        }));

        // Reset local form state
        setFormData({ title: '', category: 'Academics', targetSemester: '3rd Semester', body: '' });
        setFormErrors({});
    };

    const handleReset = () => {
        setFormData({ title: '', category: 'Academics', targetSemester: '3rd Semester', body: '' });
        setFormErrors({});
    };

    // dispatch(deleteNotice(id)) removes from the Redux store
    const handleDelete = (id) => dispatch(deleteNotice(id));

    // dispatch(setFilter(cat)) updates the filter in the Redux store
    const handleFilter = (cat) => dispatch(setFilter(cat));

    return (
        <div className="faculty-page-container">
            <div className="faculty-ctrl-header">
                <div>
                    <h2 className="fac-page-title">Post Academic Materials &amp; Notices</h2>
                    <p className="fac-page-subtitle">Publish alerts, assignment guidelines, and exam schedules to students</p>
                </div>
            </div>

            {/* Success toast — driven by Redux actionStatus */}
            {actionStatus === 'success' && (
                <div className="alert-toast-success" style={{ marginBottom: '16px' }}>
                    <CheckCircle2 size={18} />
                    <span>Announcement &ldquo;{lastPostedTitle}&rdquo; published successfully!</span>
                </div>
            )}

            <div className="faculty-main-grid">
                {/* ── Form Section ─────────────────────────────────────────── */}
                <div className="faculty-card">
                    <div className="card-header-row">
                        <h3>Publish New Announcement</h3>
                    </div>

                    <form onSubmit={handleSubmit} onReset={handleReset} noValidate className="fac-notice-form">
                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Category *</label>
                                <select name="category" value={formData.category} onChange={handleInputChange}>
                                    <option value="Academics">Academics &amp; Lectures</option>
                                    <option value="Exams">Exams &amp; Evaluations</option>
                                    <option value="Assignments">Lab &amp; Assignments</option>
                                    <option value="Events">Hackathons &amp; Events</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Target Batch / Semester</label>
                                <select name="targetSemester" value={formData.targetSemester} onChange={handleInputChange}>
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

                {/* ── Published Notices ─────────────────────────────────────── */}
                <div className="faculty-card">
                    <div className="card-header-row">
                        <h3>Live Published Notices ({notices.length})</h3>
                    </div>

                    {/* Category filter tabs — dispatch setFilter on click */}
                    <div className="notices-filter-row">
                        <SlidersHorizontal size={14} style={{ color: '#64748b' }} />
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                type="button"
                                className={`filter-tab${activeFilter === cat ? ' active' : ''}`}
                                onClick={() => handleFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="published-notices-list">
                        {notices.length === 0 ? (
                            <p className="empty-notices-msg">No notices in this category yet.</p>
                        ) : (
                            notices.map(ann => (
                                <div key={ann.id} className="published-notice-item">
                                    <div className="pub-notice-top">
                                        <span className="pub-category-tag">{ann.category}</span>
                                        {/* dispatch(deleteNotice) removes it from Redux store */}
                                        <button
                                            type="button"
                                            className="btn-delete-ann"
                                            onClick={() => handleDelete(ann.id)}
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
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FacultyNotices;
