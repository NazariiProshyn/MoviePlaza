export const setUsersComments = (userid, setUser) => {
    fetch('https://movieplaza.herokuapp.com/users/' + userid)
        .then((res) => res.json())
        .then((res) => setUser(res));
};

const methods = { setUsersComments };
export default methods;
