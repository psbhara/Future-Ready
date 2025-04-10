
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  title: string;
  description: string;
  yearsExperience: number;
  salary: string;
}

interface CareerPathTimelineProps {
  path: string;
  timelineItems: TimelineItem[];
}

const CareerPathTimeline = ({ path, timelineItems }: CareerPathTimelineProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-career-purple">Career Path: {path}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative border-l-2 border-career-purple pl-6 ml-6 space-y-10">
          {timelineItems.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[1.875rem] top-1 h-4 w-4 rounded-full bg-career-purple"></div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                <div className="flex justify-between mt-4 text-sm">
                  <span>
                    <span className="font-semibold">Years Experience:</span> {item.yearsExperience}
                  </span>
                  <span>
                    <span className="font-semibold">Typical Salary:</span> {item.salary}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CareerPathTimeline;
