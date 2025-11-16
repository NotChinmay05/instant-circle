import React from "react";
import timerIconAsset from "../assets/timer.png";
import chatIconAsset from "../assets/chat.png";
import encIconAsset from "../assets/encryption.png";

const HomePage = ({onViewChange}) => {

    const timerIcon = (
        <img src={timerIconAsset} alt="Timer Icon" style={{ height: '50px' }}/>
    );

    const chatIcon = (
        <img src={chatIconAsset} alt="Chat Icon" style={{ height: '50px' }}/>
    );

    const encIcon = (
        <img src={encIconAsset} alt="Chat Icon" style={{ height: '50px' }}/>
    );

    const FeatureCard = ({ title, description, icon, alignment = 'left' }) => (
        <div className="feature-card">
            <div className={`card-content ${alignment === 'left' ? 'left-aligned' : 'right-aligned'}`}>
                {/* Show icon first for left-aligned, last for right-aligned (desktop) */}
                {icon}
                <div className="card-text-container">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-description">{description}</p>
                </div>
            </div>
        </div>
  );

  return(
    <div className="home max-width-wrapper">
        {/* Meet Your Mood Card */}
        <FeatureCard
          title="Meet Your Mood, Instantly"
          description="Instant chat group formed with people feeling the same as you."
          icon={chatIcon}
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
          icon={encIcon}
          alignment="right"
        />
    </div>
  );
}

export default HomePage;