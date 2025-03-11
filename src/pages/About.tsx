import React from 'react';
import { Award, Star, Trophy, Users } from 'lucide-react';

function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&q=80&w=2000"
            alt="Basketball Manufacturing"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">Our Story</h1>
            <p className="text-xl text-gray-300">
              Since 1985, HoopCraft has been at the forefront of basketball manufacturing,
              combining traditional craftsmanship with modern innovation to create the perfect basketball.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=800"
                alt="Our History"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">A Legacy of Excellence</h2>
              <p className="text-gray-600 mb-6">
                What started as a small workshop in Los Angeles has grown into a global leader in basketball manufacturing.
                Our founder's vision was simple: create the perfect basketball that would enhance every player's game.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we continue that legacy with state-of-the-art manufacturing facilities and a team of dedicated craftsmen
                who share our passion for the game.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Trophy className="h-8 w-8 text-orange-600" />
                  <span className="font-semibold">Global Recognition</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-orange-600" />
                  <span className="font-semibold">500+ Employees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Manufacturing Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&q=80&w=500',
                title: 'Material Selection',
                description: 'Only premium materials make the cut'
              },
              {
                image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=500',
                title: 'Crafting',
                description: 'Expert assembly by skilled craftsmen'
              },
              {
                image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=500',
                title: 'Quality Control',
                description: 'Rigorous testing at every stage'
              },
              {
                image: 'https://images.unsplash.com/photo-1494199505258-5f95387f933c?auto=format&fit=crop&q=80&w=500',
                title: 'Final Inspection',
                description: 'Meeting professional standards'
              }
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={step.image} alt={step.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-16 w-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Quality Excellence</h3>
              <p className="text-gray-600">ISO 9001:2015 Certified</p>
            </div>
            <div className="text-center">
              <Star className="h-16 w-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Industry Leader</h3>
              <p className="text-gray-600">Top Manufacturer Award 2023</p>
            </div>
            <div className="text-center">
              <Trophy className="h-16 w-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Global Recognition</h3>
              <p className="text-gray-600">Present in 50+ Countries</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;