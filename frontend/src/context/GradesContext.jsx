/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useMemo } from 'react';
import { useAuth } from './AuthContext.jsx';

// ---------------------------------------------------------------------------
// Static grade data (could later be fetched from an API)
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------
const GradesContext = createContext(null);

export const GradesProvider = ({ children }) => {
    const { user } = useAuth();

    // Student identity (falls back to demo values when not authenticated)
    const studentName = user?.Name || 'Ujjwal';
    const rollNo = user?.id || '2510993689';
    const department = 'Department of CSE-AIML';

    // Which semester tab is active
    const [selectedSemester, setSelectedSemester] = useState('Semester 3');

    // All semester keys for tab navigation
    const semesterKeys = Object.keys(semesterResultsData);

    // Data slice for the currently selected semester
    const currentSemData = semesterResultsData[selectedSemester];

    // Derived aggregate stats – recomputed only when semesterKeys changes
    const aggregateStats = useMemo(() => {
        const allSGPAs = semesterKeys.map(key => parseFloat(semesterResultsData[key].sgpa));
        const cgpa = (allSGPAs.reduce((sum, s) => sum + s, 0) / allSGPAs.length).toFixed(2);

        const totalCredits = semesterKeys.reduce(
            (sum, key) => sum + parseInt(semesterResultsData[key].credits, 10),
            0
        );

        const totalBacklogs = semesterKeys.reduce((sum, key) => {
            const failed = semesterResultsData[key].subjects.filter(s => s.status !== 'Pass').length;
            return sum + failed;
        }, 0);

        return { cgpa, totalCredits, totalBacklogs };
    }, [semesterKeys]);

    // CSS class helper for grade badges
    const getGradeBadgeClass = (grade) => {
        switch (grade) {
            case 'O':  return 'grade-badge grade-o';
            case 'A+': return 'grade-badge grade-aplus';
            case 'A':  return 'grade-badge grade-a';
            case 'B+': return 'grade-badge grade-bplus';
            default:   return 'grade-badge';
        }
    };

    // Trigger browser print for official transcript export
    const printTranscript = () => window.print();

    return (
        <GradesContext.Provider
            value={{
                // Student identity
                studentName,
                rollNo,
                department,

                // Semester navigation
                semesterKeys,
                selectedSemester,
                setSelectedSemester,

                // Grade data
                semesterResultsData,
                currentSemData,

                // Aggregate / derived stats
                aggregateStats,

                // Utilities
                getGradeBadgeClass,
                printTranscript,
            }}
        >
            {children}
        </GradesContext.Provider>
    );
};

export const useGrades = () => {
    const context = useContext(GradesContext);
    if (!context) {
        throw new Error('useGrades must be used within a GradesProvider');
    }
    return context;
};
