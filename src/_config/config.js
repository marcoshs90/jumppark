const API_URL = 'http://67.205.161.202/jumpparkapi/public/api/'
const API_URL_DEV = 'http://localhost:4000'

const ENV = 'prod'

const ConfigSettings = ENV === 'development' ? API_URL_DEV : API_URL;

export { ConfigSettings }