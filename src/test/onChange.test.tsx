import { ChangeEvent, useState } from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

function UpperInput() {
  const [upper, setUpper] = useState('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setUpper(e.currentTarget?.value.toUpperCase())
  return (
    <div>
      <label htmlFor="upper">Upper</label>
      <input id="upper" value={upper} onChange={handleChange} />
    </div>
  )
}

test('sets the value to the upper version of the value', () => {
  render(<UpperInput />)
  const upperInput = screen.getByLabelText(/upper/i)
  const text = 'stuff'
  userEvent.type(upperInput, text)
})

test('checkboxes (and radios) must use click', () => {
  const handleChange = jest.fn()
  const { container } = render(<input type="checkbox" onChange={handleChange} />)
})