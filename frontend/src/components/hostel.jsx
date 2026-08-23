import './hostel.css'

function Hostel (){

    return <div className='h-main'>
        <p className='head'>HOSTEL</p>
        <div className='page-header'>
            <h1>Hostel & Mess</h1>
            <p>Room details, mess menu, facilities and hostel notices all in one place.</p>
        </div>
        <div className='h-banner'>
            <div>
                <h2>Alfred Nobel - 615</h2>
                <p>Alfred Nobel A</p>
                <div className='h-details'>
                    <div className='c'>
                        Room Type: <span>Four Seater Non AC Attached Washroom</span>
                    </div>
                    <div className='c'>
                        Warden: <span>Mr. Sanjay Kumar</span>
                    </div>
                    <div className='c'>
                        Mess: <span>Alfred Nobel</span>
                    </div>
                </div>
            </div>
            <div className='h-status'>
                Alloted
            </div>
        </div>

        <div className='h-grid'>
            <div className='grid-card'>
                <h2>615</h2>
                <h3>Room Number</h3>
            </div>
            <div className='grid-card'>
                <h2>Active</h2>
                <h3>Mess Plan</h3>
            </div>
            <div className='grid-card'>
                <h2>Aug 2025</h2>
                <h3>Allotement Date</h3>
            </div>
        </div>

        <div className='i-grid'>
            <div className='i-card'>
                <h3 className='card-title'>Room Information</h3>
                <div>
                    <div className='i-row'>
                        <span className='l-1'>Hostel</span>
                        <span className='l-2'>Alfred Nobel A</span>
                    </div>
                    <div className='i-row'>
                        <span className='l-1'>Room Number</span>
                        <span className='l-2'>615</span>
                    </div>
                    <div className='i-row'>
                        <span className='l-1'>Room Type</span>
                        <span className='l-2'>Four Seater Non AC Attached Washroom</span>
                    </div>
                    <div className='i-row'>
                        <span className='l-1'>Warden</span>
                        <span className='l-2'>Mr Sanjay Kumar</span>
                    </div>
                    <div className='i-row'>
                        <span className='l-1'>Warden Contact</span>
                        <span className='l-2'>999XXXXXXX</span>
                    </div>
                    <div className='i-row'>
                        <span className='l-1'>Hostel Timings</span>
                        <span className='l-2'>24x7</span>
                    </div>
                </div>
            </div>
            <div className='i-card'>
                <h3 className='card-title'>Hostel Notices</h3>
                <div className='notices'>
                    <div className='n'>
                        <h4>Lift Maintainance</h4>
                        Due to unexpected breakdown of lift of Alfred Nobel A hostel lift will be under maintainance for 4-5 days.
                        
                    </div>
                </div>
            </div>
        </div>

        <div className='h-facilities'>
            <h3 className='card-title'>Hostel Facilities</h3>
            <div className='f-grid'>
                <div className='f-card'>
                    <h3>Wifi</h3>
                    <h4>Available</h4>
                </div>
                <div className='f-card'>
                    <h3>Laundary</h3>
                    <h4>Wed,Sat</h4>
                </div>
                <div className='f-card'>
                    <h3>Gym</h3>
                    <h4>Available</h4>
                </div>
                <div className='f-card'>
                    <h3>Common Room</h3>
                    <h4>Available</h4>
                </div>
                <div className='f-card'>
                    <h3>Canteen</h3>
                    <h4>7:00AM - 10:00PM</h4>
                </div>
                <div className='f-card'>
                    <h3>Medical Room</h3>
                    <h4>24x7</h4>
                </div>
                <div className='f-card'>
                    <h3>Hot Water</h3>
                    <h4>7-9AM,7-10PM</h4>
                </div>
                <div className='f-card'>
                    <h3>Mess</h3>
                    <h4>Available</h4>
                </div>
            </div>
        </div>
    
    
    
    
    </div>
}


export default Hostel;