export const isUser = (next) => {
    if(localStorage.getItem("authToken")){
        next();
    }
}
