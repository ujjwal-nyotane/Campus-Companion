import { useState } from 'react';
import './css/hostel.css';
import {
    Home,
    Utensils,
    Wifi,
    Coffee,
    Activity,
    Wrench,
    Clock,
    Phone,
    CheckCircle2,
    PlusCircle,
    AlertCircle,
    User,
    Shield
} from 'lucide-react';

const messMenuData = {
    Breakfast: {
        time: '07:30 AM - 09:30 AM',
        items: ['Stuffed Aloo Paratha with Curd & Pickle', 'Poha with Roasted Peanuts', 'Boiled Eggs & Omelette', 'Bread Butter & Mixed Fruit Jam', 'Tea / Coffee & Fresh Milk']
    },
    Lunch: {
        time: '12:30 PM - 02:30 PM',
        items: ['Dal Makhani / Yellow Dal Tadka', 'Kadhai Paneer & Soya Chaap Curry', 'Steamed Basmati Rice & Jeera Rice', 'Fresh Phulkas / Butter Tandoori Roti', 'Boondi Raita, Green Salad & Gulab Jamun']
    },
    Snacks: {
        time: '05:00 PM - 06:00 PM',
        items: ['Crispy Samosa with Mint & Tamarind Chutney', 'Sweet Corn Chaat', 'Biscuits & Cookies', 'Hot Ginger Cardamom Tea & Coffee']
    },
    Dinner: {
        time: '08:00 PM - 10:00 PM',
        items: ['Special Shahi Paneer', 'Mixed Vegetable Curry', 'Arhar Dal with Desi Ghee Tadka', 'Tawa Chapati & Peas Pulao', 'Kheer / Ice Cream Dessert']
    }
};

const initialComplaints = [
    { id: 'MNT-101', category: 'Plumbing', issue: 'Washroom tap leaking slowly', status: 'In Progress', date: '22 Aug 2026' },
    { id: 'MNT-102', category: 'Electrical', issue: 'Study table tube light flickering', status: 'Resolved', date: '18 Aug 2026' }
];

