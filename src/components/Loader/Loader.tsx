import styles from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.line}></div>
    </div>
  )
}

export { Loader }
