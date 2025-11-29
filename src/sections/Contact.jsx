import React from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactExperience";

const Contact = () => {
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get In Touch With Me"
          sub="📅 Contact Information"
        />
        {/* <div className="mt-16">
                <p className='text-center'>
                    Feel free to reach out for collaborations, questions, or just to say hello!
                </p>
                <p className='text-center mt-4'>
                    Email: contact@example.com
                </p>
            </div> */}
        <div className="mt-16 grid-12-cols">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <div className="flex-center card-border rounded-xl p-10">
                <form
                  //   onSubmit={handleSubmit}
                  className="w-full flex flex-col gap-7"
                >
                  <div className="mb-6">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      //   value={formData.name}
                    //   onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your email address"
                    //   value={formData.email}
                    //   onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Your message"
                    //   value={formData.message}
                    //   onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-white text-black font-semibold rounded-md flex justify-center items-center"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <ContactExperience />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
