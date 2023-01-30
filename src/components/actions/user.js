export const setUser = (user)=>{
    return {
        type: 'SET_USER',
        payload: user,
    }
}

export const logOut = ()=>{
    return {
        type: 'LOG_OUT'
    }
}