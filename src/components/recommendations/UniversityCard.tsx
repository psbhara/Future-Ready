
import { GraduationCap, MapPin, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface UniversityCardProps {
  name: string;
  program: string;
  location: string;
  duration: string;
  tuition: string;
  match: number;
  deadline: string;
  logo: string;
  highlights: string[];
}

const UniversityCard = ({
  name,
  program,
  location,
  duration,
  tuition,
  match,
  deadline,
  logo,
  highlights,
}: UniversityCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md hover:border-career-purple/30">
      <CardContent className="p-0">
        <div className="p-4 flex gap-4">
          <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
            <img src={logo} alt={name} className="w-full h-full object-contain p-1" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg truncate">{program}</h3>
                <p className="text-sm text-gray-500">{name}</p>
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
                <GraduationCap className="h-4 w-4" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>Deadline: {deadline}</span>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-sm font-medium">Tuition: {tuition}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {highlights.map((highlight, index) => (
                <Badge key={index} variant="secondary" className="bg-gray-100">
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-4 border-t">
        <Button variant="outline" size="sm">
          <Award className="h-4 w-4 mr-2" />
          Scholarships
        </Button>
        <Button className="bg-career-purple hover:bg-career-lightPurple" size="sm">
          View Program
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UniversityCard;
