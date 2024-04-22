import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/userForm.css'

const UserForm = ({createUser, updateUser, editUser, deleteUser, setUpdateUser, isOpen, setIsOpen, creditdel}) => {

    const {handleSubmit, register, reset} = useForm()
    
    useEffect(() => {
        if (updateUser) 
            reset(updateUser)
    }, [updateUser])

    const submit = data => {

        if (creditdel==='Edit User') {
                editUser('users', data, updateUser.id)
                setUpdateUser()
                alert('User updated 👍')
            }
        else if (creditdel==='Create User') {
                createUser('users', data)
                alert('User created 👍')
            } 
        else if (creditdel==='Delete User') {
                deleteUser('users', updateUser.id)
                alert('User deleted 👍')
            }

        setIsOpen(false)
        resetForm()
    }
 
        const handleClose = () => {
            setIsOpen(false)
            resetForm()
        }

        function resetForm() {
            reset({
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                birthday: '',
                image_url: '',
            })
        }
 
    return (
    <div className={`form__back ${isOpen && 'active'}`}>
        <form className='form' onSubmit={handleSubmit(submit)}>
            <button type='button' onClick={handleClose} className='form__close'><i className='bx bx-x' ></i></button>
            <h2 className='form__title'>{`${creditdel}`}</h2>
            <div className="form__item">
                <label htmlFor="first_name">First Name: </label>
                <input {...register('first_name')} className='form__input' id='first_name' type="text" required/>
            </div>
            <div className="form__item">
                <label htmlFor="last_name">Last Name: </label>
                <input {...register('last_name')} className='form__input' id='last_name' type="text" required/>
            </div>
            <div className="form__item">
                <label htmlFor="email">Email: </label>
                <input {...register('email')} className='form__input' id='email' type="email" required/>
            </div>
            <div className="form__item">
                <label htmlFor="password">Password: </label>
                <input {...register('password')} className='form__input' id='password' type="password" required/>
            </div>
            <div className="form__item">
                <label htmlFor="birthday">Birthday: </label>
                <input {...register('birthday')} className='form__input' id='birthday' type="date" required/>
            </div>
            <div className="form__item">
                <label htmlFor="image_url">Url Picture: </label>
                <input {...register('image_url')} className='form__input' id='image_url' type="text" />
            </div>
            <button className={`form__btn ${creditdel === "Delete User" && 'form__btn_del'}`} >{creditdel}</button>
        </form>
    </div>
)}

export default UserForm