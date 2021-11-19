import { useNavigate, NavLink, Link } from 'react-router-dom';
import React, {useState} from 'react';
import './ColorForm.css'

const ColorForm = ({ addColor }) => {
    const emptyForm = {
        color:'',
    };
    
    const [formData, setFormData] = useState(emptyForm);
    const navigate = useNavigate();

    const handleFormChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }
    //https://reactjs.org/docs/uncontrolled-components.html

    const onFormSubmit = (evt) => {
        evt.preventDefault();
        let { color } = evt.target;
        
        color = color.value;

        addColor(color);
        console.log(color)
        setFormData(emptyForm);
        
        navigate('/colors')
    };

    return (
        <form className="ColorForm" onSubmit={onFormSubmit}>
            <label htmlFor="color">Add Color</label><br/>
            <input type="text" id="color" name="color" value={formData.color} onChange={handleFormChange}/><br/>
            <input type="submit" id="submit" name="submit" />
            <NavLink exact={"true"} to={`/color`}>
                <h2>Go Back</h2>
            </NavLink>
        </form>
    )
};


export default ColorForm;