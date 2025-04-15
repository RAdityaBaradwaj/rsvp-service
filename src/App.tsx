import React, { useState } from 'react';
import './App.css';
import { RsvpService } from './services/RsvpService';
import { RsvpStatus } from './models/RsvpStatus';
import { Player } from './models/Player';

const rsvpService = new RsvpService();

const App: React.FC = () => {
  const [playerName, setPlayerName] = useState('');
  const [status, setStatus] = useState<RsvpStatus>("Yes");
  const [version, setVersion] = useState(0); // force re-render

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = playerName.trim();
    if (!name) return;
    const id = name.toLowerCase();
    const player: Player = { id, name };
    rsvpService.addOrUpdateRsvp(player, status);
    setPlayerName('');
    setVersion(v => v + 1);
  };

  const summary = rsvpService.getCounts();
  const confirmed = rsvpService.getConfirmedAttendees();

  return (
    <div className="container">
      <h1>🎉 Welcome to the Team RSVP Manager</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Enter player name"
          required
        />
        <select value={status} onChange={(e) => setStatus(e.target.value as RsvpStatus)}>
          <option value="Yes">Yes ✅</option>
          <option value="No">No ❌</option>
          <option value="Maybe">Maybe 🤔</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      <div className="card">
        <h2>📊 RSVP Summary</h2>
        <p><strong>Total:</strong> {summary.total}</p>
        <p><strong>Confirmed:</strong> {summary.confirmed}</p>
        <p><strong>Declined:</strong> {summary.declined}</p>
        <p><strong>Maybe:</strong> {summary.maybe}</p>
      </div>

      <div className="card">
        <h2>✅ Confirmed Attendees</h2>
        <ul>
          {confirmed.map((p) => (
            <li key={p.id}>{p.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
