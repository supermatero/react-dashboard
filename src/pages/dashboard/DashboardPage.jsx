import { AreaTop, AreaCards, AreaCharts, AreaTable } from "../../components"
export default function Dashboard() {
  return (
    <div className="content-area">
      <AreaTop/>
      <AreaCards/>
      <AreaCharts/>
      <AreaTable/>
    </div>
  )
}
