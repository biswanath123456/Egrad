const upload = document.querySelector('#up');
const cross = document.querySelector('.cross');
const overlay = document.querySelector('.overlay');
function show(){
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.upload').classList.add('showUpload');
}

function close(){
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.upload').classList.remove('showUpload');
}

upload.addEventListener('click',show);
cross.addEventListener('click',close);
overlay.addEventListener('click',close);