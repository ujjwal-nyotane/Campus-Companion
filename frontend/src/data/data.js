const students = {
    2510993797: {
        id: 2510993797,
        Role: "Student",
        password: "1234",
        Name: "Ujjwal Nyotane"
    },
    2510993689: {
        id: 2510993689,
        Role: "Student",
        password: "1234",
        Name: "Ujjwal"
    },
    2510993499: {
        id: 2510993499,
        Role: "Student",
        password: "1234",
        Name: "Ritika"
    },
    CET0001: {
        id: "CET0001",
        Role: "Faculty",
        password: "1234",
        Name: "Sumit",
    }
}
export default students
export { departments, users, hostels }




const departments = {
    "CSE AI & ML": {
        departmentname: "CSE AI & ML",
        duration: "4",
        block: "Martin Block",
        Advisor: "Dr. Ramesh Kumar Meena",
        Notifications: {
            Academic: {
                "Midterm Exams": "Midterm exams for all subjects will be held from 15th to 20th May. Please check the timetable for details.-10 May 2026",
            },
            Finance: {
                "Fee Payment Deadline": "The deadline for fee payment for the upcoming semester is 30th June. Please ensure to complete the payment to avoid late fees.-25 April 2026",
            },
            Events: {
                "Tech Talk": "Join us for an exciting tech talk on 'The Future of AI' by Dr. Anjali Sharma on 5th May at 3 PM in the Martin Block Auditorium.-28 April 2026",
            },
            General: {
                "Department Meeting": "There will be a department meeting on 12th May at 2 PM in the conference room. All students are encouraged to attend.-5 May 2026",
            },
        },

        FAQs: {
            "How to register for courses?": "You can register for courses through the student portal. Log in with your credentials, navigate to the 'Course Registration' section, and select your desired courses for the semester.",
            "What are the library timings?": "The library is open from 8 AM to 10 PM on weekdays and from 9 AM to 5 PM on weekends. It is closed on public holidays.",
            "How to apply for hostel accommodation?": "To apply for hostel accommodation, please fill out the hostel application form available on the student portal. Submit the form along with the required documents before the deadline.",
            "What is the procedure for applying for leave?": "To apply for leave, please fill out the leave application form available on the student portal. Submit the form along with the required documents before the deadline.",
            "Is there a student counseling service available?": "Yes, we have a student counseling service available. You can book an appointment with our counselors through the student portal or visit the counseling center located in the Martin Block.",
        },
        subjects: {
            '1': {
                S1: { name: "Python Fundamentals", credit: "5", teacher: "Mrs. Deepali" },
                S2: { name: "Introduction to Web Development", credit: "3", teacher: "Mrs. Divyanshi" },
                S3: { name: "Digital Electronic and Computer Architecture", credit: "3", teacher: "Mr. Tejraj" },
                S4: { name: "Linear Algebra and Calculus", credit: "4", teacher: "Mr. Mohit Dhuria" },
                S5: { name: "Foundation of Computer Science", credit: "3", teacher: "Mrs. Ramesh Kumar Meena" },
                S6: { name: "Introduction to Artificial Intelligence", creidt: "3", teacher: "Mr. Mukund Kumar Jha" },

            },
            '2': {
                S7: { name: "Fundamentals of C Programming", credit: "4", teacher: "Mr. Anuj" },
                S8: { name: "Front End Engineering", credit: "3", teacher: "Mr. Divyash Sharma" },
                S9: { name: "Discrete Mathematics", credit: "2", teacher: "Mr. Gurpreet" },
                S10: { name: "Operating System and Linux Fundamentals", credit: "3", teacher: "Mr. Aakash Kumar" },
                S11: { name: "Fundamentals of AI Algorithms", credit: "4", teacher: "Mr. Prabhjot Singh Manocha" },
            },
            '3': {
                S12: { name: "Data Structures and Algorithm", credit: "4", teacher: "Mrs. Fatima" },
                S13: { name: "Database Management System", credit: "3", teacher: "Mr. Abhinav Tyagi" },
                S14: { name: "Computer Networks", credit: "3", teacher: "Mr. Lokesh Sharma " },
                S15: { name: "Software Engineering", credit: "3", teacher: "Mr. Ashutosh Singh" },
                S16: { name: "AI and Machine Learning Lab", credit: "4", teacher: "Mr. Naveen Patel" },
            },
            '4': {
                S17: { name: "Data Science and Visualization", credit: "4", teacher: "Mrs. Anjali" },
                S18: { name: "Cloud Computing", credit: "3", teacher: "Mr. Satyam Samrat" },
                S19: { name: "Cyber Security", credit: "3", teacher: "Mr. Kuldeep Billa" },
                S20: { name: "AI Ethics and Society", credit: "2", teacher: "Mrs. Taifa Ayoub Mir" },
                S21: { name: "AI Capstone Project", credit: "4", teacher: "Mr. Duleep Singh" },
            },
            '5': {
                S22: { name: "Natural Language Processing", credit: "4", teacher: "Mrs. Ritu" },
                S23: { name: "Computer Vision", credit: "4", teacher: "Mr. Ankit Kumar" },
                S24: { name: "Reinforcement Learning", credit: "3", teacher: "Mr. Satyarth" },
                S25: { name: "AI in Healthcare", credit: "3", teacher: "Mrs. Anushka" },
                S26: { name: "AI Research Methodology", credit: "3", teacher: "Mr. Prateek Jain" },
            },
            '6': {
                S27: { name: "Deep Learning", credit: "4", teacher: "Mr. Anubhav" },
                S28: { name: "AI in Finance", credit: "3", teacher: "Mr. Anshul" },
                S29: { name: "AI in Robotics", credit: "3", teacher: "Mr. Raghav" },
                S30: { name: "AI in Natural Language Processing", credit: "4", teacher: "Mrs. Sambhavi" },
                S31: { name: "AI in Computer Vision", credit: "4", teacher: "Mr. Arjun" },
            },
            '7': {
                S32: { name: "AI in Autonomous Systems", credit: "4", teacher: "Mr. Pulkit Sooryavanshi" },
                S33: { name: "AI in Gaming", credit: "3", teacher: "Mr. Tarandeep Singh" },
                S34: { name: "AI in Natural Language Processing", credit: "4", teacher: "Mr. Vaibhav Kaushal" },
                S35: { name: "AI in Computer Vision", credit: "4", teacher: "Mr. Aman Kumar" },
                S36: { name: "AI Capstone Project I", credit: "4", teacher: "Mr. Darshan Arora" },
            },

            '8': {
                S37: { name: "Java Programming", credit: "4", teacher: "Mr. Ankit Narwal" },
                S38: { name: "Network Security", credit: "3", teacher: "Mr. Vikas Rajana" },
                S39: { name: "AI Model Training", credit: "4", teacher: "Mr. Ashok Dinda" },
                S40: { name: "AI in Analytics", credit: "4", teacher: "Ms Gargi" },
                S14: { name: "AI Capstone Project II", credit: "4", teacher: "Mr. Kulbhushan Chaddha" },
            },
        },
        "timetable": {
            "1": {

                "MON": { "1": "S1", "2": "S2", "3": "S3", "4": "S5", "5": "S6", "6": "S4" },
                "TUE": { "1": "S3", "2": "S5", "3": "S4", "4": "S2", "5": "S1", "6": "S6" },
                "WED": { "1": "S6", "2": "S6", "3": "S4", "4": "S2", "5": "S3", "6": "S1" },
                "THU": { "1": "S1", "2": "S2", "3": "S4", "4": "S4", "5": "S2", "6": "S5" },
                "FRI": { "1": "S3", "2": "S4", "3": "S4", "4": "S2", "5": "S5", "6": "S5" },

            },
            "2": {
                "MON": { "1": "S10", "2": "S10", "3": "S9", "4": "S9", "5": "S7", "6": "S7" },
                "TUE": { "1": "S8", "2": "S8", "3": "S7", "4": "S7", "5": "S11", "6": "S11" },
                "WED": { "1": "S10", "2": "S10", "3": "S9", "4": "S9", "5": "S7", "6": "S7" },
                "THU": { "1": "S8", "2": "S8", "3": "S7", "4": "S7", "5": "S11", "6": "S11" },
                "FRI": { "1": "S10", "2": "S10", "3": "S8", "4": "S8", "5": "S7", "6": "S7" },
            },
            "3": {

                "MON": { "1": "S13", "2": "S14", "3": "S12", "4": "S12", "5": "S16", "6": "S16" },
                "TUE": { "1": "S12", "2": "S12", "3": "S14", "4": "S14", "5": "S13", "6": "S13" },
                "WED": { "1": "S12", "2": "S12", "3": "S14", "4": "S14", "5": "S15", "6": "S15" },
                "THU": { "1": "S13", "2": "S13", "3": "S16", "4": "S16", "5": "S12", "6": "S12" },
                "FRI": { "1": "S14", "2": "S16", "3": "S16", "4": "S12", "5": "S15", "6": "S13" },
            },
            "4": {
                "MON": { "1": "S17", "2": "S17", "3": "S19", "4": "S20", "5": "S21", "6": "S18" },
                "TUE": { "1": "S18", "2": "S18", "3": "S17", "4": "S17", "5": "S19", "6": "S19" },
                "WED": { "1": "S21", "2": "S21", "3": "S20", "4": "S20", "5": "S19", "6": "S20" },
                "THU": { "1": "S18", "2": "S18", "3": "S17", "4": "S17", "5": "S19", "6": "S19" },
                "FRI": { "1": "S17", "2": "S19", "3": "S20", "4": "S20", "5": "S21", "6": "S18" },
            },
            "5": {
                "MON": { "1": "S22", "2": "S22", "3": "S24", "4": "S25", "5": "S26", "6": "S23" },
                "TUE": { "1": "S23", "2": "S23", "3": "S22", "4": "S22", "5": "S24", "6": "S24" },
                "WED": { "1": "S26", "2": "S26", "3": "S25", "4": "S25", "5": "S24", "6": "S24" },
                "THU": { "1": "S23", "2": "S23", "3": "S22", "4": "S22", "5": "S24", "6": "S24" },
                "FRI": { "1": "S22", "2": "S21", "3": "S25", "4": "S25", "5": "S26", "6": "S23" },
            },
            "6": {
                "MON": { "1": "S27", "2": "S27", "3": "S29", "4": "S30", "5": "S31", "6": "S28" },
                "TUE": { "1": "S28", "2": "S28", "3": "S27", "4": "S27", "5": "S29", "6": "S29" },
                "WED": { "1": "S31", "2": "S31", "3": "S30", "4": "S30", "5": "S29", "6": "S29" },
                "THU": { "1": "S28", "2": "S28", "3": "S27", "4": "S27", "5": "S29", "6": "S29" },
                "FRI": { "1": "S27", "2": "S29", "3": "S30", "4": "S30", "5": "S31", "6": "S28" },
            },
            "7": {
                "MON": { "1": "S32", "2": "S32", "3": "S34", "4": "S35", "5": "S36", "6": "S33" },
                "TUE": { "1": "S33", "2": "S33", "3": "S32", "4": "S32", "5": "S34", "6": "S34" },
                "WED": { "1": "S36", "2": "S36", "3": "S35", "4": "S35", "5": "S34", "6": "S34" },
                "THU": { "1": "S33", "2": "S33", "3": "S32", "4": "S32", "5": "S34", "6": "S34" },
                "FRI": { "1": "S32", "2": "S35", "3": "S35", "4": "S33", "5": "S36", "6": "S33" },
            },
            "8": {
                "MON": { "1": "S41", "2": "S37", "3": "S39", "4": "S39", "5": "S40", "6": "S38" },
                "TUE": { "1": "S38", "2": "S41", "3": "S41", "4": "S37", "5": "S39", "6": "S39" },
                "WED": { "1": "S40", "2": "S39", "3": "S38", "4": "S38", "5": "S37", "6": "S37" },
                "THU": { "1": "S38", "2": "S38", "3": "S37", "4": "S40", "5": "S39", "6": "S39" },
                "FRI": { "1": "S37", "2": "S40", "3": "S39", "4": "S38", "5": "S38", "6": "S41" },
            },
        },
        leaves: {
            "2510993660": {
                "LV65778324733": {
                    approvestatus: "pending",
                    contact: "9354551403",
                    doc: "",
                    from: "2026-04-27",
                    guardian: "Dilbag Singh",
                    reason: "arm fracture",
                    to: "2026-05-01",
                    type: "casual",
                    applytime: "30-4-2026",
                },
                "LV57685467523": {
                    approvestatus: "pending",
                    contact: "7896541230",
                    doc: "",
                    from: "2026-03-19",
                    guardian: "Dilbag Singh",
                    reason: "fever",
                    to: "2026-03-20",
                    type: "medical",
                    applytime: "30-03-2026",
                }
            },
            "2510993661": {

            }
        },
        "fees": {
            "feedetails": {
                "Academic Fees": "155000",
                "CAS Fees": "20000",
                "Hostel Fees": "46000",
                "Mess Fees": "30000",
                "Subscription Fees": "1500",
            },
            "feehistory": {
                "2510993660": {
                    "2": {
                        "TXN202643023495012": {
                            "paid on": "12-04-2026",
                            "paymentmethod": "UPI",
                            "amount": "102450",
                        },
                    },
                },
                "2510993661": {
                    "4": {},
                },
            }
        }

    },
    "Mechanical Engineering": {
        departmentname: "Mechanical Engineering",
        duration: "4",
        block: "Newton Block",
        Advisor: "Dr. Suresh Kumar",
        Notifications: {
            Academic: {
                "Midterm Exams": "Midterm exams for all subjects will be held from 20th to 25th May. Please check the timetable for details.-10 May 2026",
            },
            Finance: {
                "Fee Payment Deadline": "The deadline for fee payment for the upcoming semester is 30th June. Please ensure to complete the payment to avoid late fees.-25 April 2026",
            },
            Events: {
                "Robotics Workshop": "Join us for an exciting workshop on 'Robotics and Automation' by Dr. Anil Kumar on 10th May at 4 PM in the Newton Block Auditorium.-28 April 2026",
            },
            General: {
                "Department Meeting": "There will be a department meeting on 15th May at 3 PM in the conference room. All students are encouraged to attend.-5 May 2026",
            },
        },

        FAQs: {
            "How to register for courses?": "You can register for courses through the student portal. Log in with your credentials, navigate to the 'Course Registration' section, and select your desired courses for the semester.",
            "What are the library timings?": "The library is open from 8 AM to 10 PM on weekdays and from 9 AM to 5 PM on weekends. It is closed on public holidays.",
            "How to apply for hostel accommodation?": "To apply for hostel accommodation, please fill out the hostel application form available on the student portal. Submit the form along with the required documents before the deadline.",
            "What is the procedure for applying for leave?": "To apply for leave, please fill out the leave application form available on the student portal. Submit the form along with the required documents before the deadline.",
            "Is there a student counseling service available?": "Yes, we have a student counseling service available. You can book an appointment with our counselors through the student portal or visit the counseling center located in the Newton Block.",
        },
        subjects: {
            '1': {
                S1: { name: "Engineering Mechanics", credit: "4", teacher: "Dr. Suresh Kumar" },
                S2: { name: "Thermodynamics", credit: "4", teacher: "Dr. Anil Kumar" },
                S3: { name: "Fluid Mechanics", credit: "4", teacher: "Dr. Ramesh Kumar" },
                S4: { name: "Material Science", credit: "3", teacher: "Dr. Priya Sharma" },
                S5: { name: "Manufacturing Processes", credit: "3", teacher: "Dr. Amit Singh" },
                S6: { name: "Computer-Aided Design", credit: "3", teacher: "Dr. Neha Gupta" },
            },
            '2': {
                S7: { name: "Dynamics of Machinery", credit: "4", teacher: "Dr. Trupti Sharma" },
                S8: { name: "Heat Transfer", credit: "4", teacher: "Mr. Virender Kumar" },
                S9: { name: "Machine Design", credit: "4", teacher: "Ms. Preethi Nair" },
                S10: { name: "Control Systems", credit: "3", teacher: "Ms. Devanshi" },
                S11: { name: "Automobile Engineering", credit: "3", teacher: "Dr. Amit Singh" },
            },
            '3': {
                S12: { name: "Robotics", credit: "4", teacher: "Mr. Priyanshu Madaan" },
                S13: { name: "Renewable Energy Systems", credit: "4", teacher: "Mr. Abhisek" },
                S14: { name: "Finite Element Analysis", credit: "4", teacher: "Mr. Amit Saini" },
                S15: { name: "Mechatronics", credit: "3", teacher: "Dr. Pranjal Dahiya" },
                S16: { name: "Aerospace Engineering", credit: "3", teacher: "Ms. Jasmine Sandlas" },
            },
            '4': {
                S17: { name: "Advanced Manufacturing", credit: "4", teacher: "Ms Radhika Megha" },
                S18: { name: "Computational Fluid Dynamics", credit: "4", teacher: "Mr. Abhay" },
                S19: { name: "Vibration Analysis", credit: "4", teacher: "Mr. Massom Sharma" },
                S20: { name: "Energy Management", credit: "3", teacher: "Ms. Ammant" },
                S21: { name: "Project Management", credit: "3", teacher: "Dr. Jaskirat" },
            },
            '5': {
                S22: { name: "Advanced Robotics", credit: "4", teacher: "Ms. Chitali " },
                S23: { name: "Sustainable Energy Systems", credit: "4", teacher: "Ms. Ridhima Kaur" },
                S24: { name: "Advanced Finite Element Analysis", credit: "4", teacher: "Dr. Dishita Kaur" },
                S25: { name: "Advanced Mechatronics", credit: "3", teacher: "Ms. Manvi Garg" },
                S26: { name: "Aerospace Propulsion", credit: "3", teacher: "Dr. Anjali Arora" },
            },
            '6': {
                S27: { name: "Robotics and Automation", credit: "4", teacher: "Ms. Gunjan" },
                S28: { name: "Energy Systems Analysis", credit: "4", teacher: "Ms. Angel Priya" },
                S29: { name: "Finite Element Methods", credit: "4", teacher: "Ms. Jagriti Narwal" },
                S30: { name: "Mechatronic Systems Design", credit: "3", teacher: "Dr. Ruhan Gupta" },
                S31: { name: "Aerospace Structures", credit: "3", teacher: "Mr. Rohit Sharma" },
            },
            '7': {
                S32: { name: "Advanced Robotics and Automation", credit: "4", teacher: "Dr. Karan" },
                S33: { name: "Energy Systems Optimization", credit: "4", teacher: "Mr. Mohit Kumar" },
                S34: { name: "Advanced Finite Element Methods", credit: "4", teacher: "Dr. Anshul" },
                S35: { name: "Mechatronic Systems Integration", credit: "3", teacher: "Ms. Riya" },
                S36: { name: "Aerospace Systems", credit: "3", teacher: "Dr. Chirag Awana" },
            },
            '8': {
                S37: { name: "Robotics and Automation in Industry", credit: "4", teacher: "Dr. Aditya" },
                S38: { name: "Energy Systems Modeling", credit: "4", teacher: "Ms. Anshika" },
                S39: { name: "Finite Element Analysis in Practice", credit: "4", teacher: "Dr. Anjali Arora" },
                S40: { name: "Mechatronic Systems in Industry", credit: "3", teacher: "Mr. Tanishq" },
                S41: { name: "Aerospace Systems Design", credit: "3", teacher: "Dr. Ruhan Gupta" },
            }




        },
        "timetable": {
            "1": {
                "MON": { "1": "S1", "2": "S2", "3": "S3", "4": "S4", "5": "S5", "6": "S6" },
                "TUE": { "1": "S2", "2": "S3", "3": "S4", "4": "S5", "5": "S6", "6": "S1" },
                "WED": { "1": "S3", "2": "S4", "3": "S5", "4": "S6", "5": "S1", "6": "S2" },
                "THU": { "1": "S4", "2": "S5", "3": "S6", "4": "S1", "5": "S2", "6": "S3" },
                "FRI": { "1": "S5", "2": "S6", "3": "S1", "4": "S2", "5": "S3", "6": "S4" },
            },
            "2": {
                "MON": { "1": "S7", "2": "S8", "3": "S9", "4": "S10", "5": "S11", "6": "S11" },
                "TUE": { "1": "S8", "2": "S9", "3": "S10", "4": "S11", "5": "S7", "6": "S7" },
                "WED": { "1": "S9", "2": "S10", "3": "S11", "4": "S7", "5": "S8", "6": "S8" },
                "THU": { "1": "S10", "2": "S11", "3": "S7", "4": "S8", "5": "S9", "6": "S9" },
                "FRI": { "1": "S11", "2": "S7", "3": "S8", "4": "S9", "5": "S10", "6": "S10" },
            },
            "3": {
                "MON": { "1": "S12", "2": "S13", "3": "S14", "4": "S15", "5": "S16", "6": "S16" },
                "TUE": { "1": "S13", "2": "S14", "3": "S15", "4": "S16", "5": "S12", "6": "S12" },
                "WED": { "1": "S14", "2": "S15", "3": "S16", "4": "S12", "5": "S13", "6": "S13" },
                "THU": { "1": "S15", "2": "S16", "3": "S12", "4": "S13", "5": "S14", "6": "S14" },
                "FRI": { "1": "S16", "2": "S12", "3": "S13", "4": "S14", "5": "S15", "6": "S15" },
            },
            "4": {
                "MON": { "1": "S17", "2": "S18", "3": "S19", "4": "S20", "5": "S21", "6": "S21" },
                "TUE": { "1": "S18", "2": "S19", "3": "S20", "4": "S21", "5": "S17", "6": "S17" },
                "WED": { "1": "S19", "2": "S20", "3": "S21", "4": "S17", "5": "S18", "6": "S18" },
                "THU": { "1": "S20", "2": "S21", "3": "S17", "4": "S18", "5": "S19", "6": "S19" },
                "FRI": { "1": "S21", "2": "S17", "3": "S18", "4": "S19", "5": "S20", "6": "S20" },
            },
            "5": {
                "MON": { "1": "S22", "2": "S23", "3": "S24", "4": "S25", "5": "S26", "6": "S26" },
                "TUE": { "1": "S23", "2": "S24", "3": "S25", "4": "S26", "5": "S22", "6": "S22" },
                "WED": { "1": "S24", "2": "S25", "3": "S26", "4": "S22", "5": "S23", "6": "S23" },
                "THU": { "1": "S25", "2": "S26", "3": "S22", "4": "S23", "5": "S24", "6": "S24" },
                "FRI": { "1": "S26", "2": "S22", "3": "S23", "4": "S24", "5": "S25", "6": "S25" },
            },
            "6": {
                "MON": { "1": "S27", "2": "S28", "3": "S29", "4": "S30", "5": "S31", "6": "S31" },
                "TUE": { "1": "S28", "2": "S29", "3": "S30", "4": "S31", "5": "S27", "6": "S27" },
                "WED": { "1": "S29", "2": "S30", "3": "S31", "4": "S27", "5": "S28", "6": "S28" },
                "THU": { "1": "S30", "2": "S31", "3": "S27", "4": "S28", "5": "S29", "6": "S29" },
                "FRI": { "1": "S31", "2": "S27", "3": "S28", "4": "S29", "5": "S30", "6": "S30" },
            },
            "7": {
                "MON": { "1": "S32", "2": "S33", "3": "S34", "4": "S35", "5": "S36", "6": "S36" },
                "TUE": { "1": "S33", "2": "S34", "3": "S35", "4": "S36", "5": "S32", "6": "S32" },
                "WED": { "1": "S34", "2": "S35", "3": "S36", "4": "S32", "5": "S33", "6": "S33" },
                "THU": { "1": "S35", "2": "S36", "3": "S32", "4": "S33", "5": "S34", "6": "S34" },
                "FRI": { "1": "S36", "2": "S32", "3": "S33", "4": "S34", "5": "S35", "6": "S35" },
            },
            "8": {
                "MON": { "1": "S37", "2": "S38", "3": "S39", "4": "S40", "5": "S41", "6": "S41" },
                "TUE": { "1": "S38", "2": "S39", "3": "S40", "4": "S41", "5": "S37", "6": "S37" },
                "WED": { "1": "S39", "2": "S40", "3": "S41", "4": "S37", "5": "S38", "6": "S38" },
                "THU": { "1": "S40", "2": "S41", "3": "S37", "4": "S38", "5": "S39", "6": "S39" },
                "FRI": { "1": "S41", "2": "S37", "3": "S38", "4": "S39", "5": "S40", "6": "S40" },
            },
        },

        leaves: {
            "2510993662": {

            },
        },
        fees: {
            feedetails: {
                "Academic Fees": "100000",
                "CAS Fees": "20000",
                "Hostel Fees": "40000",
                "Mess Fees": "30000",
                "Subscription Fees": "1500",
            },
            feehistory: {
                "2510993662": {
                    "4": {},
                },


            },
        },

    },
}

