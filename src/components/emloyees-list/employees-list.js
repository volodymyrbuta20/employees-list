import EmployeesLitItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {

    const elems = data.map(item => {
        return <EmployeesLitItem 
        key={item.id} {...item}
        onDelete={() => onDelete(item.id)}
        onToggleIncrease={() => onToggleIncrease(item.id)}
        onToggleRise={() => onToggleRise(item.id)}/>
    })

    return (
        <div className="app-list list-group">
            {elems}
        </div>
    );
}

export default EmployeesList;