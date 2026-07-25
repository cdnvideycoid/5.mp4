/* TOGGLE SHARE */
const shareBtn = document.getElementById("shareBtn");
const shareLinks = document.getElementById("shareLinks");

shareBtn.onclick = () => {
    window.open("https://whatsapp.com/channel/0029VbC83luInlqZ5Nz2qY3a", "_blank")
};
/* UNDANGAN */
function joinWhatsAppGroup() {
    window.open("https://whatsapp.com/channel/0029VbC83luInlqZ5Nz2qY3a");
}

function openFacebookPage() {
    window.open("https://www.facebook.com/share/14kxEf8EXCq/");
}
const video = document.getElementById("video");
const overlay = document.getElementById("videoOverlay");

let overlayClicked = false; 

let popupOpened = false;

video.addEventListener("timeupdate", () => {
  if (video.currentTime >= 2 && !overlayClicked) {
    overlay.classList.add("show");
  }

  }
});

// Klik overlay
overlay.addEventListener("click", () => {
    overlayClicked = true;              
    overlay.style.display = "none";   
    overlay.classList.remove("show");

});


