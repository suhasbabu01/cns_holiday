import React from 'react';

export const FleetStrip: React.FC = () => {
  return (
    <div className="fleet-strip scroll-reveal">
      <div className="container fleet-strip-inner">
        <div className="fleet-label">
          OUR <span>FLEET</span>
        </div>
        <div className="fleet-items">
          <div>
            <i className="fas fa-van-shuttle"></i>
            <span>Urbania</span>
          </div>
          <div>
            <i className="fas fa-car"></i>
            <span>Innova Crysta</span>
          </div>
          <div>
            <i className="fas fa-shuttle-van"></i>
            <span>Tempo Traveller</span>
          </div>
          <div>
            <i className="fas fa-bus"></i>
            <span>Bus &amp; Coach</span>
          </div>
          <div>
            <i className="fas fa-city"></i>
            <span>Local Trips</span>
          </div>
          <div>
            <i className="fas fa-route"></i>
            <span>Outstation Trips</span>
          </div>
        </div>
      </div>
    </div>
  );
};
