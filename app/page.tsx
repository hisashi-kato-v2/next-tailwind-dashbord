/**
 * v0 by Vercel.
 * @see https://v0.dev/t/k2mCxUnkH3w
 */
import Button from "@/components/ui/button"
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveLine } from "@nivo/line"
import { ResponsivePie } from "@nivo/pie"
import { TableHead, TableRow, TableHeader, TableBody, Table } from "@/components/ui/table"

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-2">
          <FlagIcon className="w-8 h-8" />
          <span className="text-lg font-semibold">Company Name</span>
        </div>
        <Button className="hidden md:block" variant="outline">
          Logout
        </Button>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="block md:flex flex-col gap-4 p-4 border-r w-full md:w-64">
          <Link className="flex items-center gap-1 font-medium hover:text-blue-500" href="#">
            <HomeIcon className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link className="flex items-center gap-1 font-medium hover:text-blue-500" href="#">
            <UserIcon className="w-5 h-5" />
            <span>Profile</span>
          </Link>
          <Link className="flex items-center gap-1 font-medium hover:text-blue-500" href="#">
            <SettingsIcon className="w-5 h-5" />
            <span>Settings</span>
          </Link>
        </aside>
        <main className="flex flex-col p-4 w-full overflow-auto">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart className="w-full h-[300px]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Active Users</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart className="w-full h-[300px]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Monthly Profit</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart className="w-full h-[300px]" />
              </CardContent>
            </Card>
          </div>
          <Table className="mt-8">
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Total Sales</TableHead>
              </TableRow>
            </TableHeader>
            {/* <TableBody /> */}
          </Table>
        </main>
      </div>
      <footer className="flex items-center justify-center p-4 border-t">
        <span className="text-sm text-gray-500">© 2023 Company Name</span>
      </footer>
    </div>
  )
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          {
            name: "A",
            data: 111,
          },
          {
            name: "B",
            data: 157,
          },
          {
            name: "C",
            data: 129,
          },
          {
            name: "D",
            data: 187,
          },
          {
            name: "E",
            data: 119,
          },
          {
            name: "F",
            data: 22,
          },
          {
            name: "G",
            data: 101,
          },
          {
            name: "H",
            data: 83,
          },
        ]}
        keys={["data"]}
        indexBy="name"
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "paired" }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Name",
          legendPosition: "middle",
          legendOffset: 45,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Number",
          legendPosition: "middle",
          legendOffset: -45,
          truncateTickAt: 0,
        }}
        theme={{
          tooltip: {
            container: {
              fontSize: "12px",
            },
          },
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}


function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "C",
            data: [
              {
                x: 1,
                y: 283,
              },
              {
                x: 2,
                y: 250,
              },
              {
                x: 3,
                y: 152,
              },
              {
                x: 4,
                y: 294,
              },
              {
                x: 5,
                y: 211,
              },
              {
                x: 6,
                y: 172,
              },
              {
                x: 7,
                y: 24,
              },
              {
                x: 8,
                y: 25,
              },
              {
                x: 9,
                y: 76,
              },
              {
                x: 10,
                y: 5,
              },
            ],
          },
          {
            id: "B",
            data: [
              {
                x: 1,
                y: 43,
              },
              {
                x: 2,
                y: 237,
              },
              {
                x: 3,
                y: 21,
              },
              {
                x: 4,
                y: 35,
              },
              {
                x: 5,
                y: 26,
              },
              {
                x: 6,
                y: 154,
              },
              {
                x: 7,
                y: 181,
              },
              {
                x: 8,
                y: 65,
              },
              {
                x: 9,
                y: 261,
              },
              {
                x: 10,
                y: 199,
              },
            ],
          },
          {
            id: "A",
            data: [
              {
                x: 1,
                y: 240,
              },
              {
                x: 2,
                y: 228,
              },
              {
                x: 3,
                y: 77,
              },
              {
                x: 4,
                y: 178,
              },
              {
                x: 5,
                y: 196,
              },
              {
                x: 6,
                y: 204,
              },
              {
                x: 7,
                y: 153,
              },
              {
                x: 8,
                y: 289,
              },
              {
                x: 9,
                y: 250,
              },
              {
                x: 10,
                y: 274,
              },
            ],
          },
        ]}
        enableCrosshair={false}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "X",
          legendOffset: 45,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Y",
          legendOffset: -45,
          legendPosition: "middle",
        }}
        colors={{ scheme: "paired" }}
        pointSize={5}
        pointColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        pointBorderWidth={2}
        pointBorderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            symbolSize: 14,
            symbolShape: "circle",
          },
        ]}
        theme={{
          tooltip: {
            container: {
              fontSize: "12px",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function PieChart(props) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          {
            id: "A",
            value: 634,
          },
          {
            id: "B",
            value: 456,
          },
          {
            id: "C",
            value: 150,
          },
          {
            id: "D",
            value: 258,
          },
          {
            id: "E",
            value: 511,
          },
        ]}
        sortByValue
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        cornerRadius={0}
        activeOuterRadiusOffset={2}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLabel="id"
        arcLabelsRadiusOffset={0.6}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        enableArcLinkLabels={false}
        colors={{ scheme: "paired" }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 50,
            itemHeight: 18,
            itemDirection: "left-to-right",
            symbolSize: 18,
            symbolShape: "circle",
          },
        ]}
        theme={{
          tooltip: {
            container: {
              fontSize: "12px",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
