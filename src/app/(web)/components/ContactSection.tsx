"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 py-12 mt-24">
      <h1 className="text-4xl  mb-10 font-semibold text-center underline underline-offset-[1rem] ">
        Contact Us
      </h1>
      <div className="container mx-auto mb-10 flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-10">
        {/* Contact Info Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Let's talk with us</h2>
          <p className="mb-6 text-gray-600">
            Questions, comments, or suggestions? Simply fill in the form and
            we’ll be in touch shortly.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl text-purple-500">&#128205;</span>
              <p className="text-gray-600">
                Sable, Akwa Nord, Douala, Cameroon, PoBox 4550
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl text-orange-500">&#128222;</span>
              <p className="text-gray-600">+(237) 692 078 136</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl text-red-500">&#128231;</span>
              <p className="text-gray-600">info@seven-university.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="flex space-x-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number*"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={4}
              />
            </div>
            <Button
              variant="default"
              type="submit"
              className="w-full text-xl text-white p-6 rounded-md transition-colors"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
