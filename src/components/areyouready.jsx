import React from "react";
import rocket from '../assets/images/rocket.png'
const AreYouReady = () => {
  return (
    <section id="are-you">
      <div id="are-you-inner" className="container">
        <h3>
          Are you ready
          <br /> to board this rocket ship?
        </h3>
        <p>Share your excitement with us.</p>
        <form>
          <input type="text" name="name" placeholder="Name*" />
          <input type="email" name="email" placeholder="Email*" />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Message*"
          ></textarea>
          <div className="d-flex justify-content-center">
            <button>Shoot us a message</button>
          </div>
        </form>
        <img src={rocket}/>
      </div>
    </section>
  );
};

export default AreYouReady;
