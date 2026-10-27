import { useState } from 'react';
import './css/support.css';
import {
    PlusCircle,
    Trash2,
    CheckCircle2,
    RotateCcw,
    AlertCircle,
    MessageSquare,
    Phone,
    Mail,
    LifeBuoy,
    HelpCircle,
    ChevronDown,
    Send
} from 'lucide-react';

const defaultTickets = [
    {
        id: 'TICK-101',
        category: 'Attendance',
        subject: 'Attendance marked wrong in OOP lecture',
        priority: 'High',
        description: 'On 10 August my attendance for Object Oriented Programming was marked absent while I was present in Room MB 501.',
        status: 'In Progress',
        date: '10 Aug 2026'
    },
    {
        id: 'TICK-102',
        category: 'Infrastructure',
        subject: 'Air Conditioning unit not functioning in MB 501',
        priority: 'Medium',
        description: 'In classroom MB 501 the central AC unit is blowing warm air during afternoon lecture hours.',
        status: 'Pending',
        date: '15 Aug 2026'
    }
];

const faqsData = [
    {
        question: 'How do I rectify an attendance marked absent by mistake?',
        answer: 'Raise a ticket under "Attendance" with the lecture date, subject code, and classroom number. You can also contact your course faculty directly via the Faculty Portal.'
    },
    {
        question: 'Where can I pay pending semester fees and download receipts?',
        answer: 'Navigate to the Finances / Fee Portal from the sidebar. You can pay your semester dues via UPI or Net Banking, and your official PDF receipt is generated instantly.'
    },
    {
        question: 'How do I apply for a hostel night pass or leave?',
        answer: 'Go to Attendance &bull; Apply for Leave, select your start and end dates, and submit. The Chief Warden and your department mentor will review and approve it directly.'
    }
];

