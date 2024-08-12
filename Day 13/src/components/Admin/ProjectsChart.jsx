import React from 'react'

import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const sprintData = [
  { project: "Project 1", sprints: 10, fill: "var(--color-project1)" },
  { project: "Project 2", sprints: 15, fill: "var(--color-project2)" },
  { project: "Project 3", sprints: 20, fill: "var(--color-project3)" },
  { project: "Project 4", sprints: 12, fill: "var(--color-project4)" },
  { project: "Project 5", sprints: 8, fill: "var(--color-project5)" },
]

const projectData = [
  { project: "Project 1", projects: 30, fill: "var(--color-project1)" },
  { project: "Project 2", projects: 40, fill: "var(--color-project2)" },
  { project: "Project 3", projects: 25, fill: "var(--color-project3)" },
  { project: "Project 4", projects: 35, fill: "var(--color-project4)" },
  { project: "Project 5", projects: 20, fill: "var(--color-project5)" },
]

const chartConfig = {
  projects: {
    label: "Projects",
  },
  sprints: {
    label: "Sprints",
  },
  project1: {
    label: "Project 1",
    color: "hsl(var(--blue-500))",
  },
  project2: {
    label: "Project 2",
    color: "hsl(var(--blue-400))",
  },
  project3: {
    label: "Project 3",
    color: "hsl(var(--blue-300))",
  },
  project4: {
    label: "Project 4",
    color: "hsl(var(--blue-200))",
  },
  project5: {
    label: "Project 5",
    color: "hsl(var(--blue-100))",
  },
}

const ProjectsChart = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Project and Sprint Overview</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelKey="projects"
                  nameKey="project"
                  indicator="line"
                />
              }
            />
            <Pie data={projectData} dataKey="projects" outerRadius={60} />
            <Pie
              data={sprintData}
              dataKey="sprints"
              innerRadius={70}
              outerRadius={90}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing total projects and sprints for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

export default ProjectsChart
