const blogs = [
  {
    id: 1,
    title: "10 Must-Have Wardrobe Essentials for Every Season",
    date: "12 January 2024",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    title: "How to Style a White Shirt 5 Different Ways",
    date: "5 February 2024",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    title: "Spring 2024 Trends You Need to Try Right Now",
    date: "18 March 2024",
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    title: "The Ultimate Guide to Building a Capsule Wardrobe",
    date: "2 April 2024",
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    title: "Sustainable Fashion: How to Shop Responsibly",
    date: "20 April 2024",
    img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 6,
    title: "How to Mix Patterns and Look Effortlessly Stylish",
    date: "10 May 2024",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
  },
];

export default function Blog() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          From the blog
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {blogs.map(({ id, title, date, img }) => (
            <div key={id} className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src={img}
                alt={title}
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-white"
                >
                  {title}
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  On: {date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}