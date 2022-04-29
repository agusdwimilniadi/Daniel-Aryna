import React, { useState } from "react";
import { useParams } from "react-router-dom";
import $ from "jquery";
import daniel from "../image/daniel 1.png";
import aryna from "../image/aryna 1.png";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Section1() {
  const [copy, setCopy] = useState(false);
  const [copy2, setCopy2] = useState(false);

  function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }

  function onCopy() {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  }
  function onCopy2() {
    setCopy2(true);
    setTimeout(() => {
      setCopy2(false);
    }, 1000);
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
            <div className="col-md-12 text-center">
              <img
                src="https://wekita.id/wp-content/uploads/2021/07/bismillah.svg"
                alt=""
                className="img-fluid"
              />
              <h1 className="font-3rd-new my-3 color-secondary">
                Assalamu'alaikum Wr. Wb.
              </h1>
              <div className="row">
                <div className="col-12 ">
                  <p className="font-primary fs-6">
                    Tanpa mengurangi rasa hormat. Kami mengundang
                    Bapak/Ibu/Saudara/i serta Kerabat sekalian untuk menghadiri
                    acara pernikahan kami:
                  </p>
                </div>
              </div>
            </div>
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
                  className="mt-3 text-center mb-3 fs-1 font-secondary-new"
                  style={{ color: "#A9865B" }}
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
                    fontFamily: '"Numans", Sans-serif',
                    color: "#634837",
                    fontSize: "18px",
                    lineHeight: "0.4em",
                    letterSpacing: "0.5px",
                  }}
                >
                  Sareh, M.Pd
                </p>
                <p
                  style={{
                    fontFamily: '"Numans", Sans-serif',
                    color: "#634837",
                    fontSize: "18px",
                    lineHeight: "0.4em",
                    letterSpacing: "0.5px",
                  }}
                >
                  &
                </p>
                <p
                  style={{
                    fontFamily: '"Numans", Sans-serif',
                    color: "#634837",
                    fontSize: "18px",
                    lineHeight: "0.4em",
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
                  className="mt-3 text-center mb-3 fs-1 font-secondary-new"
                  style={{ color: "#A9865B" }}
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
                    fontFamily: '"Numans", Sans-serif',
                    color: "#634837",
                    fontSize: "18px",
                    lineHeight: "0.4em",
                    letterSpacing: "0.5px",
                  }}
                >
                  Paryadi
                </p>
                <p
                  style={{
                    fontFamily: '"Numans", Sans-serif',
                    color: "#634837",
                    fontSize: "18px",
                    lineHeight: "0.4em",
                    letterSpacing: "0.5px",
                  }}
                >
                  &
                </p>
                <p
                  style={{
                    fontFamily: '"Numans", Sans-serif',
                    color: "#634837",
                    fontSize: "18px",
                    lineHeight: "0.4em",
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
      <section className="save-the-date">
        <div className="container-fluid">
          <h1
            className="p-5 m-0 text-center font-secondary-new text-white"
            style={{ fontSize: "3rem" }}
          >
            Save the Date
          </h1>
        </div>
      </section>
      <section className="section-3" style={{ backgroundColor: "#634837" }}>
        <div className="container py-5">
          <div className="row">
            <div
              className="col-8 offset-2 bg-white py-3 text-center bg-kotak shadow-lg "
              style={{ borderRadius: "10px" }}
            >
              <h1 className=" font-secondary-new color-3rd mt-3">Akad Nikah</h1>
              <h5 className="font-4th-new fw-bold fst-italic">
                Kamis, 19 Mei 2022
              </h5>
              <p className="fst-italic">
                Pukul 09.00 <br />
                Alamat: Jalan Musi Nomor 3 Begadung, Nganjuk
              </p>
            </div>

            <div
              className="col-8 offset-2 bg-white py-3 text-center bg-kotak mt-4 shadow-lg"
              style={{ borderRadius: "10px" }}
            >
              <h1 className=" font-secondary-new color-3rd mt-3">Resepsi</h1>
              <h5 className="font-4th-new fw-bold fst-italic">
                Sabtu, 20 Mei 2022
              </h5>
              <p className="fst-italic">
                Pukul 09.00 <br />
                Alamat : Jalan Dahlia Desa Teken Glagahan, Loceret, Nganjuk
              </p>
            </div>
            <div className="col-12  py-3">
              <div className="responsive-map text-center">
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.1810922121664!2d111.90439704805608!3d-7.586137577596748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e784af87a1decb3%3A0x42eeffa78d89dad5!2zN8KwMzUnMTAuMiJTIDExMcKwNTQnMTUuMCJF!5e0!3m2!1sen!2sid!4v1651132696027!5m2!1sen!2sid"
                  width="100%"
                  height={450}
                  style={{ border: "3px solid #A9865B", borderRadius: "10px" }}
                  className="p-2"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="text-center">
                <a
                  href="https://goo.gl/maps/FUPXEu1BpMt5Y5Ar7"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary bg-primary-new mt-2"
                >
                  Lihat Lokasi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section-4"
        style={{ backgroundColor: "#F7EEE6" }}
      ></section>
      <section className="section-4 m-0" style={{ backgroundColor: "#F7EEE6" }}>
        <div className="container py-5 text-center m-auto">
          <h1
            className=" font-secondary-new color-3rd mt-3 mb-5"
            style={{ fontSize: "3rem" }}
          >
            Gallery Photo
          </h1>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <img
                  src="https://wekita.id/wp-content/uploads/2022/04/22AD279-FOTO-1.jpg"
                  className="d-block w-100 img-fluid rounded "
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://wekita.id/wp-content/uploads/2022/04/22AD279-FOTO-2-1.jpg"
                  className="d-block w-100 img-fluid rounded"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://wekita.id/wp-content/uploads/2022/04/22AD279-FOTO-3-1.jpg"
                  className="d-block w-100 img-fluid rounded"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://wekita.id/wp-content/uploads/2022/04/22AD279-FOTO-4-1.jpg"
                  className="d-block w-100 img-fluid rounded"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://wekita.id/wp-content/uploads/2022/04/22AD279-FOTO-8-1.jpg"
                  className="d-block w-100 img-fluid rounded"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      <section className="section-5 bg-undangan py-5 m-0">
        <div className="container text-center">
          <h1
            className=" font-secondary-new color-primary "
            style={{ fontSize: "3rem" }}
          >
            Amplop Digiital
          </h1>
          <div className="row">
            <div className="col-8 offset-2">
              <p className="font-alata fs-5 color-secondary">
                Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.
                <br />
                Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat
                memberi kado secara cashless.
              </p>
            </div>
            <div
              className="col-8 offset-2 py-4 bg-kotak shadow"
              style={{ borderRadius: "10px" }}
            >
              <img
                src="https://wekita.id/wp-content/uploads/2022/03/BSI-Bank-Syariah-Indonesia-Logo-PNG1080p-Vector69Com.png"
                alt=""
                width="40%"
                className="img-fluid"
              />
              <hr />
              <p className="font-alata fs-5 color-secondary">
                No. Rekening : 1049084214
              </p>
              <CopyToClipboard text="1049084214" onCopy={onCopy}>
                <span className="btn btn-custom-undangan">
                  {copy ? "Berhasil disalin" : "Copy Text"}
                </span>
              </CopyToClipboard>
              <p className="font-alata mt-3 fs-5 color-secondary">
                A/n Daniel Firman S
              </p>
            </div>
            <div
              className="col-8 offset-2 py-4 bg-kotak shadow mt-5"
              style={{ borderRadius: "10px" }}
            >
              <img
                src="https://wekita.id/wp-content/uploads/2021/08/Bank-Jatim-Logo-PNG-480p-FileVector69.png"
                alt=""
                width="40%"
                className="img-fluid"
              />
              <hr />
              <p className="font-alata fs-5 color-secondary">
                No. Rekening : 2032102126
              </p>
              <CopyToClipboard text="2032102126" onCopy={onCopy2}>
                <span className="btn btn-custom-undangan">
                  {copy2 ? "Berhasil disalin" : "Copy Text"}
                </span>
              </CopyToClipboard>
              <p className="font-alata mt-3 fs-5 color-secondary">
                A/n Aryna Chintya Devi
              </p>
            </div>
            <div
              className="col-8 offset-2 py-4 bg-kotak shadow mt-5"
              style={{ borderRadius: "10px" }}
            >
              <h1 className="font-alata fs-5 color-secondary">Kirim Hadiah</h1>
              <hr />
              <p className="font-alata fs-5 color-secondary">
                Nama Penerima : Aryna Chintya Devi
                <br />
                Nomor HP: 0858-1255-7541
                <br />
                Alamat : Jalan Musi Nomor 3, Begadung, Kecamatan Nganjuk,
                Kabupaten Nganjuk
              </p>
            </div>
            <div className="col-8 offset-2 py-4 bg-kotak shadow mt-5">
              <h1
                className="font-secondary-new fw-bold color-primary"
                style={{ fontFamily: "Philosopher" }}
              >
                HEALTH PROTOCOL
              </h1>
              <p className="mb-5">
                Guna mencegah penyebaran Covid-19, diharapkan bagi tamu undangan
                untuk mematuhi Protokol Kesehatan di bawah ini :
              </p>
              <div className="row">
                <div className="col-4">
                  <img
                    src="https://wekita.id/wp-content/uploads/2021/07/01-14-1.png"
                    alt=""
                    className="img-fluid"
                    width="50%"
                  />
                  <h5 className="my-4 color-primary">Cuci Tangan</h5>
                </div>
                <div className="col-4">
                  <img
                    src="https://wekita.id/wp-content/uploads/2021/07/04-15.png"
                    alt=""
                    className="img-fluid"
                    width="50%"
                  />
                  <h5 className="my-4 color-primary">Gunakan Masker</h5>
                </div>
                <div className="col-4">
                  <img
                    src="https://wekita.id/wp-content/uploads/2021/07/06-3.png"
                    alt=""
                    className="img-fluid"
                    width="50%"
                  />
                  <h5 className="my-4 color-primary">Jaga Jarak</h5>
                </div>
                <div className="col-4">
                  <img
                    src="https://wekita.id/wp-content/uploads/2021/07/05-10.png"
                    alt=""
                    className="img-fluid"
                    width="50%"
                  />
                  <h5 className="my-4 color-primary">Tidak Bersalaman</h5>
                </div>
                <div className="col-4">
                  <img
                    src="https://wekita.id/wp-content/uploads/2021/07/02-15-1.png"
                    alt=""
                    className="img-fluid"
                    width="50%"
                  />
                  <h5 className="my-4 color-primary">Gunakan Handsanitizer</h5>
                </div>
                <div className="col-4">
                  <img
                    src="https://wekita.id/wp-content/uploads/2021/07/03-9.png"
                    alt=""
                    className="img-fluid"
                    width="50%"
                  />
                  <h5 className="my-4 color-primary">Hindari Kerumuman</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
