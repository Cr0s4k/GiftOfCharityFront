class API {
    static getVideoURL(code) {
        return "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    }

    static getAvailableGifts() {
        return [
            {
                name: 'Save rain forest',
                imageURL: 'https://images.pexels.com/photos/904807/pexels-photo-904807.jpeg?cs=srgb&dl=branches-daylight-environment-904807.jpg&fm=jpg'
            },
            {
                name: 'Save the ocean',
                imageURL: 'https://img.depresident.com/wp-content/uploads/2016/02/Save-the-Ocean-T-shirts.jpg'
            }
        ]
    }
}

export default API