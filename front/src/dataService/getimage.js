export const getImage = (hostname, image) => {
    return hostname + '/images/' + image;
};

const methods = { getImage };
export default methods;
