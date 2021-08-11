import { NavLink } from 'react-router-dom'
import s from './User.module.scss'
export const User = props => {
  const {avatar, login, type, id} = props
  return (
    <li id={id} className={s.user}>
      <div className={s.wrapper}>
        <div className={s.avatar}>
          <img src={avatar} alt="" />
        </div>
        <div className={s.info}>
          <h3 className={s.name}>{login}</h3>
          <div className={s.type}>Тип: {type}</div>
          <NavLink to={`/profile/${login}`}>
            <div className={s.link}>Профиль</div>
          </NavLink>
        </div>
      </div>
    </li>
  )
}