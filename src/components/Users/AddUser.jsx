import React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'
export const AddUser = (props) => {
	const [username, setUsername] = useState('')
	const [age, setAge] = useState('')
	const [error, setError] = useState(null)

	const usernameChangeHandler = (e) => {
		setUsername(e.target.value)
	}
	const ageChangeHandler = (e) => {
		setAge(e.target.value)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if (username.trim().length === 0 || age.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non empty values)',
			})
		}
		if (username.trim().length > 0 || +age.trim().length > 0) {
			const obj = {
				username,
				age,
				id: Math.random().toString(),
			}
			props.onAdd(obj)
		}
		setUsername('')
		setAge('')
	}

	const onConfirm = () => {
		setError(null)
	}

	return (
		<div>
			{error ? (
				<ErrorModal
					onClick={onConfirm}
					title={error.title}
					massage={error.message}
				/>
			) : (
				' '
			)}
			<Card className={classes.input}>
				<form onSubmit={onSubmit}>
					<label htmlFor='userName'>User Name</label>
					<input
						value={username}
						id='userName'
						onChange={usernameChangeHandler}
						type='text'
					/>
					<label htmlFor='age'>Age</label>
					<input
						type='number'
						value={age}
						id='age'
						onChange={ageChangeHandler}
					/>
					<Button type='submit'>Add user</Button>
				</form>
			</Card>
		</div>
	)
}
