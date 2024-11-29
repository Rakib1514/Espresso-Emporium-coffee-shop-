import {
  FaFacebook,
  FaLinkedin,
  FaLocationPin,
  FaMessage,
  FaPhone,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleConnect = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-base-200 mt-24">
      <div className="grid grid-cols-2 gap-8 py-8 w-10/12 mx-auto">
        <div className=" space-y-4 pr-12">
          <img
            src="https://i.ibb.co.com/HqWRRqk/brand-logo.png"
            alt="Brand logo"
            className="w-20 h-20"
          />
          <h2 className="text-4xl text-primary font-rancho cstm_text_shadow">
            Espresso Emporium
          </h2>
          <p>
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <nav>
            <div className="flex gap-6 text-4xl text-primary">
              <Link>
                <FaFacebook />
              </Link>
              <Link>
                <FaSquareXTwitter />
              </Link>
              <Link>
                <FiInstagram />
              </Link>
              <Link>
                <FaLinkedin />
              </Link>
            </div>
            <div className="space-y-4 mt-4">
              <h4 className="text-4xl text-primary font-rancho cstm_text_shadow">
                Get in Touch
              </h4>
              <p className="flex gap-2">
                <FaPhone /> +8801749888339
              </p>
              <p className="flex gap-2">
                <FaMessage /> rkrakib1514@outlook.com
              </p>
              <p className="flex gap-2">
                <FaLocationPin /> Matidali Biman-mor, 5800- Bogura sadar,
                Bogura.
              </p>
            </div>
          </nav>
        </div>

        <div className="grid items-center">
          <div>
            <h3 className="text-4xl text-primary font font-rancho cstm_text_shadow">
              Connect with Us
            </h3>
            <form onSubmit={handleConnect} className="mt-4 *:mb-4">
              <div className="form-control coffee_name">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="form_input_style w-2/3"
                  required
                />
              </div>
              <div className="form-control coffee_name">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="form_input_style w-2/3"
                  required
                />
              </div>
              <div className="form-control coffee_name">
                <textarea placeholder="Write Your massage here" className="input input-bordered rounded-none focus:outline-offset-0 focus:outline-secondary focus:shadow-xl h-24 w-2/3"/>
              </div>
              <input
                type="submit"
                value="Send Message"
                className="btn rounded-3xl border-primary font-rancho text-primary hover:border-primary cstm_text_shadow"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