const users = {
    "2510993660": {
        user_ID: "2510993660",
        password: "123123Vm@",
        role: "student",
        firstName: "Vishwas",
        lastName: "Mahiwal",
        rollNo: "2510993660",
        enrollmentYear: "2025",
        department: "CSE AI & ML",
        hostel: "Alfred Nobel",
        RoomNo: "205",
        Messplan: "Active",
        DOB: "2007-08-15",
        Gender: "Male",
        Nationality: "Indian",
        BloodGroup: "B+",
        AdhaarNo: "1234 5678 9012",
        Category: "General",
        Religon: "Hindu",
        AdmissionType: "Jee Mains",
        PersonalEmail: "vishwas.mahiwal@example.com",
        UniversityEmail: "vishwas.mahiwal@university.edu",
        PersonalContact: "8954231597",
        FatherName: "Dilbag Singh",
        HostelAllotment: "Aug 2025",
        FatherContact: "9856321245",
        FatherOccupation: "Businessman",
        MotherName: "Suman Singh",
        MotherContact: "9876543210",
        AnnualIncome: "10,00,000",
        EmergencyContact: "9876543210",
        PermanentAddress: "123, Green Street, Jaipur- 302001",
        currentAddress: "123, Green Street, Jaipur- 302001",
        myTickets: {
            TKT86451320: {
                "Category": "Academic/Results",
                "Priority": "Medium",
                "contactmethod": "Email",
                "Submitted": "2026-04-25 14:30",
                "Status": "Open",
                "Title": "Attendance marked wrong in the portal",
                "Description": "I have noticed that my attendance for the subject 'Discrete Mathematics' is marked as absent for the date 20th April, but I was present in the class. Kindly look into this issue and update my attendance record accordingly.",
            },


        },
    },
    "2510993661": {
        user_ID: "2510993661",
        password: "123123As@",
        role: "student",
        firstName: "Anjali",
        lastName: "Sharma",
        rollNo: "2510993661",
        enrollmentYear: "2024",
        department: "CSE AI & ML",
        hostel: "Vasco Da Gama",
        RoomNo: "305",
        Messplan: "Active",
        DOB: "2006-05-20",
        Gender: "Female",
        Nationality: "Indian",
        Religon: "Hindu",
        BloodGroup: "A+",
        AdhaarNo: "2345 6789 0123",
        Category: "OBC",
        AdmissionType: "Jee Mains",
        PersonalEmail: "anjali.sharma@example.com",
        UniversityEmail: "anjali.sharma@university.edu",
        PersonalContact: "8954231597",
        FatherName: "Ramesh Sharma",
        HostelAllotment: "Aug 2024",
        FatherContact: "9856321245",
        FatherOccupation: "Engineer",
        MotherName: "Priya Sharma",
        MotherContact: "9876543210",
        AnnualIncome: "10,00,000",
        EmergencyContact: "9876543210",
        PermanentAddress: "123, Red Street, Jaipur- 302001",
        currentAddress: "123, Red Street, Jaipur- 302001",
        myTickets: {
            TKT86451320: {
                "Category": "Academic/Results",
                "Priority": "Medium",
                "contactmethod": "Email",
                "Submitted": "2026-04-25 14:30",
                "Status": "Open",
                "Title": "Result marked wrong in the portal",
                "Description": "I have noticed that my result for the subject 'Cloud Computing' is marked wrong, Kindly look into this issue and update my result record accordingly.",
            },


        },
    },
    "2510993662": {
        user_ID: "2510993662",
        password: "123123Rv@",
        role: "student",
        firstName: "Rahul",
        lastName: "Verma",
        rollNo: "2510993662",
        enrollmentYear: "2024",
        department: "Mechanical Engineering",
        hostel: "Alfred Nobel",
        RoomNo: "107",
        Messplan: "Active",
        DOB: "2006-12-10",
        Gender: "Male",
        Nationality: "Indian",
        Religon: "Hindu",
        BloodGroup: "O+",
        AdhaarNo: "3456 7890 1234",
        Category: "SC",
        AdmissionType: "Jee Mains",
        PersonalEmail: "rahul.verma@example.com",
        UniversityEmail: "rahul.verma@university.edu",
        PersonalContact: "8954231597",
        FatherName: "Rajesh Verma",
        HostelAllotment: "Aug 2024",
        FatherContact: "9856321245",
        FatherOccupation: "Engineer",
        MotherName: "Priya Verma",
        MotherContact: "9876543210",
        AnnualIncome: "10,00,000",
        EmergencyContact: "9876543210",
        PermanentAddress: "123, Blue Street, Jaipur- 302001",
        currentAddress: "123, Blue Street, Jaipur- 302001",
        myTickets: {
            TKT86451320: {
                "Category": "Academic/Results",
                "Priority": "Medium",
                "contactmethod": "Email",
                "Submitted": "2026-04-25 14:30",
                "Status": "Open",
                "Title": "Attendance marked wrong in the portal",
                "Description": "I have noticed that my attendance for the subject 'Advanced Manufacturing' is marked as absent for the date 20th April, but I was present in the class. Kindly look into this issue and update my attendance record accordingly.",
            },


        },
    },
    "CET001": {
        user_ID: "CET001",
        password: "123123Cet@",
        role: "admin"
    }
}

