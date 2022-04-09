import React from "react";
import { useParams } from "react-router-dom";
import $ from "jquery";
export default function Section1() {
  function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }

  const fungsiOpen = () => {
    $(".section-0").animate(
      { textIndent: 0 },
      {
        step: function () {
          $(this).css("transform", "translateY(200%)");
        },
        duration: "slow",
      },
      "linear"
    );
    play();
  };
  const params = useParams();

  return (
    <>
      <section
        className="section-0 "
        style={{
          backgroundImage: `url('image/1.jpeg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container-fluid container-auto">
          <div className="text-center">
            <h3 className="pt-5 heading-1-0">Hello</h3>
            <div className="pt-2 name-1 text-white " onClick={play}>
              <h1>{params === "" ? "Guys" : params.undangan}</h1>
            </div>
            <div className="pt-4 ">
              <h6 className="date">You're Invited</h6>
              <h6 className="date">19 / MEI / 2022</h6>
            </div>
            <div className="my-4">
              <button
                onClick={fungsiOpen}
                className="btn btn-primary-custom font-primary text-white"
              >
                Open Invitation
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section-1 d-flex align-items-center"
        style={{
          backgroundImage: `url('image/1.jpeg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundBlendMode: "overlay",
        }}
      >
        <audio src="music/music.mp3" id="audio" autoPlay></audio>
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
            <div className="pt-2 name-1 text-white " onClick={play}>
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
