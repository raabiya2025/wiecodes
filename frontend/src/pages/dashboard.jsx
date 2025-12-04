export default function Dashboard() {
  return (
    <div className="page">
      <h2>Your Dashboard</h2>

      <div className="card">
        <h3>Your Stats</h3>
        <p>Issues Reported: 4</p>
        <p>Points Earned: 120</p>
        <p>Badges Earned: 2</p>
      </div>

      <div className="card">
        <a className="btn" href="/report">Report New Issue</a>
      </div>

      <div className="card">
        <a className="btn" href="/status">View Issue Status</a>
      </div>

      <div className="card">
        <a className="btn" href="/leaderboard">View Leaderboard</a>
      </div>
    </div>
  );
}
