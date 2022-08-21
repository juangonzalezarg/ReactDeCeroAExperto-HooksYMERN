import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
        <div 
            className="journal__entry-picture"
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://static3.depositphotos.com/1007968/258/i/450/depositphotos_2587380-stock-photo-old-growth-cedar.jpg)'
            }}
        ></div>

        <div className="journal__entry-body">
            <p className="journal__entry-title">
                Un nuevo día
            </p>
            <p className="journal__entry-content">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
            </p>
        </div>

        <div className="journal__entry-date-box">
            <span>Wednesday</span>
            <h4>25</h4>
        </div>

    </div>
  )
}
