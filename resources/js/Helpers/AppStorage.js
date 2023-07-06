class AppStorage {


    storeToken(token){
    localStorage.setItem('token', token);
    }

    storeUser(user){
        localStorage.setItem('user', user);
    }

    store(token,user){
        this.storeUser(user)
        this.storeToken(token)
    }

    clear(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        return true;
    }

    getToken(){
        localStorage.getItem(token);
    }

     getUser(){
        localStorage.getItem(user);
    }

}

export default AppStorage = new AppStorage();
