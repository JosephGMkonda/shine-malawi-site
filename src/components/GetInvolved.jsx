const GetInvolved = () => {
  const waysToHelp = [
    {
      title: 'Sponsor a Child',
      description: 'Provide education, meals, and healthcare for a child in need.',
      action: 'Become a Sponsor'
    },
    {
      title: 'Volunteer',
      description: 'Join our team on the ground and make a direct impact.',
      action: 'Apply Now'
    },
    {
      title: 'Donate',
      description: 'Support our programs with a one-time or recurring donation.',
      action: 'Donate Today'
    },
    {
      title: 'Partner',
      description: 'Corporate partnerships and organizational collaborations.',
      action: 'Partner With Us'
    }
  ];

  return (
    <section id="involve" className="section-padding bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get <span className="text-primary-orange">Involved</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us in our mission to transform lives in Malawi. Every contribution, big or small, makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {waysToHelp.map((way, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {way.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {way.description}
              </p>
              <button className="btn-primary w-full">
                {way.action}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-primary-orange rounded-2xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-white text-lg mb-6">
            Contact us today to learn more about how you can contribute to our mission.
          </p>
          <a href="#contact" className="btn-secondary bg-white text-primary-orange hover:bg-gray-100">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;