import React from 'react';
import { Star } from 'lucide-react';

function Products() {
  const products = [
    {
      name: 'Pro Elite Indoor',
      image: 'https://images.unsplash.com/photo-1494199505258-5f95387f933c?auto=format&fit=crop&q=80&w=600',
      price: '$89.99',
      description: 'Professional-grade indoor basketball featuring premium leather construction and official size and weight. Perfect for competitive play.',
      features: ['Premium leather construction', 'Official size and weight', 'Superior grip', 'Competition approved'],
      rating: 5
    },
    {
      name: 'Street Master',
      image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=600',
      price: '$59.99',
      description: 'Durable outdoor basketball designed for street play. Features enhanced grip and weather-resistant materials.',
      features: ['Weather-resistant', 'Enhanced durability', 'All-surface grip', 'Street-ready design'],
      rating: 4.5
    },
    {
      name: 'Youth Trainer',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600',
      price: '$39.99',
      description: 'Specially designed basketball for young players. Lighter weight and perfect size for developing skills.',
      features: ['Youth-specific size', 'Lightweight design', 'Easy grip surface', 'Developmental focus'],
      rating: 5
    },
    {
      name: 'Elite Competition',
      image: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&q=80&w=600',
      price: '$99.99',
      description: 'Top-tier competition basketball used in professional leagues. Maximum performance and consistency.',
      features: ['Pro-grade materials', 'Maximum consistency', 'Elite performance', 'League approved'],
      rating: 5
    },
    {
      name: 'Indoor/Outdoor Hybrid',
      image: 'https://images.unsplash.com/photo-1494199505258-5f95387f933c?auto=format&fit=crop&q=80&w=600',
      price: '$69.99',
      description: 'Versatile basketball designed for both indoor and outdoor use. Perfect for all-around players.',
      features: ['Dual-surface design', 'Versatile performance', 'All-weather grip', 'Balanced durability'],
      rating: 4.5
    },
    {
      name: 'Training Special',
      image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=600',
      price: '$49.99',
      description: 'Specialized training basketball with enhanced grip and control features for skill development.',
      features: ['Training-focused design', 'Enhanced grip', 'Skill development', 'Durable construction'],
      rating: 4.5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=2000"
            alt="Basketball Collection"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">Our Products</h1>
            <p className="text-xl text-gray-300">
              Discover our premium collection of basketballs, each crafted with precision and care
              to meet the needs of every player, from beginners to professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                    <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < product.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Guide */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Choosing the Right Basketball</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Indoor Basketballs</h3>
              <p className="text-gray-600">
                Perfect for gymnasium use. Features premium leather construction and optimal grip for indoor courts.
                Ideal for competitive play and practice sessions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Outdoor Basketballs</h3>
              <p className="text-gray-600">
                Built for durability on rough surfaces. Weather-resistant materials and enhanced grip make these
                perfect for street basketball and outdoor courts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Training Basketballs</h3>
              <p className="text-gray-600">
                Designed for skill development. These basketballs offer special features to help players
                improve their handling, shooting, and overall game.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;