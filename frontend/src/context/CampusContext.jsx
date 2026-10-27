/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';

const CampusContext = createContext(null);

export const normalizeDateKey = (dateInput) => {
    if (!dateInput) return '';
    if (typeof dateInput === 'string' && dateInput.includes('-')) {
        const parts = dateInput.split('-');
        if (parts.length === 3) {
            const [y, m, d] = parts;
            return `${d.padStart(2, '0')}/${m.padStart(2, '0')}/${y}`;
        }
    }
    if (typeof dateInput === 'string' && dateInput.includes('/')) {
        const parts = dateInput.split('/');
        if (parts.length === 3) {
            const [d, m, y] = parts;
            return `${d.padStart(2, '0')}/${m.padStart(2, '0')}/${y}`;
        }
    }
    const d = new Date(dateInput);
    if (!isNaN(d.getTime())) {
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
    }
    return String(dateInput);
};

const initialLeaveRequests = [
    {
        id: 'LV-301',
        studentName: 'Ujjwal Nyotane',
        rollNo: '2510993797',
        department: 'CSE-AIML',
        reason: 'Attending National Hackathon Finals at IIT Delhi',
        startDate: '2026-08-15',
        endDate: '2026-08-17',
        status: 'Pending',
        appliedOn: '2026-08-10'
    },
    {
        id: 'LV-302',
        studentName: 'Ujjwal',
        rollNo: '2510993689',
        department: 'CSE-AIML',
        reason: 'Medical Leave - Severe viral fever',
        startDate: '2026-08-20',
        endDate: '2026-08-22',
        status: 'Approved',
        appliedOn: '2026-08-18'
    }
];

const initialAnnouncements = [
    {
        id: 'ANN-1',
        title: 'Evaluation Component 2 Datesheet & Rubrics Released',
        category: 'Exams',
        postedBy: 'Dr. Sumit (Faculty)',
        date: '24 Aug 2026',
        body: 'Evaluation Component 2 for Front End Engineering will be conducted in Lab Block 3. Students must keep their React projects ready.'
    },
    {
        id: 'ANN-2',
        title: 'Guest Lecture on Advanced Neural Networks',
        category: 'Academics',
        postedBy: 'Dr. Cynthia A.',
        date: '22 Aug 2026',
        body: 'Interactive workshop on Transformers and Generative AI at Multipurpose Hall 2 from 2:00 PM.'
    },
    {
        id: 'ANN-3',
        title: 'Semester Tuition Fee Submission Deadline',
        category: 'Finance',
        postedBy: 'Accounts Office',
        date: '18 Aug 2026',
        body: 'All students are reminded to clear remaining semester dues before 31st December 2026 to avoid late penalty.'
    }
];

const defaultAttendanceRoster = [
    { id: 1, rollNo: '2510993797', name: 'Ujjwal Nyotane', dept: 'CSE-AIML' },
    { id: 2, rollNo: '2510993689', name: 'Ujjwal', dept: 'CSE-AIML' },
    { id: 3, rollNo: '2510993701', name: 'Aman Verma', dept: 'CSE-AIML' },
    { id: 4, rollNo: '2510993715', name: 'Priya Sharma', dept: 'CSE-AIML' },
    { id: 5, rollNo: '2510993723', name: 'Rahul Gupta', dept: 'CSE-AIML' },
    { id: 6, rollNo: '2510993730', name: 'Sneha Patel', dept: 'CSE-AIML' },
    { id: 7, rollNo: '2510993742', name: 'Vikash Kumar', dept: 'CSE-AIML' },
    { id: 8, rollNo: '2510993756', name: 'Anjali Yadav', dept: 'CSE-AIML' }
];

const initialAttendanceData = {
    2510993797: {
        'Front End Engineering': {
            '01/10/2026': 'Present',
            '02/10/2026': 'Present',
            '03/10/2026': 'Absent',
            '05/10/2026': 'Present',
            '06/10/2026': 'Absent',
            '07/10/2026': 'Present',
        },
        'Operating Systems': {
            '01/10/2026': 'Present',
            '02/10/2026': 'Present',
            '03/10/2026': 'Present',
            '05/10/2026': 'Present',
            '06/10/2026': 'Present',
            '07/10/2026': 'Absent',
        },
        'Database Management System': {
            '01/10/2026': 'Present',
            '02/10/2026': 'Present',
            '03/10/2026': 'Absent',
            '05/10/2026': 'Present',
            '06/10/2026': 'Present',
            '07/10/2026': 'Present',
        },
        'Algorithms & Data Structures': {
            '01/10/2026': 'Absent',
            '02/10/2026': 'Present',
            '03/10/2026': 'Absent',
            '05/10/2026': 'Present',
            '06/10/2026': 'Present',
            '07/10/2026': 'Present',
        }
    },
    2510993689: {
        'Front End Engineering': {
            '01/10/2026': 'Present',
            '02/10/2026': 'Present',
            '03/10/2026': 'Present',
            '05/10/2026': 'Present',
            '06/10/2026': 'Absent',
            '07/10/2026': 'Present',
        },
        'Operating Systems': {
            '01/10/2026': 'Present',
            '02/10/2026': 'Absent',
            '03/10/2026': 'Present',
            '05/10/2026': 'Present',
            '06/10/2026': 'Present',
            '07/10/2026': 'Present',
        },
        'Database Management System': {
            '01/10/2026': 'Present',
            '02/10/2026': 'Present',
            '03/10/2026': 'Present',
            '05/10/2026': 'Absent',
            '06/10/2026': 'Present',
            '07/10/2026': 'Present',
        },
        'Algorithms & Data Structures': {
            '01/10/2026': 'Present',
            '02/10/2026': 'Present',
            '03/10/2026': 'Absent',
            '05/10/2026': 'Present',
            '06/10/2026': 'Present',
            '07/10/2026': 'Present',
        }
    }
};

export const CampusProvider = ({ children }) => {
    const [leaveRequests, setLeaveRequests] = useState(() => {
        const saved = localStorage.getItem('campus_leaves');
        return saved ? JSON.parse(saved) : initialLeaveRequests;
    });

    const [announcements, setAnnouncements] = useState(() => {
        const saved = localStorage.getItem('campus_announcements');
        return saved ? JSON.parse(saved) : initialAnnouncements;
    });

    const [attendanceDataState, setAttendanceData] = useState(() => {
        const saved = localStorage.getItem('attendance_data');
        return saved ? JSON.parse(saved) : initialAttendanceData;
    });

    const [attendanceRoster] = useState(defaultAttendanceRoster);

    useEffect(() => {
        localStorage.setItem('campus_leaves', JSON.stringify(leaveRequests));
    }, [leaveRequests]);

    useEffect(() => {
        localStorage.setItem('campus_announcements', JSON.stringify(announcements));
    }, [announcements]);

    useEffect(() => {
        localStorage.setItem('attendance_data', JSON.stringify(attendanceDataState));
    }, [attendanceDataState]);

    const applyLeave = (leaveData) => {
        const newLeave = {
            id: `LV-${Math.floor(300 + Math.random() * 600)}`,
            ...leaveData,
            status: 'Pending',
            appliedOn: new Date().toISOString().split('T')[0]
        };
        setLeaveRequests(prev => [newLeave, ...prev]);
        return newLeave;
    };

    const updateLeaveStatus = (id, newStatus) => {
        setLeaveRequests(prev =>
            prev.map(item => item.id === id ? { ...item, status: newStatus } : item)
        );
    };

    const postAnnouncement = (announcementData) => {
        const newAnn = {
            id: `ANN-${Date.now()}`,
            ...announcementData,
            date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
        };
        setAnnouncements(prev => [newAnn, ...prev]);
        return newAnn;
    };

    const deleteAnnouncement = (id) => {
        setAnnouncements(prev => prev.filter(item => item.id !== id));
    };

    const updateAttendanceStatus = (studentID, subject, date, newStatus) => {
        const dateKey = normalizeDateKey(date);
        const sid = String(studentID);
        setAttendanceData(prev => {
            const studentData = prev[sid] || {};
            const subjectData = studentData[subject] || {};
            return {
                ...prev,
                [sid]: {
                    ...studentData,
                    [subject]: {
                        ...subjectData,
                        [dateKey]: newStatus
                    }
                }
            };
        });
    };

    const markBulkAttendance = (subject, date, studentStatusMap) => {
        const dateKey = normalizeDateKey(date);
        setAttendanceData(prev => {
            const next = { ...prev };
            Object.entries(studentStatusMap).forEach(([studentID, status]) => {
                const sid = String(studentID);
                const studentData = next[sid] || {};
                const subjectData = studentData[subject] || {};
                next[sid] = {
                    ...studentData,
                    [subject]: {
                        ...subjectData,
                        [dateKey]: status
                    }
                };
            });
            return next;
        });
    };

    return (
        <CampusContext.Provider
            value={{
                leaveRequests,
                applyLeave,
                updateLeaveStatus,
                announcements,
                postAnnouncement,
                deleteAnnouncement,
                updateAttendanceStatus,
                markBulkAttendance,
                attendanceDataState,
                attendanceRoster
            }}
        >
            {children}
        </CampusContext.Provider>
    );
};

export const useCampus = () => {
    const context = useContext(CampusContext);
    if (!context) {
        throw new Error('useCampus must be used within a CampusProvider');
    }
    return context;
};
