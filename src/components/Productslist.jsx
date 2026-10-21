const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    price: '$48',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: '',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    price: '$35',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: '',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    price: '$89',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: '',
  },
  {
    id: 4,
    name: 'Mechanical Pencil',
    price: '$35',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: '',
  },
  {
    id: 5,
    name: 'Card Tray',
    price: '$64',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-05.jpg',
    imageAlt: '',
  },
  {
    id: 6,
    name: 'Multi-Pack',
    price: '$39',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-06.jpg',
    imageAlt: '',
  },
  {
    id: 7,
    name: 'Brass Scissors',
    price: '$50',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-07.jpg',
    imageAlt: '',
  },
  {
    id: 8,
    name: 'Carry Pouch',
    price: '$32',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-08.jpg',
    imageAlt: '',
  },
];

export default function Productslist() {
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4">

        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Products List
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="aspect-square w-full rounded-lg object-cover group-hover:opacity-75"
              />

              <h3 className="mt-4 text-sm text-gray-700">
                {product.name}
              </h3>

              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}