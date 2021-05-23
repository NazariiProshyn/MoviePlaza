export const getSource = (hostname, video) => {
    return hostname + '/videos/' + video + '.mp4';
};

const methods = {getSource};
export default methods;