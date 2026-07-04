import { BookOpen, Fish, Landmark, Trophy, Clock, Car, Coffee, AlertCircle, Pill } from 'lucide-react';
import './App.css';

export default function App() {
  return (
    <div className="portfolio-wrapper">
      <header className="hero-section">
        <h1 className="title">Dr. Rob Fitter</h1>
        <p className="credentials">General Practitioner · Scholar · Football Dad</p>
        <div className="divider"></div>
      </header>

      <main className="main-content">
        {/* The Famous Misunderstanding */}
        <section className="editorial-block feature-block">
          <div className="block-header">
            <Pill className="icon-accent" size={28} />
            <h2>The "Codeine" Incident</h2>
          </div>
          <div className="dialogue-container">
            <p className="context">An excerpt from the Ulverston clinical archives:</p>
            <blockquote className="dialogue">
              <p><strong>Dr. Fitter:</strong> "What are you up to this weekend, Mohamed?"</p>
              <p><strong>Mohamed:</strong> "I'm going to be coding."</p>
              <p><strong>Dr. Fitter:</strong> "Codeine?! As in the prescription medication?!"</p>
            </blockquote>
            <p className="footnote">*Note: To date, no Class B opioids have been used in the making of this website.</p>
          </div>
        </section>

        <div className="two-column-grid">
          {/* Professional Life */}
          <section className="editorial-block">
            <h2 className="section-title">Clinical Profile</h2>
            
            <div className="list-item">
              <Trophy className="icon-subtle" />
              <div>
                <h3>Awards & Accolades</h3>
                <p>Nominated for "Best Doctor in the World" (est. 2011). The committee is still deliberating.</p>
              </div>
            </div>

            <div className="list-item">
              <AlertCircle className="icon-subtle" />
              <div>
                <h3>Triage Affinity</h3>
                <p>Non-existent. Known to actively avoid triage duties whenever medically and legally possible.</p>
              </div>
            </div>

            <div className="list-item">
              <Clock className="icon-subtle" />
              <div>
                <h3>Monday Evenings</h3>
                <p>Perpetually present. If it is a Monday and the clock has struck 8:00 PM, Dr. Fitter is still at the practice.</p>
              </div>
            </div>

            <div className="list-item">
              <Coffee className="icon-subtle" />
              <div>
                <h3>Primary Fuel</h3>
                <p>High-yield coffee. Crucial for surviving the aforementioned Monday night shifts.</p>
              </div>
            </div>
          </section>

          {/* Personal Life */}
          <section className="editorial-block">
            <h2 className="section-title">Personal Pursuits</h2>

            <div className="list-item">
              <Landmark className="icon-subtle" />
              <div>
                <h3>History & Archaeology</h3>
                <p>An avid reader and historian, preferring the complexities of ancient ruins to modern-day clinic software.</p>
              </div>
            </div>

            <div className="list-item">
              <BookOpen className="icon-subtle" />
              <div>
                <h3>Literature</h3>
                <p>Always reading. Likely has a better grasp of historical texts than current triage protocols.</p>
              </div>
            </div>

            <div className="list-item">
              <Fish className="icon-subtle" />
              <div>
                <h3>Angling & Athletics</h3>
                <p>A passionate fisherman. When not by the water, he can reliably be found ferrying his son to and from football pitches.</p>
              </div>
            </div>

            <div className="list-item">
              <Car className="icon-subtle" />
              <div>
                <h3>The Chariot</h3>
                <p>A vintage, grey Toyota Yaris. A vehicle that belongs in an archaeological dig, yet faithfully transports him to football matches.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <p>Documented by a coding colleague.</p>
        <p className="copyright">© {new Date().getFullYear()} Ulverston Medical Practice</p>
      </footer>
    </div>
  );
}