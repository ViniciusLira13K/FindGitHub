import api from "./api"


export default followes = async url => {

    const urlFoll = url.replace('https://api.github.com','')
    console.log('urlfoll == ' + JSON.stringify(urlFoll))
    await api.get(`${urlFoll}`)
}