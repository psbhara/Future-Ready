
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HowItWorksPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      id: 1,
      title: "Sign Up",
      description: "Create an account using your email, Google, or LinkedIn credentials.",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Upload Documents",
      description: "Upload your resume and academic records for AI analysis.",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "AI Analysis & Career Quiz",
      description: "Our AI analyzes your documents and you complete a career assessment to determine your strengths and interests.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Receive Recommendations",
      description: "Based on your profile, our AI suggests jobs, university programs, and scholarships that match your goals.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Consult Experts & AI",
      description: "Get career advice, resume feedback, and interview tips from our experts and AI chatbot.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Apply for Opportunities",
      description: "Apply to jobs and universities directly through our platform.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "Track Progress",
      description: "Monitor your applications, receive notifications, and refine your career choices.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-career-purple mb-4">How It Works</h1>
          <p className="text-gray-500 md:text-xl">
            Our platform guides you through a simple 7-step process to find and secure your ideal career path.
          </p>
        </div>
        
        <div className="mb-16 overflow-x-auto">
          <div className="flex justify-between min-w-max py-8 px-4">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className={`step-item ${activeStep === step.id ? 'active' : ''} ${activeStep > step.id ? 'complete' : ''}`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className="step">
                  {activeStep > step.id ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  ) : (
                    step.id
                  )}
                </div>
                <p className="text-sm font-medium mt-2">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
        
        {steps.map((step) => (
          <div key={step.id} className={activeStep === step.id ? "block" : "hidden"}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-4">
                  <div className="inline-block rounded-full bg-career-softPurple px-3 py-1 text-sm font-medium text-career-purple">
                    Step {step.id} of 7
                  </div>
                  <h2 className="text-3xl font-bold text-career-purple">{step.title}</h2>
                  <p className="text-gray-500 text-lg">{step.description}</p>
                  
                  <div className="pt-4 space-y-4">
                    {step.id === 1 && (
                      <div className="space-y-2">
                        <h3 className="font-medium">Sign up methods:</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-500">
                          <li>Email and password</li>
                          <li>Google account</li>
                          <li>LinkedIn profile</li>
                        </ul>
                      </div>
                    )}
                    
                    {step.id === 2 && (
                      <div className="space-y-2">
                        <h3 className="font-medium">Supported document types:</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-500">
                          <li>Resume/CV (PDF, DOCX)</li>
                          <li>Academic transcripts</li>
                          <li>Certification documents</li>
                        </ul>
                      </div>
                    )}
                    
                    {step.id === 3 && (
                      <div className="space-y-2">
                        <h3 className="font-medium">What the AI analyzes:</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-500">
                          <li>Skills and competencies</li>
                          <li>Work experience and achievements</li>
                          <li>Educational background</li>
                          <li>Career interests and preferences</li>
                        </ul>
                      </div>
                    )}
                    
                    {step.id === 4 && (
                      <div className="space-y-2">
                        <h3 className="font-medium">Recommendation types:</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-500">
                          <li>Career paths with growth potential</li>
                          <li>Job openings matching your profile</li>
                          <li>University programs and courses</li>
                          <li>Scholarships and financial aid options</li>
                        </ul>
                      </div>
                    )}
                    
                    {step.id === 5 && (
                      <div className="space-y-2">
                        <h3 className="font-medium">Expert guidance includes:</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-500">
                          <li>Resume and cover letter feedback</li>
                          <li>Interview preparation tips</li>
                          <li>Career transition strategies</li>
                          <li>Skill development recommendations</li>
                        </ul>
                      </div>
                    )}
                    
                    {step.id === 6 && (
                      <div className="space-y-2">
                        <h3 className="font-medium">Application features:</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-500">
                          <li>One-click job applications</li>
                          <li>University application tracking</li>
                          <li>Document submission management</li>
                          <li>Application deadline reminders</li>
                        </ul>
                      </div>
                    )}
                    
                    {step.id === 7 && (
                      <div className="space-y-2">
                        <h3 className="font-medium">Progress tracking includes:</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-500">
                          <li>Application status updates</li>
                          <li>Interview scheduling</li>
                          <li>Offer management</li>
                          <li>Career progression analytics</li>
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex space-x-4 pt-6">
                    <Button
                      variant="outline"
                      onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                      disabled={activeStep === 1}
                    >
                      Previous Step
                    </Button>
                    
                    {activeStep < 7 ? (
                      <Button
                        className="bg-career-purple hover:bg-career-lightPurple"
                        onClick={() => setActiveStep(Math.min(7, activeStep + 1))}
                      >
                        Next Step
                      </Button>
                    ) : (
                      <Link to="/signup">
                        <Button className="bg-career-purple hover:bg-career-lightPurple">
                          Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksPage;
