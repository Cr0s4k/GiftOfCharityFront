const ENDPOINT = process.env.REACT_APP_BACKEND_URL;

class API {

    static getVideoURL(code) {
        return "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    }

    static async getCharityProjects() {
        let charityProjects = await fetch(`${ENDPOINT}/charity_projects`, {
            method: 'GET'
        });
        return charityProjects.json()
    }

    static async getCharityProject(id){
        let charityProject = await fetch(`${ENDPOINT}/charity_projects/${id}`, {
            method: 'GET'
        });

        if(charityProject.status !== 200) throw Error;
        return charityProject.json()
    }

    static async uploadVideo(data, callback) {
        let sleep = ms => new Promise(r => setTimeout(r, ms));

        callback(1);
        await sleep(1000);
        callback(50);
        await sleep(1000);
        callback(100);
        await sleep(50);
        return "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    }
}

export default API