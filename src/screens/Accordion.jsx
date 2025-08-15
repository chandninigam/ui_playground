import { useState } from "react";
import "../styles/accordion.css";

export function Accordion() {
  const accordionData = [
    {
      id: 1,
      title: "Section 1 – What is the return policy?",
      subTitle:
        "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our support team, and we’ll guide you through the return process. Refunds are processed within 5–7 business days.",
    },
    {
      id: 2,
      title: "Section 2 – How can I track my order?",
      subTitle:
        "After your order ships, you’ll receive a confirmation email with a tracking link. You can also log in to your account and view the status under the My Orders section.",
    },
    {
      id: 3,
      title: "Section 3 – Do you ship internationally?",
      subTitle:
        "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary based on your location. International orders may be subject to customs fees.",
    },
    {
      id: 4,
      title: "Section 4 – Can I change my order after placing it?",
      subTitle:
        "Changes can be made within 24 hours of placing your order, provided it has not been processed for shipping. Contact customer service immediately for assistance.",
    },
  ];
  const [openIndices, setOpenIndices] = useState([]);

  function toggleIndex(currentIndex) {
    setOpenIndices((prev) =>
      openIndices.includes(currentIndex)
        ? openIndices.filter((ele) => ele !== currentIndex)
        : [...prev, currentIndex]
    );
  }

  return (
    <div>
      <h1>Accordion</h1>
      <div className="accWrapper">
        {accordionData.map((ele, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div className="txtContainer" key={ele.id}>
              <button
                className="title"
                onClick={() => toggleIndex(index)}
                aria-expanded={isOpen}
              >
                <span className="plusIcon">{isOpen === true ? "-" : "+"}</span>
                {ele.title}
              </button>
              <div className={`subtitle ${isOpen === true ? "open" : "close"}`}>
                {ele.subTitle}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
