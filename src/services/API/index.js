import firebase from 'firebase'
import axios from 'axios'

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

    static uploadVideo(data, callback) {
        return new Promise((accept, reject) => {
            let file = data.get('file');
            let storage = firebase.storage();
            let storageRef = storage.ref();
            let uploadTask = storageRef.child(`videos/${file.name}`).put(file);
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, null, (error) => {
                reject(error)
            }, () => {
                uploadTask.snapshot.ref.getDownloadURL()
                    .then(url => {
                        accept(url)
                    })
            })
        });
    }

    static async makeDonation(data) {
        console.log(data);
        await axios.post(`${ENDPOINT}/donations`,  data);
    }

    static async getGift(token) {
        let gift = await axios.get(`${ENDPOINT}/gifts`, {
            params: {
                token: token
            }
        });
        return gift.data
    }

    static async getQuestionnaire(id) {
        let questionnaire = await axios.get(`${ENDPOINT}/questionnaires/${id}`)
        return questionnaire.data
    }
}

export default API