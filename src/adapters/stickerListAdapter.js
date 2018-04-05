export default data => {
    console.log(`data`, data)
    if (Object.keys(data).length) {
        if (data[Object.keys(data)[0]]) {
            // console.log(`data`, data[""][Object.keys(data[""])[0]]['stickers'])
            return data[""][Object.keys(data[""])[0]]['stickers']
        }
    }
}
