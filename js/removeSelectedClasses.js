const allClasses = document.getElementsByClassName('unlist')[0];
const linksToClasses = allClasses.getElementsByTagName('a');

String.prototype.trimAndLowercaseString = function _() { 
    return this.replace(/\s/g, '').toLowerCase() 
};
removeElement = (element) => { element.parentElement.removeChild(element); }

chrome.storage.sync.get('listOfClasses', response => {
    let classesToRemove = [];
    response.listOfClasses.split(';').forEach(entry => {
        classesToRemove.push(entry.trimAndLowercaseString());
    });

    let listOfElementsToRemove = [];
    for(let link of linksToClasses) {
        if(classesToRemove.includes(link.innerText.trimAndLowercaseString())) {
            let element = link.parentElement.parentElement;
            listOfElementsToRemove.push(element);
        }
    }    
    listOfElementsToRemove.forEach(removeElement);
});
