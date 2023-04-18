import React from 'react'
import image from './images/Lillakortet.png'
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="title">Shipping Details</h2>

                    <label className="firstname">FirstName: </label>
                    <input type="text" placeholder='John' />

                    <label className="lastname">LastName: </label>
                    <input type="text" placeholder='S' />
                    <label className="address">Address: </label>
                    <input type="text" placeholder='Uppsala, Swedan' />
                    <label className="postalcode">Postal Code</label>
                    <input type="text" placeholder='123 987' />
                    <button className='btn'>Submit</button>
                </form>
                
                <h2>My Cart</h2>
                <div className="mycart">
                    <img className="product-img" src={image} alt="" />
                    <h5 className="product-title">"Little Adventure Card"</h5>
                    <h5 className="price"> "549.00kr"</h5>
                    
                    <img className="product-img1" src={image} alt="" />
                    <h5 className="product-title1">"Stora klatterkortet"</h5>
                    <h5 className="price1"> "1,549.00kr"</h5>
                    <h5 className="total">Total:  2100.00kr </h5>
                    <button className="btn-success">Edit Cart</button>
                </div>
                

            </div>
        </div>
    </section>
  )
}