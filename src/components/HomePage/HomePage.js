import React from "react";

import food2 from "../../assets/images/food-two.jpeg";
import food3 from "../../assets/images/food-three.jpeg";
import food4 from "../../assets/images/food-four.jpeg";
import { useNavigate } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "Our Menu",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio,harum nesciunt ipsum debitis quas aliquid.",
    path: "/menu",
    btnText: "Check",
    imgSrc: food2,
  },
  {
    id: 2,
    title: "Reserve a table",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio,harum nesciunt ipsum debitis quas aliquid.",
    path: "/reservation",
    btnText: "Reserve",
    imgSrc: food3,
  },
  {
    id: 3,
    title: "Order Online",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio,harum nesciunt ipsum debitis quas aliquid.",
    path: "/order",
    btnText: "Order",
    imgSrc: food4,
  },
];

const HomPage = () => {
  const navigate = useNavigate();
  return (
    <section className="articles-section">
      {articles.map((article) => (
        <article>
          <h2>{article.title}</h2>
          <img src={article.imgSrc} alt="food" />
          <p>{article.desc}</p>
          <button onClick={() => navigate(article.path)}>
            {article.btnText}
          </button>
        </article>
      ))}
    </section>
  );
};

export default HomPage;
