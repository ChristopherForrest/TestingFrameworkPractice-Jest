

let validate = (username,password) => {

    let users = [{"user":"Bob12345","pass":"12345678"}]
    
    currentUser = users.find(users => users.user === username)
    
    if(currentUser !== undefined && currentUser.pass === password){
        return true;
    }else{
        return false
    }

}

module.exports = validate