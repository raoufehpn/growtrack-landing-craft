
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Save, Edit, X, Plus, Trash2 } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  popular: boolean;
}

interface PricingManagerProps {
  plans: PricingPlan[];
  onSavePlans: (plans: PricingPlan[]) => void;
}

const PricingManager: React.FC<PricingManagerProps> = ({ plans, onSavePlans }) => {
  const [editingPlans, setEditingPlans] = useState<PricingPlan[]>(plans);
  const [isEditing, setIsEditing] = useState(false);

  const updatePlan = (index: number, field: keyof PricingPlan, value: any) => {
    const updated = [...editingPlans];
    updated[index] = { ...updated[index], [field]: value };
    setEditingPlans(updated);
  };

  const addFeature = (planIndex: number) => {
    const updated = [...editingPlans];
    updated[planIndex].features.push('New feature');
    setEditingPlans(updated);
  };

  const removeFeature = (planIndex: number, featureIndex: number) => {
    const updated = [...editingPlans];
    updated[planIndex].features.splice(featureIndex, 1);
    setEditingPlans(updated);
  };

  const updateFeature = (planIndex: number, featureIndex: number, value: string) => {
    const updated = [...editingPlans];
    updated[planIndex].features[featureIndex] = value;
    setEditingPlans(updated);
  };

  const addPlan = () => {
    const newPlan: PricingPlan = {
      name: 'New Plan',
      price: '$0',
      period: '/month',
      description: 'Plan description',
      features: ['Feature 1'],
      buttonText: 'Get Started',
      popular: false
    };
    setEditingPlans([...editingPlans, newPlan]);
  };

  const removePlan = (index: number) => {
    const updated = [...editingPlans];
    updated.splice(index, 1);
    setEditingPlans(updated);
  };

  const handleSave = () => {
    onSavePlans(editingPlans);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditingPlans(plans);
    setIsEditing(false);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Pricing Management</CardTitle>
            <CardDescription>Manage pricing plans and features</CardDescription>
          </div>
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)} variant="outline">
              <Edit className="w-4 h-4 mr-2" />
              Edit Pricing
            </Button>
          ) : (
            <div className="flex space-x-2">
              <Button onClick={handleSave} variant="default">
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button onClick={handleCancel} variant="outline">
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Edit Plans</h3>
              <Button onClick={addPlan} variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Plan
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {editingPlans.map((plan, planIndex) => (
                <Card key={planIndex} className="relative">
                  <Button
                    onClick={() => removePlan(planIndex)}
                    variant="destructive"
                    size="sm"
                    className="absolute -top-2 -right-2 w-6 h-6 p-0"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                  
                  <CardContent className="p-4 space-y-4">
                    <div>
                      <Label htmlFor={`name-${planIndex}`}>Plan Name</Label>
                      <Input
                        id={`name-${planIndex}`}
                        value={plan.name}
                        onChange={(e) => updatePlan(planIndex, 'name', e.target.value)}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label htmlFor={`price-${planIndex}`}>Price</Label>
                        <Input
                          id={`price-${planIndex}`}
                          value={plan.price}
                          onChange={(e) => updatePlan(planIndex, 'price', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`period-${planIndex}`}>Period</Label>
                        <Input
                          id={`period-${planIndex}`}
                          value={plan.period}
                          onChange={(e) => updatePlan(planIndex, 'period', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor={`description-${planIndex}`}>Description</Label>
                      <Textarea
                        id={`description-${planIndex}`}
                        value={plan.description}
                        onChange={(e) => updatePlan(planIndex, 'description', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor={`button-${planIndex}`}>Button Text</Label>
                      <Input
                        id={`button-${planIndex}`}
                        value={plan.buttonText}
                        onChange={(e) => updatePlan(planIndex, 'buttonText', e.target.value)}
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`popular-${planIndex}`}
                        checked={plan.popular}
                        onChange={(e) => updatePlan(planIndex, 'popular', e.target.checked)}
                        className="w-4 h-4"
                      />
                      <Label htmlFor={`popular-${planIndex}`}>Mark as Popular</Label>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label>Features</Label>
                        <Button
                          onClick={() => addFeature(planIndex)}
                          variant="outline"
                          size="sm"
                        >
                          <Plus className="w-3 h-3 mr-1" />
                          Add
                        </Button>
                      </div>
                      <div className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <Input
                              value={feature}
                              onChange={(e) => updateFeature(planIndex, featureIndex, e.target.value)}
                              className="flex-1"
                            />
                            <Button
                              onClick={() => removeFeature(planIndex, featureIndex)}
                              variant="outline"
                              size="sm"
                            >
                              <X className="w-3 h-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {plans.map((plan, index) => (
              <Card key={index} className={plan.popular ? 'border-accent' : ''}>
                <CardContent className="p-4">
                  <div className="text-center">
                    <h3 className="font-semibold text-lg">{plan.name}</h3>
                    <div className="text-2xl font-bold">{plan.price}<span className="text-sm text-foreground/70">{plan.period}</span></div>
                    <p className="text-sm text-foreground/70 mt-2">{plan.description}</p>
                    {plan.popular && (
                      <span className="inline-block bg-accent text-white px-2 py-1 rounded text-xs mt-2">
                        Popular
                      </span>
                    )}
                    <div className="mt-4 space-y-1">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-sm text-left">• {feature}</div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PricingManager;
