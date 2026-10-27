import { useState } from "react";
import "./css/timetable.css";
import {
    Calendar as CalendarIcon,
    Clock,
    MapPin,
    User,
    Download,
    CheckCircle2
} from "lucide-react";

const timeSlots = [
    { slot: "Slot 1", time: "08:30 AM - 09:30 AM" },
    { slot: "Slot 2", time: "09:30 AM - 10:30 AM" },
    { slot: "Slot 3", time: "10:45 AM - 11:45 AM" },
    { slot: "Slot 4", time: "11:45 AM - 12:45 PM" },
    { slot: "Lunch",  time: "12:45 PM - 01:30 PM", isBreak: true },
    { slot: "Slot 5", time: "01:30 PM - 02:30 PM" },
    { slot: "Slot 6", time: "02:30 PM - 03:30 PM" }
];

const weeklySchedule = {
    Monday: [
        { subject: "Database Management System", code: "DBMS 209", faculty: "Prof. Raghav", room: "Lab 2", type: "Lab" },
        { subject: "Database Management System", code: "DBMS 209", faculty: "Prof. Raghav", room: "Lab 2", type: "Lab" },
        { subject: "Object Oriented Programming", code: "OOP 203", faculty: "Dr. Saravjeet", room: "Room MB 501", type: "Theory" },
        { subject: "Object Oriented Programming", code: "OOP 203", faculty: "Dr. Saravjeet", room: "Room MB 501", type: "Theory" },
        { isBreak: true, title: "Lunch & Academic Recess" },
        { subject: "Front End Engineering", code: "FEE 301", faculty: "Dr. Sumit", room: "Lab 3", type: "Lab" },
        { subject: "Front End Engineering", code: "FEE 301", faculty: "Dr. Sumit", room: "Lab 3", type: "Lab" }
    ],
    Tuesday: [
        { subject: "Object Oriented Programming", code: "OOP 203", faculty: "Dr. Saravjeet", room: "MB 501", type: "Theory" },
        { subject: "Object Oriented Programming", code: "OOP 203", faculty: "Dr. Saravjeet", room: "MB 501", type: "Theory" },
        { subject: "Statistics & Data Engineering", code: "SDE 241", faculty: "Dr. John Simon", room: "Room 402", type: "Theory" },
        { subject: "Statistics & Data Engineering", code: "SDE 241", faculty: "Dr. John Simon", room: "Room 402", type: "Theory" },
        { isBreak: true, title: "Lunch & Academic Recess" },
        { subject: "Self Study & Library", code: "LIB 001", faculty: "E-Library Staff", room: "Central Library", type: "Self Study" },
        { subject: "Algorithms & Data Structures", code: "ADS 261", faculty: "Dr. Cynthia A.", room: "Hall 2", type: "Theory" }
    ],
    Wednesday: [
        { subject: "Front End Engineering", code: "FEE 301", faculty: "Dr. Sumit", room: "Lab 3", type: "Lab" },
        { subject: "Front End Engineering", code: "FEE 301", faculty: "Dr. Sumit", room: "Lab 3", type: "Lab" },
        { subject: "Algorithms & Data Structures", code: "ADS 261", faculty: "Dr. Cynthia A.", room: "Hall 2", type: "Theory" },
        { subject: "Entrepreneurship 101", code: "ENT 012", faculty: "Ms. Kavita", room: "Room 301", type: "Elective" },
        { isBreak: true, title: "Lunch & Academic Recess" },
        { subject: "Object Oriented Programming", code: "OOP 203", faculty: "Dr. Saravjeet", room: "MB 501", type: "Theory" },
        { subject: "Object Oriented Programming", code: "OOP 203", faculty: "Dr. Saravjeet", room: "MB 501", type: "Theory" }
    ],
    Thursday: [
        { subject: "Statistics & Data Engineering", code: "SDE 241", faculty: "Dr. John Simon", room: "Room 402", type: "Theory" },
        { subject: "Statistics & Data Engineering", code: "SDE 241", faculty: "Dr. John Simon", room: "Room 402", type: "Theory" },
        { subject: "Front End Engineering", code: "FEE 301", faculty: "Dr. Sumit", room: "Lab 3", type: "Lab" },
        { subject: "Front End Engineering", code: "FEE 301", faculty: "Dr. Sumit", room: "Lab 3", type: "Lab" },
        { isBreak: true, title: "Lunch & Academic Recess" },
        { subject: "Database Management System", code: "DBMS 209", faculty: "Prof. Raghav", room: "Lab 2", type: "Theory" },
        { subject: "Database Management System", code: "DBMS 209", faculty: "Prof. Raghav", room: "Lab 2", type: "Theory" }
    ],
    Friday: [
        { subject: "Database Management System", code: "DBMS 209", faculty: "Prof. Raghav", room: "Lab 2", type: "Lab" },
        { subject: "Database Management System", code: "DBMS 209", faculty: "Prof. Raghav", room: "Lab 2", type: "Lab" },
        { subject: "Algorithms & Data Structures", code: "ADS 261", faculty: "Dr. Cynthia A.", room: "Hall 2", type: "Theory" },
        { subject: "Entrepreneurship 101", code: "ENT 012", faculty: "Ms. Kavita", room: "Room 301", type: "Elective" },
        { isBreak: true, title: "Lunch & Academic Recess" },
        { subject: "Object Oriented Programming", code: "OOP 203", faculty: "Dr. Saravjeet", room: "MB 501", type: "Theory" },
        { subject: "Weekly Mentorship & Doubt Session", code: "MNT 300", faculty: "Ms. Lakshita", room: "Block 3", type: "Mentorship" }
    ]
};

