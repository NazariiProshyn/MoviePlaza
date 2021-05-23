export const setUsersComments = (userid, setUser) => {
    fetch('http://localhost:3001/users/' + userid)
        .then((res) => res.json())
        .then((res) => setUser(res));
};

const methods = { setUsersComments };
export default methods;
