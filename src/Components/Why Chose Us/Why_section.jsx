import React from "react";
import "./why_choce_us.css";
import WhyCard from "../Why Cards/WhyCard";
import cardImage1 from "../../images/service_img-1.png";
import cardImage2 from "../../images/service_img-2.png";
import cardImage3 from "../../images/service_img-3.png";
import cardIcon1 from "../../images/icons/service_img-1.png";
import cardIcon2 from "../../images/icons/service_img-2.png";
import cardIcon3 from "../../images/icons/service_img-3.png";

const Why_section = () => {
  const cardData = [
    {
      cardId: "01",
      cardTitle: "Fast Delivery",
      cardDesc:
        "Experience lightning-fast delivery with our efficient and reliable service. Get your items delivered to your doorstep in no time, ensuring convenience and satisfaction.",
      cardImage: cardImage1,
      cardIcon: cardIcon1,
    },
    {
      cardId: "02",
      cardTitle: "Fast Delivery",
      cardDesc:
        "Experience lightning-fast delivery with our efficient and reliable service. Get your items delivered to your doorstep in no time, ensuring convenience and satisfaction.",
      cardImage: cardImage2,
      cardIcon: cardIcon2,
    },
    {
      cardId: "03",
      cardTitle: "Fast Delivery",
      cardDesc:
        "Experience lightning-fast delivery with our efficient and reliable service. Get your items delivered to your doorstep in no time, ensuring convenience and satisfaction.",
      cardImage: cardImage3,
      cardIcon: cardIcon3,
    },
  ];
  return (
    <section className="why_chose_us bg-white py-5 ">
      <div className="inner_section container-xxl">
        <div className="header_contaier">
          <h2 className="fw-bold fs-1">Why Choose Us</h2>
          <p className="fw-normal text-description mt-4 fs-5">
            A restaurant website offering exquisite culinary creations,
            impeccable service, and a warm, inviting ambiance for an
            unforgettable dining experience. Choose us for a personalized and
            top-quality journey through diverse flavors from around the world.
          </p>
        </div>
        <div className="why_card_container mt-4">
          <div className="inner_card_cotnainer">
            {cardData.map((data) => (
              <WhyCard key={data.cardId} data={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why_section;
