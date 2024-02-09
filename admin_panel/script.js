function uploadMedia() {
    const fileInput = document.getElementById('fileUpload');
    const files = fileInput.files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        formData.append('mediaFiles', file);
    }

    // Use fetch or AJAX to send formData to server for handling file upload
}
