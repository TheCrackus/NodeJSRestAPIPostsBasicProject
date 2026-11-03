exports.getPosts = (req, res, next) => {
    res.status(200).json({
        title: 'First post',
        content: 'This is the firts post!'
    });
};

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    // TODO: create post in data base

    res.status(201).json({
        message: 'Post was created successfully!',
        post: {
            id: new Date().toISOString,
            title: title,
            content: content
        }
    });
};
