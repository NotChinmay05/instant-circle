import React from "react";


const HomePage = ({onViewChange}) => {

    const timerIcon = (
        <img src="../assets/timer/png" style={{ height: '50px' }}/>
    );

    const FeatureCard = ({ title, description, icon, alignment = 'left' }) => (
        <div className="feature-card">
            <div className={`card-content ${alignment === 'left' ? 'left-aligned' : 'right-aligned'}`}>
                {/* Show icon first for left-aligned, last for right-aligned (desktop) */}
                {alignment === 'left' && icon}
                <div className="card-text-container" style={alignment === 'right' ? { textAlign: 'right' } : {}}>
                    <h2 className="card-title">{title}</h2>
                    <p className="card-description">{description}</p>
                </div>
                {alignment === 'right' && icon}
            </div>
        </div>
  );

  return(
    <div className="home max-width-wrapper">
        {/* Meet Your Mood Card */}
        <FeatureCard
          title="Meet Your Mood, Instantly"
          description="Instant chat group formed with people feeling the same as you."
          icon={timerIcon}
          alignment="right"
        />

        {/* Talk. Feel. Vanish. Card */}
        <FeatureCard
          title="Talk. Feel. Vanish."
          description="Groups last only 5 minutes"
          icon={timerIcon}
          alignment="left"
        />
        
        {/* Privacy Card */}
        <FeatureCard
          title="What's said in circle, Stays in circle"
          description="We ensure anonymous identity and encryption"
          icon={timerIcon}
          alignment="left"
        />
    </div>
  );
}

export default Home;