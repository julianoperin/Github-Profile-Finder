class Github {
    constructor() {
        this.client_id = 'enterkey...';
        this.client_secret = 'entersecret...';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();

        return {
            profile
        }
    }
}