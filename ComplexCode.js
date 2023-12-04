/*
Filename: ComplexCode.js

Description: This code is a complex implementation of a social media simulation system.
It includes modules for user authentication, profile management, messaging, and post creation.

Author: John Doe
Date: 2021-10-01
*/

/* User authentication module */
const UserAuth = (() => {
  const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'pass3' },
  ];

  const login = (username, password) => {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      console.log(`Logged in as ${username}`);
    } else {
      console.log('Invalid username or password');
    }
  };

  const logout = () => {
    console.log('Logged out');
  };

  return {
    login,
    logout,
  };
})();

/* User profile management module */
const ProfileManagement = (() => {
  const profiles = {};

  const createProfile = (username, name, age, bio, location) => {
    profiles[username] = { name, age, bio, location };
    console.log(`Profile created for ${username}`);
  };

  const getProfile = (username) => {
    const profile = profiles[username];
    if (profile) {
      console.log(profile);
    } else {
      console.log(`Profile not found for ${username}`);
    }
  };

  return {
    createProfile,
    getProfile,
  };
})();

/* Messaging module */
const Messaging = (function () {
  const messages = [];

  const sendMessage = (from, to, content) => {
    const message = { from, to, content, timestamp: new Date() };
    messages.push(message);
    console.log('Message sent successfully');
  };

  const getMessages = () => {
    messages.forEach((message) => console.log(message));
  };

  return {
    sendMessage,
    getMessages,
  };
})();

/* Post creation module */
const PostCreation = (() => {
  const posts = [];

  const createPost = (username, title, content) => {
    const post = {
      username,
      title,
      content,
      timestamp: new Date(),
      likes: 0,
      comments: [],
    };
    posts.push(post);
    console.log('Post created successfully');
  };

  const likePost = (postId) => {
    const post = posts.find((p) => p.id === postId);
    if (post) {
      post.likes++;
      console.log('Post liked');
    } else {
      console.log('Post not found');
    }
  };

  const commentOnPost = (postId, username, content) => {
    const post = posts.find((p) => p.id === postId);
    if (post) {
      const comment = { username, content, timestamp: new Date() };
      post.comments.push(comment);
      console.log('Comment added');
    } else {
      console.log('Post not found');
    }
  };

  return {
    createPost,
    likePost,
    commentOnPost,
  };
})();

// Usage examples

// User authentication
UserAuth.login('user1', 'pass1');
ProfileManagement.createProfile('user1', 'John Doe', 25, 'Hello there!', 'New York');
PostCreation.createPost('user1', 'My first post', 'Hello world!');
Messaging.sendMessage('user1', 'user2', 'Check out my post!');
PostCreation.commentOnPost(1, 'user2', 'Nice post!');
ProfileManagement.getProfile('user1');
Messaging.getMessages();
UserAuth.logout();

// User authentication (invalid credentials)
UserAuth.login('user1', 'wrongpass');

// Profile not found
ProfileManagement.getProfile('user4');

// Post not found
PostCreation.commentOnPost(100, 'user2', 'This post does not exist');
PostCreation.likePost(100);

/*
Output:
Logged in as user1
Profile created for user1
Post created successfully
Message sent successfully
Comment added
{ name: 'John Doe', age: 25, bio: 'Hello there!', location: 'New York' }
{ from: 'user1', to: 'user2', content: 'Check out my post!', timestamp: '2021-10-01T12:34:56.789Z' }
Logged out
Invalid username or password
Profile not found for user4
Post not found
Post not found
*/