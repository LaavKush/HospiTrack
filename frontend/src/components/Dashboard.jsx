import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import { Card, CardContent } from "../components/ui/card";
const data = [
  { name: "Jan", AQI: 50, Hygiene: 80, Complaints: 20 },
  { name: "Feb", AQI: 60, Hygiene: 75, Complaints: 25 },
  { name: "Mar", AQI: 70, Hygiene: 70, Complaints: 30 },
];

const Dashboard = () => {
  return (
    <div className="p-6 grid grid-cols-2 gap-6">
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">Air Quality & Hygiene</h2>
          <LineChart width={400} height={250} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="AQI" stroke="#8884d8" />
            <Line type="monotone" dataKey="Hygiene" stroke="#82ca9d" />
          </LineChart>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">Complaints Overview</h2>
          <BarChart width={400} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Complaints" fill="#ff7300" />
          </BarChart>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
