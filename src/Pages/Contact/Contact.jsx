import React, { useState } from "react";
import { send } from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Icon } from "@iconify/react";

const Contact = () => {
  const [sender_name, set_sender_name] = useState("");
  const [sender_email, set_sender_email] = useState("");
  const [sender_subject, set_sender_subject] = useState("");
  const [number, set_number] = useState("");
  const [message, set_message] = useState("");
  const handleNameChange = (e) => {
    set_sender_name(e.target.value);
  };
  const handleEmailChange = (e) => {
    set_sender_email(e.target.value);
  };
  const handleSubjectChange = (e) => {
    set_sender_subject(e.target.value);
  };
  const handleMessageChange = (e) => {
    set_message(e.target.value);
  };
  const handleNumberChange = (e) => {
    set_number(e.target.value);
  };
  const sendMail = (e) => {
    e.preventDefault();
    send(
      "service_z9n2sym",
      "template_uli7etm",
      { sender_name, sender_email, message, sender_subject, number },
      "WpMgcyC3aVAAi8KPa"
    )
      .then((response) =>
        toast.success("Send your massage", console.log(response))
      )

      .catch((err) => toast.error("Failed send your mail", err));
  };

  return (
    <div>
      <div className="contact_bg bg-fixed overflow-hidden"></div>
      <div className="duration-700 ease-in grid 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-x-20 2xl:p-20 xl:p-20 md:p-20 lg:p-20 p-10">
        <div>
          <h1 className="text-md font-bold text-black">CONTACT OUR TEAM</h1>
          <h1 className="text-4xl font-bold text-secondary mt-3">
            Get In Touch With Us
          </h1>
          <p className="text-black text-xl mt-8">
            Lorem ipsum dolor sit amet, cons ectetur adipiscing elitull am aliqu
            am, velit rutrum dictum lobortis, turpis justo auc tor quam, a
            auctor lorem odio in nunc.
          </p>
          <h2 className="text-secondary text-xl mt-10 font-bold">
            Support Center 24/7 <br />
          </h2>
          <div className="text-black font-thin text-md mt-5">
            <p className="mt-2 flex align-middle gap-x-2">
              <Icon className="w-5 h-5 text-primary" icon="fa-solid:headset" />
              <a
                className="hover:text-primary duration-500 font-semibold hover:underline"
                href="tel:+12 324-016-694"
              >
                +12 324-016-694
              </a>
            </p>
            <p className="mt-2 flex gap-x-2">
              <Icon className="w-5 h-5 text-primary" icon="entypo:mail" />
              <a
                className="hover:text-primary duration-500 font-semibold hover:underline"
                href="mailto:gstore@gmail.com"
                rel="noreferrer"
              >
                G-Store@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <form onSubmit={sendMail} action="">
            <input
              className="input_shadow outline-none px-3 py-4 mt-5 2xl:ml-8 xl:ml-8 md:ml-8 lg:ml-8 rounded-md"
              type="text"
              name="Name"
              id=""
              required
              value={sender_name}
              onChange={handleNameChange}
              placeholder="Name *"
            />
            <input
              className="input_shadow outline-none px-3 py-4 mt-5 2xl:ml-8 xl:ml-8 md:ml-8 lg:ml-8 rounded-md"
              type="text"
              name="Subject"
              id=""
              required
              onChange={handleSubjectChange}
              value={sender_subject}
              placeholder="Subject *"
            />
            <input
              className="input_shadow outline-none px-3 py-4 mt-5 2xl:ml-8 xl:ml-8 md:ml-8 lg:ml-8 rounded-md"
              type="email"
              name="Email"
              id=""
              required
              onChange={handleEmailChange}
              value={sender_email}
              placeholder="Email *"
            />
            <input
              className="input_shadow outline-none px-3 py-4 mt-5 2xl:ml-8 xl:ml-8 md:ml-8 lg:ml-8 rounded-md"
              type="text"
              name="PhoneNumber"
              id=""
              required
              value={number}
              onChange={handleNumberChange}
              placeholder="Phone Number *"
            />
            <textarea
              className="input_shadow outline-none px-3 py-4 mt-5 w-11/12 2xl:ml-5 xl:ml-5 md:ml-5 lg:ml-5  rounded-md"
              name=""
              id=""
              cols="40"
              rows="4"
              value={message}
              onChange={handleMessageChange}
              placeholder="Type your query here"
            ></textarea>
            <p className="text-xl text-white px-20 2xl:ml-5 xl:ml-5 md:ml-5 lg:ml-5 py-3 mt-5 bg-primary/90 cursor-pointer w-64 rounded-md flex">
              <input className="cursor-pointer" type="submit" value="Submit" />
              <Icon className="pl-2 w-8 h-8" icon="mingcute:send-plane-fill" />
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
