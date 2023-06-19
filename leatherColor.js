// Funkcja konwertująca wartość koloru heksadecymalnego na RGB
function hexToRgb(hex) {
    var validHex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hex);
    if (!validHex) {
        console.error('Nieprawidłowa wartość koloru:', hex);
        return null;
    }

    hex = hex.replace('#', '');

    if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(hex.substr(0, 2), 16);
    var g = parseInt(hex.substr(2, 2), 16);
    var b = parseInt(hex.substr(4, 2), 16);

    return { r: r, g: g, b: b };
}

// Funkcja ustawiająca kolor materiału
function setColor(color) {
    if (color === null || typeof color === 'undefined') {
        console.error('Nieprawidłowa wartość koloru:', color);
        return;
    }

    // Pobierz listę materiałów
    apiInstance.getMaterialList(function(err, materials) {
        if (!err) {
            // Iteruj przez każdy materiał i ustaw kolor
            materials.forEach(function(material) {
                if (material.channels && material.channels.AlbedoPBR) {
                    material.channels.AlbedoPBR.enable = true;
                    material.channels.AlbedoPBR.value = color;
                    apiInstance.setMaterial(material);
                }
            });
        } else {
            console.error('Błąd pobierania listy materiałów:', err);
        }
    });
}

// Funkcja obsługująca kliknięcie w przyciski kolorów
function handleColorButtonClick(color) {
    var parsedColor = hexToRgb(color);
    setColor(parsedColor);
}

// Dodanie zdarzeń onclick do przycisków kolorów
document.getElementById('red').addEventListener('click', function(event) {
    event.preventDefault();
    handleColorButtonClick('#ff0000');
});

document.getElementById('green').addEventListener('click', function(event) {
    event.preventDefault();
    handleColorButtonClick('#00ff00');
});

document.getElementById('blue').addEventListener('click', function(event) {
    event.preventDefault();
    handleColorButtonClick('#0000ff');
});

document.getElementById('yellow').addEventListener('click', function(event) {
    event.preventDefault();
    handleColorButtonClick('#ffff00');
});

document.getElementById('purple').addEventListener('click', function(event) {
    event.preventDefault();
    handleColorButtonClick('#800080');
});

document.getElementById('pink').addEventListener('click', function(event) {
    event.preventDefault();
    handleColorButtonClick('#ffc0cb');
});

document.getElementById('indigo').addEventListener('click', function(event) {
    event.preventDefault();
    handleColorButtonClick('#4b0082');
});

document.getElementById('gray').addEventListener('click', function(event) {
    event.preventDefault();
    handleColorButtonClick('#808080');
});

document.getElementById('black').addEventListener('click', function(event) {
    event.preventDefault();
    handleColorButtonClick('#000000');
});
