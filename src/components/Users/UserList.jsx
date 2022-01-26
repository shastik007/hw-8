import React, { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './UserList.module.css'
import WarningModal from '../UI/WarningModal'

function UserList(props) {
	const [modal, setModul] = useState(null)
	const ChangeModule = (e) => {
		setModul({
			title: 'this item will be remove',
			massage: 'are you sure?',
			id: e.target.id,
		})
	}
	const Confirm = () => {
		setModul(null)
	}

	const getId = (e) => {
		props.getIdForFilter(e.target.id)
		setModul(null)
	}

	let render = <p>NO Found users </p>
	if (props.users.length > 0) {
		render = props.users.map((user) => {
			return (
				<li key={user.id}>
					<span>{user.name}</span>
					<span>({user.age} years old)</span>
					<Button onClick={ChangeModule} id={user.id}>
						delete
					</Button>
				</li>
			)
		})
	}

	return (
		<div>
			{modal ? (
				<WarningModal
					getId={getId}
					Confirm={Confirm}
					title={modal.title}
					massage={modal.massage}
					id={modal.id}
				/>
			) : (
				''
			)}
			<Card className={classes.users}>
				<ul>{render}</ul>
			</Card>
		</div>
	)
}

export default UserList
