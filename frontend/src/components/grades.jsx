import { useState } from 'react';
import './css/grades.css';
import { useAuth } from '../context/AuthContext.jsx';
import {
    Award,
    TrendingUp,
    Download,
    CheckCircle2,
    BookOpen,
    BarChart3,
    Calendar
} from 'lucide-react';

const semesterResultsData = {
    'Semester 3': {
        sgpa: '9.86',
        credits: '20',
        totalPoints: '196',
        resultStatus: 'Passed with High Distinction',
        subjects: [
            { code: '25CSE0203', name: 'Front End Engineering', type: 'Core Theory & Lab', credits: 4.0, grade: 'O', points: 10, status: 'Pass' },
            { code: '25CSE0205', name: 'Algorithms & Data Structures', type: 'Core Theory', credits: 4.0, grade: 'A+', points: 9, status: 'Pass' },
            { code: '25CSE0209', name: 'Database Management Systems', type: 'Core Theory & Lab', credits: 4.0, grade: 'O', points: 10, status: 'Pass' },
            { code: '25CSE0207', name: 'Operating Systems & Linux', type: 'Core Theory', credits: 4.0, grade: 'A+', points: 9, status: 'Pass' },
            { code: '24UNI012', name: 'Entrepreneurship 101', type: 'Elective', credits: 2.0, grade: 'O', points: 10, status: 'Pass' },
            { code: '25CSE0211', name: 'AI & Data Engineering Lab', type: 'Practical Lab', credits: 2.0, grade: 'O', points: 10, status: 'Pass' }
        ],
        assessments: [
            { subject: 'Front End Engineering', type: 'Evaluation Component 1', obtained: 24, total: 25, percentage: '96%' },
            { subject: 'Database Management Systems', type: 'Periodic Evaluation PE-1', obtained: 23, total: 25, percentage: '92%' },
            { subject: 'Operating Systems & Linux', type: 'Lab Practical Viva', obtained: 19, total: 20, percentage: '95%' },
            { subject: 'Algorithms & Data Structures', type: 'Sessional Test ST-1', obtained: 28, total: 30, percentage: '93.3%' },
            { subject: 'Entrepreneurship 101', type: 'Pitch Deck & Case Study', obtained: 48, total: 50, percentage: '96%' }
        ]
    },
    'Semester 2': {
        sgpa: '9.62',
        credits: '22',
        totalPoints: '211',
        resultStatus: 'Passed with Distinction',
        subjects: [
            { code: '24CSE0108', name: 'Object Oriented Programming with C++', type: 'Core Theory & Lab', credits: 4.0, grade: 'A+', points: 9, status: 'Pass' },
            { code: '24CSE0110', name: 'Computer Organization & Architecture', type: 'Core Theory', credits: 4.0, grade: 'A', points: 8, status: 'Pass' },
            { code: '24CSE0112', name: 'Discrete Mathematical Structures', type: 'Core Theory', credits: 4.0, grade: 'O', points: 10, status: 'Pass' },
            { code: '24CSE0114', name: 'Python for Data Science', type: 'Core Lab', credits: 4.0, grade: 'O', points: 10, status: 'Pass' },
            { code: '24UNI005', name: 'Environmental Studies', type: 'University Mandatory', credits: 2.0, grade: 'A+', points: 9, status: 'Pass' },
            { code: '24CSE0116', name: 'Engineering Design Project', type: 'Project Lab', credits: 4.0, grade: 'A+', points: 9, status: 'Pass' }
        ],
        assessments: [
            { subject: 'Object Oriented Programming', type: 'Mid-Term Exam', obtained: 45, total: 50, percentage: '90%' },
            { subject: 'Python for Data Science', type: 'Capstone Project Evaluation', obtained: 49, total: 50, percentage: '98%' },
            { subject: 'Computer Architecture', type: 'Sessional Quiz 2', obtained: 18, total: 20, percentage: '90%' },
            { subject: 'Discrete Mathematics', type: 'Final Assessment', obtained: 88, total: 100, percentage: '88%' }
        ]
    },
    'Semester 1': {
        sgpa: '9.45',
        credits: '22',
        totalPoints: '208',
        resultStatus: 'Passed with Distinction',
        subjects: [
            { code: '24CSE0102', name: 'Fundamentals of C Programming', type: 'Core Theory & Lab', credits: 4.0, grade: 'A+', points: 9, status: 'Pass' },
            { code: '24CSE0105', name: 'Foundations of AI & Algorithms', type: 'Core Theory', credits: 3.0, grade: 'A', points: 8, status: 'Pass' },
            { code: '24CSE0103', name: 'Digital Logic & Circuit Design', type: 'Core Theory', credits: 4.0, grade: 'A+', points: 9, status: 'Pass' },
            { code: '24MTH0101', name: 'Applied Calculus & Linear Algebra', type: 'Core Theory', credits: 4.0, grade: 'O', points: 10, status: 'Pass' },
            { code: '24ENG0101', name: 'Professional Communication Skills', type: 'Humanities', credits: 3.0, grade: 'O', points: 10, status: 'Pass' },
            { code: '24CSE0104', name: 'Computer Workshop & Shell Lab', type: 'Practical Lab', credits: 4.0, grade: 'A+', points: 9, status: 'Pass' }
        ],
        assessments: [
            { subject: 'Fundamentals of C Programming', type: 'Lab Practical Viva', obtained: 46, total: 50, percentage: '92%' },
            { subject: 'Applied Calculus', type: 'Sessional Test ST-1', obtained: 29, total: 30, percentage: '96.7%' },
            { subject: 'Digital Logic Design', type: 'Periodic Test PE-1', obtained: 23, total: 25, percentage: '92%' }
        ]
    }
};

