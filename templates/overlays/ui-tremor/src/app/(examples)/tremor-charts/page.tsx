import { Card } from "@/components/ui/card"
import { Title, Text, Grid, Flex } from "@tremor/react"
import { AreaChart, BarChart, LineChart, DonutChart, PieChart } from "@/components/ui/chart"

const areaData = [
  {
    date: "Jan 22",
    "Desktop": 186,
    "Mobile": 80,
  },
  {
    date: "Feb 22",
    "Desktop": 305,
    "Mobile": 200,
  },
  {
    date: "Mar 22",
    "Desktop": 237,
    "Mobile": 120,
  },
  {
    date: "Apr 22",
    "Desktop": 73,
    "Mobile": 190,
  },
  {
    date: "May 22",
    "Desktop": 209,
    "Mobile": 130,
  },
  {
    date: "Jun 22",
    "Desktop": 214,
    "Mobile": 140,
  },
]

const barData = [
  {
    name: "Amphibians",
    "Number of threatened species": 2488,
  },
  {
    name: "Birds",
    "Number of threatened species": 1445,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 743,
  },
  {
    name: "Ferns",
    "Number of threatened species": 281,
  },
  {
    name: "Arachnids",
    "Number of threatened species": 251,
  },
  {
    name: "Corals",
    "Number of threatened species": 232,
  },
  {
    name: "Algae",
    "Number of threatened species": 98,
  },
]

const lineData = [
  {
    date: "Jan 22",
    "Desktop": 186,
    "Mobile": 80,
  },
  {
    date: "Feb 22",
    "Desktop": 305,
    "Mobile": 200,
  },
  {
    date: "Mar 22",
    "Desktop": 237,
    "Mobile": 120,
  },
  {
    date: "Apr 22",
    "Desktop": 73,
    "Mobile": 190,
  },
  {
    date: "May 22",
    "Desktop": 209,
    "Mobile": 130,
  },
  {
    date: "Jun 22",
    "Desktop": 214,
    "Mobile": 140,
  },
]

const donutData = [
  {
    name: "Nike",
    sales: 9800,
  },
  {
    name: "Adidas",
    sales: 4567,
  },
  {
    name: "New Balance",
    sales: 3908,
  },
  {
    name: "Puma",
    sales: 2400,
  },
  {
    name: "Reebok",
    sales: 1908,
  },
]

const pieData = [
  {
    name: "Chrome",
    users: 186,
  },
  {
    name: "Safari",
    users: 80,
  },
  {
    name: "Firefox",
    users: 70,
  },
  {
    name: "Edge",
    users: 50,
  },
  {
    name: "Other",
    users: 30,
  },
]

