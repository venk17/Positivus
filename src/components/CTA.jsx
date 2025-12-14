import proposalImg from "../assets/proposalImg.png";

function CTA() {
  return (
    <section className="px-6 md:px-12 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        <div className="bg-gray-100 rounded-3xl p-10 md:p-14">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let’s make things happen
              </h2>

              <p className="text-gray-600 mb-6 max-w-md">
                Contact us today to learn more about how our digital marketing
                services can help your business grow and succeed online.
              </p>

              <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition">
                Get your free proposal
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <img
                src={proposalImg}
                alt="Proposal"
                className="max-w-sm w-full"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CTA;