function Support() {
    const [tickets, setTickets] = useState(defaultTickets);
    const [ticketFilter, setTicketFilter] = useState('All');
    const [openFaq, setOpenFaq] = useState(null);

    // Controlled Form State
    const [formData, setFormData] = useState({
        category: '',
        priority: 'Medium',
        subject: '',
        description: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validate = () => {
        const errors = {};
        if (!formData.category) {
            errors.category = 'Please choose an issue category.';
        }
        if (!formData.subject.trim()) {
            errors.subject = 'Subject headline is required.';
        } else if (formData.subject.trim().length < 4) {
            errors.subject = 'Subject must be at least 4 characters long.';
        }
        if (!formData.description.trim()) {
            errors.description = 'Please describe your query or problem.';
        } else if (formData.description.trim().length < 10) {
            errors.description = 'Please provide at least 10 characters explaining the issue.';
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

        const newId = `TICK-${Math.floor(100 + Math.random() * 900)}`;
        const newTicket = {
            id: newId,
            category: formData.category,
            priority: formData.priority,
            subject: formData.subject.trim(),
            description: formData.description.trim(),
            status: 'Pending',
            date: 'Today'
        };

        setTickets([newTicket, ...tickets]);
        setSuccessMessage(`Support ticket #${newId} submitted successfully! Administration has been notified.`);
        setFormData({
            category: '',
            priority: 'Medium',
            subject: '',
            description: ''
        });
        setFormErrors({});
    };

    const handleReset = () => {
        setFormData({
            category: '',
            priority: 'Medium',
            subject: '',
            description: ''
        });
        setFormErrors({});
        setSuccessMessage('');
    };

    const handleDeleteTicket = (id) => {
        setTickets(tickets.filter(t => t.id !== id));
    };

    const handleToggleStatus = (id) => {
        setTickets(tickets.map(t => {
            if (t.id === id) {
                return {
                    ...t,
                    status: t.status === 'Resolved' ? 'Pending' : 'Resolved'
                };
            }
            return t;
        }));
    };

    const filteredTickets = tickets.filter(t => {
        if (ticketFilter === 'All') return true;
        if (ticketFilter === 'Open') return t.status !== 'Resolved';
        if (ticketFilter === 'Resolved') return t.status === 'Resolved';
        return true;
    });

    return (
        <div className="support-page-container">
            {/* Header Hero Strip */}
            <div className="support-hero-strip">
                <div className="support-hero-box">
                    <div className="s-icon-wrap"><LifeBuoy size={22} /></div>
                    <div className="s-info">
                        <h3>24/7 Grievance Desk</h3>
                        <p>Submit tickets online anytime</p>
                    </div>
                </div>

                <div className="support-hero-box">
                    <div className="s-icon-wrap icon-blue"><MessageSquare size={22} /></div>
                    <div className="s-info">
                        <h3>Live Helpdesk Chat</h3>
                        <p>9:00 AM - 5:00 PM Weekdays</p>
                    </div>
                </div>

                <div className="support-hero-box">
                    <div className="s-icon-wrap icon-amber"><Phone size={22} /></div>
                    <div className="s-info">
                        <h3>Campus Helpline</h3>
                        <p>+91 732276XXXX</p>
                    </div>
                </div>

                <div className="support-hero-box">
                    <div className="s-icon-wrap icon-purple"><Mail size={22} /></div>
                    <div className="s-info">
                        <h3>Official Support Mail</h3>
                        <p>campuscompanion@tech.edu.in</p>
                    </div>
                </div>
            </div>

            {/* Quick Self-Help FAQ Accordion */}
            <div className="faq-quick-card">
                <div className="faq-title-row">
                    <HelpCircle size={20} color="#10b981" />
                    <h4>Frequently Asked Student Questions</h4>
                </div>
                <div className="faq-accordion-list">
                    {faqsData.map((faq, idx) => (
                        <div key={idx} className="faq-item">
                            <button
                                type="button"
                                className="faq-question-btn"
                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                            >
                                <span>{faq.question}</span>
                                <ChevronDown
                                    size={16}
                                    className={`faq-arrow ${openFaq === idx ? 'rotated' : ''}`}
                                />
                            </button>
                            {openFaq === idx && (
                                <div className="faq-answer-body">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Form and Tickets Section */}
            <div className="support-main-grid">
                {/* Raise Ticket Controlled Form */}
                <div className="support-card form-wrapper-card">
                    <div className="card-top-title">
                        <div>
                            <h3>Raise a Support Ticket / Grievance</h3>
                            <p>Direct communication with university administrators</p>
                        </div>
                        <Send size={18} color="#10b981" />
                    </div>

                    {successMessage && (
                        <div className="alert-support-success">
                            <CheckCircle2 size={16} />
                            <span>{successMessage}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} onReset={handleReset} noValidate className="support-form">
                        <div className="form-fields-row">
                            <div className="form-group">
                                <label>Category *</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className={formErrors.category ? 'input-error' : ''}
                                >
                                    <option value="">-- Choose Category --</option>
                                    <option value="Attendance">Attendance Rectification</option>
                                    <option value="Academics">Courseware &amp; Academics</option>
                                    <option value="Hostel & Mess">Hostel, Room &amp; Mess</option>
                                    <option value="Fees & Accounts">Fee Dues &amp; Payments</option>
                                    <option value="Infrastructure">IT &amp; Campus Infrastructure</option>
                                    <option value="Other">General Query</option>
                                </select>
                                {formErrors.category && (
                                    <span className="field-error-msg">
                                        <AlertCircle size={12} /> {formErrors.category}
                                    </span>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Priority Level</label>
                                <select
                                    name="priority"
                                    value={formData.priority}
                                    onChange={handleInputChange}
                                >
                                    <option value="Low">Low - General Inquiry</option>
                                    <option value="Medium">Medium - Regular Resolution</option>
                                    <option value="High">High - Urgent Academic Matter</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Subject / Issue Headline *</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="e.g. Attendance marked absent in OOP lecture"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className={formErrors.subject ? 'input-error' : ''}
                            />
                            {formErrors.subject && (
                                <span className="field-error-msg">
                                    <AlertCircle size={12} /> {formErrors.subject}
                                </span>
                            )}
                        </div>

                        <div className="form-group">
                            <div className="label-with-count">
                                <label>Detailed Description *</label>
                                <span className="char-count">{formData.description.length} chars</span>
                            </div>
                            <textarea
                                name="description"
                                rows="4"
                                placeholder="Describe the issue in detail with dates, classroom, and course details..."
                                value={formData.description}
                                onChange={handleInputChange}
                                className={formErrors.description ? 'input-error' : ''}
                            />
                            {formErrors.description && (
                                <span className="field-error-msg">
                                    <AlertCircle size={12} /> {formErrors.description}
                                </span>
                            )}
                        </div>

                        <div className="form-actions-row">
                            <button type="submit" className="btn-primary-ticket">
                                <PlusCircle size={15} /> Submit Support Ticket
                            </button>
                            <button type="reset" className="btn-secondary-ticket">
                                <RotateCcw size={14} /> Reset
                            </button>
                        </div>
                    </form>
                </div>

                {/* My Tickets List */}
                <div className="support-card tickets-wrapper-card">
                    <div className="card-top-title">
                        <div>
                            <h3>My Tickets &amp; Queries ({tickets.length})</h3>
                            <p>Real-time status tracking and history</p>
                        </div>

                        <div className="ticket-filter-tabs">
                            <button
                                type="button"
                                className={`t-tab ${ticketFilter === 'All' ? 'active' : ''}`}
                                onClick={() => setTicketFilter('All')}
                            >
                                All
                            </button>
                            <button
                                type="button"
                                className={`t-tab ${ticketFilter === 'Open' ? 'active' : ''}`}
                                onClick={() => setTicketFilter('Open')}
                            >
                                Open
                            </button>
                            <button
                                type="button"
                                className={`t-tab ${ticketFilter === 'Resolved' ? 'active' : ''}`}
                                onClick={() => setTicketFilter('Resolved')}
                            >
                                Resolved
                            </button>
                        </div>
                    </div>

                    <div className="tickets-scroll-container">
                        {filteredTickets.length === 0 ? (
                            <p className="no-tickets-msg">No tickets found matching the selected filter.</p>
                        ) : (
                            filteredTickets.map(t => (
                                <div key={t.id} className="ticket-item-card">
                                    <div className="t-card-header">
                                        <div className="t-meta-tags">
                                            <span className="t-id">{t.id}</span>
                                            <span className={`t-priority ${t.priority.toLowerCase()}`}>
                                                {t.priority}
                                            </span>
                                            <span className="t-cat">{t.category}</span>
                                        </div>
                                        <span className={`t-status ${t.status.toLowerCase().replace(' ', '-')}`}>
                                            {t.status}
                                        </span>
                                    </div>

                                    <h4 className="t-subject">{t.subject}</h4>
                                    <p className="t-desc">{t.description}</p>

                                    <div className="t-footer">
                                        <span className="t-date">Filed: {t.date}</span>
                                        <div className="t-actions">
                                            <button
                                                type="button"
                                                className="btn-status-toggle"
                                                onClick={() => handleToggleStatus(t.id)}
                                            >
                                                {t.status === 'Resolved' ? 'Reopen' : 'Mark Resolved'}
                                            </button>
                                            <button
                                                type="button"
                                                className="btn-delete-ticket"
                                                onClick={() => handleDeleteTicket(t.id)}
                                                title="Delete Ticket"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {/* Key Campus Contacts */}
            <div className="support-contacts-section">
                <h3 className="section-title">Key Campus Authorities &amp; Helpdesk</h3>
                <div className="contacts-cards-grid">
                    <div className="authority-card">
                        <div className="auth-avatar">DS</div>
                        <h4>Dr. Saravjeet Singh</h4>
                        <span className="auth-role">Dean of Department</span>
                        <p className="auth-mail">dr.saravjeet@college.edu</p>
                        <p className="auth-phone">+91 98765 5XXXX</p>
                    </div>

                    <div className="authority-card">
                        <div className="auth-avatar">SK</div>
                        <h4>Mr. Sanjay Kumar</h4>
                        <span className="auth-role">Chief Campus Warden</span>
                        <p className="auth-mail">sanjay@college.edu</p>
                        <p className="auth-phone">+91 98765 5XXXX</p>
                    </div>

                    <div className="authority-card">
                        <div className="auth-avatar">KV</div>
                        <h4>Ms. Kavita</h4>
                        <span className="auth-role">Anti-Ragging Chairperson</span>
                        <p className="auth-mail">ms.kavita@college.edu</p>
                        <p className="auth-phone">+91 98765 5XXXX</p>
                    </div>

                    <div className="authority-card">
                        <div className="auth-avatar">RG</div>
                        <h4>Mr. Raghav</h4>
                        <span className="auth-role">Head of Student Accounts</span>
                        <p className="auth-mail">raghav@college.edu</p>
                        <p className="auth-phone">+91 98765 5XXXX</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Support;
