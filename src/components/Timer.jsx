import React, { useState } from "react";
import '../style/timer.css'

export default function Timer(props) {
  const [time, setTime] = useState(new Date());

  setInterval(() => { setTime(new Date()) }, 1000);

  return (
    <div className="timer">
      <div className="caption-space" style={{ color: '#fff' }}>
        Auction end in:
      </div>
      <div className="timer-body">
        <div className="timer-time">
          <div className="space-mono h3">{time.getHours()}</div>
          <div className="caption-space" style={{ color: '#fff' }}>Hours</div>
        </div>
        <div className="space-mono h4">:</div>
        <div className="timer-time">
          <h3 className="space-mono h3">{time.getMinutes()}</h3>
          <div className="caption-space" style={{ color: '#fff' }}>Minutes</div>
        </div>
        <div className="space-mono h4">:</div>
        <div className="timer-time">
          <h3 className="space-mono h3">{time.getSeconds()}</h3>
          <div className="caption-space" style={{ color: '#fff' }}>Seconds</div>
        </div>
      </div>
    </div>
    // <h1>{time.toLocaleTimeString()}</h1>
  )
}