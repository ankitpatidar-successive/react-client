import React from 'react';
import '../App.css'
import Admin from '../user/role/Admin';
import User from '../user/role/User';
import Trainee from '../user/role/Trainee';
import { useState } from 'react';
import TopBarExample from "../header/Header";

const Dashboard = () => {
	const [adminn, setAdminn] = useState(false);
	const [userss, setUserrs] = useState(false);
	const [trainee, setTrainee] = useState(false);
	return (
		<div>
            <h1>Welcome to Dashboard</h1>
            <TopBarExample/>
			<button onClick={() => { setAdminn(true); setUserrs(false); setTrainee(false) }} >Admin</button>&nbsp;&nbsp;&nbsp;&nbsp;
			<button onClick={() => { setAdminn(false); setUserrs(true); setTrainee(false) }} >User</button>&nbsp;&nbsp;&nbsp;&nbsp;
			<button onClick={() => { setAdminn(false); setUserrs(false); setTrainee(true) }} >Trainee</button>
			{adminn && <Admin />}
			{userss && <User />}
			{trainee && <Trainee />}
		</div>
	)
}
export default Dashboard;
