import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt iste unde, suscipit necessitatibus culpa ullam.",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt iste unde, suscipit necessitatibus culpa ullam.",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt iste unde, suscipit necessitatibus culpa ullam.",
      img: whitening,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold uppercase">
          Our Services
        </h3>
        <h2 className="text-3xl font-semibold">Services We Provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-8">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;