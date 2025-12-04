export default function Login() {
  return (
    <div className="page center">
      <div className="card" style={{ width: "320px" }}>
        <h2>Login</h2>

        <input className="input" type="email" placeholder="Email" />
        <input className="input" type="password" placeholder="Password" />

        <button className="btn">Login</button>
      </div>
    </div>
  );
}
