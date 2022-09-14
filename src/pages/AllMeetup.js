import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

const AllMeetup = () => {
	const [isLoading, setIsLoading] = useState(true);
	
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	useEffect(() => {
		// isLoading(true)
		fetch("https://meetup--app-default-rtdb.firebaseio.com/meetups.json")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const meetups = [];

				for (const key in data) {
					const meetup = {
						id: key,
						...data[key],
					}
					meetups.push(meetup)
				}
				setIsLoading(false);
				setLoadedMeetups(meetups);
			});
	}, [])



	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<div>
			<h1>All Meetups</h1>
			<MeetupList meetups={loadedMeetups} />
		</div>
	);
};

export default AllMeetup;
