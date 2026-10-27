import { createSlice } from '@reduxjs/toolkit';

// ─── Initial seed data ────────────────────────────────────────────────────────
const initialNotices = [
    {
        id: 'ANN-001',
        title: 'EC-2 Submission Deadline Extended',
        category: 'Assignments',
        body: 'The Evaluation Component 2 submission deadline for AIML batch has been extended to 5th November 2026. Upload on the portal before midnight.',
        postedBy: 'Dr. Sumit (Faculty)',
        date: '25 Oct 2026',
    },
    {
        id: 'ANN-002',
        title: 'Guest Lecture on Generative AI',
        category: 'Events',
        body: 'A guest lecture by industry expert Mr. Arjun Mehta (Google DeepMind) is scheduled on 28 Oct 2026 at Seminar Hall A. Attendance is compulsory.',
        postedBy: 'Dr. Sumit (Faculty)',
        date: '24 Oct 2026',
    },
];

// ─── Slice ─────────────────────────────────────────────────────────────────────
const noticesSlice = createSlice({
    name: 'notices',
    initialState: {
        items: initialNotices,
        filter: 'All',      // active category filter
        status: 'idle',     // 'idle' | 'success' — tracks last action
        lastPostedTitle: '',
    },
    reducers: {
        // Add a new announcement
        addNotice(state, action) {
            const newNotice = {
                id: `ANN-${Date.now()}`,
                date: new Date().toLocaleDateString('en-IN', {
                    day: '2-digit', month: 'short', year: 'numeric',
                }),
                ...action.payload,
            };
            state.items.unshift(newNotice);   // prepend so latest is first
            state.status = 'success';
            state.lastPostedTitle = newNotice.title;
        },

        // Remove a notice by id
        deleteNotice(state, action) {
            state.items = state.items.filter(n => n.id !== action.payload);
        },

        // Change the active category filter
        setFilter(state, action) {
            state.filter = action.payload;
        },

        // Clear the "success" flash state after the toast is shown
        clearStatus(state) {
            state.status = 'idle';
            state.lastPostedTitle = '';
        },
    },
});

export const { addNotice, deleteNotice, setFilter, clearStatus } = noticesSlice.actions;

// ─── Selectors ─────────────────────────────────────────────────────────────────
export const selectAllNotices = (state) => state.notices.items;

export const selectFilteredNotices = (state) => {
    const { items, filter } = state.notices;
    if (filter === 'All') return items;
    return items.filter(n => n.category === filter);
};

export const selectFilter = (state) => state.notices.filter;
export const selectNoticesStatus = (state) => state.notices.status;
export const selectLastPostedTitle = (state) => state.notices.lastPostedTitle;
export const selectNoticesCount = (state) => state.notices.items.length;

export default noticesSlice.reducer;
