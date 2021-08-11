import { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import s from './Profile.module.scss'

const Profile = props => {
  const [profileData, setProfileData] = useState({})
  useEffect(() => {
    fetch(`https://api.github.com/users/${props.match.params.id}`).then(response => {
      return response.json()
    }).then(data => {
      setProfileData(data)
    })
  }, [])
  const {name, company, location, followers, blog} = profileData
  return (
    <div className={s.profie}>
      <h1 className={s.title}>Профиль <span>{profileData.login}</span></h1>
      <div className={s.wrapper}>
        <div className={s.avatar}>
          <img src={profileData.avatar_url} alt="" />
        </div>
        <div className={s.info}>
          <div className={s.infoItem}>Полное имя: <span>{name ? name : 'нет данных'}</span></div>
          <div className={s.infoItem}>Компания: <span>{company ? company : 'нет данных'}</span></div>
          <div className={s.infoItem}>Локация: <span>{location ? location : 'нет данных'}</span></div>
          <div className={s.infoItem}>Подписчиков: <span>{followers ? followers : 'нет данных'}</span></div>
          {blog ? <a target="_blank" href={profileData.blog} className={s.infoItem} rel="noreferrer">Перейти на личный сайт</a> : ''}
        </div>
      </div>
    </div>
  )
}

export default withRouter(Profile)