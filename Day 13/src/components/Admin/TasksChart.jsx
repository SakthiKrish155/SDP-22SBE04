import React from 'react'
import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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

// Chart data for task completion
const chartData = [
    { month: "January", tasksCompleted: 186 },
    { month: "February", tasksCompleted: 305 },
    { month: "March", tasksCompleted: 237 },
    { month: "April", tasksCompleted: 73 },
    { month: "May", tasksCompleted: 209 },
    { month: "June", tasksCompleted: 214 },
]

// Chart configuration with updated blue color
const chartConfig = {
    tasksCompleted: {
        label: "Tasks Completed",
        color: "hsl(var(--blue-500))", // Updated to match the blue theme
    },
}

const TasksChart = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Task Completion Overview</CardTitle>
                    <CardDescription>Jan - June 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <LineChart
                            accessibilityLayer
                            data={chartData}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Line
                                dataKey="tasksCompleted"
                                type="natural"
                                stroke="var(--color-tasksCompleted)"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4 text-sm">
                    <div className="leading-none text-muted-foreground">
                        Showing the number of tasks completed for the last 6 months
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default TasksChart
