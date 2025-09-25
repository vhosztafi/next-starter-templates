# Tremor Integration

This overlay adds Tremor components to your Next.js application, specifically designed for analytics and data visualization applications.

## What's Included

- **Analytics Components** - Cards, Metrics, Charts, and data visualization components
- **Dashboard Examples** - Complete analytics dashboard with KPI cards and charts
- **Chart Gallery** - Comprehensive collection of chart types and examples
- **Wrapped Components** - Button, Input, Card, Metric, and Chart components with design token integration

## Components Added

### Button
```tsx
import { Button } from "@/components/ui/button"

<Button variant="primary" size="md" color="blue">
  Click me
</Button>
```

### Input
```tsx
import { Input } from "@/components/ui/input"

<Input 
  variant="default" 
  size="md"
  placeholder="Enter text..."
/>
```

### Card
```tsx
import { Card } from "@/components/ui/card"

<Card>
  <Title>Card Title</Title>
  <Text>Card content goes here</Text>
</Card>
```

### Metric
```tsx
import { Metric } from "@/components/ui/metric"

<Metric>$12,699</Metric>
```

### Charts
```tsx
import { AreaChart, BarChart, LineChart, DonutChart, PieChart } from "@/components/ui/chart"

<AreaChart
  data={chartData}
  index="date"
  categories={["Desktop", "Mobile"]}
  colors={["blue", "green"]}
  yAxisWidth={60}
/>
```

## Demo Pages

### Analytics Dashboard (`/tremor-dashboard`)
- KPI cards with metrics and badges
- Interactive charts with tab navigation
- Form components for configuration
- Data table with transaction data
- Complete dashboard layout

### Charts Gallery (`/tremor-charts`)
- Area charts with different color schemes
- Bar charts for categorical data
- Line charts for time series data
- Donut and pie charts for proportions
- Customized chart examples

## Key Features

### Analytics-Focused Components
- **Metrics** - Display key performance indicators
- **Cards** - Container components for dashboard layouts
- **Charts** - Comprehensive chart library (Area, Bar, Line, Donut, Pie)
- **Badges** - Status indicators and labels
- **Grid System** - Responsive grid layouts

### Data Visualization
- **Multiple Chart Types** - Area, Bar, Line, Donut, Pie charts
- **Customizable Colors** - Extensive color palette options
- **Responsive Design** - Charts adapt to different screen sizes
- **Interactive Elements** - Hover states and animations

### Dashboard Layout
- **KPI Cards** - Key metrics with trend indicators
- **Tab Navigation** - Organize different chart views
- **Form Controls** - Configuration and filtering options
- **Data Tables** - Tabular data presentation

## Dependencies Added

- `@tremor/react` - Tremor React component library
- `recharts` - Chart library for data visualization

## Design Token Integration

All components are wrapped to use your existing design tokens from the base template, ensuring consistency with your design system while leveraging Tremor's analytics-focused component library.

## Usage Examples

### Basic Dashboard
```tsx
import { Card, Metric, Title, Text } from "@tremor/react"
import { AreaChart } from "@/components/ui/chart"

<Card>
  <Title>Sales Overview</Title>
  <Metric>$12,699</Metric>
  <AreaChart
    data={salesData}
    index="date"
    categories={["Sales"]}
    colors={["blue"]}
  />
</Card>
```

### KPI Card with Badge
```tsx
import { Card, Metric, Text, Flex, Badge } from "@tremor/react"

<Card>
  <Flex alignItems="start">
    <div>
      <Text>Total Sales</Text>
      <Metric>$12,699</Metric>
    </div>
    <Badge color="green">+23.1%</Badge>
  </Flex>
</Card>
```

## Perfect For

- **Analytics Dashboards** - Business intelligence and reporting
- **Data Visualization** - Charts and graphs for data analysis
- **KPI Monitoring** - Key performance indicator tracking
- **Business Applications** - CRM, ERP, and business tools
- **Financial Applications** - Trading, banking, and finance dashboards

The Tremor overlay provides everything needed to build comprehensive analytics applications with professional-grade data visualization components.
