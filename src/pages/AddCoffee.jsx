import { Link, ScrollRestoration } from "react-router-dom";
import TopBar from "../components/TopBar";
import { FaArrowLeftLong } from "react-icons/fa6";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const coffeeData = {
      name: form.name.value,
      supplier: form.supplier.value,
      price: form.price.value,
      chef: form.chef.value,
      taste: form.taste.value,
      details: form.details.value,
      photo: form.photo.value,
    };

    fetch("http://localhost:5000/coffees", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          alert('data added');
          form.reset();
        }
      });
  };

  return (
    <div>
      <ScrollRestoration />
      <header>
        <TopBar />
      </header>
      <div className="bg-form-bg">
        <div className="w-10/12 mx-auto">
          <div className="py-14">
            <Link
              to={"/"}
              className="text-2xl font-rancho flex gap-2 items-center"
            >
              <FaArrowLeftLong /> Back to home
            </Link>
          </div>
          <div className="py-16 px-24 bg-base-200">
            <div className=" text-center w-8/12 mx-auto">
              <h2 className="font-rancho text-4xl cstm_text_shadow mb-4">
                Add New Coffee
              </h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
              </p>
            </div>
            <form onSubmit={handleAddCoffee} className="mt-4 *:mb-4">
              <div className="flex gap-6">
                {/* Name, Supplier, Price  */}
                <div className="w-1/2">
                  <div className="form-control coffee_name">
                    <label className="label">
                      <span className="label-text text-xl">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Coffee Name"
                      className="form_input_style"
                      required
                    />
                  </div>

                  <div className="form-control coffee_supplier">
                    <label className="label">
                      <span className="label-text text-xl">Supplier</span>
                    </label>
                    <input
                      type="text"
                      name="supplier"
                      placeholder="Supplier"
                      className="form_input_style"
                    />
                  </div>

                  <div className="form-control coffee_price">
                    <label className="label">
                      <span className="label-text text-xl">Price</span>
                    </label>
                    <input
                      type="number"
                      name="price"
                      placeholder="Price"
                      className="form_input_style"
                      required
                    />
                  </div>
                </div>

                {/* Chef, Taste Details */}
                <div className="w-1/2">
                  <div className="form-control coffee_chef">
                    <label className="label">
                      <span className="label-text text-xl">Chef</span>
                    </label>
                    <input
                      type="text"
                      name="chef"
                      placeholder="Chef"
                      className="form_input_style"
                    />
                  </div>

                  <div className="form-control coffee_taste">
                    <label className="label">
                      <span className="label-text text-xl">Taste</span>
                    </label>
                    <input
                      type="text"
                      name="taste"
                      placeholder="Taste"
                      className="form_input_style"
                    />
                  </div>

                  <div className="form-control coffee_details">
                    <label className="label">
                      <span className="label-text text-xl">Details</span>
                    </label>
                    <input
                      type="text"
                      name="details"
                      placeholder="Details"
                      className="form_input_style"
                    />
                  </div>
                </div>
              </div>
              {/* Photo URL */}
              <div>
                <div className="form-control coffee_photo">
                  <label className="label">
                    <span className="label-text text-xl">Photo</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="form_input_style"
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Add Coffee"
                className="btn btn-secondary w-full rounded-none border-primary font-rancho text-primary hover:border-primary hover:bg-transparent cstm_text_shadow"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
