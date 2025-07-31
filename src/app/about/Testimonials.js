'use client';

import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Doe',
    image: '/img/client1.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    name: 'Jenna Smith',
    image: '/img/client2.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    name: 'Samuel Stevens',
    image: '/img/client3.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    name: 'Jessica Loren',
    image: '/img/client4.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    name: 'Mykel Johnson',
    image: '/img/client5.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#fef5f4] py-20 px-4 md:px-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">What My Clients Says</h2>
        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="w-20 h-[2px] bg-red-500 mt-2 mx-auto" />
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {testimonials.map((client, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 text-center w-full max-w-sm hover:shadow-lg transition duration-300"
          >
            <FaQuoteLeft className="text-red-500 text-xl mb-4 mx-auto" />
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full border-4 border-red-500 overflow-hidden">
                <Image
                  src={client.image}
                  alt={client.name}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-6">{client.text}</p>
            <div className="w-6 h-[2px] bg-red-500 mx-auto mb-2" />
            <p className="font-medium text-gray-800">{client.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
