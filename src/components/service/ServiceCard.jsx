export default function ServiceCard({
  title,
  description,
  imgSrc,
  reverse = false,
  ctaLabel = "Learn More",
  onCtaClick,
}) {
  return (
    <section className="service px-2 px-lg-5 ">
      <div
        className={
          `d-flex flex-column flex-md-row justify-content-center align-items-center service-card ` +
          (reverse ? "flex-md-row-reverse" : "")
        }
      >
        <div className="col-12 col-md-4 d-flex justify-content-center service-img">
          <img src={imgSrc} alt="Service image" />
        </div>

        <div className="col-12 col-md-8 service-details d-flex align-items-center flex-column">
          <div className="service-content">
            <h2 className="fs-2 pb-3 service-title">{title}</h2>
            <p className="fs-5 service-description">{description}</p>
            <div className="mt-auto">
              <button className="btn btn-primary service-btn" onClick={onCtaClick}>
                {ctaLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
