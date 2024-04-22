import { useEffect, useState,  } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import UserForm from './components/UserForm'
import UserCard from './components/UserCard'

function App() {

    const urlBase = 'https://users-crud.academlo.tech/'

    const [isOpen, setIsOpen] = useState(false)
    const [updateUser, setUpdateUser] = useState()
    const [creditdel, setCreditdel] = useState()
    const [users, getUsers, createUser, deleteUser, editUser, isLoandig] = useCrud(urlBase)

    useEffect(() => {
      const path = "users"
      getUsers(path)
    }, [])

    const handleOpen = ()=> {
      setIsOpen(true)
      setCreditdel('Create User')
    }

  return (
    <>
      {
        isLoandig ?

          <div className='screen__load'>
              <h2>Loanding...</h2>
          </div>

        :
          <div className='app'>
            <header className='app__header'> 
              <h1 className='app__title'>CRUD  Users</h1>
              <button onClick={handleOpen} className="btn-create" role="button">+ New User</button>
            </header>
            <UserForm
                createUser={createUser}
                updateUser={updateUser}
                editUser={editUser}
                deleteUser={deleteUser}
                setUpdateUser={setUpdateUser}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                creditdel={creditdel}
            />
            <div className='app__container'>
              {
                users?.map((user) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    setUpdateUser={setUpdateUser}
                    setIsOpen={setIsOpen}
                    setCreditdel={setCreditdel}
                  />
                ))
              }
            </div>
          </div>
      }
    </>
  )
}

export default App
