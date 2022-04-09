import React from "react";
// import bgImage from "../image/#PW00001 (15).jpg";
export default function Section1() {
  return (
    <>
      <section
        className="section-1 d-flex align-items-center"
        style={{
          backgroundImage: `url('image/1.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container-fluid ">
          <div className="text-center">
            <h5 className="pt-5 heading-1">
              WE INVITE YOU TO CELEBRATE OUR WEEDING
            </h5>
            <div className="pt-3">
              <img
                src="https://acarakami.com/wp-content/uploads/2020/10/icon-leaf-acarakami.svg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="pt-2">
              <p className="text-sm heading-2 text-white text-sm">
                THE WEEDING OF
              </p>
            </div>
            <div className="pt-2 name-1 text-white ">
              <h1>
                Daniel <br /> & <br /> Aryna
              </h1>
            </div>
            <div className="pt-4 ">
              <h6 className="date">SUNDAY</h6>
              <h6 className="date">19 / MEI / 2022</h6>
            </div>
            <div className="px-2">
              <div className="container">
                <ul
                  class="countdown d-flex justify-content-center p-0 text-center  color-secondary-cstm"
                  data-countdown="2022/05/19"
                ></ul>
              </div>
              <a
                href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NTN0cW1iZzMyZTIwcXBnbTRlYnU5aWh2MXIgYWd1c2R3aW1pbGxAbQ&tmsrc=agusdwimill%40gmail.com"
                className="btn btn-primary-custom font-primary text-white"
              >
                Save The Date
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
