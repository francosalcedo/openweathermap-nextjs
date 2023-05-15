import { useFavoriteCities } from '@/store/useFavoriteCities'
import React from 'react'

interface FavoriteStartProps{
  city: string
}

const FavoriteStart: React.FC<FavoriteStartProps> = ({ city }) => {
  const { hasCity, toggleCity } = useFavoriteCities()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      onClick={() => toggleCity(city)}
      style={{ cursor: 'pointer' }}
    >
      <path
        d="M12.2 3.7l2.8 5.7 6.3.9-4.5 4.4 1 6.3-5.2-2.8-5.2 2.8 1-6.3L3 10.3l6.3-.9z"
        stroke="gold"
        strokeWidth="1.5"
        fill={hasCity(city) ? 'gold' : 'none'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FavoriteStart
