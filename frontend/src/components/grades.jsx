import './css/grades.css';
import { useGrades } from '../context/GradesContext.jsx';
import {
    Award,
    TrendingUp,
    Download,
    CheckCircle2,
    BookOpen,
    BarChart3,
    Calendar
} from 'lucide-react';

function Grades() {
    const {
        studentName,
        rollNo,
        semesterKeys,
        selectedSemester,
        setSelectedSemester,
        currentSemData: semData,
        aggregateStats,
        getGradeBadgeClass,
        printTranscript: handlePrintTranscript,
    } = useGrades();

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
                        <h2>{aggregateStats.cgpa}</h2>
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
                {semesterKeys.map((sem) => (
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
