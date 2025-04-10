
import { Star, Bookmark, MapPin, Briefcase, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  match: number;
  posted: string;
  logo: string;
  skills: string[];
}

const JobCard = ({
  title,
  company,
  location,
  salary,
  type,
  match,
  posted,
  logo,
  skills,
}: JobCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md hover:border-career-purple/30">
      <CardContent className="p-0">
        <div className="p-4 flex gap-4">
          <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
            <img src={logo} alt={company} className="w-full h-full object-contain p-1" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg truncate">{title}</h3>
                <p className="text-sm text-gray-500">{company}</p>
              </div>
              <Badge 
                className={`${
                  match >= 90 
                    ? "bg-green-500" 
                    : match >= 75 
                      ? "bg-career-purple" 
                      : "bg-career-blue"
                }`}
              >
                {match}% Match
              </Badge>
            </div>
            <div className="flex flex-wrap gap-y-1 gap-x-3 mt-2 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Briefcase className="h-4 w-4" />
                <span>{type}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{posted}</span>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-sm font-medium">Salary: {salary}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="bg-gray-100">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-4 border-t">
        <Button variant="outline" size="sm">
          <Bookmark className="h-4 w-4 mr-2" />
          Save
        </Button>
        <Button className="bg-career-purple hover:bg-career-lightPurple" size="sm">
          View Job
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
