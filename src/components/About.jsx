const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-primary-orange">Shine Malawi</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Shine Malawi is a non-profit organization dedicated to transforming lives and building sustainable futures for the most vulnerable communities in Malawi. Through our comprehensive programs, we address critical needs in education, nutrition, healthcare, and economic development.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Founded on the principles of compassion and sustainable development, we work hand-in-hand with local communities to create lasting change that empowers individuals and transforms entire communities.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-orange mb-2">500+</div>
                <div className="text-gray-600">Children Sponsored</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-orange mb-2">25+</div>
                <div className="text-gray-600">Communities Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-orange mb-2">50+</div>
                <div className="text-gray-600">Wells Drilled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-orange mb-2">1000+</div>
                <div className="text-gray-600">Meals Served Daily</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-primary-orange rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg mb-6">
                To empower Malawian communities through integrated programs that provide education, nutrition, clean water, and sustainable economic opportunities, creating a foundation for lasting transformation.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg">
                A Malawi where every child has access to quality education, every family has food security, and every community thrives through sustainable development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;