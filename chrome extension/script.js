
document.addEventListener('DOMContentLoaded', function () {
    const enableBtn = document.getElementById('enableBtn');
    const disableBtn = document.getElementById('disableBtn');
  
    enableBtn.addEventListener('click', () => {
      chrome.storage.sync.set({ blockSocialMedia: true }, function () {
        alert('Social media blocking enabled.');
      });
    });
  
    disableBtn.addEventListener('click', () => {
      chrome.storage.sync.set({ blockSocialMedia: false }, function () {
        alert('Social media blocking disabled.');
      });
    });
  });
  