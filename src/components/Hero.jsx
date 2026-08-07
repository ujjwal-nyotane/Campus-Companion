export default function Hero() {
  return (
    <section className="hero">

      <div className="left">

        <h1>
          Your Smart Campus
          <span> Companion</span>
        </h1>

        <p>
          Manage attendance, academic results, fees, food ordering,
          hostel services and campus updates in one beautiful platform.
        </p>

        <div className="buttons">
          <button className="primary">
            Get Started
          </button>

          <button className="secondary">
            Explore
          </button>
        </div>

      </div>

      <div className="right">

        <div className="glass-card">

          <h2>Today's Overview</h2>

          <div className="stat">
            Attendance
            <strong>92%</strong>
          </div>

          <div className="stat">
            CGPA
            <strong>9.1</strong>
          </div>

          <div className="stat">
            Pending Fees
            <strong>₹0</strong>
          </div>

        </div>

      </div>

    </section>
  );
}