import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=2000"
            alt="Basketball Court"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Precision. Performance. Excellence.
            </h1>
            <p className="text-xl lg:text-2xl mb-8">
              Crafting premium basketballs for champions worldwide. Experience the perfect blend of innovation and tradition.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
            >
              Explore Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Featured Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Pro Elite Indoor',
                image: 'https://images.unsplash.com/photo-1494199505258-5f95387f933c?auto=format&fit=crop&q=80&w=600',
                price: '$89.99',
                description: 'Official size and weight, premium leather construction'
              },
              {
                name: 'Street Master',
                image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=600',
                price: '$59.99',
                description: 'Durable rubber exterior, perfect for outdoor courts'
              },
              {
                name: 'Youth Trainer',
                image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600',
                price: '$39.99',
                description: 'Lighter weight, ideal for young players'
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                    <Link
                      to="/products"
                      className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Commitment to Quality</h2>
            <p className="text-xl text-gray-600 mb-12">
              Every basketball we create is a testament to our dedication to excellence. From material selection to final testing,
              we ensure each product meets our rigorous standards.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=500"
                  alt="Quality Materials"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Premium Materials</h3>
                <p className="text-gray-600">Only the finest materials make it into our products</p>
              </div>
              <div className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&q=80&w=500"
                  alt="Craftsmanship"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Expert Craftsmanship</h3>
                <p className="text-gray-600">Decades of experience in every stitch</p>
              </div>
              <div className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=500"
                  alt="Testing"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Rigorous Testing</h3>
                <p className="text-gray-600">Every ball meets professional standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;