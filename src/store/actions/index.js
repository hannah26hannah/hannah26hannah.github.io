export const changeSize = (size) => {
    return {
        type: 'SET_SIZE',
        size: size
    }
}

export const getChannel = () => {
    return {
        type: 'GET_CHANNEL'
    }
}