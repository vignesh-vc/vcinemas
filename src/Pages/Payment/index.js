import React, { useEffect, useState } from "react";
import "../../assets/css/payment.css";
import Spinner from "../../utils/Spinner";
import { Link } from "react-router-dom";

export default function Payment() {
  const [loading, setLoading] = useState(false);
  const [movieLocalStored, setMovieLocalStored] = useState();
  const [ticketLocalStored, setTicketLocalStored] = useState();

  useEffect(() => {
    let m = localStorage.getItem("movies");
    let t = localStorage.getItem("seats");
    setMovieLocalStored(JSON.parse(m));
    setTicketLocalStored(JSON.parse(t));
    setLoading(true);
  }, []);
  const launchRazorPay = () => {
    let options = {
      key: "rzp_test_aF66p0LqbTpY9W",
      amount: ticketLocalStored?.length * 120 * 100,
      currency: "INR",
      name: "V Cinemas",
      description: "Movie Purchase or Rental",
      image:
        "https://res.cloudinary.com/druttjvrf/image/upload/v1684898477/R_rcvxv8.png",
      handler: () => {
        alert("Payment Done");
      },
      theme: { color: "#ff0000" },
    };

    let razorPay = new window.Razorpay(options);
    razorPay.open();
  };
  return (
    <>
      {loading ? (
        <div className="payment-container-header">
          <div className="payment-container">
            <div className="payment-header">
              <div>
                <img src={movieLocalStored?.image} />
              </div>
              <div>
                <div className="content-text">
                  <p className="content-title-payment">
                    {movieLocalStored?.title}
                  </p>
                  <div className="movie-details">
                    <div className="movie-detail">
                      <i className="fa-solid fa-star"></i>
                      <span>{movieLocalStored?.others?.imDbRating}</span>
                    </div>
                    <div className="movie-detail">
                      <i className="fa-solid fa-clock"></i>
                      <span>{movieLocalStored?.others?.runtimeStr}</span>
                    </div>
                    <div className="movie-detail">
                      <span>4K</span>
                    </div>
                    <div className="movie-detail-genres">
                      <span>Tomorrow 10.00 A.M</span>
                    </div>
                    <div className="movie-detail-genres1">
                      <span> VCinemas A/C: Salem</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="hr-payment" />
            <div className="ticket-count-header">
              <div className="payment-tickets-count payment-tickets-count1">
                <div className="payment-text">{ticketLocalStored?.length}</div>
                <div className="payment-text-op">Ticket(s)</div>
              </div>
              <div className="payment-tickets-count">
                <div className="payment-text-op">Big Screen</div>
                <div className="payment-text">
                  I CLASS - {ticketLocalStored && ticketLocalStored.join(", ")}
                </div>
              </div>
            </div>
            <hr className="hr-payment" />
            <div className="ticket-summary">
              <p className="booking-summary-text">Booking Summary</p>
              <div className="payment-tickets-summary">
                <div className="payment-right">Ticket(s)</div>
                <div className="payment-left">
                  Rs.{ticketLocalStored?.length * 120}.00
                </div>
              </div>
              <div className="payment-tickets-summary">
                <div className="payment-right">Convenience Fee</div>
                <div className="payment-left">Rs. 00.00</div>
              </div>
              <div className="payment-tickets-summary">
                <div className="payment-right1">Order Total</div>
                <div className="payment-left">
                  <span>Rs.{ticketLocalStored?.length * 120}.00</span>
                </div>
              </div>
            </div>
            <div className="google-btn">
              <button className="btn btn-danger" onClick={launchRazorPay}>
                Proceed Payment
              </button>
            </div>
            <div className="home-payment">
              <Link to={"/home"} className="btn btn-secondary">
                Exit
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
