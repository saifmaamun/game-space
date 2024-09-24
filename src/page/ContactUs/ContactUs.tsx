import { useState } from "react";
import { Button } from "../../components/ui/button";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="my-6 pb-6  space-y-8">
      <h1 className="text-5xl font-bold text-indigo-950">Contact Us</h1>
      <p className="text-lg text-gray-700">
        We're here to help! Reach out with any questions or feedback.
      </p>

      {/* Contact Form */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="name" className="block text-lg font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-600 transition"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-lg font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-600 transition"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="block text-lg font-semibold">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-600 transition"
            placeholder="Subject"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-lg font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 h-32 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-600 transition"
            placeholder="Your Message"
            required
          />
        </div>

        <Button
          type="submit"
          // className="px-6 py-3 bg-indigo-950 text-white rounded-md hover:bg-indigo-800 transition"
          className="px-6 py-3 hover:bg-orange-600 bg-indigo-950  hover:font-semibold transition"
        >
          Submit
        </Button>
      </form>

      {/* Contact Details */}
      <div className="mt-12 space-y-4 text-lg text-gray-700">
        <p>
          <strong>Phone:</strong> +880 156 789 0595
        </p>
        <p>
          <strong>Email:</strong> support@gameplan.com
        </p>
        <p>
          <strong>Address:</strong> Bashundhara R/A, Dhaka 1229, Dhaka,
          Bangladesh
        </p>
      </div>

      {/* Optional Map Integration */}
      <div className="mt-8">
        <iframe
          className="w-full h-64 border-2 border-gray-300 rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.2071882117098!2d90.42182188064278!3d23.81123042238098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7fc94b33923%3A0x3db1ebb68e2bd7b5!2sJAFF%20Arena%20%26%20Academy!5e0!3m2!1sen!2sbd!4v1727170350470!5m2!1sen!2sbd"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          // allowFullScreen=""
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
