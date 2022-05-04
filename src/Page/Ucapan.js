import React from "react";
import { gql, useQuery } from "@apollo/client";
const myQuery = gql`
  query MyQuery {
    ucapan_nikah {
      id
      nama_undangan
      pesan
      kehadiran
    }
  }
`;
export default function Ucapan() {
  const { data } = useQuery(myQuery);
  return (
    <>
      <div className="container">
        <div className="row pt-5    ">
          <div className="col-md-12 text-center text-white mb-5">
            <h1>Ucapan</h1>
          </div>
          {data?.ucapan_nikah.map((item) => {
            return (
              <div className="col-md-3 text-center my-4">
                <div className="card m-auto" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{item.nama_undangan}</h5>
                    <p className="card-text">{item.pesan}</p>
                    <p className="card-text">
                      {item.kehadiran === "true" ? "Hadir" : "Tidak hadir"}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
