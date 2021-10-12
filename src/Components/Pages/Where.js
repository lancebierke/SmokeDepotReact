import React, { useEffect } from "react";
import "../../App.css";
import "../../Components/Where.css"; 

export default function Where() {
  return (
    <React.Fragment>
      <div className="whereContainer">
        <h1 className="where" style={{ margin: 40 }}>
          WHERE?
        </h1>
        <div className="d-flex map-container">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.1362899893024!2d-115.24542958472996!3d36.09016558010101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c706c4d28a27%3A0xe2677d1cfed12572!2s5431%20S%20Rainbow%20Blvd%20suite%20c-2%2C%20Las%20Vegas%2C%20NV%2089118!5e0!3m2!1sen!2sus!4v1622868396977!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "5px", marginTop: 0 }}
              allowfullscreen=""
              loading="lazy"
              title="map"
            ></iframe>
          </div>
          <section className="contact">
            <div className="card">
              <h3>Address</h3>
              <p>
                5431 S. Rainbow Blvd. C-2 <br />
                Las Vegas, Nevada 89118
              </p>
              <br />

              <h3>Contact Us</h3>
              <p>(702) 333-4870</p>
              <br />

              <h3>Hours of Operation</h3>
              <p>
                Monday: 10AM to 10PM
                <br />
                Tuesday: 10AM to 10PM
                <br />
                Wednesday: 10AM to 10PM
                <br />
                Thursday: 10AM to 10PM
                <br />
                Friday: 10AM to 10PM
                <br />
                Saturday: 10AM to 10PM
                <br />
                Sunday: 10AM to 8PM
                <br />
              </p>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}
