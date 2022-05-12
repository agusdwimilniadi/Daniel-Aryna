import React, { useState } from "react";
import { useParams } from "react-router-dom";
import $ from "jquery";
import daniel from "../image/daniel 1.png";
import aryna from "../image/aryna 1.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { gql, useMutation, useSubscription } from "@apollo/client";
import swal from "sweetalert";

const SubscriptionUcapan = gql`
  subscription MySubscription {
    ucapan_nikah {
      id
      alamat_rumah
      nama_undangan
      pesan
    }
  }
`;
const InsertUcapan = gql`
  mutation MyMutation(
    $alamat_rumah: String = ""
    $kehadiran: String = ""
    $nama_undangan: String = ""
    $pesan: String = ""
  ) {
    insert_ucapan_nikah_one(
      object: {
        alamat_rumah: $alamat_rumah
        kehadiran: $kehadiran
        nama_undangan: $nama_undangan
        pesan: $pesan
      }
    ) {
      kehadiran
      id
      nama_undangan
      pesan
      alamat_rumah
    }
  }
`;
export default function Section1() {
  const [copy2, setCopy2] = useState(false);
  const [insertUcapan, { loading: loadingInsert }] = useMutation(InsertUcapan);
  const { data: dataUcapanSubs } = useSubscription(SubscriptionUcapan);
  function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }

  const [dataUcapan, setDataUcapan] = useState({
    namaUndangan: "",
    kehadiran: "",
    ucapan: "",
    alamatRumah: "",
  });
  const onChangeData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataUcapan({
      ...dataUcapan,
      [name]: value,
    });
  };
  const onSubmit = async () => {
    await insertUcapan({
      variables: {
        nama_undangan: dataUcapan.namaUndangan,
        pesan: dataUcapan.ucapan,
        kehadiran: dataUcapan.kehadiran,
        alamat_rumah: dataUcapan.alamatRumah,
      },
    });
    swal("Berhasil", "Pesan ucapan berhasil dikirim", "success");
    setDataUcapan({
      namaUndangan: "",
      kehadiran: "",
      ucapan: "",
      alamatRumah: "",
    });
  };

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
  const [dayss, setDayss] = useState("");
  const [hourss, setHourss] = useState("");
  const [minutess, setMinutess] = useState("");
  const [secondss, setSecondss] = useState("");
  var countDownDate = new Date("May 19, 2022 10:00:00").getTime();

  // Memperbarui hitungan mundur setiap 1 detik
  var x = setInterval(function () {
    // Untuk mendapatkan tanggal dan waktu hari ini
    var now = new Date().getTime();

    // Temukan jarak antara sekarang dan tanggal hitung mundur
    var distance = countDownDate - now;

    // Perhitungan waktu untuk hari, jam, menit dan detik
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    setDayss(days);
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    setHourss(hours);
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    setMinutess(minutes);
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setSecondss(seconds);
    // Keluarkan hasil dalam elemen dengan id = "demo"

    // Jika hitungan mundur selesai, tulis beberapa teks
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
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
              <h1 className="text-uppercase">
                {params === "" ? "" : params?.undangan?.split("-").join(" ")}
              </h1>
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
        <audio
          src="https://firebasestorage.googleapis.com/v0/b/investa-image-upload.appspot.com/o/ArynaDaniel%2Fy2mate.com%20-%20Marry%20Your%20Daughter%20%20Brian%20McKnight%20animation_320kbps.mp3?alt=media&token=d2f26888-1da6-4e14-8a8d-17f2c29cb784"
          id="audio"
          autoPlay
        ></audio>
        <div className="container-fluid ">
          <div className="text-center">
            <h5 className="pt-5 heading-1 font-primary-new fs-3">
              THE WEEDING OF
            </h5>

            <div className="pt-3">
              <img
                src="https://acarakami.com/wp-content/uploads/2020/10/icon-leaf-acarakami.svg"
                alt=""
                className="img-fluid"
              />
            </div>

            <div
              className="pt-2 name-1 text-white  font-secondary-new"
              onClick={play}
            >
              <h1 style={{ fontSize: "3rem" }}>
                Daniel <br /> & <br /> Aryna
              </h1>
            </div>
            <div className="pt-4 font-primary-new">
              <h6 className="date">Thursday</h6>
              <h6 className="date">19 / MEI / 2022</h6>
            </div>
            <div className="px-2">
              <div className="container">
                <ul
                  class="countdown d-flex justify-content-center p-0 text-center  color-secondary-cstm"
                  data-countdown="2022/05/19"
                >
                  <li>
                    <span id="dayss">{dayss}</span>
                    <p>Hari</p>
                  </li>
                  <li>
                    <span id="hourss">{hourss}</span>
                    <p>Jam</p>
                  </li>
                  <li>
                    <span id="minutess">{minutess}</span>
                    <p>Menit</p>
                  </li>
                  <li>
                    <span id="secondss">{secondss}</span>
                    <p>Detik</p>
                  </li>
                </ul>
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
                Pukul 09.00 WIB <br />
                Alamat: Jalan Musi Nomor 3 Begadung RT 01/ RW 05 , Nganjuk
              </p>
            </div>

            <div
              className="col-8 offset-2 bg-white py-3 text-center bg-kotak mt-4 shadow-lg"
              style={{ borderRadius: "10px" }}
            >
              <h1 className=" font-secondary-new color-3rd mt-3">Resepsi</h1>
              <h5 className="font-4th-new fw-bold fst-italic">
                Kamis, 19 Mei 2022
              </h5>
              <p className="fst-italic">
                Pukul 12.00-15.00 WIB <br />
                Alamat: Jalan Musi Nomor 3 Begadung RT 01/ RW 05, Nganjuk
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
              <p className="font-alata fs-custom-5 color-secondary fs-md-6">
                Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.
                <br />
                Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat
                memberi kado secara cashless.
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
              <p className="font-alata fs-custom-5 color-secondary">
                No. Rekening : 2032102126
              </p>
              <CopyToClipboard text="2032102126" onCopy={onCopy2}>
                <span className="btn btn-custom-undangan">
                  {copy2 ? "Berhasil disalin" : "Copy Text"}
                </span>
              </CopyToClipboard>
              <p className="font-alata mt-3 fs-custom-5 color-secondary">
                A/n Aryna Chintya Devi
              </p>
            </div>
            <div
              className="col-8 offset-2 py-4 bg-kotak shadow mt-5"
              style={{ borderRadius: "10px" }}
            >
              <h1 className="font-alata fs-custom-5 color-secondary">
                Kirim Hadiah
              </h1>
              <hr />
              <p className="font-alata fs-custom-5 color-secondary">
                Nama Penerima : Aryna Chintya Devi
                <br />
                Nomor HP: 0858-1255-7541
                <br />
                Alamat : Jalan Musi Nomor 3, Begadung RT 01/ RW 05, Kecamatan
                Nganjuk, Kabupaten Nganjuk
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
                <div className="col-md-4">
                  <img
                    src="https://wekita.id/wp-content/uploads/2021/07/01-14-1.png"
                    alt=""
                    className="img-fluid"
                    width="50%"
                  />
                  <h5 className="my-4 color-primary">Cuci Tangan</h5>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://wekita.id/wp-content/uploads/2021/07/04-15.png"
                    alt=""
                    className="img-fluid"
                    width="50%"
                  />
                  <h5 className="my-4 color-primary">Gunakan Masker</h5>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://wekita.id/wp-content/uploads/2021/07/06-3.png"
                    alt=""
                    className="img-fluid"
                    width="50%"
                  />
                  <h5 className="my-4 color-primary">Jaga Jarak</h5>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://wekita.id/wp-content/uploads/2021/07/05-10.png"
                    alt=""
                    className="img-fluid"
                    width="50%"
                  />
                  <h5 className="my-4 color-primary">Tidak Bersalaman</h5>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://wekita.id/wp-content/uploads/2021/07/02-15-1.png"
                    alt=""
                    className="img-fluid"
                    width="50%"
                  />
                  <h5 className="my-4 color-primary">Gunakan Handsanitizer</h5>
                </div>
                <div className="col-md-4">
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
      <section className="save-the-date">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center py-5 text-white">
              <div>
                <img
                  src="https://acarakami.com/wp-content/uploads/2020/10/icon-leaf-acarakami.svg"
                  alt=""
                  className="img-fluid "
                />
                <p className="font-primary fs-custom-5 text-center mt-3">
                  "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
                  untukmu isteri-isteri dari jenismu sendiri, supaya kamu
                  cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya
                  diantaramu rasa kasih dan sayang. Sesungguhnya pada yang
                  demikian itu benar-benar terdapat tanda-tanda bagi kaum yang
                  berfikir."
                </p>
                <p className="font-secondary fs-custom-5">(Q.S Ar Rum : 21)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-5 bg-undangan py-5  m-0">
        <div className="container ">
          <h1
            className="font-secondary-new fw-bold color-primary text-center"
            style={{ fontFamily: "Philosopher" }}
          >
            Ucapkan Sesuatu
          </h1>
          <h4
            className="font-secondary-new fw-normal color-primary text-center"
            style={{ fontFamily: "Philosopher" }}
          >
            Berikan Ucapan dan Doa Restu
          </h4>
          <div className="row">
            <div
              className="col-10 offset-1 py-4 bg-kotak shadow mt-5"
              style={{ borderRadius: "10px" }}
            >
              <div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Nama Anda"
                    name="namaUndangan"
                    onChange={onChangeData}
                    value={dataUcapan.namaUndangan}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Alamat"
                    name="alamatRumah"
                    onChange={onChangeData}
                    value={dataUcapan.alamatRumah}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={""}
                    placeholder="Berikan ucapan dan Doa"
                    name="ucapan"
                    onChange={onChangeData}
                    value={dataUcapan.ucapan}
                  />
                </div>
                <div className="mb-3">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="kehadiran"
                    onChange={onChangeData}
                    value={dataUcapan.kehadiran}
                  >
                    <option selected disabled value="">
                      Konfirmasi Kehadiran
                    </option>
                    <option value={true}>Hadir</option>
                    <option value={false}>Tidak Hadir</option>
                  </select>
                </div>
                <div className="mb-3">
                  <button
                    className="btn btn-custom-undangan"
                    onClick={onSubmit}
                    disabled={
                      dataUcapan.kehadiran === "" ||
                      dataUcapan.namaUndangan === "" ||
                      dataUcapan.alamatRumah === "" ||
                      dataUcapan.ucapan === ""
                        ? true
                        : false
                    }
                  >
                    {loadingInsert ? (
                      <>
                        <span
                          class="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        {"     "}
                        Tungu sebentar...
                      </>
                    ) : (
                      "Kirim"
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="page-content page-container" id="page-content">
                <div className="padding">
                  <div className="row container d-flex justify-content-center m-0">
                    <div className="col-md-10">
                      <div
                        className="card card-bordered shadow"
                        style={{ borderRadius: "20px" }}
                      >
                        <div className="card-header">
                          <h4 className="card-title">
                            <strong>Ucapan</strong>
                          </h4>
                        </div>
                        <div
                          className="ps-container ps-theme-default ps-active-y"
                          id="chat-content"
                          style={{
                            overflowY: "scroll !important",
                            height: "400px !important",
                          }}
                        >
                          {dataUcapanSubs?.ucapan_nikah
                            ?.slice(0)
                            .reverse()
                            .map((item) => {
                              return (
                                <div className="media media-chat">
                                  <img
                                    className="avatar"
                                    src="https://img.icons8.com/color/36/000000/administrator-male.png"
                                    alt="chat"
                                  />
                                  <div className="media-body">
                                    <p>
                                      Nama : {item.nama_undangan}
                                      <br />
                                      Alamat : {item.alamat_rumah} <br /> Ucapan
                                      : {item.pesan}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}

                          <div
                            className="ps-scrollbar-x-rail"
                            style={{ left: "0px", bottom: "0px" }}
                          >
                            <div
                              className="ps-scrollbar-x"
                              tabIndex={0}
                              style={{ left: "0px", width: "0px" }}
                            />
                          </div>
                          <div
                            className="ps-scrollbar-y-rail"
                            style={{ top: "0px", height: "0px", right: "2px" }}
                          >
                            <div
                              className="ps-scrollbar-y"
                              tabIndex={0}
                              style={{ top: "0px", height: "2px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* CARUSELL */}
              {/* <div
                id="carouselExampleControls2"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-8 offset-2">
                        <div className="mt-5">
                          <div
                            className="card mx-auto"
                            style={{ width: "18rem" }}
                          >
                            <div className="card-body">
                              <h5 className="card-title">
                                Nama : Agus Dwi Milniadi
                              </h5>
                              <h6 className="card-subtitle mb-2 text-muted">
                                Alamat : Begadung
                              </h6>
                              <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ducimus delectus saepe
                                recusandae.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-8 offset-2">
                        <div className="mt-5">
                          <div
                            className="card mx-auto"
                            style={{ width: "18rem" }}
                          >
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <h6 className="card-subtitle mb-2 text-muted">
                                Card subtitle
                              </h6>
                              <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-8 offset-2">
                        <div className="mt-5">
                          <div
                            className="card mx-auto"
                            style={{ width: "18rem" }}
                          >
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <h6 className="card-subtitle mb-2 text-muted">
                                Card subtitle
                              </h6>
                              <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls2"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls2 "
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="section-6 bg-undangan  py-5 m-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center position-relative">
              <img
                src="https://wekita.id/wp-content/uploads/2022/04/22AD279-ak.png"
                alt=""
                className="img-fluid position-relative img-responsive-size"
              />
              <p
                className="font-primary fs-custom-5 text-center mt-3  "
                style={{ padding: "0px 50px" }}
              >
                Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
                Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
                <br />
                Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
              </p>
              <br />
              <h1 className="font-3rd-new my-3 color-secondary ">
                Wassalamu'alaikum Wr. Wb.
              </h1>
              <h1 className="font-secondary-new my-3 text-dark fs-1 ">
                Daniel & Aryna
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
