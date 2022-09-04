import { useState } from "react";
import "./add-form.css";

const AddForm = (props) => {

    const [name, setName] = useState('');
    const [salary, setSalary] = useState('')

    const onChangeValueName = (e) => {
        setName(e.target.value);
    }

    const onChangeValueSalary = (e) => {
        setSalary(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name.length < 3 || salary === '') {
            alert ("Name must have more than 3 characters; salary can't be empty")
        } else {
            props.onAdd(name, salary);
            setName('')
            setSalary('')
        }
    }

    return (
        <div className="app-add-form">
            <h3>Add new employee</h3>
            <form
                className="add-form d-flex"
                onSubmit = {onSubmit}>
                <input type="text"
                    className="form-control new-post-label"
                    name="name"
                    value={name}
                    onChange={onChangeValueName}
                    placeholder="What's his name?" />
                <input type="number"
                    className="form-control new-post-label"
                    name="salary"
                    value={salary}
                    onChange={onChangeValueSalary}
                    placeholder="Salary in $?" />
                <button type="submit"
                    className="btn btn-outline-light">
                        Add
                </button>
            </form>
        </div>
    );
}

export default AddForm;