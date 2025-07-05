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
  PieChart,
  Menu,
  X
} from "lucide-react";

import dashboardHero from "@/assets/dashboard-hero.jpg";
import analyticsAbstract from "@/assets/analytics-abstract.jpg";
import heatmapInterface from "@/assets/heatmap-interface.jpg";
import insightsDashboard from "@/assets/insights-dashboard.jpg";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold hover:scale-105 transition-transform duration-200 cursor-pointer">
            <span className="text-primary">Grow</span>Track
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection("features")} className="hover:text-primary transition-all duration-200 hover:scale-105">Features</button>
            <button onClick={() => scrollToSection("pricing")} className="hover:text-primary transition-all duration-200 hover:scale-105">Pricing</button>
            <button onClick={() => scrollToSection("faq")} className="hover:text-primary transition-all duration-200 hover:scale-105">FAQ</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-all duration-200 hover:scale-105">Support</button>
          </div>
          
          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={() => scrollToSection("signup-section")} className="hover:scale-105 transition-transform duration-200">Sign In</Button>
            <Button variant="hero" onClick={() => scrollToSection("signup-section")} className="hover:scale-105 transition-all duration-200 hover:shadow-lg">Start Free Trial</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
              <X className={`w-6 h-6 absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-background/95 backdrop-blur-md border-t border-border overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button onClick={() => scrollToSection("features")} className="block w-full text-left py-2 hover:text-primary transition-all duration-200 hover:translate-x-2">Features</button>
            <button onClick={() => scrollToSection("pricing")} className="block w-full text-left py-2 hover:text-primary transition-all duration-200 hover:translate-x-2">Pricing</button>
            <button onClick={() => scrollToSection("faq")} className="block w-full text-left py-2 hover:text-primary transition-all duration-200 hover:translate-x-2">FAQ</button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left py-2 hover:text-primary transition-all duration-200 hover:translate-x-2">Support</button>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full hover:scale-105 transition-transform duration-200" onClick={() => scrollToSection("signup-section")}>Sign In</Button>
              <Button variant="hero" className="w-full hover:scale-105 transition-transform duration-200" onClick={() => scrollToSection("signup-section")}>Start Free Trial</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-12 md:pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient"></div>
        <div className="absolute inset-0 opacity-10">
          <img src={analyticsAbstract} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 md:mb-6 bg-primary/20 text-primary border border-primary/30 text-xs md:text-sm animate-fade-in hover:scale-105 transition-transform duration-200">
              <Shield className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              GDPR-Ready Analytics
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Turn Visitor Insights into 
              <span className="text-primary block animate-fade-in" style={{ animationDelay: '0.4s' }}>Real Growth</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
              GrowTrack is an intelligent visitor-behavior analytics tool that helps website owners understand user actions and uncover data-driven growth opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8 px-4 sm:px-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection("signup-section")}
                className="animate-glow-pulse w-full sm:w-auto hover:scale-105 transition-all duration-200 group"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline-hero" size="lg" className="w-full sm:w-auto hover:scale-105 transition-all duration-200 group">
                    <Play className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-200" />
                    Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl mx-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-primary animate-pulse" />
                      <p className="text-sm md:text-lg">Demo video would play here</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '1s' }}>
              Trusted by 1,200+ websites • No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in hover:scale-105 transition-all duration-300 group" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Instant Setup</h3>
              <p className="text-sm md:text-base text-muted-foreground">Get started in under 2 minutes with one-click installation</p>
            </div>
            <div className="text-center animate-fade-in hover:scale-105 transition-all duration-300 group" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Actionable Insights</h3>
              <p className="text-sm md:text-base text-muted-foreground">AI-powered recommendations that drive real growth</p>
            </div>
            <div className="text-center animate-fade-in hover:scale-105 transition-all duration-300 group sm:col-span-2 lg:col-span-1" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Privacy-First</h3>
              <p className="text-sm md:text-base text-muted-foreground">GDPR compliant with complete data ownership</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Screenshot */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <img 
              src={dashboardHero} 
              alt="GrowTrack Dashboard" 
              className="w-full rounded-lg md:rounded-2xl shadow-2xl border border-border animate-fade-in hover:scale-105 transition-all duration-500 cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to understand your visitors and grow your business
            </p>
          </div>
          
          <div className="grid gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 animate-fade-in hover:scale-105 transition-all duration-300 group" style={{ animationDelay: '0.1s' }}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                <MousePointer className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Click-Tracking Heatmaps</h3>
                <p className="text-muted-foreground mb-3 md:mb-4">See exactly where users click, scroll, and interact with your site</p>
                <ul className="space-y-1 md:space-y-2 text-sm text-muted-foreground">
                  <li className="hover:text-foreground transition-colors duration-200">• Real-time heatmap generation</li>
                  <li className="hover:text-foreground transition-colors duration-200">• Mobile and desktop tracking</li>
                  <li className="hover:text-foreground transition-colors duration-200">• Historical heatmap comparison</li>
                </ul>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 animate-fade-in hover:scale-105 transition-all duration-300 group" style={{ animationDelay: '0.2s' }}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Smart Growth Recommendations</h3>
                <p className="text-muted-foreground mb-3 md:mb-4">AI analyzes your data to suggest specific improvements</p>
                <ul className="space-y-1 md:space-y-2 text-sm text-muted-foreground">
                  <li className="hover:text-foreground transition-colors duration-200">• Conversion optimization tips</li>
                  <li className="hover:text-foreground transition-colors duration-200">• User experience improvements</li>
                  <li className="hover:text-foreground transition-colors duration-200">• Performance enhancement alerts</li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 animate-fade-in hover:scale-105 transition-all duration-300 group" style={{ animationDelay: '0.3s' }}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Real-Time Dashboards</h3>
                <p className="text-muted-foreground mb-3 md:mb-4">Monitor visitor behavior as it happens with live updates</p>
                <ul className="space-y-1 md:space-y-2 text-sm text-muted-foreground">
                  <li className="hover:text-foreground transition-colors duration-200">• Live visitor counter</li>
                  <li className="hover:text-foreground transition-colors duration-200">• Real-time conversion tracking</li>
                  <li className="hover:text-foreground transition-colors duration-200">• Instant alert notifications</li>
                </ul>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 animate-fade-in hover:scale-105 transition-all duration-300 group" style={{ animationDelay: '0.4s' }}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Weekly Insight Emails</h3>
                <p className="text-muted-foreground mb-3 md:mb-4">Get summarized reports delivered to your inbox automatically</p>
                <ul className="space-y-1 md:space-y-2 text-sm text-muted-foreground">
                  <li className="hover:text-foreground transition-colors duration-200">• Automated weekly summaries</li>
                  <li className="hover:text-foreground transition-colors duration-200">• Customizable report frequency</li>
                  <li className="hover:text-foreground transition-colors duration-200">• Team sharing capabilities</li>
                </ul>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 max-w-2xl mx-auto animate-fade-in hover:scale-105 transition-all duration-300 group" style={{ animationDelay: '0.5s' }}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">A/B Test Monitoring</h3>
                <p className="text-muted-foreground mb-3 md:mb-4">Track and compare different versions of your pages effortlessly</p>
                <ul className="space-y-1 md:space-y-2 text-sm text-muted-foreground">
                  <li className="hover:text-foreground transition-colors duration-200">• Statistical significance tracking</li>
                  <li className="hover:text-foreground transition-colors duration-200">• Conversion rate comparison</li>
                  <li className="hover:text-foreground transition-colors duration-200">• Test duration recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-16 md:py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">See GrowTrack in Action</h2>
            <p className="text-lg md:text-xl text-muted-foreground">Real interfaces, real insights, real results</p>
          </div>
          
          <div className="grid gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="space-y-4 animate-fade-in group" style={{ animationDelay: '0.1s' }}>
              <img 
                src={heatmapInterface} 
                alt="Heatmap Interface" 
                className="w-full rounded-lg md:rounded-xl border border-border hover:scale-105 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl"
              />
              <h3 className="text-base md:text-lg font-semibold group-hover:text-primary transition-colors duration-200">Visitor Heatmap Analysis</h3>
              <p className="text-muted-foreground text-sm">Understand user behavior patterns with detailed heatmap visualizations</p>
            </div>
            <div className="space-y-4 animate-fade-in group" style={{ animationDelay: '0.2s' }}>
              <img 
                src={insightsDashboard} 
                alt="Insights Dashboard" 
                className="w-full rounded-lg md:rounded-xl border border-border hover:scale-105 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl"
              />
              <h3 className="text-base md:text-lg font-semibold group-hover:text-primary transition-colors duration-200">Growth Insights Dashboard</h3>
              <p className="text-muted-foreground text-sm">Get actionable recommendations based on your visitor data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Trusted by Growing Businesses</h2>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-60 mb-12 md:mb-16">
              <div className="text-lg md:text-2xl font-bold hover:opacity-100 transition-opacity duration-200 cursor-pointer">TechCorp</div>
              <div className="text-lg md:text-2xl font-bold hover:opacity-100 transition-opacity duration-200 cursor-pointer">StartupXYZ</div>
              <div className="text-lg md:text-2xl font-bold hover:opacity-100 transition-opacity duration-200 cursor-pointer">GrowthCo</div>
              <div className="text-lg md:text-2xl font-bold hover:opacity-100 transition-opacity duration-200 cursor-pointer">ScaleUp</div>
            </div>
          </div>
          
          <Card className="max-w-4xl mx-auto bg-card/50 border-primary/20 animate-fade-in hover:scale-105 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <div>
                  <blockquote className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 leading-relaxed">
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
      <section id="signup-section" className="py-16 md:py-20 px-4 bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 animate-fade-in">
            Create Your Account in 2 Minutes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join thousands of website owners who are already growing with GrowTrack
          </p>
          
          {!isSignupSuccess ? (
            <form onSubmit={handleSignup} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 hover:scale-105 transition-transform duration-200 focus:scale-105"
                required
              />
              <Button type="submit" variant="hero" className="sm:w-auto hover:scale-105 transition-all duration-200 group">
                Get Started
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </form>
          ) : (
            <div className="max-w-md mx-auto animate-scale-in">
              <div className="flex items-center justify-center gap-2 text-primary mb-4">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
                <span className="text-base md:text-lg font-semibold">Welcome to GrowTrack!</span>
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                Check your email for your free trial setup instructions.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg md:text-xl text-muted-foreground">Choose the plan that fits your needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <Card className="relative animate-fade-in hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.1s' }}>
              <CardHeader className="text-center">
                <CardTitle className="text-xl md:text-2xl">Free</CardTitle>
                <CardDescription>Perfect for small websites</CardDescription>
                <div className="text-3xl md:text-4xl font-bold">$0<span className="text-base md:text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm md:text-base">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    Up to 10,000 page views
                  </li>
                  <li className="flex items-center gap-2 text-sm md:text-base">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    Basic heatmaps
                  </li>
                  <li className="flex items-center gap-2 text-sm md:text-base">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    Weekly reports
                  </li>
                  <li className="flex items-center gap-2 text-sm md:text-base">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    Email support
                  </li>
                </ul>
                <Button variant="outline" className="w-full hover:scale-105 transition-transform duration-200">Choose Free</Button>
              </CardContent>
            </Card>
            
            <Card className="relative border-primary animate-fade-in hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground animate-pulse">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl md:text-2xl">Pro</CardTitle>
                <CardDescription>For growing businesses</CardDescription>
                <div className="text-3xl md:text-4xl font-bold">$49<span className="text-base md:text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm md:text-base">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    Unlimited page views
                  </li>
                  <li className="flex items-center gap-2 text-sm md:text-base">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    Advanced heatmaps & recordings
                  </li>
                  <li className="flex items-center gap-2 text-sm md:text-base">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    AI-powered insights
                  </li>
                  <li className="flex items-center gap-2 text-sm md:text-base">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    A/B test monitoring
                  </li>
                  <li className="flex items-center gap-2 text-sm md:text-base">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    Priority support
                  </li>
                </ul>
                <Button variant="hero" className="w-full hover:scale-105 transition-transform duration-200">Choose Pro</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg md:text-xl text-muted-foreground">Everything you need to know about GrowTrack</p>
          </div>
          
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="privacy" className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <AccordionTrigger className="text-left hover:text-primary transition-colors duration-200">How does GrowTrack handle data privacy?</AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground">
                GrowTrack is fully GDPR compliant and privacy-first. We don't collect personal information, 
                only anonymous behavioral data. You own all your data and can export or delete it anytime. 
                All data is encrypted and stored securely in EU data centers.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="installation" className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <AccordionTrigger className="text-left hover:text-primary transition-colors duration-200">How difficult is it to install GrowTrack?</AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground">
                Installation takes less than 2 minutes. Simply add our lightweight tracking code to your website, 
                or use our WordPress plugin for one-click setup. No technical knowledge required, 
                and our support team is always available to help.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="trial" className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <AccordionTrigger className="text-left hover:text-primary transition-colors duration-200">How long is the free trial?</AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground">
                Our free plan is permanent with up to 10,000 monthly page views. For the Pro features, 
                we offer a 14-day free trial with no credit card required. You can upgrade, downgrade, 
                or cancel anytime without penalties.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="cancel" className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <AccordionTrigger className="text-left hover:text-primary transition-colors duration-200">Can I cancel my subscription anytime?</AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground">
                Yes, absolutely. You can cancel your subscription anytime from your account settings. 
                There are no cancellation fees or long-term contracts. If you cancel, 
                you'll still have access to your data and can export it.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="support" className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <AccordionTrigger className="text-left hover:text-primary transition-colors duration-200">What are your support hours?</AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground">
                Free plan users get email support with 24-48 hour response times. 
                Pro users get priority support with response times under 4 hours during business hours (9 AM - 6 PM EST, Monday-Friday). 
                We also have extensive documentation and video tutorials available 24/7.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="integration" className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <AccordionTrigger className="text-left hover:text-primary transition-colors duration-200">Does GrowTrack integrate with other tools?</AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground">
                Yes! GrowTrack integrates with popular tools like Google Analytics, WordPress, Shopify, 
                Zapier, and many others. We also provide a REST API for custom integrations. 
                New integrations are added regularly based on user feedback.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg md:text-xl text-muted-foreground">Have a question? We'd love to hear from you.</p>
          </div>
          
          <Card className="max-w-2xl mx-auto animate-fade-in hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Send us a message</CardTitle>
              <CardDescription className="text-sm md:text-base">We'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    id="name"
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                    className="hover:scale-105 focus:scale-105 transition-transform duration-200"
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
                    className="hover:scale-105 focus:scale-105 transition-transform duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-input border border-border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring text-sm md:text-base hover:scale-105 focus:scale-105 transition-transform duration-200"
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    required
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full hover:scale-105 transition-transform duration-200">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="md:col-span-2 animate-fade-in">
              <div className="text-xl md:text-2xl font-bold mb-4 hover:scale-105 transition-transform duration-200 cursor-pointer">
                <span className="text-primary">Grow</span>Track
              </div>
              <p className="text-muted-foreground mb-4 max-w-md text-sm md:text-base">
                Turn visitor insights into real growth with intelligent analytics that actually drive results.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-muted rounded flex items-center justify-center cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-muted rounded flex items-center justify-center cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-muted rounded flex items-center justify-center cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h4 className="font-semibold mb-4 text-sm md:text-base">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection("features")} className="hover:text-foreground transition-all duration-200 hover:translate-x-1">Features</button></li>
                <li><button onClick={() => scrollToSection("pricing")} className="hover:text-foreground transition-all duration-200 hover:translate-x-1">Pricing</button></li>
                <li><button onClick={() => scrollToSection("faq")} className="hover:text-foreground transition-all duration-200 hover:translate-x-1">FAQ</button></li>
                <li><a href="#" className="hover:text-foreground transition-all duration-200 hover:translate-x-1">API Docs</a></li>
              </ul>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h4 className="font-semibold mb-4 text-sm md:text-base">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection("contact")} className="hover:text-foreground transition-all duration-200 hover:translate-x-1">Contact</button></li>
                <li><a href="#" className="hover:text-foreground transition-all duration-200 hover:translate-x-1">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-all duration-200 hover:translate-x-1">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-all duration-200 hover:translate-x-1">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p>&copy; 2024 GrowTrack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
