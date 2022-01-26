import React, { useState } from 'react'
import { AddUser } from './components/Users/AddUser'
import UserList from './components/Users/UserList'

function App() {
	const [array, setArray] = useState([])

	const Add = (obj) => {
		setArray([...array, obj])
		console.log(array)
	}

	const getIdForFilter = (info) => {
		setArray([...array.filter((obj) => obj.id !== info)])
	}

	return (
		<div>
			<AddUser onAdd={Add} />
			<UserList getIdForFilter={getIdForFilter} users={array} />
		</div>
	)
}

export default App
