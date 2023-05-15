import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface FavoriteCitiesState {
  cities: string[]
  toggleCity: (city: string) => void
  hasCity: (city: string) => boolean
}

const nameStore = 'favorite-cities-storage'

const startedFavoriteCities = [
  'Cusco',
  'Lima',
  'Santiago',
  'La Paz',
]

export const useFavoriteCities = create<FavoriteCitiesState>()(
  persist(
    (set, get) => ({
      cities: [],
      hasCity: (city) => {
        return get().cities.includes(city)
      },
      toggleCity: (city) => {
        set(state => ({
          cities: state.cities.includes(city)
            ? state.cities.filter(c => c !== city)
            : [...state.cities, city]
        }))
      }
    }),
    {
      name: nameStore,
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage(state) {
        return (state, error) => {
          if (!error && state?.cities.length === 0) {
            startedFavoriteCities.forEach(city => state?.cities.push(city))
          }
        }
      },
    }
  )
)
