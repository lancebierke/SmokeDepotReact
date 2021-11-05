import React, { useEffect } from "react";
import "../../App.css";
// import { useForm } from 'react-hook-form';
// import saveData from './saveData';

// //value must have a value
// const required = (val) => val && val.length;
// //value must be empty OR length less than 15
// const maxLength = (len) => (val) => !val || val.length <= len;
// //Has value and has length equal or more than 2
// const minLength = (len) => (val) => val && val.length >= len;
// //It is NOT "is NOT a Number."
// const isNumber = (val) => !isNaN(+val);
// //Email requirement regex
// const validEmail = (val) =>
//   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

// export default function Form() {
// const { register, handleSubmit } = useForm();

// return (
// <form onSubmit={handleSubmit(data => saveData(data))}>
//   <h1>Contact Us Here</h1>
//   <label>Name</label>
// <input name="name" placeholder="First Name" ref={register(minLength(), maxLength())} />
// <input name="name" placeholder="Last Name" ref={register(minLength(), maxLength())} />
// <label>Email</label>
// <input name="email" placeholder="Email Address" ref={register({
//    required: 'Required',
//    validate: value => validEmail(value) || 'Invalid email',
//  })}
// />
// <label>Message</label>
// <input name="Message" placeholder="Type your message here" ref={register} />
// <input type="submit" onClick={handleSubmit}/>
// </form>
// )
// }

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, fieldName) {
    this.setState({ [fieldName]: event.target.value });
  }

  handleSubmit(event) {
    //send data
  }
}

export default function Contact() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const handleSubmit = () => console.log("submit");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="whereContainer">
        <h1 className="where" id="contact">
          Contact Us
        </h1>
        <div className="map-container contact_form">
          <section className="contact">
            <div className="d-flex map-container ">
              <div className="card">
                <form className="form">
                  <h5>Messages currently under construction</h5>
                  <label>Name:</label>
                  <input
                    style={{ margin: "10px 0" }}
                    type="text"
                    value={firstName}
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    style={{ margin: "10px 0" }}
                    type="text"
                    value={lastName}
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <label>Email:</label>
                  <input
                    style={{ margin: "10px 0" }}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Message:</label>
                  <textarea
                    style={{ margin: "10px 0" }}
                    className="contact_textarea"
                    type="text"
                    placeholder="Your message here."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <input
                    style={{ margin: "10px 0" }}
                    type="submit"
                    value="Submit"
                    onClick={handleSubmit}
                  />
                </form>
              </div>
            </div>
          </section>
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
                Monday: 10AM to 8PM
                <br />
                Tuesday: 10AM to 8PM
                <br />
                Wednesday: 10AM to 8PM
                <br />
                Thursday: 10AM to 8PM
                <br />
                Friday: 10AM to 8PM
                <br />
                Saturday: 10AM to 8PM
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