const subjectColorClass = (code) => {
    if (!code) return "";
    if (code.includes("FEE")) return "tag-mint";
    if (code.includes("DBMS")) return "tag-blue";
    if (code.includes("OOP")) return "tag-amber";
    if (code.includes("ADS")) return "tag-purple";
    if (code.includes("SDE")) return "tag-cyan";
    if (code.includes("ENT")) return "tag-rose";
    return "tag-gray";
};

function Timetable() {
    const [viewMode, setViewMode] = useState("daily"); // "daily" or "weekly"
    const [activeDay, setActiveDay] = useState("Monday");
    const [selectedFilter, setSelectedFilter] = useState("All");

    const daysList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    const currentDaySchedule = weeklySchedule[activeDay] || [];

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="timetable-page-container">
            {/* Header Card */}
            <div className="tt-header-card">
                <div>
                    <h2 className="tt-main-title">Class Schedule &amp; Timetable</h2>
                    <p className="tt-main-subtitle">
                        BE CSE-AIML 3rd Semester &bull; Batch 2025-29 &bull; Academic Term Fall 2026
                    </p>
                </div>

                <div className="tt-header-actions">
                    <div className="view-toggle-btns">
                        <button
                            type="button"
                            className={`toggle-btn ${viewMode === "daily" ? "active" : ""}`}
                            onClick={() => setViewMode("daily")}
                        >
                            Daily Timeline
                        </button>
                        <button
                            type="button"
                            className={`toggle-btn ${viewMode === "weekly" ? "active" : ""}`}
                            onClick={() => setViewMode("weekly")}
                        >
                            Full Weekly Grid
                        </button>
                    </div>

                    <button type="button" className="btn-download-tt" onClick={handlePrint}>
                        <Download size={15} /> Print / Export
                    </button>
                </div>
            </div>

            {/* Daily View Mode */}
            {viewMode === "daily" && (
                <div className="daily-schedule-layout">
                    {/* Day Selector Navigation Pills */}
                    <div className="days-nav-pills">
                        {daysList.map((day) => (
                            <button
                                key={day}
                                type="button"
                                className={`day-nav-btn ${activeDay === day ? "active" : ""}`}
                                onClick={() => setActiveDay(day)}
                            >
                                <CalendarIcon size={15} />
                                <span>{day}</span>
                            </button>
                        ))}
                    </div>

                    {/* Timeline List of Classes */}
                    <div className="timeline-card">
                        <div className="timeline-header">
                            <h3>{activeDay}'s Schedule Timeline</h3>
                            <span className="classes-count-badge">
                                {currentDaySchedule.filter(c => !c.isBreak).length} Lectures Scheduled
                            </span>
                        </div>

                        <div className="timeline-items-wrapper">
                            {currentDaySchedule.map((item, index) => {
                                const slotInfo = timeSlots[index];
                                if (item.isBreak) {
                                    return (
                                        <div key={index} className="recess-break-row">
                                            <div className="time-col">
                                                <span className="slot-name">{slotInfo.slot}</span>
                                                <span className="slot-time">{slotInfo.time}</span>
                                            </div>
                                            <div className="recess-content">
                                                <Clock size={16} />
                                                <span>{item.title}</span>
                                            </div>
                                        </div>
                                    );
                                }

                                return (
                                    <div key={index} className="timeline-class-row">
                                        <div className="time-col">
                                            <span className="slot-name">{slotInfo.slot}</span>
                                            <span className="slot-time">{slotInfo.time}</span>
                                        </div>

                                        <div className="class-detail-card">
                                            <div className="detail-top-row">
                                                <span className={`course-code-chip ${subjectColorClass(item.code)}`}>
                                                    {item.code}
                                                </span>
                                                <span className="class-type-badge">{item.type}</span>
                                            </div>

                                            <h4 className="subject-title">{item.subject}</h4>

                                            <div className="class-meta-row">
                                                <div className="meta-badge">
                                                    <User size={14} />
                                                    <span>{item.faculty}</span>
                                                </div>
                                                <div className="meta-badge">
                                                    <MapPin size={14} />
                                                    <span>{item.room}</span>
                                                </div>
                                                <div className="meta-badge green-badge">
                                                    <CheckCircle2 size={14} />
                                                    <span>Attendance Verified</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* Full Weekly Grid View */}
            {viewMode === "weekly" && (
                <div className="weekly-grid-card">
                    <div className="weekly-card-header">
                        <div>
                            <h3>Complete Weekly Master Schedule</h3>
                            <p>All periods, practical lab sessions, and classroom venues</p>
                        </div>

                        <div className="filter-subject-select">
                            <label>Filter Subject:</label>
                            <select
                                value={selectedFilter}
                                onChange={(e) => setSelectedFilter(e.target.value)}
                            >
                                <option value="All">All Subjects</option>
                                <option value="Front End Engineering">Front End Engineering</option>
                                <option value="Database Management System">Database Management System</option>
                                <option value="Object Oriented Programming">Object Oriented Programming</option>
                                <option value="Algorithms & Data Structures">Algorithms &amp; Data Structures</option>
                                <option value="Statistics & Data Engineering">Statistics &amp; Data Engineering</option>
                            </select>
                        </div>
                    </div>

                    <div className="weekly-table-responsive">
                        <table className="master-schedule-table">
                            <thead>
                                <tr>
                                    <th className="slot-head">Period / Time</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                </tr>
                            </thead>
                            <tbody>
                                {timeSlots.map((slotInfo, slotIdx) => {
                                    if (slotInfo.isBreak) {
                                        return (
                                            <tr key={slotIdx} className="break-table-row">
                                                <td className="slot-cell">
                                                    <strong>{slotInfo.slot}</strong>
                                                    <span>{slotInfo.time}</span>
                                                </td>
                                                <td colSpan={5} className="break-cell">
                                                    LUNCH &amp; RECESSED ACADEMIC BREAK
                                                </td>
                                            </tr>
                                        );
                                    }

                                    return (
                                        <tr key={slotIdx}>
                                            <td className="slot-cell">
                                                <strong>{slotInfo.slot}</strong>
                                                <span>{slotInfo.time}</span>
                                            </td>

                                            {daysList.map((day) => {
                                                const classItem = weeklySchedule[day][slotIdx];
                                                const isHighlighted =
                                                    selectedFilter === "All" ||
                                                    (classItem?.subject &&
                                                        classItem.subject.toLowerCase().includes(selectedFilter.toLowerCase()));

                                                return (
                                                    <td
                                                        key={day}
                                                        className={`class-cell ${!isHighlighted ? "dimmed" : ""}`}
                                                    >
                                                        <div className="grid-cell-box">
                                                            <div className="cell-top">
                                                                <span className={`cell-code ${subjectColorClass(classItem.code)}`}>
                                                                    {classItem.code}
                                                                </span>
                                                                <span className="cell-room">{classItem.room}</span>
                                                            </div>
                                                            <div className="cell-subject">{classItem.subject}</div>
                                                            <div className="cell-faculty">{classItem.faculty}</div>
                                                        </div>
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Timetable;