const hostels = {
    "Alfred Nobel": {
        hostelname: "Alfred Nobel",
        warden: "Mr.  Vijay Singh",
        contact: "9876543210",
        RoomsTypes: "Four Seater Non AC Attached Washroom",
        Mess: "ALred Nobel Mess",
        Timigs: "24x7",
        Facilities: {
            Wifi: "Available",
            Laundry: "Wed,Sat",
            Gymnasium: "Available",
            CommonRoom: "Available",
            Canteen: "7:00 AM - 10:00 PM",
            MedicalRoom: "24x7",
            HotWater: "7-9am,7-10pm",
            Parking: " Not Available",

        },


    },
    "Vasco Da Gama": {
        hostelname: "Vasco Da Gama",
        warden: "Ms. Kavita Sharma",
        contact: "9876543210",
        RoomsTypes: "three Seater AC Attached Washroom",
        Mess: "Vasco Da Gama Mess",
        Timigs: "24x7",
        Facilities: {
            Wifi: "Available",
            Laundry: "Tue,Fri",
            Gymnasium: "Available",
            CommonRoom: "Available",
            Canteen: "7:00 AM - 10:00 PM",
            MedicalRoom: "24x7",
            HotWater: "7-9am,7-10pm",
            AC: "Available",
        },

    },

    MessMenu: {
        Monday: {
            Breakfast: {
                Veg: ["Aloo Paratha", "Curd", "Tea"],
                NonVeg: ["Omelette"]
            },
            Lunch: {
                Veg: ["Dal", "Rice", "Salad"],
                NonVeg: ["Chicken"]
            },
            Snacks: {
                Veg: ["Pani Puri"],
                NonVeg: ["Chicken Tikka"]
            },
            Dinner: {
                Veg: ["Khichdi", "Raita", "Papdi"],
                NonVeg: ["Chicken Biryani"]
            },
        },
        Tuesday: {
            Breakfast: {
                Veg: ["Masala dosa", "Chutney", "Tea", "Sambhar"],
                NonVeg: ["Egg Bhurji"]
            },
            Lunch: {
                Veg: ["Rajma", "Chawal", "Roti", "Salad"],
                NonVeg: ["fish curry"]
            },
            Snacks: {
                Veg: ["Mad angles"],
                NonVeg: ["Chicken Roll"]
            },
            Dinner: {
                Veg: ["Kofta Curry", "Raita", "Gulab Jamun", "Roti"],
                NonVeg: ["Mutton Curry"]
            }
        },
        Wednesday: {
            Breakfast: {
                Veg: ["Paneer Paratha", "Curd", "Tea"],
                NonVeg: ["Egg Paratha"]
            },
            Lunch: {
                Veg: ["Moong Dal", "Chawal", "Roti"],
                NonVeg: ["Egg Curry"]
            },
            Snacks: {
                Veg: ["Poha"],
                NonVeg: ["Chicken lollipop"]
            },
            Dinner: {
                Veg: ["Dal Tadka", "Rice", "Naan"],
                NonVeg: ["Chicken Korma"]
            },
        },
        Thursday: {
            Breakfast: {
                Veg: ["Potato Sandwich", "Tea"],
                NonVeg: ["Egg Sandwich"]
            },
            Lunch: {
                Veg: ["Chole", "Chawal", "Roti"],
                NonVeg: ["Egg Butter Masala"]
            },
            Snacks: {
                Veg: ["Breadroll"],
                NonVeg: ["Chicken Roll"]
            },
            Dinner: {
                Veg: ["Rajma", "Chawal", "Roti"],
                NonVeg: ["Fish Curry"]
            },
        },
        Friday: {
            Breakfast: {
                Veg: ["Plain paratha", "Curd", "Tea"],
                NonVeg: ["Egg Paratha"]
            },
            Lunch: {
                Veg: ["Black Chana", "Chawal", "Roti"],
                NonVeg: ["Chicken Curry"]
            },
            Snacks: {
                Veg: ["Biscuits"],
                NonVeg: ["Chicken Nuggets"]
            },
            Dinner: {
                Veg: ["Shahi Paneer", "Roti", "Gulab Jamun"],
                NonVeg: ["Mutton Biryani"]
            },
        },
        Saturday: {
            Breakfast: {
                Veg: ["Paneer Sandwich", "Poha", "Tea"],
                NonVeg: ["Egg Sandwich"]
            },
            Lunch: {
                Veg: ["Arhar Dal", "Chawal", "Roti"],
                NonVeg: ["Egg Curry"]
            },
            Snacks: {
                Veg: ["Pani Puri"],
                NonVeg: ["Chicken Tikka"]
            },
            Dinner: {
                Veg: ["Shahi Chaap", "Rice", "Naan"],
                NonVeg: ["Chicken lollipop"]
            },
        },
        Sunday: {
            Breakfast: {
                Veg: ["Mix Paratha", "Curd", "Tea"],
                NonVeg: ["Egg Paratha"]
            },
            Lunch: {
                Veg: ["Malai Kofta", "Raita", "Roti"],
                NonVeg: ["Mutton Curry"]
            },
            Snacks: {
                Veg: ["Cream Roll"],
                NonVeg: ["Chicken Roll"]
            },
            Dinner: {
                Veg: ["Kofta Curry", "Raita", "Gulab Jamun", "Roti"],
                NonVeg: ["Fish Curry"]
            },
        },
    },
    Notices: {
        "Maintence Work": "Hostel maintenance work will be carried out on 8th May. Please ensure to keep your rooms clean and cooperate with the staff.-02 May 2026",
    }
};
