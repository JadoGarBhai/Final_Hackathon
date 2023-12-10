import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="col-12" id="bimg">
        <div className="container-fluid">
          <div className=" col-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCkl72OQokXPyOcAAXAaRfd1CYVBOGBfxQg&usqp=CAU"
              alt="main"
              style={{
                height: "370px",
                width: "620px",
                borderRadius: "30px",
              }}
            />
          </div>

          <div className="col-5">
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              maiores quibusdam molestiae pariatur quae, earum accusamus fugit
              neque iusto iste sapiente corporis ad ipsa architecto amet
              nostrum! Alias, sint voluptates!
            </p>
          </div>

          <div></div>
        </div>

        <div className="container-fluid"></div>
      </div>
    </>
  );
};

export default Home;
