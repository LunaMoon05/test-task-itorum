import s from './Pagination.module.scss'

export const Pagination = props => {
  const {lastUser, setLastUser} = props
  const decrementPage = () => setLastUser(lastUser - 1)
  const incrementPage = () => setLastUser(lastUser + 1)
  return (
    <div className={s.pagination}>
      {lastUser > 0 &&
        <button onClick={decrementPage} className={s.btn}>Назад</button>
      }
      <button onClick={incrementPage} className={s.btn}>Далее</button>
    </div>
  )
}