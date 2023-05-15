export const getUser = async(username) => {
	const response = await fetch(`https://api.github.com/users/${username}`, {
		method: "GET"
	});

	return response.json();
}


export const getRepos = async(username) => {
	const response = await fetch(`https://api.github.com/users/${username}/repos`, {
		method: "GET"
	});

	return response.json();
}