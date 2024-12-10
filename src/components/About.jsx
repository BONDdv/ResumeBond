/**
 * @copyright 2024 BondDv
 * @license Apache-2.0
 */

import { number } from "prop-types";

const aboutItems = [
  {
    label: "Project done",
    number: 45,
  },
  {
    label: "Years of experience",
    number: 10,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl "> {/*md:max-w-[60ch] */}
            Hello, my name is <b>Natchapon Thongmak.</b>  I am a highly motivated and
            detail-oriented individual transitioning from a career as a Fire
            Protection System Design Engineer to becoming a Full Stack
            Developer. Although I have no professional experience in software
            development yet, I am deeply passionate about learning and committed
            to building a strong foundation in both front-end and back-end
            development. With a strong determination to acquire new skills and
            adapt to the evolving demands of the tech industry, I am eager to
            contribute to projects by leveraging my problem-solving abilities,
            dedication to excellence, and collaborative approach to achieving
            goals.
          </p>


        </div>
      </div>
    </section>
  );
};

export default About;
