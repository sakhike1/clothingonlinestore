import { useState } from "react";
import { review, reviewers, reviews } from "../assets/images";

export default () => {
  const testimonials = [
    {
      avatar: review, // Image from assets folder
      name: "Martin Escobar",
      title: "Happy Customer",
      quote: "Yo, I'm super stoked about the service from Skipaman! They delivered on time and everything was on point. 💯",
    },
    {
      avatar: reviewers, // Image from assets folder
      name: "Angela Stian",
      title: "Satisfied Shopper",
      quote: "I’m so happy with my experience at Skipaman! The team is dope and made everything easy. Definitely coming back! 🙌",
    },
    {
      avatar: reviews, // Image from assets folder
      name: "Karim Ahmed",
      title: "Loyal client",
      quote: "Skipaman is legit! The service was quick and hassle-free. Can’t wait to shop again! 🎉",
    },
  ];


  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="-mt-[50px]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <ul className="list-none">
            {/* Only one testimonial card displayed */}
            <li>
              <figure>
                <blockquote>
                  <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                    “{testimonials[currentTestimonial].quote}“
                  </p>
                </blockquote>
                <div className="mt-6">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    className="w-16 h-16 mx-auto object-cover rounded-full"
                    alt={testimonials[currentTestimonial].name}
                  />
                  <div className="mt-3">
                    <span className="block text-gray-800 font-semibold">
                      {testimonials[currentTestimonial].name}
                    </span>
                    <span className="block text-gray-600 text-sm mt-0.5">
                      {testimonials[currentTestimonial].title}
                    </span>
                  </div>
                </div>
              </figure>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <ul className="flex gap-x-3 justify-center">
            {testimonials.map((_, idx) => (
              <li key={idx}>
                <button
                  className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${currentTestimonial === idx ? "bg-indigo-600" : "bg-gray-300"
                    }`}
                  onClick={() => setCurrentTestimonial(idx)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
