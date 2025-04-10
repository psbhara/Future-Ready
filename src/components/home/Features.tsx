
import { 
  Sparkles, 
  FileUp, 
  BarChart4, 
  Briefcase, 
  GraduationCap, 
  MessageSquare, 
  ShieldCheck 
} from "lucide-react";

const features = [
  {
    icon: <Sparkles className="h-8 w-8 text-career-purple" />,
    title: "AI-Powered Analysis",
    description: "Our advanced AI analyzes your skills, experience, and preferences to provide personalized career guidance."
  },
  {
    icon: <FileUp className="h-8 w-8 text-career-purple" />,
    title: "Resume Enhancement",
    description: "Get actionable feedback to improve your resume and stand out to employers."
  },
  {
    icon: <BarChart4 className="h-8 w-8 text-career-purple" />,
    title: "Skills Assessment",
    description: "Identify your strengths and areas for improvement with our comprehensive skills analysis."
  },
  {
    icon: <Briefcase className="h-8 w-8 text-career-purple" />,
    title: "Job Matching",
    description: "Discover job opportunities that align with your skills, experience, and career goals."
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-career-purple" />,
    title: "Educational Pathways",
    description: "Find universities, courses, and scholarships that will help you achieve your career aspirations."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-career-purple" />,
    title: "Career Chatbot",
    description: "Get instant answers to your career questions from our AI-powered chatbot."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-career-purple" />,
    title: "Secure Document Storage",
    description: "Your resumes and academic records are stored securely with enterprise-grade encryption."
  }
];

const Features = () => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-career-purple">Platform Features</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover the tools and features that make Future-Ready Pathways the leading career guidance platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col p-6 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md hover:border-career-purple/30">
              <div className="mb-4 bg-career-softPurple/30 p-3 rounded-full w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
