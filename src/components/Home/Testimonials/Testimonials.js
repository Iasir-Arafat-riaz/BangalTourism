import React, { useEffect, useState } from "react";
import { Spinner, CardDeck, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
// import Slider from "react-slick";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Review from "./Review/Review";
const Testimonials = () => {
  SwiperCore.use([Pagination, Autoplay]);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const reviewSlice=reviews.slice(0,5)
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);
  console.log(reviews);
  return (
    <div>
      <section id="reviews" className="testimonials p-md-3">
        <Fade bottom duration={2500} distance="40px">
          <div className="my-5 py-4">
            <div className="review-title text-center">
              <span className="cllientSay"><b>What Our Clients Says</b></span>
              <h2 className="Testimonials">Testimonials</h2>
            </div>

            <Row xs={1} md={5} className="g-4 m-3">
          {reviewSlice.map((review, index) => (
            <Review review={review} key={index}></Review>
          ))}
        </Row>

          </div>
        </Fade>
      </section>
    </div>
  );
};

export default Testimonials;
