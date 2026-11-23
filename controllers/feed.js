exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [
            {
                _id: '1',
                title: 'First post',
                content: 'This is the firts post!',
                imageUrl: 'images/astronaut_toy.png',
                creator: {
                    name: 'Edgar CF'
                },
                createdAt: new Date()
            }
        ]
    });
};

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    // TODO: create post in data base

    res.status(201).json({
        message: 'Post was created successfully!',
        post: {
            _id: '2',
            title: title,
            content: content,
            imageUrl: 'images/astronaut_toy.png',
            creator: {
                name: 'Edgar CF'
            },
            createdAt: new Date()
        }
    });
};
