function showAbout() {
  document.getElementById('aboutModal').style.display = 'block';
}

function showGallery() {
  document.getElementById('gallery').style.display = 'block';
}

function openFade() {
  window.open("https://xat.com/fade", "_blank");
}

function openWiki() {
  window.open("https://xat.wiki/Default_avatars/es", "_blank");
}

function openEditme() {
  window.open("https://xat.com/editme", "_blank");
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}
