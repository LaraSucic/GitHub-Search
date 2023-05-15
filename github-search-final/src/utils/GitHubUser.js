class GitHubUser {

	constructor(name=null, location=null, bio=null, avatar_url=null, repos=null) {
		this.name = name;
		this.location = location;
		this.bio = bio;
		this.avatar_url = avatar_url;
		this.repos = repos;
	}

	getName() {
		return this.name;
	}

	getLocation() {
		return this.location;
	}

	getBio() {
		return this.bio;
	}

	getAvatar() {
		return this.avatar_url;
	}

	getRepos() {
		return this.repos;
	}

}


export default GitHubUser;