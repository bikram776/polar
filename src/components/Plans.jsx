import "./plans.css";

function Plans() {
  const planData = [
    {
      name: "Adventurer Plan",
      price: 60,
      listDesc: "Perfect for occasional hikers",
      offers: [
        "Access to trail maps",
        "Hiking tips & tricks",
        "Gear recommendations",
        "Community forum access",
        "Limited trail reviews",
      ],
    },
    {
      name: "Explorer Plan",
      price: 100,
      listDesc: "Great for avid hikers",
      offers: [
        "Unlimited trail maps",
        "Advanced hiking routes",
        "Exclusive gear discounts",
        "Priority customer support",
        "Detailed trail reviews",
      ],
    },
    {
      name: "Polar Plan",
      price: 200,
      listDesc: "For the hardcore hikers",
      offers: [
        "Personalized trail recommendations",
        "Customized hiking plans",
        "VIP access to hiking events",
        "Expert-led guided hikes",
        "Full access to all features",
      ],
    },
  ];

  return (
    <div>
      <div className="plan-container">
        {planData.map((plan, index) => (
          <div className="plan-card" key={index}>
            <div className="title-price">
              <h3>{plan.name}</h3>
              <div className="price">
                <p>${plan.price}</p>
                <sub>/month</sub>
              </div>
            </div>
            <div className="offers-list">
              <p>{plan.listDesc}</p>
              <ul>
                {plan.offers.map((offer, id) => (<li key={id}>{offer}</li>))}
              </ul>
              <a>Buy Plan</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
