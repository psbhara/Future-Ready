
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserCircle, Upload, LineChart, Briefcase, MessageCircle, FileText, Bell } from "lucide-react";

const steps = [
  {
    icon: <UserCircle className="h-8 w-8 text-career-purple" />,
    title: "Sign Up",
    description: "Register via Google, LinkedIn, or email to get started on your career journey.",
  },
  {
    icon: <Upload className="h-8 w-8 text-career-purple" />,
    title: "Upload Documents",
    description: "Upload your resume and academic records for AI analysis.",
  },
  {
    icon: <LineChart className="h-8 w-8 text-career-purple" />,
    title: "AI Analysis",
    description: "Complete a career quiz and get personalized insights based on your skills.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-career-purple" />,
    title: "Recommendations",
    description: "Receive AI-suggested jobs, courses, and scholarship opportunities.",
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-career-purple" />,
    title: "Expert Advice",
    description: "Consult with career experts and get resume feedback via our AI chatbot.",
  },
  {
    icon: <FileText className="h-8 w-8 text-career-purple" />,
    title: "Apply",
    description: "Submit applications to jobs and universities directly through our platform.",
  },
  {
    icon: <Bell className="h-8 w-8 text-career-purple" />,
    title: "Track Progress",
    description: "Monitor applications, receive notifications, and refine your career choices.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-career-purple">How It Works</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our platform guides you through a simple 7-step process to find and secure your ideal career path.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-200 hover:shadow-md hover:border-career-purple/30"
            >
              <div className="mb-4 bg-career-softPurple/30 p-3 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.description}</p>
              <div className="w-10 h-10 rounded-full bg-career-purple flex items-center justify-center text-white font-semibold mt-4">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center">
          <Link to="/signup">
            <Button size="lg" className="bg-career-purple hover:bg-career-lightPurple">
              Get Started Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
