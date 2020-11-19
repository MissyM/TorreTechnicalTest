import React, { useEffect, useState } from 'react'
import "./Reputation.css"

interface Person {
  name: string,
  weight: string,

}
function Reputation() {
  const [person, setPerson] = useState<Person | null>(null)
  const [associations, setAssociations] = useState<number | null>(null)
  useEffect(() => {
    fetch(
      'https://us-central1-torretechnicaltest.cloudfunctions.net/bios/milenacabrera',
      {
        method: "GET",
        headers: new Headers({
          Accept: "text/html",
        })
      }
    ).then(res => res.json())
    .then(response => {
      setPerson(response.person)
    })

    fetch(
      'https://us-central1-torretechnicaltest.cloudfunctions.net/bios/milenacabrera/stats',
      {
        method: "GET",
        headers: new Headers({
          Accept: "text/html",
        })
      }
    ).then(res => res.json())
    .then(response => {
      setAssociations(response.associations)
    })
  }, [])
  const goToSignals = () => {
    let path = 'https://bio.torre.co/en/signals/onboarding?signaledId=milenacabrera&column=resume'
    window.location.href = path
  }
  return (
    person ? <div className="reputation">
      <div className="reputation__box">
        <span className="reputation__signal-stats">
          <svg className="reputation__signal-stats--icon" viewBox="0 0 24 25">
            <path d="M1.5,4V5.5C1.5,9.65 3.71,13.28 7,15.3V20H22V18C22,15.34 16.67,14 14,14C14,14 13.83,14 13.75,14C9,14 5,10 5,5.5V4M14,4A4,4 0 0,0 10,8A4,4 0 0,0 14,12A4,4 0 0,0 18,8A4,4 0 0,0 14,4Z">
            </path>
          </svg>
          <span className="reputation__signal-stats--value">3</span>
        </span>
        <span className="reputation__signal--text">
            people signaled {person.name.split(' ').shift()}
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
            people signaled by {person.name.split(' ')[0]}
        </span>
      </div>

      <div>
        <button className="reputation__signal-stats-btn" onClick={goToSignals}>
          <svg className="reputation__signal-stats-icon-btn" viewBox="0 0 24 25">
            <path d="M1.5,4V5.5C1.5,9.65 3.71,13.28 7,15.3V20H22V18C22,15.34 16.67,14 14,14C14,14 13.83,14 13.75,14C9,14 5,10 5,5.5V4M14,4A4,4 0 0,0 10,8A4,4 0 0,0 14,12A4,4 0 0,0 18,8A4,4 0 0,0 14,4Z">
            </path>
          </svg>
          <span className="reputation__signal-stats-text-btn">signal</span>
        </button>
      </div>
      <div className="reputation__box--padding">
        <span className="reputation__signal-stats">
          <svg className="reputation__signal-stats--icon" viewBox="0 0 24 25">
            <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z">
            </path>
          </svg>
          <span className="reputation__signal-stats--value">{(Number(associations)/1000).toFixed(1)}K</span>
        </span>
        <span className="reputation__signal--text">
            contacts
        </span>
      </div>

      <div className="reputation__box">
        <span className="reputation__signal-stats">
          <svg className="reputation__signal-stats--icon" viewBox="0 0 24 25">
            <path d="M12,3A4,4 0 0,1 16,7C16,7.73 15.81,8.41 15.46,9H18C18.95,9 19.75,9.67 19.95,10.56C21.96,18.57 22,18.78 22,19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19C2,18.78 2.04,18.57 4.05,10.56C4.25,9.67 5.05,9 6,9H8.54C8.19,8.41 8,7.73 8,7A4,4 0 0,1 12,3M12,5A2,2 0 0,0 10,7A2,2 0 0,0 12,9A2,2 0 0,0 14,7A2,2 0 0,0 12,5Z">
            </path>
          </svg>
          <span className="reputation__signal-stats--value">{(Number(person.weight)/1000).toFixed(1)}K</span>
        </span>
        <span className="reputation__signal--text">
           recommendation weight
        </span>
      </div>

    </div> : <div>Loading...</div>
  );
}
export default Reputation