import React from "react";
import { useParams } from "react-router-dom";
import $ from "jquery";
import daniel from "../image/daniel 1.png";
import aryna from "../image/aryna 1.png";

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
      <section className="section-2" style={{ backgroundColor: "#F7EEE6" }}>
        <div className="container py-5">
          <div className="row ">
            <div className="col-md-6 text-center d-flex align-items-center">
              <div className="mt-5">
                <img
                  src={daniel}
                  alt=""
                  width={"30%"}
                  className="img-fluid mb-2"
                  style={{ borderRadius: "50%", border: "3px solid #A9865B" }}
                />
                <h1
                  className="mt-3 text-center mb-3 fs-1"
                  style={{ fontFamily: "Playfair Display", color: "#A9865B" }}
                >
                  Daniel Firman Syahroni
                </h1>
                <p
                  className="mb-3"
                  style={{
                    fontFamily: '"Numans", Sans-serif',
                    color: "#634837",
                  }}
                >
                  Anak pertama dari:
                </p>
                <p
                  style={{
                    fontFamily: "Playfair Display",
                    fontStyle: "italic",
                    color: "#634837",
                    fontSize: "25px",
                    lineHeight: "0.8em",
                    letterSpacing: "0.5px",
                  }}
                >
                  Sareh, M.Pd
                </p>
                <p
                  style={{
                    fontFamily: "Playfair Display",
                    fontStyle: "italic",
                    color: "#634837",
                    fontSize: "25px",
                    lineHeight: "0.8em",
                    letterSpacing: "0.5px",
                  }}
                >
                  &
                </p>
                <p
                  style={{
                    fontFamily: "Playfair Display",
                    fontStyle: "italic",
                    color: "#634837",
                    fontSize: "25px",
                    lineHeight: "0.8em",
                    letterSpacing: "0.5px",
                  }}
                >
                  Endang Ismiwati, S.Pd
                </p>
              </div>
            </div>
            <div className="col-md-6 text-center d-flex align-items-center">
              <div className="mt-5">
                <img
                  src={aryna}
                  alt=""
                  width={"30%"}
                  className="img-fluid mb-2"
                  style={{ borderRadius: "50%", border: "3px solid #A9865B" }}
                />
                <h1
                  className="mt-3 text-center mb-3 fs-1"
                  style={{ fontFamily: "Playfair Display", color: "#A9865B" }}
                >
                  Aryna Chintya Devi
                </h1>
                <p
                  className="mb-3"
                  style={{
                    fontFamily: '"Numans", Sans-serif',
                    color: "#634837",
                  }}
                >
                  Anak pertama dari:
                </p>
                <p
                  style={{
                    fontFamily: "Playfair Display",
                    fontStyle: "italic",
                    color: "#634837",
                    fontSize: "25px",
                    lineHeight: "0.8em",
                    letterSpacing: "0.5px",
                  }}
                >
                  Paryadi
                </p>
                <p
                  style={{
                    fontFamily: "Playfair Display",
                    fontStyle: "italic",
                    color: "#634837",
                    fontSize: "25px",
                    lineHeight: "0.8em",
                    letterSpacing: "0.5px",
                  }}
                >
                  &
                </p>
                <p
                  style={{
                    fontFamily: "Playfair Display",
                    fontStyle: "italic",
                    color: "#634837",
                    fontSize: "25px",
                    lineHeight: "0.8em",
                    letterSpacing: "0.5px",
                  }}
                >
                  Wijiningsih
                </p>
              </div>
            </div>
            <div className="col-md-12 text-center ">
              <div style={{ paddingTop: "10%" }}>
                <img
                  src="https://acarakami.com/wp-content/uploads/2020/10/icon-leaf-acarakami.svg"
                  alt=""
                  className="img-fluid "
                />
                <p className="font-primary text-center color-primary mt-3">
                  "Dan segala sesuatu Kami ciptakan berpasang-pasangan supaya
                  kamu mengingat kebesaran Allah"
                </p>
                <p className="font-secondary color-secondary">
                  QS. Az-Zariyat Ayat 49
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-3" style={{ backgroundColor: "#634837" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <img
                src="https://acarakami.com/wp-content/uploads/2020/10/icon-leaf-acarakami.svg"
                alt=""
                className="img-fluid my-4"
              />
              <p className="text-center font-primary text-white mb-4">
                God Almighty mercy and blessing, we intend to hold a Wedding for
                our son and daughter <br /> which, God willing, will be held on:
              </p>

              <div className="pt-4 ">
                <h2 className="date fs-5">SUNDAY</h2>
                <h2 className="date fs-5">19 / MEI / 2022</h2>
                <img
                  src="https://acarakami.com/wp-content/uploads/2020/10/icon-leaf-acarakami.svg"
                  alt=""
                  className="img-fluid my-4"
                />
                <h2 className="date fs-5">TIME</h2>
                <h2 className="date fs-5">10.00 WIB - FINISH</h2>
                <img
                  src="https://acarakami.com/wp-content/uploads/2020/10/icon-leaf-acarakami.svg"
                  alt=""
                  className="img-fluid my-4"
                />
                <h2 className="date fs-5">LOCATION</h2>
                <h2 className="date fs-5">Jalan Musi Nomor 3 Begadung,</h2>
                <h2 className="date fs-5 mb-5">
                  Kecamatan Nganjuk, Kabupaten Nganjuk
                </h2>
                <p className="text-center font-primary text-white mb-4 mt-5">
                  It is a joy and honor for us, if you are willing to give our
                  children's blessings.
                </p>
                <p className="text-center font-primary text-white mb-4">
                  We would be deeply grateful of your presence & blessings to
                  our wedding
                </p>
                <img
                  src="https://acarakami.com/wp-content/uploads/2020/10/icon-leaf-acarakami.svg"
                  alt=""
                  className="img-fluid my-4"
                />
                <h2 className="date fs-5">WE, THE HAPPY ONES</h2>
                <p
                  style={{
                    fontFamily: "Playfair Display",
                    fontStyle: "italic",
                    fontSize: "18px",
                    lineHeight: "0.8em",
                    letterSpacing: "0.5px",
                  }}
                  className="text-white my-3"
                >
                  Family of Mr. Paryadi
                </p>
                <p
                  style={{
                    fontFamily: "Playfair Display",
                    fontStyle: "italic",
                    fontSize: "18px",
                    lineHeight: "0.8em",
                    letterSpacing: "0.5px",
                  }}
                  className="text-white my-3"
                >
                  &
                </p>
                <p
                  style={{
                    fontFamily: "Playfair Display",
                    fontStyle: "italic",
                    fontSize: "18px",
                    lineHeight: "0.8em",
                    letterSpacing: "0.5px",
                  }}
                  className="text-white my-3"
                >
                  Family of Mr. Sareh, M.Pd
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
