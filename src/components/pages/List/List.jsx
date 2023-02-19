// import Navigation from "../Shared/Navigation/Navigation"
import "./List.scss"
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar"
import DataTable from "../DataTable/DataTable"
import Sidebar from "../Sidebar/Sidebar"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <DashboardNavbar/>
        <DataTable/>
      </div>
    </div>
  )
}

export default List