import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
                Best place to choose <br />
                your <span className="text-blue-500">clothes</span>
              </h1>

              <p className="mt-3 text-gray-600">
                Discover stylish fashion for every occasion. Shop the latest
                trends with premium quality at affordable prices.
              </p>

              <Link
                to="/products"
                className="inline-block px-5 py-3 mt-6 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-blue-500"
              >
                Shop Now
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-8 lg:mt-0 lg:w-1/2">
            <img
              className="w-full lg:max-w-3xl"
              src="https://merakiui.com/images/components/Catalogue-pana.svg"
              alt="Fashion Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}