import React from 'react'
import './styles/userCard.css'

const UserCard = ({user, setUpdateUser, setIsOpen, setCreditdel}) => {

    const handleDelete = ()=> {
        setIsOpen(true)
        setCreditdel('Delete User')
        setUpdateUser(user)
    }

    const handleEdit =()=> {
        setIsOpen(true)
        setCreditdel('Edit User')
        setUpdateUser(user)
    }

  return (
    <section className='user'> 
        <div className='user__header'>
            <img src={user.image_url} alt="foto" />
            <div className='user__fila_name'>
                <h2 className='user__name'>{user.first_name}</h2>
                <h2 className='user__name'>{user.last_name}</h2>
            </div>
        </div>
        <hr className='user__line'/>
        <ul className='user__list'>
            <li className='user__item'><span><i className='bx bx-envelope' ></i> Email :</span><span>{user.email}</span></li>
            <li className='user__item'><span>Birthday :</span><span><i className='bx bxs-gift'></i> {user.birthday}</span></li>
        </ul>
        <hr className='user__line' />
        <div className='user__buttons'>
            <button className='user__btn btn_red' onClick={handleDelete}><i className='bx bx-trash btn_red'></i></button>
            <button className='user__btn btn_blue' onClick={handleEdit}><i className='bx bx-edit-alt'></i></button>
        </div>
    </section>
  )
}

export default UserCard