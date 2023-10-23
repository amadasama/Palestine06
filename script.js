function showElement(elementId, delay) {
    setTimeout(function() {
        var element = document.getElementById(elementId);
        element.classList.add("visible");
    }, delay);
}

showElement("element1", 1000);
showElement("element2", 1500);
showElement("element3", 3500);
showElement("element4", 4000);
showElement("element5", 6000);
showElement("element6", 6500);