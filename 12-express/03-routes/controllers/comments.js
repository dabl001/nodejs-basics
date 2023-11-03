const getComments = (req, res) => {
    res.send('Get comments');
};

const getComment = (req, res) => {
    res.send(`Get comment Id: ${req.params.commentId}`);
};

const postComment = (req, res) => {
    res.send('Post comment');
};

const deleteComment = (req, res) => {
    res.send(`Delete comment with Id: ${req.params.commentId}`);
};

module.exports = {
    getComments,
    getComment,
    postComment,
    deleteComment,
};