function Hostel() {
    const [activeMeal, setActiveMeal] = useState('Lunch');
    const [complaints, setComplaints] = useState(initialComplaints);

    // Controlled Form State for Room Maintenance Complaint
    const [formData, setFormData] = useState({
        category: 'Plumbing',
        roomNo: '615',
        issue: '',
        urgency: 'Medium'
    });

    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validate = () => {
        const errors = {};
        if (!formData.issue.trim()) {
            errors.issue = 'Please describe the maintenance issue.';
        } else if (formData.issue.trim().length < 8) {
            errors.issue = 'Issue description must be at least 8 characters.';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }));
        if (successMessage) setSuccessMessage('');
    };

    const handleComplaintSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const newId = `MNT-${Math.floor(100 + Math.random() * 900)}`;
        const newComplaint = {
            id: newId,
            category: formData.category,
            issue: formData.issue.trim(),
            status: 'Pending',
            date: 'Today'
        };

        setComplaints([newComplaint, ...complaints]);
        setSuccessMessage(`Maintenance request #${newId} logged successfully! Hostel supervisor will inspect soon.`);
        setFormData({
            category: 'Plumbing',
            roomNo: '615',
            issue: '',
            urgency: 'Medium'
        });
        setFormErrors({});
    };

    return (
        <div className="hostel-page-container">
            {/* Header Hero Banner */}
            <div className="hostel-hero-card">
                <div className="hero-details-col">
                    <div className="hostel-badge">
                        <Home size={15} /> RESIDENTIAL CAMPUS LIVING
                    </div>
                    <h2>Alfred Nobel Hostel Block A &bull; Room 615</h2>
                    <p className="hostel-subtitle">
                        Four Seater Non-AC with Attached Washroom &bull; 6th Floor &bull; East Wing
                    </p>

                    <div className="hostel-info-chips">
                        <div className="info-chip">
                            <User size={14} />
                            <span>Chief Warden: <strong>Mr. Sanjay Kumar</strong></span>
                        </div>
                        <div className="info-chip">
                            <Phone size={14} />
                            <span>Warden Helpline: <strong>+91 98765 5XXXX</strong></span>
                        </div>
                        <div className="info-chip">
                            <Utensils size={14} />
                            <span>Mess Allotted: <strong>Nobel Dining Hall 1</strong></span>
                        </div>
                    </div>
                </div>

                <div className="hostel-status-box">
                    <span className="allotment-tag">
                        <CheckCircle2 size={16} /> Allotted &bull; Verified
                    </span>
                    <span className="validity-txt">Allotment Term: 2025-29</span>
                </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="hostel-metrics-grid">
                <div className="h-stat-box">
                    <h2>615</h2>
                    <h3>Room Number</h3>
                    <span>6th Floor, East Wing</span>
                </div>
                <div className="h-stat-box">
                    <h2 className="text-green">Active</h2>
                    <h3>Mess Meal Plan</h3>
                    <span>Veg &amp; Non-Veg 4 Meals</span>
                </div>
                <div className="h-stat-box">
                    <h2>10:00 PM</h2>
                    <h3>Campus Night Curfew</h3>
                    <span>Biometric Punch In</span>
                </div>
                <div className="h-stat-box">
                    <h2 className="text-blue">Approved</h2>
                    <h3>Gate Pass Status</h3>
                    <span>Day Outing Permitted</span>
                </div>
            </div>

            {/* Main Grid: Interactive Mess Menu + Maintenance Form */}
            <div className="hostel-main-grid">
                {/* Daily Mess Menu Card */}
                <div className="hostel-card mess-menu-card">
                    <div className="card-top-row">
                        <div>
                            <h3>Today's Daily Mess Menu</h3>
                            <p>Fresh &amp; Hygienic 4-course meal schedule</p>
                        </div>
                        <Utensils size={20} color="#10b981" />
                    </div>

                    {/* Meal selector tabs */}
                    <div className="mess-tabs-row">
                        {Object.keys(messMenuData).map(meal => (
                            <button
                                key={meal}
                                type="button"
                                className={`meal-tab-btn ${activeMeal === meal ? 'active' : ''}`}
                                onClick={() => setActiveMeal(meal)}
                            >
                                {meal}
                            </button>
                        ))}
                    </div>

                    <div className="meal-display-box">
                        <div className="meal-time-badge">
                            <Clock size={14} />
                            <span>Serving Timings: {messMenuData[activeMeal].time}</span>
                        </div>

                        <ul className="meal-items-list">
                            {messMenuData[activeMeal].items.map((item, idx) => (
                                <li key={idx} className="meal-item">
                                    <span className="bullet-point"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Maintenance Request / Room Complaint Form */}
                <div className="hostel-card complaint-card">
                    <div className="card-top-row">
                        <div>
                            <h3>Log Maintenance / Room Complaint</h3>
                            <p>Plumbing, electrical, carpenter or cleaning requests</p>
                        </div>
                        <Wrench size={20} color="#0284c7" />
                    </div>

                    {successMessage && (
                        <div className="alert-hostel-success">
                            <CheckCircle2 size={16} />
                            <span>{successMessage}</span>
                        </div>
                    )}

                    <form onSubmit={handleComplaintSubmit} noValidate className="hostel-complaint-form">
                        <div className="form-fields-row">
                            <div className="field-group">
                                <label>Category *</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                >
                                    <option value="Plumbing">Plumbing / Washroom</option>
                                    <option value="Electrical">Electrical / Light / Fan</option>
                                    <option value="Carpentry">Carpentry / Bed / Door Lock</option>
                                    <option value="Cleaning">Housekeeping &amp; Cleaning</option>
                                    <option value="WiFi">WiFi &amp; LAN Port</option>
                                </select>
                            </div>

                            <div className="field-group">
                                <label>Urgency Level</label>
                                <select
                                    name="urgency"
                                    value={formData.urgency}
                                    onChange={handleInputChange}
                                >
                                    <option value="Low">Low - Within 48 Hours</option>
                                    <option value="Medium">Medium - Within 24 Hours</option>
                                    <option value="High">High - Same Day Urgent</option>
                                </select>
                            </div>
                        </div>

                        <div className="field-group">
                            <label>Description of Issue *</label>
                            <textarea
                                name="issue"
                                rows="3"
                                placeholder="Describe the problem (e.g. Geyser water not heating, door latch stuck)..."
                                value={formData.issue}
                                onChange={handleInputChange}
                                className={formErrors.issue ? 'error-input' : ''}
                            />
                            {formErrors.issue && (
                                <span className="field-error-text">
                                    <AlertCircle size={13} /> {formErrors.issue}
                                </span>
                            )}
                        </div>

                        <button type="submit" className="btn-submit-complaint">
                            <PlusCircle size={15} /> Submit Maintenance Request
                        </button>
                    </form>

                    {/* Recent Maintenance Requests Log */}
                    <div className="recent-complaints-box">
                        <span className="complaints-label">My Maintenance Requests:</span>
                        <div className="complaints-list">
                            {complaints.map(item => (
                                <div key={item.id} className="complaint-row">
                                    <div>
                                        <span className="c-id">{item.id} &bull; {item.category}</span>
                                        <p className="c-text">{item.issue}</p>
                                    </div>
                                    <span className={`c-status ${item.status.toLowerCase().replace(' ', '-')}`}>
                                        {item.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hostel Facilities Grid & Notices */}
            <div className="hostel-bottom-grid">
                {/* Facilities */}
                <div className="hostel-card facilities-card">
                    <div className="card-top-row">
                        <h3>Hostel Amenities &amp; Services</h3>
                        <Shield size={18} color="#10b981" />
                    </div>

                    <div className="facilities-tiles-grid">
                        <div className="facility-tile">
                            <div className="tile-icon-box"><Wifi size={20} /></div>
                            <h4>High-Speed WiFi</h4>
                            <p>Available 24x7</p>
                        </div>
                        <div className="facility-tile">
                            <div className="tile-icon-box"><Activity size={20} /></div>
                            <h4>Gym &amp; Fitness</h4>
                            <p>06:00 AM - 09:00 PM</p>
                        </div>
                        <div className="facility-tile">
                            <div className="tile-icon-box"><Clock size={20} /></div>
                            <h4>Laundry Service</h4>
                            <p>Wednesdays &amp; Saturdays</p>
                        </div>
                        <div className="facility-tile">
                            <div className="tile-icon-box"><Coffee size={20} /></div>
                            <h4>Campus Canteen</h4>
                            <p>07:00 AM - 10:00 PM</p>
                        </div>
                        <div className="facility-tile">
                            <div className="tile-icon-box"><Home size={20} /></div>
                            <h4>Common TV Room</h4>
                            <p>Available 24x7</p>
                        </div>
                        <div className="facility-tile">
                            <div className="tile-icon-box"><Wrench size={20} /></div>
                            <h4>Hot Geyser Water</h4>
                            <p>07-09 AM &bull; 07-10 PM</p>
                        </div>
                    </div>
                </div>

                {/* Hostel Notices */}
                <div className="hostel-card notices-card">
                    <div className="card-top-row">
                        <h3>Hostel Resident Notices</h3>
                        <span className="active-tag">Active Bulletins</span>
                    </div>

                    <div className="hostel-notices-list">
                        <div className="h-notice-box">
                            <h4>Lift Maintenance in Block A</h4>
                            <p>Due to scheduled technical servicing, the Block A lift will be under preventive maintenance on 25th August between 10:00 AM - 2:00 PM.</p>
                            <span className="notice-date">Chief Warden Office &bull; 24 Aug 2026</span>
                        </div>
                        <div className="h-notice-box">
                            <h4>Night Attendance Punch Reminder</h4>
                            <p>All hostellers must complete biometric face/fingerprint attendance before 10:00 PM sharp at the ground floor turnstiles.</p>
                            <span className="notice-date">Hostel Security &bull; 20 Aug 2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hostel;
