import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <section>
        <h1>Corporate Business Solutions</h1>

        <p>
          We help companies grow through innovative digital solutions, strategic
          consulting, and modern technology.
        </p>

        <button>Get Started</button>
      </section>
    </div>
  );
}
