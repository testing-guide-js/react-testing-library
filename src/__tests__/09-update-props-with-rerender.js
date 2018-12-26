import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import {FavoriteNumber} from '../favorite-number'

test('entering an invalid value shows an error message', () => {
  const {getByLabelText, debug, getByTestId, rerender} = render(
    <FavoriteNumber />,
  )
  const input = getByLabelText(/favorite number/i)
  debug()
  fireEvent.change(input, {target: {value: 10}})
  debug()
  expect(getByTestId('error-message')).toHaveTextContent(
    /the number is invalid/i,
  )
  rerender(<FavoriteNumber max={10} />)
  debug()
})
