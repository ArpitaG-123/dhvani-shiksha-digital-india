
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useStudent } from '@/contexts/StudentContext';
import { stateBoards, grades, schoolTypes } from '@/data/statesData';

const OnboardingForm: React.FC = () => {
  const { setStudent } = useStudent();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    schoolType: '',
    state: '',
    grade: ''
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    if (currentStep === 0 && !formData.name) {
      toast({
        title: "Name Required",
        description: "Please enter your name to continue.",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep === 1 && !formData.schoolType) {
      toast({
        title: "School Type Required",
        description: "Please select your school type to continue.",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep === 2 && !formData.state) {
      toast({
        title: "State Board Required",
        description: "Please select your state board to continue.",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep === 3 && !formData.grade) {
      toast({
        title: "Grade Required",
        description: "Please select your grade to continue.",
        variant: "destructive",
      });
      return;
    }

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      // In a real app, you might want to send this data to a server
      // For now, we'll just set it in our context
      setStudent({
        name: formData.name,
        schoolType: formData.schoolType,
        state: formData.state,
        grade: formData.grade
      });
      
      toast({
        title: "Welcome to EduDhvani!",
        description: `Your profile has been set up successfully, ${formData.name}!`,
      });
      
      // Redirect to subjects page
      navigate('/subjects');
    } catch (error) {
      console.error("Error during onboarding:", error);
      toast({
        title: "Something went wrong",
        description: "We couldn't complete your onboarding. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch(currentStep) {
      case 0:
        return (
          <>
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Welcome to EduDhvani!</CardTitle>
              <CardDescription>Let's start by getting to know you better</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">What's your name?</Label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </CardContent>
          </>
        );
      case 1:
        return (
          <>
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Your School</CardTitle>
              <CardDescription>Tell us about your school type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="schoolType">School Type</Label>
                  <Select 
                    value={formData.schoolType} 
                    onValueChange={(value) => handleSelectChange('schoolType', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your school type" />
                    </SelectTrigger>
                    <SelectContent>
                      {schoolTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </>
        );
      case 2:
        return (
          <>
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Your State Board</CardTitle>
              <CardDescription>Select your state educational board</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="state">State Board</Label>
                  <Select 
                    value={formData.state} 
                    onValueChange={(value) => handleSelectChange('state', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your state board" />
                    </SelectTrigger>
                    <SelectContent>
                      {stateBoards.map((board) => (
                        <SelectItem key={board.id} value={board.id}>{board.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </>
        );
      case 3:
        return (
          <>
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Your Grade</CardTitle>
              <CardDescription>Select your current grade</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="grade">Grade</Label>
                  <Select 
                    value={formData.grade} 
                    onValueChange={(value) => handleSelectChange('grade', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your grade" />
                    </SelectTrigger>
                    <SelectContent>
                      {grades.map((grade) => (
                        <SelectItem key={grade} value={grade}>Grade {grade}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="border-2 border-eduBlue/20 shadow-lg animate-fade-in">
        {renderStep()}
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0 || isLoading}
          >
            Back
          </Button>
          <Button
            className="bg-gradient-to-r from-eduBlue to-eduPurple hover:opacity-90"
            onClick={nextStep}
            disabled={isLoading}
          >
            {currentStep === 3 ? 'Submit' : 'Next'}
          </Button>
        </CardFooter>
      </Card>
      <div className="mt-6 flex justify-center">
        <div className="flex space-x-2">
          {[0, 1, 2, 3].map((step) => (
            <div
              key={step}
              className={`h-2 w-10 rounded-full ${
                step === currentStep
                  ? 'bg-gradient-to-r from-eduBlue to-eduPurple'
                  : step < currentStep
                  ? 'bg-gray-400'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnboardingForm;
