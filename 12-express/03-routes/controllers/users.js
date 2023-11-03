const getUser = (req, res) => {
    res.send(`Get user Id: ${req.params.userId}`);
};

const getUsers = (req, res) => {
    res.send('Get users');
};

const postUser = (req, res) => {
    res.send('Post users');
};

module.exports = {
    getUsers,
    getUser,
    postUser,
};
