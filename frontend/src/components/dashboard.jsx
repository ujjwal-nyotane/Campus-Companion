import { useState } from 'react';
import './css/dashboard.css';
import { useAuth } from '../context/AuthContext.jsx';
import { useCampus } from '../context/CampusContext.jsx';
import { Link } from 'react-router-dom';
import {
    Clock,
    MapPin,
    User,
    CheckCircle2,
    Plus,
    BookOpen,
    AlertCircle,
    ChevronLeft,
    ChevronRight,
    ExternalLink
} from 'lucide-react';

function Dashboard() {
    const { user } = useAuth();
    const { announcements } = useCampus();
    const studentName = user?.Name || 'Ujjwal';

    // Interactive Calendar state
    const [selectedMonth, setSelectedMonth] = useState('August 2026');

    // Quick Add Event local state
    const [extraEvents, setExtraEvents] = useState([
        { id: 1, title: 'AI Study Group', time: '5:00 PM - 6:00 PM', venue: 'Library Room 4' }
    ]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newEventTitle, setNewEventTitle] = useState('');
    const [newEventTime, setNewEventTime] = useState('');

    const handleAddEvent = (e) => {
        e.preventDefault();
        if (newEventTitle && newEventTime) {
            setExtraEvents(prev => [
                ...prev,
                { id: Date.now(), title: newEventTitle, time: newEventTime, venue: 'Campus Center' }
            ]);
            setNewEventTitle('');
            setNewEventTime('');
            setShowAddModal(false);
        }
    };

    return (
        <div className="dashboard-layout-grid">
            {/* Left/Center Column (Classes, Schedule, Notices, Attendance) */}
            <div className="dashboard-main-col">
                {/* Classes Header & Cards */}
                <div className="section-card classes-container">
                    <div className="classes-header">
                        <div>
                            <h3 className="section-title">Today's Lectures &amp; Classes</h3>
                            <p className="section-subtitle">
                                Good Morning, {studentName} &bull; 3rd Semester, Batch 2025-29
                            </p>
                        </div>
                        <span className="live-pill">Live Academic Day</span>
                    </div>

                    {/* Ongoing Now & Up Next Grid */}
                    <div className="classes-row-grid">
                        {/* Ongoing Now Card */}
                        <div className="class-card ongoing-card">
                            <div className="card-badge-row">
                                <span className="subhead-label text-warning">ONGOING NOW</span>
                                <span className="course-code-tag">FEE 301</span>
                            </div>

                            <h4 className="class-course-title">Front End Engineering</h4>

                            <div className="class-meta-items">
                                <div className="meta-item">
                                    <Clock size={15} />
                                    <span>8:30 AM - 10:30 AM</span>
                                </div>
                                <div className="meta-item">
                                    <User size={15} />
                                    <span>Dr. Sumit (Faculty)</span>
                                </div>
                                <div className="meta-item">
                                    <MapPin size={15} />
                                    <span>Lab 3, Engineering Block</span>
                                </div>
                            </div>

                            <div className="class-actions-row">
                                <Link to="/courses" className="btn-primary-join">
                                    <ExternalLink size={14} /> Join Class
                                </Link>
                                <Link to="/courses" className="btn-secondary-share">
                                    <BookOpen size={14} /> Courseware
                                </Link>
                            </div>
                        </div>

                        {/* Up Next Card */}
                        <div className="class-card upnext-card">
                            <div className="card-badge-row">
                                <span className="subhead-label text-purple">UP NEXT</span>
                                <span className="course-code-tag">CSC 261</span>
                            </div>

                            <h4 className="class-course-title">Algorithms &amp; Data Structures</h4>

                            <div className="class-meta-items">
                                <div className="meta-item">
                                    <Clock size={15} />
                                    <span>11:00 AM - 12:30 PM</span>
                                </div>
                                <div className="meta-item">
                                    <User size={15} />
                                    <span>Dr. Cynthia A.</span>
                                </div>
                                <div className="meta-item">
                                    <MapPin size={15} />
                                    <span>Multipurpose Building 2</span>
                                </div>
                            </div>

                            <div className="class-actions-row">
                                <button
                                    type="button"
                                    className="btn-outline-reminder"
                                    onClick={() => alert('Reminder set for 10:45 AM!')}
                                >
                                    + ADD REMINDER
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Happening Later Today */}
                    <div className="later-section">
                        <span className="subhead-label">HAPPENING LATER TODAY</span>
                        <div className="later-grid">
                            <div className="later-card">
                                <div className="later-card-top">
                                    <h5>Neural Networks</h5>
                                    <span className="code-chip">CSC 231</span>
                                </div>
                                <p className="later-time">2:00 PM - 3:30 PM</p>
                                <p className="later-faculty">Dr. Cynthia A.</p>
                            </div>

                            <div className="later-card">
                                <div className="later-card-top">
                                    <h5>Database Systems</h5>
                                    <span className="code-chip">CSC 209</span>
                                </div>
                                <p className="later-time">3:45 PM - 5:00 PM</p>
                                <p className="later-faculty">Prof. Raghav</p>
                            </div>

                            {extraEvents.map(evt => (
                                <div key={evt.id} className="later-card custom-event-card">
                                    <div className="later-card-top">
                                        <h5>{evt.title}</h5>
                                        <span className="code-chip green-chip">Event</span>
                                    </div>
                                    <p className="later-time">{evt.time}</p>
                                    <p className="later-faculty">{evt.venue}</p>
                                </div>
                            ))}

                            <button
                                type="button"
                                className="add-event-dashed-card"
                                onClick={() => setShowAddModal(true)}
                            >
                                <Plus size={20} />
                                <span>+ Add Event</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Notices + Attendance Progress */}
                <div className="dashboard-bottom-grid">
                    {/* Notices Card */}
                    <div className="section-card notices-card">
                        <div className="card-top-header">
                            <h4 className="card-title">Campus Notices</h4>
                            <Link to="/support" className="view-link">View All</Link>
                        </div>
                        <div className="notices-list">
                            {announcements.slice(0, 3).map((item) => (
                                <div key={item.id} className="notice-row">
                                    <div className="notice-indicator">
                                        <span className="notice-dot"></span>
                                    </div>
                                    <div className="notice-content">
                                        <h5>{item.title}</h5>
                                        <p>{item.body}</p>
                                        <span className="notice-date">{item.date} &bull; {item.postedBy}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Virtual Class Attendance Widget */}
                    <div className="section-card attendance-widget-card">
                        <div className="card-top-header">
                            <h4 className="card-title">Attendance Overview</h4>
                            <Link to="/attendance" className="view-link">View History</Link>
                        </div>

                        <div className="attendance-metric-display">
                            <div className="metric-row">
                                <span className="metric-label">Semester Aggregate</span>
                                <span className="metric-val">88%</span>
                            </div>
                            <div className="progress-track">
                                <div className="progress-fill" style={{ width: '88%' }}></div>
                            </div>
                        </div>

                        <div className="attendance-subject-rows">
                            <div className="subject-att-row">
                                <span className="subject-tag">FEE 301</span>
                                <span className="subject-name">Front End Engineering</span>
                                <span className="verified-pill">
                                    <CheckCircle2 size={13} /> 92% Verified
                                </span>
                            </div>
                            <div className="subject-att-row">
                                <span className="subject-tag">CSC 209</span>
                                <span className="subject-name">Database Systems</span>
                                <span className="verified-pill">
                                    <CheckCircle2 size={13} /> 86% Verified
                                </span>
                            </div>
                            <div className="subject-att-row">
                                <span className="subject-tag">CSC 261</span>
                                <span className="subject-name">Algorithms &amp; DS</span>
                                <span className="verified-pill">
                                    <CheckCircle2 size={13} /> 85% Verified
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column (Interactive Calendar + Enrolled Courses) */}
            <div className="dashboard-side-col">
                {/* Mini Calendar Widget */}
                <div className="section-card calendar-card">
                    <div className="calendar-header">
                        <h4 className="calendar-title">Calendar</h4>
                        <div className="month-selector">
                            <button
                                type="button"
                                className="arrow-btn"
                                onClick={() => setSelectedMonth('July 2026')}
                            >
                                <ChevronLeft size={16} />
                            </button>
                            <span className="current-month">{selectedMonth}</span>
                            <button
                                type="button"
                                className="arrow-btn"
                                onClick={() => setSelectedMonth('August 2026')}
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>

                    <div className="calendar-grid">
                        <div className="cal-day-name">Sun</div>
                        <div className="cal-day-name">Mon</div>
                        <div className="cal-day-name">Tue</div>
                        <div className="cal-day-name">Wed</div>
                        <div className="cal-day-name">Thu</div>
                        <div className="cal-day-name">Fri</div>
                        <div className="cal-day-name">Sat</div>

                        {/* Sample Calendar Days */}
                        <div className="cal-date muted">26</div>
                        <div className="cal-date muted">27</div>
                        <div className="cal-date muted">28</div>
                        <div className="cal-date muted">29</div>
                        <div className="cal-date muted">30</div>
                        <div className="cal-date muted">31</div>
                        <div className="cal-date">1</div>

                        <div className="cal-date">2</div>
                        <div className="cal-date">3</div>
                        <div className="cal-date">4</div>
                        <div className="cal-date">5</div>
                        <div className="cal-date">6</div>
                        <div className="cal-date">7</div>
                        <div className="cal-date">8</div>

                        <div className="cal-date">9</div>
                        <div className="cal-date">10</div>
                        <div className="cal-date">11</div>
                        <div className="cal-date">12</div>
                        <div className="cal-date">13</div>
                        <div className="cal-date">14</div>
                        <div className="cal-date">15</div>

                        <div className="cal-date">16</div>
                        <div className="cal-date active-date">17</div>
                        <div className="cal-date">18</div>
                        <div className="cal-date">19</div>
                        <div className="cal-date">20</div>
                        <div className="cal-date">21</div>
                        <div className="cal-date">22</div>

                        <div className="cal-date">23</div>
                        <div className="cal-date">24</div>
                        <div className="cal-date">25</div>
                        <div className="cal-date">26</div>
                        <div className="cal-date">27</div>
                        <div className="cal-date">28</div>
                        <div className="cal-date">29</div>
                        <div className="cal-date">30</div>
                        <div className="cal-date">31</div>
                    </div>
                </div>

                {/* Courses Widget */}
                <div className="section-card enrolled-courses-card">
                    <div className="card-top-header">
                        <h4 className="card-title">My Courses</h4>
                        <Link to="/courses" className="view-link">View All</Link>
                    </div>

                    <div className="info-callout">
                        <AlertCircle size={16} />
                        <span>Registered for 5 Core Subjects (Fall 2026)</span>
                    </div>

                    <div className="courses-mini-list">
                        <div className="course-item-box">
                            <div className="course-info-col">
                                <h5>Front End Engineering</h5>
                                <span>4 Hours &bull; Twice weekly</span>
                            </div>
                            <Link to="/courses" className="btn-courseware">COURSEWARE</Link>
                        </div>

                        <div className="course-item-box">
                            <div className="course-info-col">
                                <h5>Algorithms &amp; Data Structures</h5>
                                <span>3 Hours &bull; Twice weekly</span>
                            </div>
                            <Link to="/courses" className="btn-courseware">COURSEWARE</Link>
                        </div>

                        <div className="course-item-box">
                            <div className="course-info-col">
                                <h5>Database Management Systems</h5>
                                <span>4 Hours &bull; Weekly</span>
                            </div>
                            <Link to="/courses" className="btn-courseware">COURSEWARE</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Add Event Modal */}
            {showAddModal && (
                <div className="modal-backdrop">
                    <div className="modal-content">
                        <h4>Add Calendar Event</h4>
                        <form onSubmit={handleAddEvent}>
                            <div className="form-group">
                                <label>Event Title</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Lab Revision Session"
                                    value={newEventTitle}
                                    onChange={(e) => setNewEventTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Time &amp; Duration</label>
                                <input
                                    type="text"
                                    placeholder="e.g. 4:00 PM - 5:30 PM"
                                    value={newEventTime}
                                    onChange={(e) => setNewEventTime(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="modal-actions">
                                <button type="submit" className="btn-save-event">Save Event</button>
                                <button
                                    type="button"
                                    className="btn-cancel-event"
                                    onClick={() => setShowAddModal(false)}
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

export default Dashboard;
