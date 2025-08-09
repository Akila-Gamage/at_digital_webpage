import FaqItem from "./faqItem";

export default function Faq() {
  return (
    <section>
      <div className="d-flex flex-column align-items-center justify-content-center faq-container">
        <h2 className="faq-title pb-3">Frequently asked questions</h2>
        <div className="d-flex flex-column align-items-stretch justify-content-center">
          <div className="accordion  px-2 px-lg-5" id="faqAccordion">
            <FaqItem
              question={{ id: 1, text: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?" }}
              answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
              isOpen={true}
            />
            <FaqItem
              question={{ id: 2, text: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?" }}
              answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
              isOpen={false}
            />
            <FaqItem
              question={{ id: 3, text: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?" }}
              answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
              isOpen={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
