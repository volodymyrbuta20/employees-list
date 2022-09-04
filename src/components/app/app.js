import { useState } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../emloyees-list/employees-list";
import AddForm from "../add-form/add-form";

import "./app.css";

const App = () => {

  const [data, setData] = useState([
    {name: "Kevin McCalister", salary: 800, bonus: false, rise: false, id: 1},
    {name: "Jude Law", salary: 1000, bonus: false, rise: false, id: 2},
    {name: "Richard Brenson", salary: 1300, bonus: false, rise: false, id: 3},
  ])
  const [term, setTerm] = useState('')
  const [filter, setFilter] = useState('all')
  let maxId = 4;

  const deleteItem = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      bonus: false,
      rise: false,
      id: maxId++
    }
    const newArr = [...data, newItem]
    setData(newArr)
  }

  const onToggleIncrease = (id) => {
    setData(data.map(item => {
        if (item.id === id) {
          return {...item, bonus: !item.bonus};
        }
        return item;
    }))
  }

  const onToggleRise = (id) => {
    setData(data.map(item => {
        if (item.id === id) {
          return {...item, rise: !item.rise};
        }
        return item;
    }))
  }

  const searchEmployee = (items, term) => {
    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    })
  }

  const onUpdateSearch = (term) => {
    setTerm(term)
  }

  const filterItems = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter(item => item.rise)
      case "salary":
        return items.filter(item => item.salary > 1000)
      default:
        return items
    };
  }

  const onFilterEmployees = (filter) => {
    setFilter(filter)
  }

    const employees = data.length;
    const increased = data.filter(item => item.bonus).length;
    const visibleData = filterItems(searchEmployee(data, term), filter);
    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased}/>

        <div className="search-panel">
            <SearchPanel onUpdateSearch={onUpdateSearch}/>
            <AppFilter 
              filter={filter}
              onFilterEmployees={onFilterEmployees}/>
        </div>

        <EmployeesList data={visibleData}
          onDelete={deleteItem}
          onToggleIncrease={onToggleIncrease}
          onToggleRise={onToggleRise}/>

        <AddForm onAdd={addItem}/>

      </div>
    );
}

export default App;