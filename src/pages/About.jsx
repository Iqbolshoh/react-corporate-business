import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <section>
        <h1>About Our Company</h1>

        <p>
          We are a professional business consulting and software development
          company dedicated to helping organizations achieve sustainable growth.
        </p>

        <p>
          Our team specializes in web development, business automation, cloud
          solutions, and digital transformation.
        </p>
      </section>
    </div>
  );
}
