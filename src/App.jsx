import { Stethoscope, Pill, Clock, Car, Award, Coffee, Activity, AlertCircle } from 'lucide-react';
import './App.css';

export default function App() {
  return (
    <div className="dashboard">
      <nav className="sidebar">
        <div className="profile-section">
          <div className="avatar">
            <Stethoscope size={32} color="#ffffff" />
          </div>
          <h2>Dr. Rob Fitter</h2>
          <span className="badge">General Practitioner</span>
          <p className="location">Ulverston Medical Practice</p>
        </div>

        <div className="nav-menu">
          <div className="nav-item active"><Activity size={18} /> Clinical Banter Log</div>
          <div className="nav-item"><Award size={18} /> Nominations (Pending)</div>
          <div className="nav-item"><Car size={18} /> Fleet Management</div>
        </div>
      </nav>

      <main className="main-content">
        <header className="top-bar">
          <h1>Staff Assessment & Incident Report</h1>
          <span className="date-badge">Last Updated: Monday 8:15 PM</span>
        </header>

        <div className="content-grid">
          
          {/* The Incident Report (Codeine Joke) */}
          <div className="card incident-card">
            <div className="card-header">
              <Pill className="icon-blue" />
              <h3>Incident #404: The Weekend Miscommunication</h3>
            </div>
            <div className="card-body">
              <div className="dialogue-box">
                <p><strong>Dr. Fitter:</strong> "What are you up to this weekend, Mohamed?"</p>
                <p><strong>Mohamed:</strong> "I'm going to be coding."</p>
                <p className="punchline"><strong>Dr. Fitter:</strong> "Codeine?! As in prescription medication?!"</p>
              </div>
              <div className="clinical-note">
                <AlertCircle size={16} />
                <span><strong>Clinical Note:</strong> HCA was referring to building web applications, not unauthorized dispensing of Class B opioids.</span>
              </div>
            </div>
          </div>

          {/* Vitals Section */}
          <div className="card vitals-card">
            <div className="card-header">
              <Activity className="icon-green" />
              <h3>Physician Vitals</h3>
            </div>
            <ul className="vitals-list">
              <li>
                <div className="vital-label"><Coffee size={16} /> Caffeine Levels</div>
                <div className="vital-value critical">Dangerously High</div>
              </li>
              <li>
                <div className="vital-label"><Activity size={16} /> Triage Tolerance</div>
                <div className="vital-value low">Critically Low</div>
              </li>
              <li>
                <div className="vital-label"><Clock size={16} /> Monday Departure Time</div>
                <div className="vital-value">Unknown (Assumed never)</div>
              </li>
            </ul>
          </div>

          {/* Assets & Accolades */}
          <div className="card assets-card">
            <div className="card-header">
              <Award className="icon-gold" />
              <h3>Career Milestones</h3>
            </div>
            <p>Candidate for <strong>"Best Doctor in the World"</strong>.</p>
            <p className="subtext">Nominated continuously since 2011. The electoral commission is reportedly still counting the votes.</p>
          </div>

          <div className="card assets-card">
            <div className="card-header">
              <Car className="icon-slate" />
              <h3>Registered Vehicle</h3>
            </div>
            <p><strong>Toyota Yaris</strong> (Grey, Vintage)</p>
            <p className="subtext">A highly sensible, aerodynamic grey block. Perfect for navigating the treacherous route home at 8:45 PM on a Monday.</p>
          </div>

        </div>
      </main>
    </div>
  );
}