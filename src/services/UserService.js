export default class UserService {

    // Instance unique partagée
    static instance = null 

    username = null

    static getInstance() {
        if (null === UserService.instance) {
            UserService.instance = new UserService()
        }

        return UserService.instance
    }  
}