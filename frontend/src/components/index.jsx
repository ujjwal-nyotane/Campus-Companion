import { useEffect, useState } from "react";
import "./css/index.css";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo/logo.png';
import fulllogo from '../assets/logo/full_logo.png';
import { useAuth } from '../context/AuthContext.jsx';
import {
  User,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  BookOpen,
  Clock,
  CreditCard
} from 'lucide-react';

function Index() {
  const navigate = useNavigate();
  const { login, isLoggedIn, role } = useAuth();

  // Active role tab: 'Student' or 'Faculty'
  

  // Controlled Form State
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      if (role === "Faculty") {
        navigate("/f-dashboard", { replace: true });
      } else {
        navigate("/dashboard", { replace: true });
      }
    }
  }, [isLoggedIn, role, navigate]);

  // Form Validation Logic
  const validate = () => {
    const errs = {};
    if (!userId.trim()) {
      errs.userId =  "Please enter your ID";
    }
    if (!password) {
      errs.password = "Password is required";
    } else if (password.length < 3) {
      errs.password = "Password must be at least 3 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleLoginButton = (e) => {
    e.preventDefault();
    setAuthError("");

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const res = login(userId.trim(), password);
      if (res.success) {
        if (res.role === "Faculty") {
          navigate("/f-dashboard");
        } else {
          navigate("/dashboard");
        }
      } else {
        setAuthError("Invalid Roll Number / User ID or Password");
        setIsSubmitting(false);
      }
    }, 250);
  };


  const prefillQuickDemo = (id, pwd) => {
    setUserId(id);
    setPassword(pwd);
    setErrors({});
    setAuthError("");
  };

  return (
    <div className="landing-page-wrapper">
      {/* Top Navigation Bar */}
      <header className="landing-topbar">
        <div className="brand-logo-wrap">
          <img src={logo} alt="Campus Companion" className="landing-logo" />
          <div className="brand-titles">
            <h3>Campus Companion</h3>
            <span>Smart Academic Portal</span>
          </div>
        </div>

        <div className="topbar-meta-tags">
          <span className="term-badge">Academic Term 2026-27</span>
          <span className="status-live-pill">
            <span className="pulsing-dot"></span> System Online
          </span>
        </div>
      </header>

      {/* Main Hero & Login Split Container */}
      <main className="landing-hero-container">
        {/* Left Side: Editorial Presentation & Platform Features */}
        <section className="hero-editorial">
          <div className="badge-pill-mint">
            <Sparkles size={14} /> NEXT-GEN UNIVERSITY ECOSYSTEM
          </div>

          <h1 className="hero-heading">
            Simplifying Campus Life, <br />
            <span className="accent-text">One Smart Portal</span> at a Time.
          </h1>

          <p className="hero-description">
            Campus Companion is your centralized university portal for real-time
            lecture attendance, interactive timetables, courseware materials,
            digital fee receipts, leave requests, and grievance resolution.
          </p>

          {/* Quick Demo Credentials Card */}
          <div className="demo-credentials-card">
            <div className="demo-card-header">
              <span className="demo-label">EVALUATION DEMO ACCOUNTS</span>
              <span className="demo-hint">Click below to auto-fill</span>
            </div>

            <div className="demo-buttons-row">
              <button
                type="button"
                className={'btn-demo-chip '}
                onClick={() => prefillQuickDemo("2510993797", "1234")}
              >
                <GraduationCap size={16} />
                <div className="chip-details">
                  <span className="chip-role">Student (Ujjwal)</span>
                  <span className="chip-creds">ID: 2510993797 &bull; Pwd: 1234</span>
                </div>
              </button>

              <button
                type="button"
                className={'btn-demo-chip '}
                onClick={() => prefillQuickDemo("CET0001", "1234" )}
              >
                <ShieldCheck size={16} />
                <div className="chip-details">
                  <span className="chip-role">Faculty (Dr. Sumit)</span>
                  <span className="chip-creds">ID: CET0001 &bull; Pwd: 1234</span>
                </div>
              </button>
            </div>
          </div>

          {/* Quick Highlights Row */}
          <div className="hero-highlights-row">
            <div className="highlight-item">
              <div className="highlight-icon green">
                <CheckCircle2 size={16} />
              </div>
              <span>Live Attendance &amp; Leave Approvals</span>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon blue">
                <BookOpen size={16} />
              </div>
              <span>Courseware &amp; Lecture Slides</span>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon amber">
                <CreditCard size={16} />
              </div>
              <span>Digital Fee Receipts &amp; Dues</span>
            </div>
          </div>
        </section>

        {/* Right Side: Modern Glass / White Login Card */}
        <section className="login-card-container">
          <div className="login-card-surface">
            {/* Role Switcher Tabs */}
            <div className="role-switcher-tabs">
              <button
                type="button"
                className={'tab-btn active'}>
                <GraduationCap size={16} /> Login Portal
              </button>
            </div>

            <div className="login-card-body">
              <h2 className="login-title">
                    Sign In
              </h2>
              <p className="login-subtitle">
                
                   Access your academics, courses, and attendance &&
                  Manage lectures, student attendance, and approvals
              </p>


              <form onSubmit={handleLoginButton} noValidate className="login-form-inner">
                {/* Roll Number or Faculty ID input */}
                <div className="form-control-group">
                  <label htmlFor="userId">
                    User ID'
                  </label>
                  <div className={`input-field-wrap ${errors.userId ? 'has-error' : ''}`}>
                    <User size={18} className="field-icon" />
                    <input
                      id="userId"
                      type="text"
                      placeholder='User ID'
                      value={userId}
                      onChange={(e) => {
                        setUserId(e.target.value);
                        if (errors.userId) setErrors(prev => ({ ...prev, userId: "" }));
                        if (authError) setAuthError("");
                      }}
                    />
                  </div>
                  {errors.userId && <span className="field-error-msg " >{errors.userId}</span>}
                </div>

                {/* Password input with show/hide toggle */}
                <div className="form-control-group">
                  <div className="label-with-aside">
                    <label htmlFor="password">Password</label>
                    <span className="demo-pwd-hint">Default: 1234</span>
                  </div>
                  <div className={`input-field-wrap ${errors.password ? 'has-error' : ''}`}>
                    <Lock size={18} className="field-icon" />
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter account password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (errors.password) setErrors(prev => ({ ...prev, password: "" }));
                        if (authError) setAuthError("");
                      }}
                    />
                    <button
                      type="button"
                      className="btn-toggle-eye"
                      onClick={() => setShowPassword(!showPassword)}
                      title={showPassword ? "Hide password" : "Show password"}
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && <span className="field-error-msg">{errors.password}</span>}
                </div>
                { authError && (
                <div className="alert-error-banner" >
                  <span>Invalid Roll Number / User ID or Password</span>
                </div>
              )}
                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary-signin"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Signing In...'
                  ) : (
                    <>
                      <span>Sign In Portal</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>

              <div className="security-notice">
                <ShieldCheck size={14} />
                <span>Protected by Campus Secure Auth &bull; Session Encrypted</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Platform Features Grid */}
      <section className="features-preview-section">
        <div className="section-intro">
          <h2>Everything You Need in One Unified Platform</h2>
          <p>Seamlessly bridging student learning and faculty course management</p>
        </div>

        <div className="features-cards-grid">
          <div className="feature-card">
            <div className="f-icon-wrap icon-mint">
              <BookOpen size={22} />
            </div>
            <h3>Academics &amp; Courseware</h3>
            <p>Access semester modules, lecture slides, and assignment handouts for all enrolled courses.</p>
          </div>

          <div className="feature-card">
            <div className="f-icon-wrap icon-blue">
              <Clock size={22} />
            </div>
            <h3>Live Lecture Schedules</h3>
            <p>Interactive timetable with live lecture notifications, venue mapping, and class reminders.</p>
          </div>

          <div className="feature-card">
            <div className="f-icon-wrap icon-amber">
              <CreditCard size={22} />
            </div>
            <h3>Fee Dues &amp; Digital Receipts</h3>
            <p>Clear fee breakdown, instant online installment payments, and auto-generated PDF receipts.</p>
          </div>

          <div className="feature-card">
            <div className="f-icon-wrap icon-purple">
              <ShieldCheck size={22} />
            </div>
            <h3>Faculty Management Suite</h3>
            <p>Daily attendance markers, one-click leave approvals, and broadcast announcement boards.</p>
          </div>
        </div>
      </section>

      {/* System Metrics & Full Logo Showcase */}
      <section className="landing-metrics-strip">
        <div className="metrics-col">
          <div className="metric-cell">
            <h3>99.9%</h3>
            <span>Portal Uptime</span>
          </div>
          <div className="metric-cell">
            <h3>2ms</h3>
            <span>System Response</span>
          </div>
          <div className="metric-cell">
            <h3>2,500+</h3>
            <span>Active Campus Users</span>
          </div>
          <div className="metric-cell">
            <h3>100%</h3>
            <span>Role-Based Auth</span>
          </div>
        </div>

        <div className="branding-col">
          <img src={fulllogo} alt="Campus Companion Emblem" />
        </div>
      </section>

      {/* Landing Footer */}
      <footer className="landing-footer">
        <p>&copy; 2026 Campus Companion &bull; Department of Computer Science &amp; Engineering &bull; All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Index;
