import "./attendance.css";
const days = [0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
function Attendance() {
  return (
    <>
      <p className="pagename">Attendance</p>
      <div className="attendancehero">
        
            <div>
                <h2>132</h2>
                <h3>Attended classes</h3>
            </div>
            <div>
                <h2>132</h2>
                <h3>Total classes</h3>
            </div>
            <div>
                <h2>1</h2>
                <h3>Approved Leaves</h3>
            </div>
            <div>
                <h2>3</h2>
                <h3>Total Leaves</h3>
            </div>
        </div>
        <div className="attendanceregister">
            <div>
                <h3>Subject list</h3>
            </div>
            <div className="calender">
                <h3>August Attendance</h3>
                <div className="weekname">
                    <div ><p>Sun</p></div>
                    <div><p>Mon</p></div>
                    <div><p>Tue</p></div>
                    <div><p>Wed</p></div>
                    <div><p>Thu</p></div>
                    <div><p>Fri</p></div>
                    <div><p>Sat</p></div>
                </div>
                <div className="days">
                    {days.map((i)=>{
                       return i==0? <div style={{visibility:"hidden"}}></div> : <div className="present"><p>{i}</p></div>
                    })
                    }
                </div>
            </div>
        </div>
      
    </>
  );
}
export default Attendance;
