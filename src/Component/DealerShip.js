import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Award, Truck, Tag, BarChart2, Search, MapPin } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DealerShip = () => {
  const [searchCity, setSearchCity] = useState('');
  const [searchLocality, setSearchLocality] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);

  const cities = [
    { name: "Burdi", image: 'https://i.pinimg.com/736x/35/cf/ae/35cfaed52d34cfa0c9a4687d3b7971af.jpg' },
    { name: "Manewada", image: 'https://i.pinimg.com/564x/71/75/e1/7175e1af4c99be42166e8d68d52a63a9.jpg' },
    { name: "Dighori", image: 'https://i.pinimg.com/736x/1c/1b/42/1c1b42f7301525214d6298532530a95f.jpg' },
    { name: "Vardhyaman Nagar", image: 'https://i.pinimg.com/736x/1e/13/50/1e1350ee86072add28e84f06e531162a.jpg' },
    { name: "Somalwada", image: 'https://i.pinimg.com/736x/7b/89/50/7b895031d880dd94dab1d62e0c6b05af.jpg' },
    { name: "Friends Colony", image: 'https://i.pinimg.com/736x/2d/ab/7e/2dab7e6de38960601d724d1cae494110.jpg' },
    { name: "Sadar", image: 'https://i.pinimg.com/564x/90/ce/c6/90cec61c5ba04aa36c7dc50716f0cb91.jpg' },
    { name: "Katolnaka", image: 'https://i.pinimg.com/564x/4c/b7/c3/4cb7c35164310fbdb02ad4a91da23319.jpg' },
    { name: "Jaripatka", image: 'https://i.pinimg.com/736x/8a/96/f2/8a96f2b46e4ddd8485603d2e1c2656f3.jpg' },
    { name: "Itwari", image: 'https://i.pinimg.com/564x/e9/44/ee/e944eeed27610385cd36283e9121a253.jpg' },
    { name: "Dharampeth", image: 'https://i.pinimg.com/736x/0d/ce/77/0dce77b996b2ee08ca236c445091c593.jpg' },
    { name: "Hudkeshwar", image: 'https://i.pinimg.com/736x/dd/37/a1/dd37a124deb5735283052da94e71b5e1.jpg' }
  ];
  
  const cars = [
    { name: "Hyundai i20", price: "₹ 2,49,000", image: "https://www.hyundai.com/content/dam/hyundai/in/en/data/vehicle-thumbnail/Thumbnail/creta-suvpc.png" },
    { name: "Hyundai Grand i10", price: "₹ 3,40,930", image: "https://imgd.aeplcdn.com/1056x594/n/t4frrua_1559467.jpg?q=80" },
    { name: "Maruti Baleno", price: "₹ 5,00,000", image: "https://imgd.aeplcdn.com/1200x900/cw/ec/37710/Maruti-Suzuki-Baleno-Right-Front-Three-Quarter-147420.jpg?wm=0&q=80" },
    { name: "Hyundai Creta", price: "₹ 8,01,000", image: "https://imgd-ct.aeplcdn.com/664x415/n/1ihrrua_1559469.jpg?q=80" },
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "FINANCING MADE EASY",
      description: "Our stress-free finance department can find financial solutions to save you money."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "WIDE RANGE OF BRANDS",
      description: "With a robust selection of popular vehicles on hand, as well as leading vehicles from BMW and Ford."
    },
    {
      icon: <Tag className="w-8 h-8" />,
      title: "TRUSTED BY THOUSANDS",
      description: "10 new offers every day. 350 offers on site, trusted by a community of thousands of users."
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "CAR SERVICE & MAINTENANCE",
      description: "Our service department maintains your car to stay safe on the road for many more years."
    }
  ];

  const stats = [
    { icon: Award, title: "India's #1", subtitle: "Largest Auto portal" },
    { icon: Truck, title: "Car Sold", subtitle: "Every 4 minute" },
    { icon: Tag, title: "Offers", subtitle: "Stay updated pay less" },
    { icon: BarChart2, title: "Compare", subtitle: "Decode the right car" }
  ];

  const handleSearch = () => {
    const filtered = cities.filter(city => 
      city.name.toLowerCase().includes(searchCity.toLowerCase()) ||
      city.name.toLowerCase().includes(searchLocality.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">Find Your Perfect Car</h1>
          <p className="text-xl md:text-2xl mb-8 text-center">Connecting you to the right used car dealers</p>
          <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="City"
                className="pl-10 pr-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
              />
            </div>
            <div className="relative">
              {/* <Search className="absolute  left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
              {/* <input
                type="text"
                placeholder="Locality"
                className="pl-10 pr-4 py-2 border  text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={searchLocality}
                onChange={(e) => setSearchLocality(e.target.value)}
              /> */}
            </div>
            <button 
              className="px-6 py-2 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition duration-300"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Popular Cities Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Popular Cities for Used Cars</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(filteredCities.length > 0 ? filteredCities : cities).map((city, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img src={city.image} alt={city.name} className="w-full h-48 object-cover transition duration-300 transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600 opacity-70 transition duration-300 group-hover:opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-xl font-semibold">{city.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Cars Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Popular Used Cars</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {cars.map((car, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                    <p className="text-gray-600">{car.price}</p>
                    <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-600 mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 px-4 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80')"}}>
        <div className="absolute inset-0 bg-blue-600 bg-opacity-80"></div>
        <div className="relative z-10 container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Dream Car?</h2>
          <p className="text-xl mb-8">Browse our extensive inventory and connect with top dealers in your area.</p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition duration-300">
            Start Your Search
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-3 py-2">
                <stat.icon className="h-8 w-8 text-orange-500" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-600">{stat.title}</h3>
                  <p className="text-sm text-gray-600">{stat.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DealerShip;