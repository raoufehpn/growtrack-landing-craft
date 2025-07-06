
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, Heart, Coffee, Laptop } from 'lucide-react';

const Careers = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Join our frontend team to build beautiful, responsive interfaces for our analytics platform.",
      requirements: ["5+ years React experience", "TypeScript proficiency", "UI/UX design skills"]
    },
    {
      id: 2,
      title: "Data Scientist",
      department: "Analytics",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Help develop machine learning models and statistical analyses to power our predictive features.",
      requirements: ["PhD in Statistics/Math", "Python/R expertise", "ML frameworks experience"]
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
      description: "Drive product strategy and roadmap for our core analytics features.",
      requirements: ["5+ years PM experience", "Analytics product background", "Strong communication skills"]
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      description: "Scale our infrastructure to handle millions of data points and ensure 99.9% uptime.",
      requirements: ["AWS/GCP experience", "Kubernetes proficiency", "CI/CD expertise"]
    },
    {
      id: 5,
      title: "UX Designer",
      department: "Design",
      location: "Remote",
      type: "Contract",
      description: "Design intuitive user experiences for complex data visualization and analytics workflows.",
      requirements: ["Portfolio of B2B products", "Figma expertise", "Data visualization experience"]
    },
    {
      id: 6,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Austin, TX",
      type: "Full-time",
      description: "Help our enterprise customers maximize value from GrowTrack and drive retention.",
      requirements: ["B2B SaaS experience", "Analytics background", "Excellent communication"]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness stipend"
    },
    {
      icon: Laptop,
      title: "Remote First",
      description: "Work from anywhere with flexible hours and home office setup allowance"
    },
    {
      icon: Coffee,
      title: "Learning & Growth",
      description: "Professional development budget, conference attendance, and skill-building programs"
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Regular team events, annual company retreat, and collaborative environment"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Join Our <span className="bg-accent-gradient bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-in">
              Help us build the future of business analytics. Work with talented people on meaningful problems.
            </p>
            <Button variant="hero" size="lg" className="animate-fade-in">
              View Open Positions
            </Button>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Why Work at GrowTrack?</h2>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                We're building more than just software - we're creating a culture where talented people can do their best work.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center animate-fade-in hover-scale">
                    <CardHeader>
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/70">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Open Positions</h2>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our growing team.
              </p>
            </div>
            
            <div className="space-y-6">
              {jobs.map((job) => (
                <Card key={job.id} className="animate-fade-in hover-scale">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-foreground/70">
                          <Badge variant="secondary">{job.department}</Badge>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline">Apply Now</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{job.description}</CardDescription>
                    <div>
                      <h4 className="font-semibold mb-2">Key Requirements:</h4>
                      <ul className="text-sm text-foreground/70 space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-accent rounded-full"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Hiring Process</h2>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                We believe in a transparent and respectful hiring process that showcases your skills and fits our culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Application", description: "Submit your resume and cover letter" },
                { step: "2", title: "Phone Screen", description: "30-minute call with our recruiting team" },
                { step: "3", title: "Technical Interview", description: "Role-specific skills assessment" },
                { step: "4", title: "Final Interview", description: "Meet the team and culture fit" }
              ].map((item, index) => (
                <div key={index} className="text-center animate-fade-in">
                  <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Don't See a Perfect Fit?</h2>
              <p className="text-foreground/80 mb-8">
                We're always interested in hearing from talented people. Send us your resume and tell us what you're passionate about.
              </p>
              <Button variant="hero" size="lg">Send Us Your Resume</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
