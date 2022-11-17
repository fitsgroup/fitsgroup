import React from "react";
import cvr from "../Assets/cover.jpg";
import cvr1 from "../Assets/slid.jpg";
import cvr2 from "../Assets/cover1.jpg";
import AbutUsImg from "../Assets/Aboutus.jpg";
import "../Styles/styles.css";
import serviceBoxData from "../Data/UlData";
import tech from "../Assets/tech-min.png";
import Reveal from 'react-reveal/Reveal';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
const Main = () => {
  return (
    <>
      {/* Crousal starts here  */}
      <div className="min-vh-100">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide "
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={cvr}
                class="d-block img-fluid vw-100 vh-100 cver-img"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={cvr1}
                class="d-block img-fluid w-100 vh-100 cver-img"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={cvr2}
                class="d-block img-fluid w-100 vh-100 cver-img"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
       
      {/* Aboutus  */}
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6">
            <small className="fw-bold text-secondary my-2"> OUR COMPANY</small>
            <Fade bottom>
            <h1 className="fw-bold ">
              Get IT solutions for a more secure environment
            </h1>
            <p>
              {" "}
              We are providing the entireinfrastructure of the IT industry. You
              can get IT solutions for a more secure environment of your
              problems. We offer best selling products like ERP .
            </p>
            </Fade>
            <button className="btn btn-secondary"> Find out more </button>
          </div>
<div className="col-md-6">
          <Flip left  >
            <img src={AbutUsImg} alt="About Us image" className="img-fluid" />
          </Flip>
          </div>
        </div>
      </div>
      {/* Services */}
      <section className="container">
      <Fade bottom className="services   ">
        <div   className="Service_tile text-center">
          <h2>Services We Deliver </h2>
          <h4>
            we provide{" "}
            <span className="text-secondary">
              {" "}
              truly prominent IT solutions.
            </span>{" "}
          </h4>
        </div>

        <div className="d-flex flex-wrap   p-2 mb-5">
          {serviceBoxData.map((val) => {
            return <ServiceCard title={val.title} img={val.img} />;
          })}
        </div>
      </Fade></section>

      {/* technologies */}
 
      <section className="container my-5">
        <div className="technlogy">
          <p className="fw-bold ">OUT TECHNOLOGY</p>
          <div className="row">
            <div className="col-md-6">
              <Fade left>
              <h1>
                <span className="text-secondary">FITS</span> – Top Software
                Development Technology
              </h1>
              <h6 className="lh-base my-4">
                Our strong passion to modern tech trends and best practices
                drive in the development of top-notch solutions that are
                perfectly tailored to provide high quality and affordable
                software outsourcing solutions to growing startup and enterprise
                companies in the world.
              </h6>

              <div className="d-flex flex-wrap">
                <div className=" px-5 py-3 shadow m-2 cards ">React js </div>
                <div className=" px-5 py-3 shadow m-2 cards">Node js </div>
                <div className=" px-5 py-3 shadow m-2 cards ">Anular js </div>
                <div className=" px-5 py-3 shadow m-2 cards ">SQl js </div>
                <div className=" px-5 py-3 shadow m-2 cards ">PHP</div>
                <div className=" px-5 py-3 shadow m-2 cards ">Node js </div>
              </div>
              </Fade>
            </div>
            <div className="col-md-6">
              <Fade right>
              <img src={tech} width="600px" height="400px" />
              </Fade>
            </div>
          </div>
        </div>
      </section>
      {/* resuest a Quote */}
      <section className="work-Process container">
        <p className="fw-bold"> HOW WE WORKS</p>

        <div>
          <h2>
            How it helps your <br></br>
            <span className="text-secondary display-5 fw-bold">
              Business Succeed
            </span>
          </h2>
        </div>
        <div className="row my-5">
          <div className="col workCard">
            <Flip bottom>
            <h6>01. Discussion</h6>
            <p className="my-3">
              We meet customers in set place to discuss the details about needs
              and demands before proposing a plan.
            </p>
            </Flip>
          </div>

          <div className="col workCard">
            {" "}
            <Flip bottom>
            <h6>02. Concepts & Initatives</h6>
            <p className="my-3">
              Our experts come up with all kinds of ideas and initiatives for
              delivering the best solutions for IT services chosen.
            </p>
            </Flip>
          </div>
          <div className="col workCard">
            {" "}
            <Flip bottom>
            <h6>03. Testing & Trying</h6>
            <p className="my-3">
              After agreeing on the ideas and plans, we will conduct as
              scheduled and give comments on the results & adaptations.
            </p>
            </Flip>
          </div>
          <div className="col workCard">
            {" "}
            <Flip bottom>
            <h6> 04. Execute & install</h6>
            <p className="my-3">
              Once the final plan is approved, everything will be conducted
              according to the agreed contract
            </p>
            </Flip>
          </div>
        </div>
      </section>
      <div className=" bg-dark   text-white py-5">
        <div className="container ">
          <div className="row   ">
            <div className="col-md-9 h1">
              We run all kinds of IT services that vow your success
            </div>
            <div className="col-md-3 d-flex justify-content-around">
              {" "}
              <button className="btn btn-secondary "> Lets Talk</button>{" "}
              <button className="btn btn-dark">Get Info</button>{" "}
            </div>
          </div>
        </div>
      </div>
      <div class="mapouter text-center pt-4 ">
        <p className="fw-bold">OUR LOCATION</p>
        <h2 className="mb-3">We Welcome You Here</h2>
        <iframe
          class="gmap_iframe  "
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=2048&amp;height=400&amp;hl=en&amp;q=gujranwala&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>

      {/* contact Form  */}

      <section className="contact-Form bg-secondary py-5 ">
        <div className="container  py-5   ">
          <div className="row container">
            <div className="col-md-6">
              <h2 className="border-start border-5 lh-lg px-3">
                To make requests for further information, contact us via our
                social channels.
              </h2>
              <p className="my-4 fw-bold text-da">
                We just need a couple of hours! <br></br>
                No more than 2 working days since receiving your issue ticket.
              </p>
            </div>
            <div className="col-md-6">
              <form>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      id="disabledTextInput"
                      class="form-control"
                      placeholder="Enter Name *"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      id="disabledTextInput"
                      class="form-control"
                      placeholder="Enter Email *"
                    />
                  </div>
                  <div> <input type="text" id="disabledTextInput" class="form-control my-3" placeholder="Enter Subject"/>
                  <textarea type="text" id="disabledTextInput" class="form-control" placeholder="Enter Message"/>
                  <button className="btn  btn-dark  btn-lg px-5 my-5"> Send </button>
                  </div>
                 

                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const ServiceCard = ({ title, img }) => {
  return (
    <>
      <div className="  p-5 m-1 cards rouded  border ">
        <img src={img} />
        <p className="text-center pt-3">{title}</p>
      </div>
    </>
  );
};

export default Main;
