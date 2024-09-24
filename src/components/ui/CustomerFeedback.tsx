// Sample testimonials data
const testimonials = [
  {
    name: "Alice Johnson",
    testimonial:
      "The facilities are top-notch! Our sports team had an amazing experience, and the staff was incredibly helpful.",
    rating: 5,
  },
  {
    name: "Michael Smith",
    testimonial:
      "I booked an event here for my daughter's birthday. Everything went smoothly, and the kids had a blast!",
    rating: 4,
  },
  {
    name: "Emily Davis",
    testimonial:
      "Fantastic venue with plenty of options for both sports and events. Highly recommend for anyone looking to host!",
    rating: 5,
  },
  {
    name: "David Brown",
    testimonial:
      "Great community space! We love the family-friendly activities they offer. A perfect place for everyone.",
    rating: 4,
  },
  {
    name: "Sophia Wilson",
    testimonial:
      "Amazing staff and well-maintained facilities. The outdoor spaces are perfect for enjoying nature.",
    rating: 5,
  },
];

const TestimonialCard = ({ name, testimonial, rating }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <p className="text-gray-700 italic">"{testimonial}"</p>
      <div className="flex justify-between items-center mt-4">
        <span className="font-bold">{name}</span>
        <span className="text-orange-600">
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </span>
      </div>
    </div>
  );
};

const CustomerFeedback = () => {
  return (
    <div className="my-12 py-16">
      <h1 className="text-4xl font-bold text-indigo-950 mb-10">
        What Our Customers Say
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            testimonial={testimonial.testimonial}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
