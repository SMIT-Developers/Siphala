import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  YAxis,
    Area,
    Bar,
  ScatterChart,
  ZAxis,
  Scatter,


} from "recharts";
import {userData, data01,data02} from "../../dummyData";

export default function Chart({ title, data, dataKey, grid }) {

  

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <ScatterChart width={730} height={250}
                      margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" name="Marks" unit="marks" />
          <YAxis abel={{ value: "subject" }} type="string" dataKey="y" name="sujects" unit="" />
          {/*<ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" />*/}
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="A school" data={data01} fill="#8884d8" />
          {/*<Scatter name="B school" data={data02} fill="#82ca9d" />*/}
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
