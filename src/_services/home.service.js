import { ConfigSettings } from '../_config';
import * as axios from 'axios'

export const homeService = {
    getAll
};

const httpClient = axios.create({
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json'
    }
})

 function getAll() {
    return httpClient.get(`${ConfigSettings}1/sessions`).then(resp => resp.data);
}