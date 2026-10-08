import "./About.css";

function About() {
  return (
    <main className="about-page">

      <section className="about-header">
        <p>ABOUT</p>
        <h1>Community Support Portal</h1>
        <span>
          A district-based directory of real NGOs, sevashrams and support centres.
        </span>
      </section>

      <section className="about-content">

        <h2>What this portal does</h2>
        <p>
          People can select a district and help type to find verified
          organizations nearby. Each organization card shows contact details,
          address, source of information, last verification date, and a direct
          link to the official website when available.
        </p>

        <h2>How to use it</h2>
        <ol>
          <li>Choose your district.</li>
          <li>Choose the type of help you need.</li>
          <li>Open matching organization cards and visit their official links.</li>
        </ol>

        <h2>Information shown</h2>
        <ul>
          <li>Organization name and help type</li>
          <li>District and full address</li>
          <li>Phone / contact number</li>
          <li>Official website / sevashram link</li>
          <li>Source of the information</li>
          <li>Last verified date</li>
        </ul>

      </section>

    </main>
  );
}

export default About;
