"use client"

import { useEffect, useRef, useState } from 'react'
import styles from './SearchBox.module.scss'
import { useStoreWeather } from '@/store/useStoreWeather'

const SearchBox = () => {
  const refInput = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState<string>('')
  const { setCityQuery } = useStoreWeather()

  const onKeyChange = ({ key, target }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      const inputTarget = target as HTMLInputElement;

      if (inputTarget?.value === '') return
      setCityQuery(inputTarget?.value)
    }
  }

  useEffect(() => {
    if (refInput?.current) refInput.current.focus()
  }, [refInput])

  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        type="search"
        ref={refInput}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        onKeyDown={onKeyChange}
      />
    </div>
  )
}

export default SearchBox
