import "./about.css";

const About = () => {
  return (
    <div className="about-wrapper">

      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About Men Fashion Hub</h1>
        <p>Where Style Meets Confidence — Designed for the Modern Man.</p>
      </section>

      {/* BRAND STORY */}
      <section className="about-story">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            Men Fashion Hub was born with a simple vision — to redefine men’s fashion in India. 
            From premium shirts and stylish pants to daily-wear essentials, we bring together 
            quality, comfort, and class in every product.
          </p>
          <p>
            We believe fashion should empower men — not confuse them. That’s why our designs 
            are clean, modern, bold, and built for everyday confidence.
          </p>
        </div>
        <div className="story-image">
          <img src="https://i.ibb.co/WHgY1yH/fashion-men.jpg" alt="Men Fashion" />
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="mission-values">
        <h2>Our Mission & Values</h2>

        <div className="mv-grid">
          <div className="mv-card">
            <h3>✨ Premium Quality</h3>
            <p>Every outfit is crafted with superior fabric and attention to detail.</p>
          </div>
          <div className="mv-card">
            <h3>🎯 Customer First</h3>
            <p>Your comfort and satisfaction shape every product we create.</p>
          </div>
          <div className="mv-card">
            <h3>🚀 Trend Focused</h3>
            <p>Latest styles, modern cuts, and minimal designs for a confident look.</p>
          </div>
          <div className="mv-card">
            <h3>🛍 Affordable Luxury</h3>
            <p>Premium menswear that doesn’t empty your pocket.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us">
        <h2>Why Choose Men Fashion Hub?</h2>

        <ul>
          <li>✔ Trendy outfits designed for today’s modern men</li>
          <li>✔ Premium fabrics tested for durability & comfort</li>
          <li>✔ 100% secure shopping & fast delivery</li>
          <li>✔ Thousands of happy customers across India</li>
          <li>✔ Easy returns & customer care support</li>
        </ul>
      </section>

      {/* STATS SECTION */}
      <section className="stats">
        <div className="stat-card">
          <h1>5000+</h1>
          <p>Happy Customers</p>
        </div>
        <div className="stat-card">
          <h1>150+</h1>
          <p>Premium Products</p>
        </div>
        <div className="stat-card">
          <h1>10+</h1>
          <p>Fashion Categories</p>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team-section">
        <h2>Meet Our Creative Team</h2>

        <div className="team-grid">
          <div className="team-card">
            <img src="https://i.ibb.co/8rTgxgm/team1.jpg" alt="" />
            <h3>Amit Makwana</h3>
            <p>Creative Designer</p>
          </div>

          <div className="team-card">
            <img src="https://i.ibb.co/2sYtWdm/team2.jpg" alt="" />
            <h3>DigVijay </h3>
            <p>Backend Operator</p>
          </div>

          <div className="team-card">
            <img src="https://i.ibb.co/m9dgb8x/team3.jpg" alt="" />
            <h3>Dhaval Vihol</h3>
            <p>Brand Marketing Head</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Ready to Upgrade Your Style?</h2>
        <p>Explore our premium men’s fashion collection today.</p>
        <button>Shop Now</button>
      </section>

    </div>
  );
};

export default About;
