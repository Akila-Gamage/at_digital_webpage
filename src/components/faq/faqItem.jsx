export default function FaqItem({ question, answer, isOpen = false }) {
  const collapseId = `collapse-${question.id}`;
  const headingId = `heading-${question.id}`;

  return (
    <div className="accordion-item  mb-4">
      <h2 className="accordion-header" id={headingId}>
        <button
          className={`accordion-button ${isOpen ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded={isOpen}
          aria-controls={collapseId}
        >
          {question.text}

          <span className="ms-auto d-inline-flex align-items-center faq-toggle-icon">
            <i className="bi bi-plus-lg icon-collapsed" aria-hidden="true" />
            <i className="bi bi-dash-lg icon-expanded" aria-hidden="true" />
          </span>
        </button>
      </h2>
      <div
        id={collapseId}
        className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
        aria-labelledby={headingId}
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
}
