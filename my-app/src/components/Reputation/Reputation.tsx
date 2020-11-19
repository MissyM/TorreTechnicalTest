import React from 'react'
import "./Reputation.css"

function Reputation() {
  return (
    <div className="reputation">
      <div className="reputation__box">
        <span className="reputation__signal-stats">
          <svg className="reputation__signal-stats--icon" viewBox="0 0 24 25">
            <path d="M1.5,4V5.5C1.5,9.65 3.71,13.28 7,15.3V20H22V18C22,15.34 16.67,14 14,14C14,14 13.83,14 13.75,14C9,14 5,10 5,5.5V4M14,4A4,4 0 0,0 10,8A4,4 0 0,0 14,12A4,4 0 0,0 18,8A4,4 0 0,0 14,4Z">
            </path>
          </svg>
          <span className="reputation__signal-stats--value">3</span>
        </span>

        <span className="reputation__signal--text">
            people signaled Milena
        </span>
      </div>

      <div className="reputation__box">
        <span className="reputation__signal-stats">
          <svg className="reputation__signal-stats-icon--inverted" viewBox="0 0 24 25">
            <path d="M1.5,4V5.5C1.5,9.65 3.71,13.28 7,15.3V20H22V18C22,15.34 16.67,14 14,14C14,14 13.83,14 13.75,14C9,14 5,10 5,5.5V4M14,4A4,4 0 0,0 10,8A4,4 0 0,0 14,12A4,4 0 0,0 18,8A4,4 0 0,0 14,4Z">
            </path>
          </svg>
        <span className="reputation__signal-stats--value">29</span>
        </span>
        <span className="reputation__signal--text">
            people signaled by Milena
        </span>
      </div>


    
      <button className="reputation__signal-stats-btn">
          <svg className="reputation__signal-stats-icon-btn" viewBox="0 0 24 25">
            <path d="M1.5,4V5.5C1.5,9.65 3.71,13.28 7,15.3V20H22V18C22,15.34 16.67,14 14,14C14,14 13.83,14 13.75,14C9,14 5,10 5,5.5V4M14,4A4,4 0 0,0 10,8A4,4 0 0,0 14,12A4,4 0 0,0 18,8A4,4 0 0,0 14,4Z">
            </path>
          </svg>
          <span className="reputation__signal-stats-text-btn">SIGNAL</span>
      </button>

    </div>
  );
}
export default Reputation