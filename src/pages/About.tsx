
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              About <span className="bg-accent-gradient bg-clip-text text-transparent">GrowTrack</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-in">
              We're on a mission to help businesses unlock their potential through intelligent analytics and data-driven insights.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-foreground/80 mb-6">
                  Founded in 2024, GrowTrack emerged from a simple observation: businesses were drowning in data but starving for insights. Our founders, experienced entrepreneurs and data scientists, recognized the need for a platform that could bridge this gap.
                </p>
                <p className="text-foreground/80 mb-6">
                  Today, we serve thousands of businesses worldwide, helping them transform raw data into actionable strategies that drive growth and success.
                </p>
                <Button variant="hero">Learn More About Our Journey</Button>
              </div>
              <div className="bg-card rounded-xl p-8 border border-border animate-fade-in">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Mission</h3>
                      <p className="text-sm text-foreground/70">Empower businesses with intelligent analytics</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Vision</h3>
                      <p className="text-sm text-foreground/70">A world where every business decision is data-driven</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Values</h3>
                      <p className="text-sm text-foreground/70">Innovation, integrity, and customer success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                Our diverse team of experts brings together decades of experience in analytics, technology, and business strategy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO & Co-Founder",
                  bio: "Former VP of Analytics at Fortune 500 company with 15+ years experience in data strategy."
                },
                {
                  name: "Michael Chen",
                  role: "CTO & Co-Founder",
                  bio: "Ex-Google engineer specializing in machine learning and scalable data infrastructure."
                },
                {
                  name: "Emily Rodriguez",
                  role: "Head of Product",
                  bio: "Product management expert with a passion for creating user-centric analytics solutions."
                }
              ].map((member, index) => (
                <Card key={index} className="animate-fade-in hover-scale">
                  <CardHeader>
                    <div className="w-20 h-20 bg-accent-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <CardTitle className="text-center">{member.name}</CardTitle>
                    <CardDescription className="text-center">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-foreground/70">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">GrowTrack by the Numbers</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "10,000+", label: "Active Users" },
                { number: "500M+", label: "Data Points Processed" },
                { number: "99.9%", label: "Uptime" },
                { number: "150+", label: "Countries Served" }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-fade-in">
                  <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
