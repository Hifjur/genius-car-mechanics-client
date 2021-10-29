import axios from 'axios';
import React from 'react';
import { Collapse } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
       console.log(data);
       axios.post('http://localhost:5000/services', data)
       .then(res => {
           if(res.data.insertedID){
               alert('Succesfully added');
               reset();
           }
       })
    }
    return (
        <div>
            <h1>add service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                

                <input placeholder="Name" {...register("name", { required: true })} />
                <input placeholder="Description" {...register("description", { required: true })} />
                <input placeholder="price" type="number"{...register("price", { required: true })} />
                <input placeholder="image url" {...register("img", { required: true })} />
                
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;