import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { 
  BarChart3, 
  Eye, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Mail, 
  CheckCircle,
  Play,
  ArrowRight,
  MousePointer,
  Target,
  PieChart
} from "lucide-react";

import dashboardHero from "@/assets/dashboard-hero.jpg";
import analyticsAbstract from "@/assets/analytics-abstract.jpg";
import heatmapInterface from "@/assets/heatmap-interface.jpg";
import insightsDashboard from "@/assets/insights-dashboard.jpg";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSignupSuccess(true);
    toast({
      title: "Welcome to GrowTrack!",
      description: "Check your email for your free trial setup link.",
    });
    document.getElementById("signup-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setContactForm({ name: "", email: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-primary">Grow</span>Track
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("features")} className="hover:text-primary transition-colors">Features</button>
            <button onClick={() => scrollToSection("pricing")} className="hover:text-primary transition-colors">Pricing</button>
            <button onClick={() => scrollToSection("faq")} className="hover:text-primary transition-colors">FAQ</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">Support</button>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => scrollToSection("signup-section")}>Sign In</Button>
            <Button variant="hero" onClick={() => scrollToSection("signup-section")}>Start Free Trial</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient"></div>
        <div className="absolute inset-0 opacity-10">
          <img src={analyticsAbstract} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border border-primary/30">
              <Shield className="w-4 h-4 mr-2" />
              GDPR-Ready Analytics
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Turn Visitor Insights into 
              <span className="text-primary block">Real Growth</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              GrowTrack is an intelligent visitor-behavior analytics tool that helps website owners understand user actions and uncover data-driven growth opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={() => scrollToSection("signup-section")}
                className="animate-glow-pulse"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline-hero" size="xl">
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-16 h-16 mx-auto mb-4 text-primary" />
                      <p className="text-lg">Demo video would play here</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by 1,200+ websites • No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Setup</h3>
              <p className="text-muted-foreground">Get started in under 2 minutes with one-click installation</p>
            </div>
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Actionable Insights</h3>
              <p className="text-muted-foreground">AI-powered recommendations that drive real growth</p>
            </div>
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy-First</h3>
              <p className="text-muted-foreground">GDPR compliant with complete data ownership</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Screenshot */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <img 
              src={dashboardHero} 
              alt="GrowTrack Dashboard" 
              className="w-full rounded-2xl shadow-2xl border border-border"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to understand your visitors and grow your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <MousePointer className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Click-Tracking Heatmaps</h3>
                <p className="text-muted-foreground mb-4">See exactly where users click, scroll, and interact with your site</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time heatmap generation</li>
                  <li>• Mobile and desktop tracking</li>
                  <li>• Historical heatmap comparison</li>
                </ul>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Smart Growth Recommendations</h3>
                <p className="text-muted-foreground mb-4">AI analyzes your data to suggest specific improvements</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Conversion optimization tips</li>
                  <li>• User experience improvements</li>
                  <li>• Performance enhancement alerts</li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Real-Time Dashboards</h3>
                <p className="text-muted-foreground mb-4">Monitor visitor behavior as it happens with live updates</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Live visitor counter</li>
                  <li>• Real-time conversion tracking</li>
                  <li>• Instant alert notifications</li>
                </ul>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Weekly Insight Emails</h3>
                <p className="text-muted-foreground mb-4">Get summarized reports delivered to your inbox automatically</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Automated weekly summaries</li>
                  <li>• Customizable report frequency</li>
                  <li>• Team sharing capabilities</li>
                </ul>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex gap-6 md:col-span-2 max-w-lg mx-auto">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">A/B Test Monitoring</h3>
                <p className="text-muted-foreground mb-4">Track and compare different versions of your pages effortlessly</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Statistical significance tracking</li>
                  <li>• Conversion rate comparison</li>
                  <li>• Test duration recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">See GrowTrack in Action</h2>
            <p className="text-xl text-muted-foreground">Real interfaces, real insights, real results</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-4">
              <img 
                src={heatmapInterface} 
                alt="Heatmap Interface" 
                className="w-full rounded-xl border border-border"
              />
              <h3 className="text-lg font-semibold">Visitor Heatmap Analysis</h3>
              <p className="text-muted-foreground text-sm">Understand user behavior patterns with detailed heatmap visualizations</p>
            </div>
            <div className="space-y-4">
              <img 
                src={insightsDashboard} 
                alt="Insights Dashboard" 
                className="w-full rounded-xl border border-border"
              />
              <h3 className="text-lg font-semibold">Growth Insights Dashboard</h3>
              <p className="text-muted-foreground text-sm">Get actionable recommendations based on your visitor data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8">Trusted by Growing Businesses</h2>
            <div className="flex items-center justify-center space-x-12 opacity-60 mb-16">
              <div className="text-2xl font-bold">TechCorp</div>
              <div className="text-2xl font-bold">StartupXYZ</div>
              <div className="text-2xl font-bold">GrowthCo</div>
              <div className="text-2xl font-bold">ScaleUp</div>
            </div>
          </div>
          
          <Card className="max-w-4xl mx-auto bg-card/50 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <blockquote className="text-xl md:text-2xl mb-6 leading-relaxed">
                    "GrowTrack helped us identify exactly why users were leaving our checkout page. 
                    We implemented their recommendations and saw a 34% increase in conversions within two weeks. 
                    The insights are incredibly actionable."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="text-sm">
                      <div className="font-semibold">Sarah Johnson</div>
                      <div className="text-muted-foreground">VP of Growth, TechStartup Inc.</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section id="signup-section" className="py-20 px-4 bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Create Your Account in 2 Minutes
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of website owners who are already growing with GrowTrack
          </p>
          
          {!isSignupSuccess ? (
            <form onSubmit={handleSignup} className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" variant="hero">
                Get Started
              </Button>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 text-primary mb-4">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg font-semibold">Welcome to GrowTrack!</span>
              </div>
              <p className="text-muted-foreground">
                Check your email for your free trial setup instructions.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground">Choose the plan that fits your needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Free</CardTitle>
                <CardDescription>Perfect for small websites</CardDescription>
                <div className="text-4xl font-bold">$0<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Up to 10,000 page views
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Basic heatmaps
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Weekly reports
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Email support
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Choose Free</Button>
              </CardContent>
            </Card>
            
            <Card className="relative border-primary">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Pro</CardTitle>
                <CardDescription>For growing businesses</CardDescription>
                <div className="text-4xl font-bold">$49<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Unlimited page views
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Advanced heatmaps & recordings
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    AI-powered insights
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    A/B test monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Priority support
                  </li>
                </ul>
                <Button variant="hero" className="w-full">Choose Pro</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about GrowTrack</p>
          </div>
          
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="privacy">
              <AccordionTrigger>How does GrowTrack handle data privacy?</AccordionTrigger>
              <AccordionContent>
                GrowTrack is fully GDPR compliant and privacy-first. We don't collect personal information, 
                only anonymous behavioral data. You own all your data and can export or delete it anytime. 
                All data is encrypted and stored securely in EU data centers.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="installation">
              <AccordionTrigger>How difficult is it to install GrowTrack?</AccordionTrigger>
              <AccordionContent>
                Installation takes less than 2 minutes. Simply add our lightweight tracking code to your website, 
                or use our WordPress plugin for one-click setup. No technical knowledge required, 
                and our support team is always available to help.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="trial">
              <AccordionTrigger>How long is the free trial?</AccordionTrigger>
              <AccordionContent>
                Our free plan is permanent with up to 10,000 monthly page views. For the Pro features, 
                we offer a 14-day free trial with no credit card required. You can upgrade, downgrade, 
                or cancel anytime without penalties.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="cancel">
              <AccordionTrigger>Can I cancel my subscription anytime?</AccordionTrigger>
              <AccordionContent>
                Yes, absolutely. You can cancel your subscription anytime from your account settings. 
                There are no cancellation fees or long-term contracts. If you cancel, 
                you'll still have access to your data and can export it.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="support">
              <AccordionTrigger>What are your support hours?</AccordionTrigger>
              <AccordionContent>
                Free plan users get email support with 24-48 hour response times. 
                Pro users get priority support with response times under 4 hours during business hours (9 AM - 6 PM EST, Monday-Friday). 
                We also have extensive documentation and video tutorials available 24/7.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="integration">
              <AccordionTrigger>Does GrowTrack integrate with other tools?</AccordionTrigger>
              <AccordionContent>
                Yes! GrowTrack integrates with popular tools like Google Analytics, WordPress, Shopify, 
                Zapier, and many others. We also provide a REST API for custom integrations. 
                New integrations are added regularly based on user feedback.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">Have a question? We'd love to hear from you.</p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>We'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    id="name"
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Business Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-input border border-border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    required
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">
                <span className="text-primary">Grow</span>Track
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Turn visitor insights into real growth with intelligent analytics that actually drive results.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-muted rounded flex items-center justify-center cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  f
                </div>
                <div className="w-8 h-8 bg-muted rounded flex items-center justify-center cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  t
                </div>
                <div className="w-8 h-8 bg-muted rounded flex items-center justify-center cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  in
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection("features")} className="hover:text-foreground transition-colors">Features</button></li>
                <li><button onClick={() => scrollToSection("pricing")} className="hover:text-foreground transition-colors">Pricing</button></li>
                <li><button onClick={() => scrollToSection("faq")} className="hover:text-foreground transition-colors">FAQ</button></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection("contact")} className="hover:text-foreground transition-colors">Contact</button></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 GrowTrack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;