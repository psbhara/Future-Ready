
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Skill {
  name: string;
  value: number;
  fullMark: number;
}

interface SkillsChartProps {
  skills: Skill[];
}

const SkillsChart = ({ skills }: SkillsChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-career-purple">Skills Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skills}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar
                name="Your Skills"
                dataKey="value"
                stroke="#6E59A5"
                fill="#6E59A5"
                fillOpacity={0.6}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsChart;
