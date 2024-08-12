import React, { useMemo, useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "2024-04-01", teamA: 50, teamB: 30 },
  { date: "2024-04-02", teamA: 60, teamB: 40 },
  { date: "2024-04-03", teamA: 55, teamB: 20 },
  { date: "2024-04-04", teamA: 70, teamB: 35 },
  { date: "2024-04-05", teamA: 65, teamB: 45 },
  { date: "2024-04-06", teamA: 80, teamB: 50 },
  // Add more data as needed
];

const chartConfig = {
  teamA: {
    label: "Team A",
    color: "hsl(200, 70%, 50%)", // Light blue color
  },
  teamB: {
    label: "Team B",
    color: "hsl(210, 80%, 60%)", // Darker blue color
  },
};

const TeamCharts = () => {
  const [activeChart, setActiveChart] = useState("teamA");

  const total = useMemo(() => ({
    teamA: chartData.reduce((acc, curr) => acc + curr.teamA, 0),
    teamB: chartData.reduce((acc, curr) => acc + curr.teamB, 0),
  }), []);

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Team Progress</CardTitle>
          <CardDescription>
            Showing progress of each team over time
          </CardDescription>
        </div>
        <div className="flex">
          {["teamA", "teamB"].map((key) => {
            const chart = key;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[chart].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-50%"
        >
          <LineChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="progress"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={chartConfig[activeChart].color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default TeamCharts
