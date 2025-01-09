import React from 'react'
import { Form } from 'react-router-dom'

function Search({searchTerm}) {
  return (
    <Form method='GET'>
        <input type="text" name='search' id='search' defaultValue={searchTerm} required />
        <button type='submit'>Serach</button>
    </Form>
  )
}

export default Search