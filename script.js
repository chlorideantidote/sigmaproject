
const popupOverlay = document.getElementById('popupOverlay');
const popupContent = document.getElementById('popupContent');
const closePopup = document.getElementById('closePopup');


document.querySelectorAll('.btn-open-popup').forEach((button) => {
  button.addEventListener('click', (e) => {
    
    const rect = button.getBoundingClientRect();
    
    const popupWidth = popupContent.offsetWidth || 200;
    const popupHeight = popupContent.offsetHeight || 150;
    const top = rect.bottom + window.scrollY + 5;
    const left = rect.left + window.scrollX + (rect.width / 2) - (popupWidth / 2);
    
    
    popupContent.style.top = top + 'px';
    popupContent.style.left = left + 'px';
    
    
    popupOverlay.style.display = 'block';
  });
});


closePopup.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});



const bottomPanel = document.querySelector('.bottom-panel');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    bottomPanel.classList.add('show');
  } else {
    bottomPanel.classList.remove('show');
  }
});
