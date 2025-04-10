
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="bg-career-softPurple rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-career-purple">
                  Ready to Find Your Path?
                </h2>
                <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of students and professionals who have discovered their ideal career path with Future-Ready Pathways.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-career-blue"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span className="text-gray-700">Personalized career recommendations</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-career-blue"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span className="text-gray-700">AI-powered skills analysis</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-career-blue"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span className="text-gray-700">Access to expert career advisors</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link to="/signup">
                  <Button size="lg" className="bg-career-purple hover:bg-career-lightPurple">
                    Create Free Account <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-lg">
              <div className="space-y-4 w-full max-w-md">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-center">Start Your Journey Today</h3>
                  <p className="text-sm text-center text-gray-500">It only takes a few minutes to get started</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-career-purple text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Create an account</h4>
                      <p className="text-sm text-gray-500">Sign up with your email or social accounts</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-career-purple text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Upload your resume</h4>
                      <p className="text-sm text-gray-500">Let our AI analyze your experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-career-purple text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Get personalized recommendations</h4>
                      <p className="text-sm text-gray-500">Discover opportunities tailored to you</p>
                    </div>
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

export default CallToAction;
