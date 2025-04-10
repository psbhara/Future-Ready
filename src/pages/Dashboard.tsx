
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, LineChart, Briefcase, GraduationCap, MessageSquare } from "lucide-react";
import JobCard from "@/components/recommendations/JobCard";
import UniversityCard from "@/components/recommendations/UniversityCard";
import SkillsChart from "@/components/career/SkillsChart";
import ResumeUpload from "@/components/resume/ResumeUpload";
import CareerPathTimeline from "@/components/career/CareerPathTimeline";
import AIChat from "@/components/chatbot/AIChat";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Sample data for skills chart
  const skills = [
    { name: "Technical", value: 85, fullMark: 100 },
    { name: "Communication", value: 75, fullMark: 100 },
    { name: "Leadership", value: 65, fullMark: 100 },
    { name: "Problem Solving", value: 90, fullMark: 100 },
    { name: "Creativity", value: 80, fullMark: 100 },
    { name: "Teamwork", value: 85, fullMark: 100 },
  ];

  // Sample data for career path timeline
  const timelineItems = [
    {
      title: "Junior Web Developer",
      description: "Build and maintain websites, collaborate with design team, develop front-end components.",
      yearsExperience: 0,
      salary: "$65,000 - $80,000"
    },
    {
      title: "Web Developer",
      description: "Create complex web applications, implement responsive designs, work with backend systems.",
      yearsExperience: 2,
      salary: "$80,000 - $100,000"
    },
    {
      title: "Senior Web Developer",
      description: "Lead development teams, architect solutions, mentor junior developers, implement best practices.",
      yearsExperience: 5,
      salary: "$100,000 - $130,000"
    },
    {
      title: "Lead Developer / Tech Lead",
      description: "Oversee technical direction, make architectural decisions, manage development processes.",
      yearsExperience: 8,
      salary: "$130,000 - $160,000"
    }
  ];

  // Sample job recommendations
  const jobRecommendations = [
    {
      title: "Frontend Developer",
      company: "TechNova Inc.",
      location: "San Francisco, CA (Remote)",
      salary: "$95,000 - $120,000",
      type: "Full-time",
      match: 95,
      posted: "2 days ago",
      logo: "https://logo.clearbit.com/google.com",
      skills: ["React", "TypeScript", "CSS", "UI/UX"]
    },
    {
      title: "UX/UI Designer",
      company: "DesignHub",
      location: "New York, NY",
      salary: "$85,000 - $110,000",
      type: "Full-time",
      match: 88,
      posted: "1 week ago",
      logo: "https://logo.clearbit.com/apple.com",
      skills: ["Figma", "User Research", "Prototyping", "UI Design"]
    },
    {
      title: "Full Stack Developer",
      company: "SoftSolutions",
      location: "Austin, TX (Hybrid)",
      salary: "$100,000 - $130,000",
      type: "Full-time",
      match: 85,
      posted: "3 days ago",
      logo: "https://logo.clearbit.com/microsoft.com",
      skills: ["JavaScript", "Node.js", "React", "MongoDB"]
    },
  ];

  // Sample university recommendations
  const universityRecommendations = [
    {
      name: "Stanford University",
      program: "Master's in Computer Science",
      location: "Stanford, CA",
      duration: "2 years",
      tuition: "$58,000/year",
      match: 92,
      deadline: "Jan 15, 2026",
      logo: "https://logo.clearbit.com/stanford.edu",
      highlights: ["AI Specialization", "Research Opportunities", "Industry Connections"]
    },
    {
      name: "MIT",
      program: "Master's in Human-Computer Interaction",
      location: "Cambridge, MA",
      duration: "2 years",
      tuition: "$55,000/year",
      match: 89,
      deadline: "Dec 15, 2025",
      logo: "https://logo.clearbit.com/mit.edu",
      highlights: ["Design Focus", "Innovation Lab", "Industry Projects"]
    },
    {
      name: "UC Berkeley",
      program: "Master's in Data Science",
      location: "Berkeley, CA",
      duration: "1.5 years",
      tuition: "$42,000/year",
      match: 85,
      deadline: "Feb 1, 2026",
      logo: "https://logo.clearbit.com/berkeley.edu",
      highlights: ["Analytics", "Machine Learning", "Big Data"]
    },
  ];

  return (
    <div className="min-h-screen py-10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-career-purple">My Dashboard</h1>
            <p className="text-gray-500">Track your career journey and explore opportunities</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <Link to="/profile">
              <Button variant="outline">My Profile</Button>
            </Link>
            <Link to="/settings">
              <Button className="bg-career-purple hover:bg-career-lightPurple">Settings</Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Upload className="h-5 w-5 text-career-purple" />
                Documents
              </CardTitle>
              <CardDescription>Upload and manage your documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Resume</span>
                  <span className="text-xs text-gray-500">Needs update</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 w-[40%] rounded-full"></div>
                </div>
              </div>
              <Link to="/upload" className="block mt-4">
                <Button className="w-full" variant="outline">
                  Update Resume
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <LineChart className="h-5 w-5 text-career-purple" />
                Skills Assessment
              </CardTitle>
              <CardDescription>Your skills analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Completion</span>
                  <span className="text-xs text-gray-500">75% complete</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-career-purple w-[75%] rounded-full"></div>
                </div>
              </div>
              <Link to="/skills-assessment" className="block mt-4">
                <Button className="w-full" variant="outline">
                  Complete Assessment
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-career-purple" />
                Career Assistant
              </CardTitle>
              <CardDescription>Get career advice and guidance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm">Our AI assistant can help with your career questions</p>
              </div>
              <Link to="/chat" className="block mt-4">
                <Button className="w-full bg-career-purple hover:bg-career-lightPurple">
                  Chat Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="recommendations" className="mb-10">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-4xl mx-auto mb-6">
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="profile">Career Profile</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="assistant">AI Assistant</TabsTrigger>
          </TabsList>
          
          <TabsContent value="recommendations">
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl text-career-purple flex items-center gap-2">
                      <Briefcase className="h-5 w-5" /> Job Recommendations
                    </CardTitle>
                    <Link to="/jobs">
                      <Button variant="link" className="text-career-purple">
                        View All <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <CardDescription>Based on your profile and skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {jobRecommendations.map((job, index) => (
                      <JobCard key={index} {...job} />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl text-career-purple flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" /> University Programs
                    </CardTitle>
                    <Link to="/universities">
                      <Button variant="link" className="text-career-purple">
                        View All <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <CardDescription>Educational opportunities matched to your goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {universityRecommendations.map((university, index) => (
                      <UniversityCard key={index} {...university} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="profile">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillsChart skills={skills} />
              <CareerPathTimeline path="Web Development" timelineItems={timelineItems} />
            </div>
          </TabsContent>
          
          <TabsContent value="documents">
            <div className="max-w-3xl mx-auto">
              <ResumeUpload />
            </div>
          </TabsContent>
          
          <TabsContent value="assistant">
            <AIChat />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
