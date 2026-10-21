function RatingBar({ label, score, percent }) {
  return (
    <dl className="mb-3 last:mb-0">
      <dt className="text-sm font-medium text-gray-600 mb-1">
        {label}
      </dt>

      <dd className="flex items-center gap-2">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${percent}%` }}
          />
        </div>

        <span className="text-sm font-medium text-gray-600 w-8 shrink-0">
          {score}
        </span>
      </dd>
    </dl>
  );
}

export default function Reviews() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* Header Row */}
        <div className="flex items-center gap-3 mb-8">
          <span className="bg-blue-700 text-white text-sm font-semibold px-2 py-1 rounded">
            8.7
          </span>
          <span className="font-medium text-gray-900">
            Excellent
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-400 inline-block"></span>
          <span className="text-sm font-medium text-gray-500">
            376 reviews
          </span>
        </div>

        {/* Rating Grid */}
        <div className="gap-16 sm:grid sm:grid-cols-2">

          {/* Left Column */}
          <div>
            <RatingBar label="Customer Services" score="8.8" percent={88} />
            <RatingBar label="Quality" score="8.9" percent={89} />
            <RatingBar label="Delivery" score="8.8" percent={88} />
            <RatingBar label="Product Variety & Style" score="5.4" percent={54} />
          </div>

          {/* Right Column */}
          <div>
            <RatingBar label="Value for money" score="8.9" percent={89} />
            <RatingBar label="Website & App Usability" score="7.0" percent={70} />
            <RatingBar label="Returns & Refunds" score="8.9" percent={89} />
          </div>

        </div>

      </div>
    </section>
  );
}