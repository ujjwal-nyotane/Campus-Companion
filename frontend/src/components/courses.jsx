import { useState } from 'react';
import './css/courses.css';
import { FileText, Download, Search, User } from 'lucide-react';

const coursesData = [
    {
        id: 'FEE-301',
        title: 'Front End Engineering',
        code: '25CSE0203',
        instructor: 'Dr. Sumit',
        credits: 4,
        type: 'Core Lab & Theory',
        semester: 'Semester 3',
        attendance: '92%',
        description: 'Advanced web development with React 19, Component architecture, Context API, React Router, and state management.',
        modules: ['React Fundamentals & Hooks', 'React Router & Navigation Layouts', 'Context API & Global State', 'Form Handling & Validation'],
        materials: ['Module 1: React 19 Slides.pdf', 'Lab Assignment 2: Router & Outlets.zip', 'Component Lifecycle Notes.pdf']
    },
    {
        id: 'CSC-261',
        title: 'Algorithms & Data Structures',
        code: '25CSE0205',
        instructor: 'Dr. Cynthia A.',
        credits: 4,
        type: 'Core Theory',
        semester: 'Semester 3',
        attendance: '85%',
        description: 'Design and analysis of efficient algorithms, divide-and-conquer, greedy techniques, dynamic programming, and graph theory.',
        modules: ['Asymptotic Analysis & Recurrences', 'Divide and Conquer & Sorting', 'Dynamic Programming', 'Graph Algorithms & Shortest Path'],
        materials: ['Syllabus & Lecture Schedule.pdf', 'Dynamic Programming Problem Set.pdf']
    },
    {
        id: 'CSC-209',
        title: 'Database Management Systems',
        code: '25CSE0209',
        instructor: 'Prof. Raghav',
        credits: 4,
        type: 'Core Lab & Theory',
        semester: 'Semester 3',
        attendance: '86%',
        description: 'Relational data model, SQL querying, normalization (1NF to BCNF), indexing, transactions, and ACID properties.',
        modules: ['Entity-Relationship Data Modeling', 'Relational Algebra & Advanced SQL', 'Normalization & Schema Refinement', 'Transactions & Concurrency Control'],
        materials: ['SQL Practice Query Bank.sql', 'Normalization Cheat Sheet.pdf']
    },
    {
        id: 'CSC-207',
        title: 'Operating Systems',
        code: '25CSE0207',
        instructor: 'Dr. Saravjeet Singh',
        credits: 3,
        type: 'Core Theory',
        semester: 'Semester 3',
        attendance: '88%',
        description: 'Process management, thread synchronization, deadlocks, memory management, virtual memory paging, and file systems.',
        modules: ['Process Synchronization & Mutexes', 'CPU Scheduling Algorithms', 'Virtual Memory & Page Replacement', 'File System Implementation'],
        materials: ['OS Cheatsheet & Viva Prep.pdf', 'POSIX Threads Lab Sheet.pdf']
    },
    {
        id: 'UNI-012',
        title: 'Entrepreneurship 101',
        code: '24UNI012',
        instructor: 'Ms. Kavita',
        credits: 2,
        type: 'University Elective',
        semester: 'Semester 3',
        attendance: '94%',
        description: 'Idea validation, business model canvas, venture capital pitching, intellectual property rights, and startup scaling.',
        modules: ['Opportunity Discovery & Empathy Mapping', 'Business Model Canvas', 'Financial Projections & Pitch Decks'],
        materials: ['Pitch Deck Template.pptx', 'Case Studies in Tech Ventures.pdf']
    }
];

function Courses() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCourse, setSelectedCourse] = useState(coursesData[0]);

    const filteredCourses = coursesData.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="courses-page-container">
            <div className="courses-header-bar">
                <div>
                    <h2 className="courses-title">Enrolled Courses &amp; Courseware</h2>
                    <p className="courses-subtitle">Fall 2026 Academic Term &bull; 5 Registered Subjects</p>
                </div>
                <div className="course-search-box">
                    <Search size={16} />
                    <input
                        type="text"
                        placeholder="Search courses or codes..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="courses-main-grid">
                {/* Course Cards List */}
                <div className="courses-cards-col">
                    {filteredCourses.map(course => (
                        <div
                            key={course.id}
                            className={`course-card-item ${selectedCourse.id === course.id ? 'active' : ''}`}
                            onClick={() => setSelectedCourse(course)}
                        >
                            <div className="card-top">
                                <span className="course-badge">{course.code}</span>
                                <span className="credits-pill">{course.credits} Credits</span>
                            </div>
                            <h3 className="course-name">{course.title}</h3>
                            <div className="course-instructor">
                                <User size={14} />
                                <span>{course.instructor}</span>
                            </div>
                            <div className="card-bottom">
                                <span className="course-type">{course.type}</span>
                                <span className="att-tag">Att: {course.attendance}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Course Details & Courseware Panel */}
                <div className="course-details-panel">
                    <div className="detail-header">
                        <div>
                            <span className="detail-code">{selectedCourse.code} &bull; {selectedCourse.semester}</span>
                            <h2 className="detail-title">{selectedCourse.title}</h2>
                            <p className="detail-instructor">Course Faculty: <strong>{selectedCourse.instructor}</strong></p>
                        </div>
                        <div className="detail-meta-box">
                            <div className="meta-col">
                                <span className="lbl">Credits</span>
                                <span className="val">{selectedCourse.credits}</span>
                            </div>
                            <div className="meta-col">
                                <span className="lbl">Attendance</span>
                                <span className="val green">{selectedCourse.attendance}</span>
                            </div>
                        </div>
                    </div>

                    <div className="detail-section">
                        <h4>Course Overview</h4>
                        <p className="overview-txt">{selectedCourse.description}</p>
                    </div>

                    <div className="detail-section">
                        <h4>Syllabus Modules</h4>
                        <div className="modules-list">
                            {selectedCourse.modules.map((mod, idx) => (
                                <div key={idx} className="module-item">
                                    <span className="mod-idx">{idx + 1}</span>
                                    <span>{mod}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="detail-section">
                        <h4>Course Materials &amp; Downloads</h4>
                        <div className="materials-list">
                            {selectedCourse.materials.map((mat, idx) => (
                                <div key={idx} className="material-item">
                                    <div className="mat-info">
                                        <FileText size={18} className="mat-icon" />
                                        <span>{mat}</span>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn-download"
                                        onClick={() => alert(`Downloading: ${mat}`)}
                                    >
                                        <Download size={14} />
                                        <span>Download</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;
