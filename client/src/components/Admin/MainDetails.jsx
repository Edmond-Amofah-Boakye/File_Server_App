import { AiFillHome} from 'react-icons/ai'
import { SiFiles } from 'react-icons/si'
import { HiUsers } from 'react-icons/hi'
const MainDetails = () => {
  return (
    <div className="dash-content">
        <div className="overview">
            <div className="title">
                <AiFillHome className="dashboard-icon"/>
                <span className="text">Dashboard</span>
            </div>
            <div className="boxes">
                <div className="box box1">
                    <SiFiles className="files" />
                    <span className="text">Total Files</span>
                    <span className="number">120</span>
                </div>
                <div className="box box3">
                  <HiUsers className="users" />
                    <span className="text">Number of Users</span>
                    <span className="number">5</span>
                </div>
                <div className="box box1">
                    <SiFiles className="files" />
                    <span className="text">Total Files</span>
                    <span className="number">120</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainDetails