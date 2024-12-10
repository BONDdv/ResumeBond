/**
 * @copyright 2024 BondDv
 * @license Apache-2.0
 */

import { useRef } from "react";


const Contact = () => {


    const formRef = useRef(null);

    const hdlSubmit = (event) => {
        event.preventDefault();

        formRef.current.reset();
    }


  return (
    <section className="section" id="contact">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2">
            Open to new career opportunities, feel free to reach out
          </h2>
        </div>
        
        <form 
        action="https://getform.io/f/akkkrrqa" 
        className=""
        method="POST"
        >

            <div className="md:grid md:items-center md:grid-cols-1 md:gap-2">
                <div className="mb-4">
                    <label 
                    htmlFor="name" 
                    className="label"
                    >
                        Name
                    </label>
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    autoComplete="name"
                    required
                    placeholder="Natchaphol Thongmak"
                    className="text-field reveal-up" 
                    />
                </div>

                <div className="mb-4">
                    <label 
                    htmlFor="email" 
                    className="label reveal-up"
                    >
                        Email
                    </label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    autoComplete="email"
                    required
                    placeholder="natchapon.thongmag@gmail.com"
                    className="text-field reveal-up" 
                    />
                </div>


            </div>

            <div className="mb-4">
                <label 
                htmlFor="message"
                className="label reveal-up"
                >
                    Message
                </label>
                <textarea 
                name="message" 
                id="message" 
                required
                className="text-field resize-y min-h-32 max-h-80 reveal-up"
                >
                </textarea>
            </div>

            <button 
                type="submit"
                className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up"
            >
                Submit
            </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
