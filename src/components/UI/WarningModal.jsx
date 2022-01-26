import React from 'react'
import classes from './WarningModal.module.css'
import Button from './Button'
import Card from './Card'

const WarningModal = (props) => {
	return (
		<div>
			<div onClick={props.Confirm} className={classes.backdrop} />
			<Card className={classes.modal}>
				<header className={classes.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={classes.content}>
					<p>{props.massage}</p>
				</div>
				<footer className={classes.actions}>
					<Card className={classes.buttons}>
						<Button id={props.id} onClick={props.getId} >ok</Button>
						<Button onClick={props.Confirm} >confirm</Button>
					</Card>
				</footer>
			</Card>
		</div>
	)
}

export default WarningModal
