class Github {
    constructor() {
        this.client_id = 'fa6439d734961ee997c4';
        this.client_secret = 'cecb213e2b0ae1690d702cca63df66d185f3dadd';
        this.repos_count = 6;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}




// class Github {
//     constructor() {
//         this.client_id = 'fa6439d734961ee997c4';
//         this.client_secret = 'cecb213e2b0ae1690d702cca63df66d185f3dadd';
//     }

//     async getUser(user) {
//         const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

//         const profileData = await profileResponse.json();

//         return {
//             profile
//         }
//     }
// }