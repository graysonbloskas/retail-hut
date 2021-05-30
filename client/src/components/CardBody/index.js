import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function CardBody() {
  const [cardInfo, updateCards] = useState([]);

  useEffect(() => {
    cardInfoGetter()
  }, []);

  function cardInfoGetter() {
    API.getProducts()
    .then(res =>
      updateCards(res.data),
      )
      .catch(err => console.log(err));
  };

  return (
    <div>
      <ul>
        <li>
          <p>{cardInfo.title}</p>
        </li>
        <li>
          <p>{cardInfo.price}</p>
        </li>
        <li>
          <p>{cardInfo.shop}</p>
        </li>
      </ul>
    </div>
  );
}

export default CardBody;
