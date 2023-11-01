import EventEmitter from 'events';

class Post extends EventEmitter {
    constructor(author, text) {
        super();
        this.author = author;
        this.text = text;
        this.numLikes = 0;
        this.on('upvoted', (username) => {
            console.log(`${username} upvoted your post`);
            console.log(
                `Current value of votes on your post:${myPost.numLikes}`
            );
        });
        this.on('downvoted', (username) => {
            console.log(`${username} downvoted your post`);
            console.log(
                `Current value of votes on your post:${myPost.numLikes}`
            );
        });
        this.on('error', (error) => {
            console.error(error);
        });
    }
    upvote(username) {
        if (!username) {
            return this.emit('error', new Error('Username not provided!'));
        }
        this.numLikes++;
        this.emit('upvoted', username);
    }
    downvote(username) {
        if (!username) {
            return this.emit('error', new Error('Username not provided!'));
        }
        this.numLikes--;
        this.emit('downvoted', username);
    }
}

const myPost = new Post('Abylay', 'my first post!');

// console.log(myPost.author);
// console.log(myPost.text);
// console.log(myPost.numLikes);
myPost.upvote('Nurbol');
setTimeout(() => myPost.upvote('Dauka'), 1000);
setTimeout(() => myPost.upvote('Rauka'), 2000);
myPost.downvote('Abyl');
setTimeout(() => myPost.downvote('Miras'), 4000);
setTimeout(() => myPost.downvote('Bake'), 5000);
setTimeout(() => myPost.downvote('Sake'), 6000);
setTimeout(() => myPost.downvote(), 6000);
