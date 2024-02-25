import { Route, Routes } from "react-router-dom";
import HomPage from "./HomePage/HomePage";
import ReservationPage from "./ReservationPage/ReservationPage";

const Main = () => {
  return (
    <main className="main-content">
      <div className="banner-section-wrapper">
        <section className="banner-section">
          <h1>30% off this weekend</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid.
          </p>
        </section>
      </div>
      <Routes>
         <Route path="/" element={<HomPage />}></Route>
        <Route path="/reservation" element={<ReservationPage />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
