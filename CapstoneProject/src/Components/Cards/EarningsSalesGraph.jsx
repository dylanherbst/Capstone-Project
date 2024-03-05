import { ResponsiveBar } from "@nivo/bar";
import { Card } from "@mui/material";

const data = [
  {
    month: "January",
    Orders: 1000,
    Earnings: 1200,
  },
  {
    month: "February",
    Orders: 1200,
    Earnings: 1500,
  },
  // Add more months as needed
  {
    month: "March",
    Orders: 1500,
    Earnings: 1700,
  },
  {
    month: "April",
    Orders: 1400,
    Earnings: 1500,
  },
  // Add more months as needed
];

const EarningsSalesGraph = () => (
  <Card
    sx={{ background: "white", borderRadius: "10px", marginBottom: "20px" }}
  >
    <div style={{ height: 500 }}>
      <ResponsiveBar
        data={data}
        keys={["Orders", "Earnings"]}
        indexBy="month"
        groupMode="grouped"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={["#00B9E8", "#40E0D0"]} // Dark blue and turquoise
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Month",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Amount",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  </Card>
);

export default EarningsSalesGraph;
