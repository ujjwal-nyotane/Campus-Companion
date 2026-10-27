import { useState } from 'react';
import './css/dashboard.css';
import { useAuth } from '../context/AuthContext.jsx';
import { useCampus } from '../context/CampusContext.jsx';


import {
    Clock,
    MapPin,
    User,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';

function Dashboard() {
    
    const { user } = useAuth();
    const { announcements } = useCampus();
    const studentName = user?.Name || 'Ujjwal';

    // Interactive Calendar state
    const [selectedMonth, setSelectedMonth] = useState(new Date());
    

    
    

    

    return (
        <div className="dashboard-main-container">
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
                                    onClick={() => setSelectedMonth(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() - 1, selectedMonth.getDate()))}
                                >
                                    <ChevronLeft size={16} />
                                </button>
                                <span className="current-month">{selectedMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
                                <button
                                    type="button"
                                    className="arrow-btn"
                                    onClick={() => setSelectedMonth(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1, selectedMonth.getDate()))}
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

                            {
                                (() => {
                                    const firstDayOfMonth = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), 1);
                                    const lastDayOfMonth = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1, 0);
                                    const daysInMonth = lastDayOfMonth.getDate();
                                    const startDay = firstDayOfMonth.getDay();
                                    
                                    const calendarDays = [];
                                    for (let i = 0; i < startDay; i++) {
                                        calendarDays.push(<div key={`empty-${i}`} className="cal-date muted"></div>);
                                    }
                                    for (let i = 1; i <= daysInMonth; i++) {
                                        calendarDays.push(<div key={`date-${i}`} className="cal-date">{i}</div>);
                                        if(i == selectedMonth.getDate() && selectedMonth.getMonth() === new Date().getMonth() && selectedMonth.getFullYear() === new Date().getFullYear()) {
                                            calendarDays[calendarDays.length - 1] = <div key={`date-${i}`} className="cal-date active-date">{i}</div>;
                                        }
                                    }
                                    return calendarDays;
                                })()
                            }
                        </div>
                    </div>



                </div>

            </div>

                <div className="section-card">
                    {/* Bottom Row: Notices */}
                    <div className="dashboard-bottom-grid">
                        {/* Notices Card */}
                        <div className="section-card notices-card">
                            <div className="card-top-header">
                                <h4 className="card-title">Campus Notices</h4>
                            </div>
                            <div className="notices-list">
                                {announcements.slice(0, 20).map((item) => (
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


                    </div>
                </div>
            </div>

            );
}

            export default Dashboard;
