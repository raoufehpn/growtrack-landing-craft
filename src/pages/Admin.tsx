import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { User, Session } from '@supabase/supabase-js';
import { ArrowLeft, Users, BarChart3, Settings, LogOut, Edit, Save, X, Shield, UserCheck, Activity, DollarSign } from 'lucide-react';
import PricingManager from '@/components/PricingManager';

interface Profile {
  id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  role: string | null;
  created_at: string | null;
}

interface SiteSettings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  maintenanceMode: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  popular: boolean;
}

const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeUsersCount, setActiveUsersCount] = useState(0);
  const [siteSettings, setSiteSettings] = useState<SiteSettings>({
    siteName: 'GrowTrack',
    siteDescription: 'Transform your business with smart analytics',
    contactEmail: 'contact@growtrack.com',
    maintenanceMode: false
  });
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams getting started with analytics",
      features: [
        "Up to 5 team members",
        "10,000 data points/month",
        "Basic dashboards",
        "Email support",
        "Standard integrations",
        "Mobile app access"
      ],
      buttonText: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Advanced features for growing businesses",
      features: [
        "Up to 25 team members",
        "100,000 data points/month",
        "Advanced dashboards",
        "Priority support",
        "All integrations",
        "Custom reports",
        "API access",
        "Advanced analytics"
      ],
      buttonText: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "Full-scale solution for large organizations",
      features: [
        "Unlimited team members",
        "Unlimited data points",
        "Custom dashboards",
        "24/7 phone support",
        "White-label solution",
        "Advanced security",
        "Custom integrations",
        "Dedicated account manager",
        "On-premise deployment",
        "SLA guarantee"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        if (!session?.user) {
          navigate('/auth');
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (!session?.user) {
        navigate('/auth');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (user) {
      fetchProfiles();
      fetchActiveUsers();
    }
  }, [user]);

  const fetchProfiles = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProfiles(data || []);
    } catch (error) {
      console.error('Error fetching profiles:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchActiveUsers = async () => {
    // Simulate active users count (in a real app, you'd track this properly)
    setActiveUsersCount(Math.floor(Math.random() * 50) + 10);
  };

  const updateUserRole = async (userId: string, newRole: string) => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ role: newRole })
        .eq('id', userId);

      if (error) throw error;
      fetchProfiles();
    } catch (error) {
      console.error('Error updating user role:', error);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const saveSiteSettings = () => {
    // In a real app, you'd save these to a database
    console.log('Site settings saved:', siteSettings);
  };

  const handleSavePricing = (updatedPlans: PricingPlan[]) => {
    setPricingPlans(updatedPlans);
    // In a real app, you'd save these to a database
    console.log('Pricing plans updated:', updatedPlans);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-hero-gradient flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-foreground/80 mb-4">Please sign in to access the admin dashboard</p>
          <Button onClick={() => navigate('/auth')} variant="hero">
            Sign In
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="shrink-0"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Home
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">GT</span>
                </div>
                <span className="text-xl font-bold">Admin Dashboard</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
              <div className="flex items-center space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback>
                    {user.email?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-foreground/80 truncate">{user.email}</span>
              </div>
              <Button onClick={handleSignOut} variant="outline" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 lg:py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="w-4 h-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{profiles.length}</div>
              <p className="text-xs text-muted-foreground">
                +2 from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Activity className="w-4 h-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeUsersCount}</div>
              <p className="text-xs text-muted-foreground">
                Currently online
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Admin Users</CardTitle>
              <Shield className="w-4 h-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {profiles.filter(p => p.role === 'admin').length}
              </div>
              <p className="text-xs text-muted-foreground">
                System administrators
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="w-4 h-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,847</div>
              <p className="text-xs text-muted-foreground">
                +15% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage user accounts and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  {loading ? (
                    <div className="p-8 text-center">
                      <p className="text-foreground/70">Loading users...</p>
                    </div>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>User</TableHead>
                          <TableHead className="hidden sm:table-cell">Username</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead className="hidden md:table-cell">Created</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {profiles.map((profile) => (
                          <TableRow key={profile.id}>
                            <TableCell>
                              <div className="flex items-center space-x-3">
                                <Avatar className="w-8 h-8">
                                  <AvatarImage src={profile.avatar_url || undefined} />
                                  <AvatarFallback>
                                    {profile.full_name?.charAt(0) || profile.username?.charAt(0) || 'U'}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="min-w-0">
                                  <p className="font-medium truncate">{profile.full_name || 'No name'}</p>
                                  <p className="text-xs text-foreground/70 truncate">{profile.id.slice(0, 8)}...</p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              {profile.username || 'No username'}
                            </TableCell>
                            <TableCell>
                              <Select
                                value={profile.role || 'user'}
                                onValueChange={(value) => updateUserRole(profile.id, value)}
                              >
                                <SelectTrigger className="w-20 sm:w-24">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="user">User</SelectItem>
                                  <SelectItem value="admin">Admin</SelectItem>
                                </SelectContent>
                              </Select>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              {profile.created_at 
                                ? new Date(profile.created_at).toLocaleDateString()
                                : 'Unknown'
                              }
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-6">
            <PricingManager plans={pricingPlans} onSavePlans={handleSavePricing} />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Site Settings</CardTitle>
                <CardDescription>Configure website parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input
                    id="siteName"
                    value={siteSettings.siteName}
                    onChange={(e) => setSiteSettings({...siteSettings, siteName: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="siteDescription">Description</Label>
                  <Input
                    id="siteDescription"
                    value={siteSettings.siteDescription}
                    onChange={(e) => setSiteSettings({...siteSettings, siteDescription: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={siteSettings.contactEmail}
                    onChange={(e) => setSiteSettings({...siteSettings, contactEmail: e.target.value})}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="maintenance"
                    checked={siteSettings.maintenanceMode}
                    onChange={(e) => setSiteSettings({...siteSettings, maintenanceMode: e.target.checked})}
                    className="w-4 h-4"
                  />
                  <Label htmlFor="maintenance">Maintenance Mode</Label>
                </div>
                <Button onClick={saveSiteSettings} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Growth</CardTitle>
                  <CardDescription>Monthly user registration trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-32 flex items-center justify-center text-foreground/70">
                    Chart placeholder - User growth over time
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Analytics</CardTitle>
                  <CardDescription>Monthly revenue and subscription metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-32 flex items-center justify-center text-foreground/70">
                    Chart placeholder - Revenue analytics
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
