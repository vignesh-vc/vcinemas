import React, { useContext, useEffect, useState } from "react";
import "../../assets/css/seatSelect.css";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../../contexts/Context";
import { MY_TICKET } from "../../contexts/Action.types";
export default function SeatSelect() {
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [seats, setSeat] = useState(0);
  const [rupees, setRupees] = useState(0);
  const { state, dispatch } = useContext(PostContext);

  const nav = useNavigate();

  function setseatsfromLocal() {
    localStorage.setItem("seats", JSON.stringify(state.selectedTicket));
  }
  useEffect(() => {
    setseatsfromLocal();
  }, []);
  let btn1 = document.getElementById("confirm-ticket-id");
  const handleClick = (e) => {
    let e1 = e.target;
    if (e1.closest(".seat") !== null) {
      if (e1?.classList?.contains("selected")) {
        let removeseat = selectedSeat?.filter((d) => d !== e1.id);
        setSelectedSeat(removeseat);
        setSeat((prev) => prev - 1);
        //   console.log(selectedSeat);
      } else {
        setSelectedSeat((prev) => [...prev, e1.id]);
        setSeat((prev) => prev + 1);
        //   console.log(selectedSeat);
      }
      e1?.classList?.toggle("selected");
    }
  };

  useEffect(() => {
    setRupees(selectedSeat.length * 120);
    selectedSeat.sort();
    dispatch({ type: MY_TICKET, payload: selectedSeat });

    seats < 1 && btn1?.classList?.add("disabled");
    seats > 0 && btn1?.classList?.remove("disabled");
  }, [selectedSeat]);

  const handleconfirm = () => {
    setseatsfromLocal();
    nav("/ticket");
  };

  return (
    <div className="seat-selector">
      <ul className="showcase">
        <li>
          <div className="seat"></div>
          <small>Available</small>
        </li>
        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div className="seat occupied"></div>
          <small>Occupied</small>
        </li>
      </ul>
      <p className="text">
        (Seats available only for <span>Tomorrow</span> Morning.)
      </p>
      <div className="container" onClick={handleClick}>
        <div className="screen">Screen</div>
        <div className="row">
          <div className="seat" id="A1" value="A1"></div>
          <div className="seat" id="A2" value="A2"></div>
          <div className="seat" id="A3" value="A3"></div>
          <div className="seat" id="A4" value="A4"></div>
          <div className="seat" id="A5" value="A5"></div>
          <div className="seat" id="A6" value="A6"></div>
          <div className="seat" id="A7" value="A7"></div>
          <div className="seat" id="A8" value="A8"></div>
        </div>
        <div className="row">
          <div className="seat " id="B1" value="B1"></div>
          <div className="seat" id="B2" value="B2"></div>
          <div className="seat" id="B3" value="B3"></div>
          <div className="seat" id="B4" value="B4"></div>
          <div className="seat" id="B5" value="B5"></div>
          <div className="seat" id="B6" value="B6"></div>
          <div className="seat" id="B7" value="B7"></div>
          <div className="seat" id="B8" value="B8"></div>
        </div>
        <div className="row">
          <div className="seat" id="C1" value="C1"></div>
          <div className="seat" id="C2" value="C2"></div>
          <div className="seat" id="C3" value="C3"></div>
          <div className="seat" id="C4" value="C4"></div>
          <div className="seat " id="C5" value="C5"></div>
          <div className="seat " id="C6" value="C6"></div>
          <div className="seat" id="C7" value="C7"></div>
          <div className="seat" id="C8" value="C8"></div>
        </div>
        <div className="row">
          <div className="seat " id="D1" value="D1"></div>
          <div className="seat " id="D2" value="D2"></div>
          <div className="seat " id="D3" value="D3"></div>
          <div className="seat" id="D4" value="D4"></div>
          <div className="seat" id="D5" value="D5"></div>
          <div className="seat" id="D6" value="D6"></div>
          <div className="seat" id="D7" value="D7"></div>
          <div className="seat" id="D8" value="D8"></div>
        </div>
        <div className="row">
          <div className="seat" id="E1" value="E1"></div>
          <div className="seat" id="E2" value="E2"></div>
          <div className="seat" id="E3" value="E3"></div>
          <div className="seat" id="E4" value="E4"></div>
          <div className="seat" id="E5" value="E5"></div>
          <div className="seat" id="E6" value="E6"></div>
          <div className="seat" id="E7" value="E7"></div>
          <div className="seat" id="E8" value="E8"></div>
        </div>
        <div className="row">
          <div className="seat" id="F1" value="F1"></div>
          <div className="seat" id="F2" value="F2"></div>
          <div className="seat" id="F3" value="F3"></div>
          <div className="seat " id="F4" value="F4"></div>
          <div className="seat " id="F5" value="F5"></div>
          <div className="seat " id="F6" value="F6"></div>
          <div className="seat " id="F7" value="F7"></div>
          <div className="seat " id="F8" value="F8"></div>
        </div>
        <div className="row">
          <div className="seat" id="G1" value="G1"></div>
          <div className="seat" id="G2" value="G2"></div>
          <div className="seat" id="G3" value="G3"></div>
          <div className="seat" id="G4" value="G4"></div>
          <div className="seat" id="G5" value="G5"></div>
          <div className="seat" id="G6" value="G6"></div>
          <div className="seat" id="G7" value="G7"></div>
          <div className="seat" id="G8" value="G8"></div>
        </div>
        <div className="row">
          <div className="seat" id="H1" value="H1"></div>
          <div className="seat" id="H2" value="H2"></div>
          <div className="seat" id="H3" value="H3"></div>
          <div className="seat" id="H4" value="H4"></div>
          <div className="seat" id="H5" value="H5"></div>
          <div className="seat" id="H6" value="H6"></div>
          <div className="seat" id="H7" value="H7"></div>
          <div className="seat" id="H8" value="H8"></div>
        </div>
        <div className="row">
          <div className="seat" id="I1" value="I1"></div>
          <div className="seat" id="I2" value="I2"></div>
          <div className="seat" id="I3" value="I3"></div>
          <div className="seat" id="I4" value="I4"></div>
          <div className="seat" id="I5" value="I5"></div>
          <div className="seat" id="I6" value="I6"></div>
          <div className="seat " id="I7" value="I7"></div>
          <div className="seat " id="I8" value="I8"></div>
        </div>
        <div className="row">
          <div className="seat " id="J1" value="J1"></div>
          <div className="seat " id="J2" value="J2"></div>
          <div className="seat " id="J3" value="J3"></div>
          <div className="seat" id="J4" value="J4"></div>
          <div className="seat" id="J5" value="J5"></div>
          <div className="seat" id="J6" value="J6"></div>
          <div className="seat" id="J7" value="J7"></div>
          <div className="seat" id="J8" value="J8"></div>
        </div>
        <div className="row">
          <div className="seat" id="K1" value="K1"></div>
          <div className="seat" id="K2" value="K2"></div>
          <div className="seat" id="K3" value="K3"></div>
          <div className="seat" id="K4" value="K4"></div>
          <div className="seat" id="K5" value="K5"></div>
          <div className="seat" id="K6" value="K6"></div>
          <div className="seat" id="K7" value="K7"></div>
          <div className="seat" id="K8" value="K8"></div>
        </div>
        <div className="row">
          <div className="seat occupied" id="L1" value="L1"></div>
          <div className="seat  occupied" id="L2" value="L2"></div>
          <div className="seat  occupied" id="L3" value="L3"></div>
          <div className="seat  occupied" id="L4" value="L4"></div>
          <div className="seat  occupied" id="L5" value="L5"></div>
          <div className="seat  occupied" id="L6" value="L6"></div>
          <div className="seat  occupied" id="L7" value="L7"></div>
          <div className="seat  occupied" id="L8" value="L8"></div>
        </div>
      </div>
      <p className="text">
        <span>{seats}</span> Seats Selected for Rs.<span>{rupees}</span>
      </p>
      <div className="confirm-ticket">
        <button
          className="btn btn-danger"
          id="confirm-ticket-id"
          onClick={handleconfirm}
        >
          Confirm Ticket
        </button>
      </div>
    </div>
  );
}
