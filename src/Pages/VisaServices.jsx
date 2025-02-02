import { FaArrowRight } from "react-icons/fa";

const visas = [
  {
    title: "Student Visa",
    description:
      "Processing times vary by visa type and country, ranging from a few weeks to several months.",
    image:
      "https://i.ibb.co.com/8gQLn3FB/people-traveling-without-covid-worries-23-2149051620.jpg",
    icon: "🎓",
  },
  {
    title: "Business Visa",
    description:
      "The required documents vary by visa type but generally include a valid passport and photos.",
    image:
      "https://i.ibb.co.com/nMKTbNc5/front-view-office-worker-sitting-his-working-place-holding-tickets-passport-179666-25579.jpg",
    icon: "🏢",
  },
  {
    title: "Family Visa",
    description:
      "If your application is denied, you will be given a reason. You may be able to reapply or appeal.",
    image:
      "https://i.ibb.co.com/wNzfzkVD/young-family-three-posing-together-before-travel-vacation-23-2149205286.jpg",
    icon: "👨‍👩‍👧",
  },
  {
    title: "Tourist Visa",
    description:
      "A tourist visa allows you to visit a country for leisure, sightseeing, or short-term travel. Processing times and requirements vary by destination.",
    image:
      "https://i.ibb.co.com/5gJt83mt/medium-shot-people-travel-agency-52683-136434.jpg",
    icon: "🌍",
  },
  {
    title: "Working Visa",
    description:
      "A working visa grants you permission to work legally in a foreign country. Requirements typically include a job offer and employer sponsorship.",
    image:
      "https://i.ibb.co.com/wNzfzkVD/young-family-three-posing-together-before-travel-vacation-23-2149205286.jpg",
    icon: "💼",
  },
];

const VisaServices = () => {
  return (
    <div className="container mx-auto text-center py-20">
      <div className="text-center w-1/2 mx-auto">
        <h2 className="text-5xl font-bold mb-12">
          Outstanding Immigration Visa Services.
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {visas.map((visa, index) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden">
            <img src={visa.image} alt={visa.title} className="w-full " />
            <div className="p-6 text-start">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">{visa.icon}</span>
                <h3 className="text-xl font-semibold">{visa.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{visa.description}</p>
              <button className="flex items-center gap-2">
                Read More <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisaServices;