const getGradeBadgeClass = (grade) => {
    switch (grade) {
        case 'O': return 'grade-badge grade-o';
        case 'A+': return 'grade-badge grade-aplus';
        case 'A': return 'grade-badge grade-a';
        case 'B+': return 'grade-badge grade-bplus';
        default: return 'grade-badge';
    }
};

function Grades() {
    const { user } = useAuth();
    const studentName = user?.Name || 'Ujjwal';
    const rollNo = user?.id || '2510993689';

    const [selectedSemester, setSelectedSemester] = useState('Semester 3');
    const semData = semesterResultsData[selectedSemester];

    const handlePrintTranscript = () => {
        window.print();
    };

    return (
        <div className="grades-page-container">
            {/* Page Header */}
            <div className="grades-header-card">
                <div>
                    <h2 className="grades-main-title">Academic Results &amp; Grade Card</h2>
                    <p className="grades-main-subtitle">
                        Student: {studentName} &bull; Roll No: {rollNo} &bull; Department of CSE-AIML
                    </p>
                </div>

                <button type="button" className="btn-export-grades" onClick={handlePrintTranscript}>
                    <Download size={15} /> Export Official Transcript
                </button>
            </div>

            {/* Performance Overview Hero Strip */}
            <div className="grades-hero-grid">
                <div className="g-stat-box highlight-cgpa">
                    <div className="g-stat-icon">
                        <Award size={24} />
                    </div>
                    <div className="g-stat-content">
                        <h2>9.76</h2>
                        <h3>Cumulative GPA (CGPA)</h3>
                        <span className="standing-pill">Dean's Honors &bull; Top 2%</span>
                    </div>
                </div>

                <div className="g-stat-box">
                    <div className="g-stat-icon icon-blue">
                        <TrendingUp size={24} />
                    </div>
                    <div className="g-stat-content">
                        <h2>{semData.sgpa}</h2>
                        <h3>{selectedSemester} SGPA</h3>
                        <span className="meta-info-text">{semData.resultStatus}</span>
                    </div>
                </div>

                <div className="g-stat-box">
                    <div className="g-stat-icon icon-amber">
                        <BookOpen size={24} />
                    </div>
                    <div className="g-stat-content">
                        <h2>64 / 64</h2>
                        <h3>Earned Degree Credits</h3>
                        <span className="meta-info-text">100% On-Track to Graduate</span>
                    </div>
                </div>

                <div className="g-stat-box">
                    <div className="g-stat-icon icon-purple">
                        <CheckCircle2 size={24} />
                    </div>
                    <div className="g-stat-content">
                        <h2>0</h2>
                        <h3>Active Backlogs / Arrears</h3>
                        <span className="meta-info-text">All Courses Cleared First Attempt</span>
                    </div>
                </div>
            </div>

            {/* Interactive Semester Selection Tabs */}
            <div className="semester-tabs-bar">
                {Object.keys(semesterResultsData).map((sem) => (
                    <button
                        key={sem}
                        type="button"
                        className={`sem-tab-btn ${selectedSemester === sem ? 'active' : ''}`}
                        onClick={() => setSelectedSemester(sem)}
                    >
                        <Calendar size={15} />
                        <span>{sem}</span>
                        {sem === 'Semester 3' && <span className="current-badge">Latest</span>}
                    </button>
                ))}
            </div>

            {/* Main Result Grids: Detailed Grade Card & Continuous Assessments */}
            <div className="grades-content-grid">
                {/* Official Semester Grade Card Table */}
                <div className="results-card gradecard-wrapper">
                    <div className="results-card-header">
                        <div>
                            <h3>{selectedSemester} Grade Sheet</h3>
                            <p>Official course-wise letter grades &amp; awarded grade points</p>
                        </div>
                        <div className="sgpa-pill-box">
                            <span>SGPA:</span>
                            <strong>{semData.sgpa}</strong>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="results-modern-table">
                            <thead>
                                <tr>
                                    <th>Course Code</th>
                                    <th>Subject Name</th>
                                    <th>Course Type</th>
                                    <th>Credits</th>
                                    <th>Grade</th>
                                    <th>Points</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {semData.subjects.map((sub, idx) => (
                                    <tr key={idx}>
                                        <td className="font-bold text-code">{sub.code}</td>
                                        <td className="subject-name-cell">{sub.name}</td>
                                        <td>
                                            <span className="type-chip">{sub.type}</span>
                                        </td>
                                        <td className="font-bold">{sub.credits.toFixed(1)}</td>
                                        <td>
                                            <span className={getGradeBadgeClass(sub.grade)}>
                                                {sub.grade}
                                            </span>
                                        </td>
                                        <td className="font-bold">{sub.points}</td>
                                        <td>
                                            <span className="pass-chip">
                                                <CheckCircle2 size={12} /> {sub.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="tfoot-summary-row">
                                    <td colSpan={3} className="text-right font-bold">Total Semester Credits &amp; SGPA:</td>
                                    <td className="font-bold">{semData.credits} Credits</td>
                                    <td colSpan={2} className="font-bold text-green">SGPA: {semData.sgpa}</td>
                                    <td className="font-bold text-green">&#10004; {semData.resultStatus.split(' ')[0]}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                {/* Continuous Assessment & Midterm Marks Card */}
                <div className="results-card assessment-wrapper">
                    <div className="results-card-header">
                        <div>
                            <h3>Continuous Assessments &amp; Sessional Marks</h3>
                            <p>Quizzes, periodic tests, assignments, and practical vivas</p>
                        </div>
                        <BarChart3 size={20} color="#10b981" />
                    </div>

                    <div className="table-responsive">
                        <table className="results-modern-table">
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Assessment Component</th>
                                    <th>Marks (MO / MM)</th>
                                    <th>Score %</th>
                                </tr>
                            </thead>
                            <tbody>
                                {semData.assessments.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className="font-bold">{item.subject}</td>
                                        <td>
                                            <span className="assessment-type-pill">{item.type}</span>
                                        </td>
                                        <td className="font-bold">
                                            {item.obtained} / {item.total}
                                        </td>
                                        <td>
                                            <div className="score-progress-wrap">
                                                <div className="score-bar">
                                                    <div
                                                        className="score-fill"
                                                        style={{ width: item.percentage }}
                                                    ></div>
                                                </div>
                                                <span className="score-txt">{item.percentage}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="grade-legend-box">
                        <span className="legend-title">Grading Scale Guide:</span>
                        <div className="legend-chips-row">
                            <span className="legend-chip"><strong className="text-green">O</strong>: Outstanding (10 pts)</span>
                            <span className="legend-chip"><strong className="text-blue">A+</strong>: Excellent (9 pts)</span>
                            <span className="legend-chip"><strong className="text-indigo">A</strong>: Very Good (8 pts)</span>
                            <span className="legend-chip"><strong className="text-amber">B+</strong>: Good (7 pts)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Grades;
