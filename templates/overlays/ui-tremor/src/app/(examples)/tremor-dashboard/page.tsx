import { Card } from "@/components/ui/card"
import { Metric } from "@/components/ui/metric"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AreaChart, BarChart, LineChart, DonutChart } from "@/components/ui/chart"
import { 
  Flex, 
  Grid, 
  Title, 
  Text, 
  Select, 
  SelectItem,
  Badge,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from "@tremor/react"

const chartData = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
]

const barChartData = [
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

export default function TremorDashboardPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center">
        <Title className="text-4xl font-bold mb-4">Tremor Analytics Dashboard</Title>
        <Text className="text-lg text-gray-600">
          Comprehensive analytics dashboard built with Tremor components
        </Text>
      </div>

      {/* KPI Cards */}
      <Grid numItems={1} numItemsSm={2} numItemsLg={4} className="gap-6">
        <Card>
          <Flex alignItems="start">
            <div>
              <Text>Total Sales</Text>
              <Metric>$12,699</Metric>
            </div>
            <Badge color="green">+23.1%</Badge>
          </Flex>
        </Card>
        <Card>
          <Flex alignItems="start">
            <div>
              <Text>Total Orders</Text>
              <Metric>1,234</Metric>
            </div>
            <Badge color="red">-12.5%</Badge>
          </Flex>
        </Card>
        <Card>
          <Flex alignItems="start">
            <div>
              <Text>Total Customers</Text>
              <Metric>2,345</Metric>
            </div>
            <Badge color="green">+5.2%</Badge>
          </Flex>
        </Card>
        <Card>
          <Flex alignItems="start">
            <div>
              <Text>Conversion Rate</Text>
              <Metric>3.4%</Metric>
            </div>
            <Badge color="yellow">+0.1%</Badge>
          </Flex>
        </Card>
      </Grid>

      {/* Controls */}
      <Card>
        <Flex justifyContent="between" alignItems="center">
          <Title>Analytics Overview</Title>
          <div className="flex gap-4">
            <Select placeholder="Select time range">
              <SelectItem value="1">Last 7 days</SelectItem>
              <SelectItem value="2">Last 30 days</SelectItem>
              <SelectItem value="3">Last 90 days</SelectItem>
            </Select>
            <Button variant="primary">Export</Button>
          </div>
        </Flex>
      </Card>

      {/* Charts */}
      <TabGroup>
        <TabList>
          <Tab>Area Chart</Tab>
          <Tab>Bar Chart</Tab>
          <Tab>Line Chart</Tab>
          <Tab>Donut Chart</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Card>
              <Title>Area Chart</Title>
              <Text>Website traffic over time</Text>
              <AreaChart
                className="mt-6"
                data={chartData}
                index="date"
                categories={["SemiAnalysis", "The Pragmatic Engineer"]}
                colors={["blue", "green"]}
                yAxisWidth={60}
              />
            </Card>
          </TabPanel>
          <TabPanel>
            <Card>
              <Title>Bar Chart</Title>
              <Text>Threatened species by category</Text>
              <BarChart
                className="mt-6"
                data={barChartData}
                index="name"
                categories={["Number of threatened species"]}
                colors={["blue"]}
                yAxisWidth={60}
              />
            </Card>
          </TabPanel>
          <TabPanel>
            <Card>
              <Title>Line Chart</Title>
              <Text>Website traffic over time</Text>
              <LineChart
                className="mt-6"
                data={chartData}
                index="date"
                categories={["SemiAnalysis", "The Pragmatic Engineer"]}
                colors={["blue", "green"]}
                yAxisWidth={60}
              />
            </Card>
          </TabPanel>
          <TabPanel>
            <Card>
              <Title>Donut Chart</Title>
              <Text>Sales by brand</Text>
              <DonutChart
                className="mt-6"
                data={donutData}
                category="sales"
                index="name"
                colors={["blue", "green", "yellow", "red", "purple"]}
              />
            </Card>
          </TabPanel>
        </TabPanels>
      </TabGroup>

      {/* Form Example */}
      <Card>
        <Title>Analytics Configuration</Title>
        <Text>Configure your analytics settings</Text>
        <div className="mt-6 space-y-4">
          <div>
            <Text>Dashboard Name</Text>
            <Input placeholder="Enter dashboard name" className="mt-2" />
          </div>
          <div>
            <Text>Time Range</Text>
            <Select placeholder="Select time range" className="mt-2">
              <SelectItem value="1">Last 7 days</SelectItem>
              <SelectItem value="2">Last 30 days</SelectItem>
              <SelectItem value="3">Last 90 days</SelectItem>
            </Select>
          </div>
          <div className="flex gap-4">
            <Button variant="primary">Save Configuration</Button>
            <Button variant="secondary">Reset</Button>
          </div>
        </div>
      </Card>

      {/* Data Table Example */}
      <Card>
        <Title>Recent Transactions</Title>
        <Text>Latest transaction data</Text>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  #12345
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  John Doe
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  $299.00
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge color="green">Completed</Badge>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  #12346
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Jane Smith
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  $149.00
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge color="yellow">Pending</Badge>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  #12347
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Bob Johnson
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  $399.00
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge color="red">Failed</Badge>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
