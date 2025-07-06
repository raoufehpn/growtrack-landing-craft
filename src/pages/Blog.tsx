
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Business Analytics: Trends to Watch in 2024",
      excerpt: "Explore the emerging trends in business analytics that will shape how companies make data-driven decisions.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Analytics",
      featured: true
    },
    {
      id: 2,
      title: "How to Build a Data-Driven Culture in Your Organization",
      excerpt: "Learn practical strategies for fostering a culture that values data and analytics across all departments.",
      author: "Michael Chen",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Strategy"
    },
    {
      id: 3,
      title: "Real-Time Analytics: When Speed Matters Most",
      excerpt: "Discover when real-time analytics can give your business a competitive edge and how to implement it effectively.",
      author: "Emily Rodriguez",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "Technology"
    },
    {
      id: 4,
      title: "Customer Journey Analytics: Understanding Your Users Better",
      excerpt: "Deep dive into customer journey analytics and how it can improve user experience and drive conversions.",
      author: "David Kim",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Customer Success"
    },
    {
      id: 5,
      title: "Data Visualization Best Practices for Business Leaders",
      excerpt: "Master the art of data visualization with these proven techniques for creating compelling and actionable dashboards.",
      author: "Lisa Wang",
      date: "2023-12-28",
      readTime: "8 min read",
      category: "Design"
    },
    {
      id: 6,
      title: "Machine Learning for Business: A Practical Guide",
      excerpt: "Demystify machine learning and learn how to apply it to solve real business problems and drive growth.",
      author: "Alex Thompson",
      date: "2023-12-25",
      readTime: "10 min read",
      category: "AI & ML"
    }
  ];

  const categories = [...new Set(blogPosts.map(post => post.category))];
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              GrowTrack <span className="bg-accent-gradient bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-in">
              Insights, tips, and best practices for data-driven business growth.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
              </div>
              
              <Card className="overflow-hidden animate-fade-in hover-scale">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="bg-gradient-to-br from-accent/20 to-accent/5 p-12 flex items-center justify-center">
                    <TrendingUp className="w-32 h-32 text-accent/50" />
                  </div>
                  <div className="p-8 lg:p-12">
                    <Badge className="mb-4">{featuredPost.category}</Badge>
                    <CardTitle className="text-2xl mb-4">{featuredPost.title}</CardTitle>
                    <CardDescription className="text-base mb-6">{featuredPost.excerpt}</CardDescription>
                    <div className="flex items-center space-x-4 text-sm text-foreground/70 mb-6">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button variant="hero">
                      Read Article <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Categories */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-4">Browse by Category</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <Button variant="outline" size="sm">All Posts</Button>
                {categories.map((category) => (
                  <Button key={category} variant="ghost" size="sm">
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                Stay up to date with the latest insights and best practices in business analytics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <Card key={post.id} className="animate-fade-in hover-scale group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-xs text-foreground/70">{post.readTime}</span>
                    </div>
                    <CardTitle className="group-hover:text-accent transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                    <div className="flex items-center justify-between text-sm text-foreground/70">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
              <p className="text-foreground/80 mb-8">
                Subscribe to our newsletter to get the latest articles and insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
                />
                <Button variant="hero">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
