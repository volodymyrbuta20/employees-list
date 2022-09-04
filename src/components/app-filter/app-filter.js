
import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {name: "all", label: "All employees"},
        {name: "rise", label: "For promotion"},
        {name: "salary", label: "Salary more than 1000$"},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const className = active ? "btn-light" : "btn-outline-light"
        return (
            <button 
                className={`btn ${className}`} 
                type="button"
                key={name}
                onClick={() => props.onFilterEmployees(name)}>
                    {label}
            </button>
        )
    })


    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;