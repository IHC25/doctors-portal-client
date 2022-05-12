import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "./PrimaryButton";

const Contact = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ background: `url(${appointment})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h4 className="mb-3 text-xl font-semi-bold text-primary">
            Contact Us
          </h4>
          <h3 className="text-2xl text-white uppercase">
            Stay Connected With Us
          </h3>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered input-sm w-full max-w-xs my-4"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input input-bordered input-sm w-full max-w-xs mb-4"
            />
            <input
              type="text"
              name="message"
              placeholder="Your Message"
              className="input input-bordered input-lg w-full max-w-xs mb-6"
            />
            <PrimaryButton>
              <button className="px-3" type="submit">
                Submit
              </button>
            </PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
