
import "./app-info.css";

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Accounting of employees in company NASA</h1>
            <h2>Total workers: {employees}</h2>
            <h2>Workers for promotion: {increased}</h2>
        </div>
    );
}

export default AppInfo;