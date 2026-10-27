/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';

const CampusContext = createContext(null);

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
const initialAttendanceData = {
    2510993797: {
    'Front End Engineering': 
        {
            '01/10/2026': 'Present',
            '02/10/2026': 'Present',
            '03/10/2026': 'Absent',
            '07/10/2026': 'Present',
            '05/10/2026': 'Present',
            '06/10/2026': 'Absent',
        },
    'Operating Systems':
        {
            '01/10/2026': 'Present',
            '02/10/2026': 'Present',
            '03/10/2026': 'Present',
            '07/10/2026': 'Absent',
            '05/10/2026': 'Present',
            '06/10/2026': 'Present',
        },
    'Database Management System':{
            '01/10/2026': 'Present',
            '02/10/2026': 'Present',
            '03/10/2026': 'Absent',
            '07/10/2026': 'Present',
            '05/10/2026': 'Present',
            '06/10/2026': 'Present',
        },
    'Algorithms & Data Structures': {
            '01/10/2026': 'Absent',
            '02/10/2026': 'Present',
            '03/10/2026': 'Absent',
            '07/10/2026': 'Present',
            '05/10/2026': 'Present',
            '06/10/2026': 'Present',
        }
    }
};


export const CampusProvider = ({ children }) => {
    // Leave requests state (Student applies -> Faculty approves/rejects)
    const [leaveRequests, setLeaveRequests] = useState(() => {
        const saved = localStorage.getItem('campus_leaves');
        return saved ? JSON.parse(saved) : initialLeaveRequests;
    });

    // Announcements state (Faculty posts -> Student reads)
    const [announcements, setAnnouncements] = useState(() => {
        const saved = localStorage.getItem('campus_announcements');
        return saved ? JSON.parse(saved) : initialAnnouncements;
    });

    const [attendanceDataState, setAttendanceData] = useState(() => {
        const saved = localStorage.getItem('attendance_data');
        return saved ? JSON.parse(saved) : initialAttendanceData;
    });


    // Persistence
    useEffect(() => {
        localStorage.setItem('campus_leaves', JSON.stringify(leaveRequests));
    }, [leaveRequests]);

    useEffect(() => {
        localStorage.setItem('campus_announcements', JSON.stringify(announcements));
    }, [announcements]);

    useEffect(() => {
        localStorage.setItem('attendance_data', JSON.stringify(attendanceDataState));
    }, [attendanceDataState]);

    // Student actions
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

    // Faculty actions
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

    
    const updateAttendanceStatus = (studentID,subject,date,newStatus) => {
        setAttendanceData(prev => {
            const studentAttendance = prev[studentID] || [];
            const updatedStudentAttendance = studentAttendance.map(item => {
                if (item.subject === subject ) {
                    const dataa = item[subject] || {};
                    dataa[date] = newStatus;
                    return { ...item, [subject]: dataa };
                }
                return item;

            });
            return { ...prev, [studentID]: updatedStudentAttendance };
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
                attendanceDataState
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