export default function TremorChartsPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center">
        <Title className="text-4xl font-bold mb-4">Tremor Charts Gallery</Title>
        <Text className="text-lg text-gray-600">
          Comprehensive collection of chart components for data visualization
        </Text>
      </div>

      {/* Area Charts */}
      <div className="space-y-6">
        <Title className="text-2xl">Area Charts</Title>
        <Grid numItems={1} numItemsLg={2} className="gap-6">
          <Card>
            <Title>Website Traffic</Title>
            <Text>Desktop vs Mobile traffic over time</Text>
            <AreaChart
              className="mt-6"
              data={areaData}
              index="date"
              categories={["Desktop", "Mobile"]}
              colors={["blue", "green"]}
              yAxisWidth={60}
            />
          </Card>
          <Card>
            <Title>Revenue Growth</Title>
            <Text>Monthly revenue comparison</Text>
            <AreaChart
              className="mt-6"
              data={areaData}
              index="date"
              categories={["Desktop", "Mobile"]}
              colors={["purple", "pink"]}
              yAxisWidth={60}
            />
          </Card>
        </Grid>
      </div>

      {/* Bar Charts */}
      <div className="space-y-6">
        <Title className="text-2xl">Bar Charts</Title>
        <Grid numItems={1} numItemsLg={2} className="gap-6">
          <Card>
            <Title>Threatened Species</Title>
            <Text>Number of threatened species by category</Text>
            <BarChart
              className="mt-6"
              data={barData}
              index="name"
              categories={["Number of threatened species"]}
              colors={["blue"]}
              yAxisWidth={60}
            />
          </Card>
          <Card>
            <Title>Sales Performance</Title>
            <Text>Monthly sales by product category</Text>
            <BarChart
              className="mt-6"
              data={barData}
              index="name"
              categories={["Number of threatened species"]}
              colors={["green"]}
              yAxisWidth={60}
            />
          </Card>
        </Grid>
      </div>

      {/* Line Charts */}
      <div className="space-y-6">
        <Title className="text-2xl">Line Charts</Title>
        <Grid numItems={1} numItemsLg={2} className="gap-6">
          <Card>
            <Title>User Engagement</Title>
            <Text>Daily active users over time</Text>
            <LineChart
              className="mt-6"
              data={lineData}
              index="date"
              categories={["Desktop", "Mobile"]}
              colors={["blue", "green"]}
              yAxisWidth={60}
            />
          </Card>
          <Card>
            <Title>Conversion Rates</Title>
            <Text>Conversion rates by traffic source</Text>
            <LineChart
              className="mt-6"
              data={lineData}
              index="date"
              categories={["Desktop", "Mobile"]}
              colors={["red", "orange"]}
              yAxisWidth={60}
            />
          </Card>
        </Grid>
      </div>

      {/* Donut Charts */}
      <div className="space-y-6">
        <Title className="text-2xl">Donut Charts</Title>
        <Grid numItems={1} numItemsLg={2} className="gap-6">
          <Card>
            <Title>Brand Sales</Title>
            <Text>Sales distribution by brand</Text>
            <DonutChart
              className="mt-6"
              data={donutData}
              category="sales"
              index="name"
              colors={["blue", "green", "yellow", "red", "purple"]}
            />
          </Card>
          <Card>
            <Title>Market Share</Title>
            <Text>Market share by company</Text>
            <DonutChart
              className="mt-6"
              data={donutData}
              category="sales"
              index="name"
              colors={["pink", "indigo", "cyan", "lime", "amber"]}
            />
          </Card>
        </Grid>
      </div>

      {/* Pie Charts */}
      <div className="space-y-6">
        <Title className="text-2xl">Pie Charts</Title>
        <Grid numItems={1} numItemsLg={2} className="gap-6">
          <Card>
            <Title>Browser Usage</Title>
            <Text>Browser usage statistics</Text>
            <PieChart
              className="mt-6"
              data={pieData}
              category="users"
              index="name"
              colors={["blue", "green", "yellow", "red", "purple"]}
            />
          </Card>
          <Card>
            <Title>Device Types</Title>
            <Text>User device distribution</Text>
            <PieChart
              className="mt-6"
              data={pieData}
              category="users"
              index="name"
              colors={["pink", "indigo", "cyan", "lime", "amber"]}
            />
          </Card>
        </Grid>
      </div>

      {/* Chart Customization Examples */}
      <div className="space-y-6">
        <Title className="text-2xl">Customized Charts</Title>
        <Grid numItems={1} numItemsLg={2} className="gap-6">
          <Card>
            <Title>Custom Colors</Title>
            <Text>Charts with custom color schemes</Text>
            <AreaChart
              className="mt-6"
              data={areaData}
              index="date"
              categories={["Desktop", "Mobile"]}
              colors={["emerald", "rose"]}
              yAxisWidth={60}
            />
          </Card>
          <Card>
            <Title>Stacked Data</Title>
            <Text>Stacked area chart example</Text>
            <AreaChart
              className="mt-6"
              data={areaData}
              index="date"
              categories={["Desktop", "Mobile"]}
              colors={["slate", "zinc"]}
              yAxisWidth={60}
              stack={true}
            />
          </Card>
        </Grid>
      </div>
    </div>
  )
}
