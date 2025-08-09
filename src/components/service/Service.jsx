import ServiceCard from "./ServiceCard";

export default function Service() {
  return (
    <>
      <ServiceCard
        title="Web & Mobile App Development"
        description="Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online."
        imgSrc="src/assets/service-web.png" 
        imgAlt="Web and mobile development"
        reverse={false}    
        ctaLabel="Learn More"
        onCtaClick={() => console.log("clicked")}
      />
      <ServiceCard
        title="Digital Strategy Consulting"
        description="Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business."
        imgSrc="src/assets/service-consultancy.png" 
        imgAlt="Digital Strategy Consulting"
        reverse={true}
      />
    </>
  );
}
