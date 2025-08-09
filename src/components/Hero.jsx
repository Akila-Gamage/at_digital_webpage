export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media">
        <img className="hero-img" src="src/assets/hero.jpg" alt="Hero" />
      </div>
      <div className="hero-overlay">
        <div className="hero-card">
          <h1 className="text-white">We crush your competitors, goals, and sales records - without the B.S.</h1>
          <button className="btn-primary">Get Free Consultation</button>
        </div>
      </div>
    </section>
  );
}
