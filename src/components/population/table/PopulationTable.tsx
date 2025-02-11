import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Population } from "../../../interfaces/poppulation.interface";

interface TableProps {
  populationData: Population[];
}

export const PopulationTable = ({ populationData }: TableProps) => {
  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={populationData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis
            domain={["dataMin", "dataMax"]}
            tickFormatter={(value) => (value / 1_000_000).toFixed(1) + "M"}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#00bcd4"
            name="Population"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
