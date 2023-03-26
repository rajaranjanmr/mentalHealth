import React from "react"

export default function Prodcut() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Head */}
        <div className="flex items-center justify-center lg:justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Best Online Physiotherapist Services
          </h2>

          {/* <div className="hidden lg:flex"> */}
            {/* <a
              href="#"
              title=""
              className="inline-flex items-center justify-center p-1 -m-1 text-sm font-bold text-gray-600 dark:text-gray-100 transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900"
            >
              View All
              <svg
                className="w-5 h-5 ml-2 text-gray-400 dark:text-gray-100"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a> */}
          {/* </div> */}
        </div>
        {/* Products */}
        <div className="flex items-center flex-col md:flex-row gap-4 flex-wrap sm:mt-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-500 rounded-xl group sm:w-[40%]"
            >
              <div className="absolute z-10 top-3 right-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center text-gray-400 hover:text-rose-500"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="relative ">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    className="object-contain w-full h-52 p-4"
                    src={product.imageSrc}
                    alt={product.imageAlt}
                  />
                </div>

                <div className="px-6 py-4 flex-1 flex flex-col">
                  {/* <p className="text-xs font-medium tracking-widest text-gray-500 dark:text-gray-300 uppercase">
                    {product.brand}
                  </p> */}
                  <p className="mt-2 text-lg font-bold font-large text-gray-900 dark:text-white h-14">
                    {/* <a href="#" title=""> */}
                      {product.name}
                    {/* </a> */}
                  </p>
                  <p className="mt-2 text-sm font-medium h-100 text-gray-900 dark:text-white">
                    {/* <a href="#" title=""> */}
                      {product.description}
                    {/* </a> */} 
                  </p>
                  {/* <div className="flex items-center mt-2.5"> */}
                    {/* <div className="flex items-center space-x-px">
                      {[1, 2, 3, 4, 5].map((e) => (
                        <svg
                          key={e}
                          className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div> */}
                    {/* <p className="text-sm font-medium text-gray-500 ml-1.5 dark:text-gray-300">
                      ({product.ratings})
                    </p>
                  </div> */}
                  <p className="mt-5 text-sm font-bold text-gray-900 dark:text-white">
                    {product.price}
                  </p>
                </div>
              </div>
              <div className="">
                <button
                  type="button"
                  className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-bold text-white transition-all duration-200 bg-indigo-600"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  Book a Session
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Small Screen View All */}
        {/* <div className="mt-12 text-center lg:hidden">
          <a
            href="#"
            title=""
            className="inline-flex items-center justify-center p-1 text-sm font-bold text-gray-600 transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900"
          >
            View all
            <svg
              className="w-5 h-5 ml-2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
};

// ProductsOne.displayName = "ProductsOne";

const products = [
  {
    id: 1,
    brand: "monu",
    name: "Best Online Psychologist – Individual Personal – Online Therapy & Counselling",
    imageSrc:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
    href: "#",
    price: "₹61,999",
    color: "Midnight",
    imageAlt: "APPLE iPhone 13 (Midnight, 128 GB)",
    quantity: 1,
    ratings: "12,873",
    description : "Book Appointment now for Couple/Marriage/Marital/Relationship Counselling Therapy Sessions. You will be connected to your therapist within 24 hours. Consult top online marriage counsellor and online relationship counsellor in India, Get free marriage counselling sessions."
  },
  {
    id: 2,
    brand: "Apple",
    name: "Couple/Marriage- Online Therapy & Counselling",
    imageSrc:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/mwp22hn-a-apple-original-imag3qe9eqkfhmg8.jpeg?q=70",
    href: "#",
    price: "₹22,500",
    color: "White, True Wireless",
    imageAlt: "APPLE Airpods Pro Bluetooth Headset",
    quantity: 1,
    ratings: "8,381",
    description : "Book Appointment now for Couple/Marriage/Marital/Relationship Counselling Therapy Sessions. You will be connected to your therapist within 24 hours. Consult top online marriage counsellor and online relationship counsellor in India, Get free marriage counselling sessions."
  },
  {
    id: 3,
    brand: "Apple",
    name: "Online Child Psychologist and Family Therapy ",
    imageSrc:
      "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
    href: "#",
    price: "₹29,900",
    color: "Space Grey",
    imageAlt: "APPLE iPad (9th Gen) 64 GB ROM 10.2 inch",
    quantity: 1,
    ratings: "1,530",
    description:"Book Appointment now for Couple/Marriage/Marital/Relationship Counselling Therapy Sessions. You will be connected to your therapist within 24 hours. Consult top online marriage counsellor and online relationship counsellor in India, Get free marriage counselling sessions."
  },
  // More products...
];
