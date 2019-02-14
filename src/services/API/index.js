const ENDPOINT = process.env.REACT_APP_BACKEND_URL

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
        return charityProject.json()
        // return {
        //     id: 4,
        //     name: 'BEF Water Restoration program',
        //     imageURL: 'http://www.baltana.com/files/wallpapers-8/River-Landscape-HD-Wallpapers-25857.jpg',
        //     price: 35,
        //     description: `Every BEF Water Restoration Certificate® created represents 1000 gallons of water restored on your behalf. By purchasing BEF WRCs® you are directly contributing to the restoration of recreational and ecological vitality in critical freshwater ecosystems.`
        // }
    }
}

export default API