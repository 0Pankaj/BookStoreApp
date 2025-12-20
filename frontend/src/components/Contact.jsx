import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className="border-[2px] shadow-md p-5 rounded-md w-[400px] dark:bg-slate-900 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-lg">Signup</h3>

                        <div className='mt-4 space-y-2'>
                            <span>Name</span><br />
                            <input type='text' placeholder='Enter your name'
                                className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className='mt-4 space-y-2'>
                            <span>Email</span><br />
                            <input type='email' placeholder='Enter your Email'
                                className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className='mt-4 space-y-2'>
                            <span>Description</span><br />
                            <textarea
                                placeholder="Write here....."
                                className="
                                   w-80 h-40
                                   px-3 py-2
                                   resize-none
                                   text-left align-top leading-normal
                                   border rounded-md outline-none
                                   bg-white text-black
                                   dark:bg-slate-900 dark:text-white
                                   placeholder-gray-500
                                   dark:placeholder-gray-400
  "
                                {...register("description", { required: true })}
                            />

                            {errors.description && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className='flex justify-around mt-4'>
                            <button className='bg-blue-500 text-white rounded-md px-3 py-1'>Submit</button>

                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
