// Assume you have fetched media data from a server and stored it in an array called mediaList
const mediaList = [
    { type: 'image', src: 'media/image1.jpg' },
    { type: 'video', src: 'media/video1.mp4' }
    // Add more media items as needed
];

const gallery = document.getElementById('gallery');

mediaList.forEach(media => {
    if (media.type === 'image') {
        const img = document.createElement('img');
        img.src = media.src;
        gallery.appendChild(img);
    } else if (media.type === 'video') {
        const video = document.createElement('video');
        video.src = media.src;
        video.controls = true;
        gallery.appendChild(video);
    }
});
