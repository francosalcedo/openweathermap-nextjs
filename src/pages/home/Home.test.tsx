import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Home from '@/pages/home/Home.page'

jest.mock('@/store/useStoreWeather');

describe('Home', () => {
  it('Render Home', () => {
    render(<Home />)
    const title = screen.getByText('Wheater Ionix')
    expect(title).toBeInTheDocument()
  })

  test('sets cityQuery correctly', () => {
    const defaultCity = process.env.NEXT_PUBLIC_DEFAULT_CITY || ''
    render(<Home />)
    const cityQuery = screen.getByPlaceholderText(defaultCity)
    expect(cityQuery).toBeInTheDocument()
  })
})
