
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-career opacity-10 -z-10"></div>
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-career-purple">
                Your Future, <span className="text-career-blue">AI-Powered</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover your perfect career path and educational opportunities with our AI-powered platform. Upload your resume, take our assessment, and get personalized recommendations.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link to="/signup">
                <Button size="lg" className="bg-career-purple hover:bg-career-lightPurple">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
          <div className="mx-auto relative w-full max-w-[500px]">
            <div className="absolute -top-10 -right-10 h-72 w-72 bg-career-softPurple rounded-full blur-3xl -z-10 opacity-70"></div>
            <div className="absolute -bottom-10 -left-10 h-72 w-72 bg-blue-100 rounded-full blur-3xl -z-10 opacity-70"></div>
            <div className="p-4 bg-white rounded-lg shadow-xl border border-gray-100 relative z-10">
              <div className="rounded-md overflow-hidden aspect-video relative">
                <img 
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop" 
                  alt="Student working on career planning" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Sophie Williams</h3>
                  <p className="text-sm text-gray-500">Computer Science Student</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>AI Analysis</span>
                    <span className="text-career-purple font-medium">95% Match</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-career w-[95%] rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-career-softPurple/30 p-2 rounded-md text-center">
                    <p className="font-medium text-career-purple">UX Designer</p>
                    <p className="text-xs text-gray-500">Top Career Match</p>
                  </div>
                  <div className="bg-blue-100 p-2 rounded-md text-center">
                    <p className="font-medium text-career-blue">Stanford HCI</p>
                    <p className="text-xs text-gray-500">Program Match</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
