save = () => {
    let listOfClasses = document.getElementById('listOfClasses').value;
    chrome.storage.sync.set({
        listOfClasses: listOfClasses
    }, () => {   
        let status = document.getElementById('status');
        status.textContent = 'Promjene su spremljene. Osvježite stranicu.';
        setTimeout(() => { status.textContent = ''; }, 2000);
    });
  }
  
load = () => {
    chrome.storage.sync.get('listOfClasses', response => {
        let listOfClasses = response.listOfClasses;
        document.getElementById('listOfClasses').value = listOfClasses ? listOfClasses : '';
    });
}

reset = () => {
    document.getElementById('listOfClasses').value = '';
    chrome.storage.sync.remove('listOfClasses');
}

document.addEventListener('DOMContentLoaded', load);
document.getElementById('save').addEventListener('click', save);
document.getElementById('reset').addEventListener('click', reset);
