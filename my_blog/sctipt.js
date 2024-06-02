document.getElementById('home').addEventListener('click', function() {
    document.getElementById('content').classList.remove('hidden');
    document.getElementById('post-section').classList.add('hidden');
    document.getElementById('chat-section').classList.add('hidden');
});

document.getElementById('post').addEventListener('click', function() {
    document.getElementById('content').classList.add('hidden');
    document.getElementById('post-section').classList.remove('hidden');
    document.getElementById('chat-section').classList.add('hidden');
});

document.getElementById('chat').addEventListener('click', function() {
    document.getElementById('content').classList.add('hidden');
    document.getElementById('post-section').classList.add('hidden');
    document.getElementById('chat-section').classList.remove('hidden');
});

document.getElementById('submit-post').addEventListener('click', function() {
    const postContent = document.getElementById('post-content').value;
    alert('Post Submitted: ' + postContent); // This is a placeholder. You should replace it with actual post submission logic.
});

document.getElementById('send-message').addEventListener('click', function() {
    const message = document.getElementById('chat-message').value;
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    document.getElementById('chat-message').value = '';
});
