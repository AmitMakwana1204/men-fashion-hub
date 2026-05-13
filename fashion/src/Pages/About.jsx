import "./about.css";
import me from "../Components/Assets/images/me1.webp";
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate = useNavigate();

  return (

    <div className="about-wrapper">

      {/* ================= HERO SECTION ================= */}
      <section className="about-hero">

        <h1>
          About Men Fashion Hub
        </h1>

        <p>
          Where Style Meets Confidence — Designed for the Modern Man.
        </p>

      </section>

      {/* ================= BRAND STORY ================= */}
      <section className="about-story">

        <div className="story-content">

          <h2>
            Our Story
          </h2>

          <p>
            Men Fashion Hub was born with a simple vision — to redefine men’s
            fashion in India. From premium shirts and stylish pants to
            daily-wear essentials, we bring together quality, comfort, and
            class in every product.
          </p>

          <p>
            We believe fashion should empower men — not confuse them.
            That’s why our designs are clean, modern, bold, and built for
            everyday confidence.
          </p>

        </div>

        <div className="story-image">

          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/c77527de-ae27-4726-9750-83c938bd3a35/d8v2kla-a0b10967-a9d5-43eb-bf8a-3d7d01e159f5.png/v1/fill/w_1192,h_670/fashion_hub_3d_logo___psd_by_shahbazrazvi_d8v2kla-pre.png"
            alt="Men Fashion Hub"
          />

        </div>

      </section>

      {/* ================= MISSION & VALUES ================= */}
      <section className="mission-values">

        <h2>
          Our Mission & Values
        </h2>

        <div className="mv-grid">

          <div className="mv-card">

            <h3>
              ✨ Premium Quality
            </h3>

            <p>
              Every outfit is crafted with superior fabric and attention to detail.
            </p>

          </div>

          <div className="mv-card">

            <h3>
              🎯 Customer First
            </h3>

            <p>
              Your comfort and satisfaction shape every product we create.
            </p>

          </div>

          <div className="mv-card">

            <h3>
              🚀 Trend Focused
            </h3>

            <p>
              Latest styles, modern cuts, and minimal designs for a confident look.
            </p>

          </div>

          <div className="mv-card">

            <h3>
              🛍 Affordable Luxury
            </h3>

            <p>
              Premium menswear that doesn’t empty your pocket.
            </p>

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-us">

        <h2>
          Why Choose Men Fashion Hub?
        </h2>

        <ul>

          <li>
            ✔ Trendy outfits designed for today’s modern men
          </li>

          <li>
            ✔ Premium fabrics tested for durability & comfort
          </li>

          <li>
            ✔ 100% secure shopping & fast delivery
          </li>

          <li>
            ✔ Thousands of happy customers across India
          </li>

          <li>
            ✔ Easy returns & customer care support
          </li>

        </ul>

      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="stats">

        <div className="stat-card">

          <h1>
            5000+
          </h1>

          <p>
            Happy Customers
          </p>

        </div>

        <div className="stat-card">

          <h1>
            150+
          </h1>

          <p>
            Premium Products
          </p>

        </div>

        <div className="stat-card">

          <h1>
            10+
          </h1>

          <p>
            Fashion Categories
          </p>

        </div>

      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="team-section">

        <h2>
          Meet Our Creative Team
        </h2>

        <div className="team-grid">

          <div className="team-card">

            <img
              src={me}
              alt="Amit Makwana"
            />

            <h3>
              Amit Makwana
            </h3>

            <p>
              Creative Designer
            </p>

          </div>

          <div className="team-card">

            <img
              src="https://i.ibb.co/2sYtWdm/team2.jpg"
              alt="DigVijay"
            />

            <h3>
              DigVijay
            </h3>

            <p>
              Backend Operator
            </p>

          </div>

          <div className="team-card">

            <img
              src="https://i.ibb.co/m9dgb8x/team3.jpg"
              alt="Dhaval Vihol"
            />

            <h3>
              Dhaval Vihol
            </h3>

            <p>
              Brand Marketing Head
            </p>

          </div>

        </div>

      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="cta">

        <h2>
          Ready to Upgrade Your Style?
        </h2>

        <p>
          Explore our premium men’s fashion collection today.
        </p>

        <button
          onClick={() => navigate("/")}
        >
          Shop Now
        </button>

      </section>

    </div>

  );
};

export default About;