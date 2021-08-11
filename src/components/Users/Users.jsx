import s from './Users.module.scss'
import { User } from './User/User'
import { useEffect, useState } from 'react'
import { Pagination } from './../Pagination/Pagination'

export const Users = () => {
  const [usersArr, setUsersArr] = useState([])
  const [lastUser, setLastUser] = useState(0)
  useEffect(() => {
    fetch(`https://api.github.com/users?per_page=9&since=${lastUser}`).then(response => {
      return response.json()
    }).then(data => {
      const newUsers = data.map(item => {
        return <User id={item.id} key={item.id} avatar={item.avatar_url} login={item.login} type={item.type} />
      })
      setUsersArr(newUsers)
    })
  }, [lastUser])
  return (
    <div className={s.users}>
      <h1 className={s.title}>ПОЛЬЗОВАТЕЛИ GITHUB</h1>
      <ul className={s.list}>
        {usersArr}
      </ul>
      <Pagination lastUser={lastUser} setLastUser={setLastUser} />
    </div>
  )
}