class API {
    static getVideoURL(code) {
        return "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    }

    static getAvailableGifts() {
        return [
            {
                id: 1,
                name: 'Save rain forest',
                imageURL: 'https://images.pexels.com/photos/904807/pexels-photo-904807.jpeg?cs=srgb&dl=branches-daylight-environment-904807.jpg&fm=jpg',
                price: 10
            },
            {
                id: 2,
                name: 'Save the ocean',
                imageURL: 'https://img.depresident.com/wp-content/uploads/2016/02/Save-the-Ocean-T-shirts.jpg',
                price: 15
            },
            {
                id: 3,
                name: 'Carbon footprint project',
                imageURL: 'https://controlequipment.com.au/wp-content/uploads/2016/01/CO2-in-clouds-1170x630.jpg',
                price: 10
            },
            {
                id: 4,
                name: 'BEF Water Restoration program',
                imageURL: 'http://www.baltana.com/files/wallpapers-8/River-Landscape-HD-Wallpapers-25857.jpg',
                price: 35
            }
        ]
    }
}

export default API