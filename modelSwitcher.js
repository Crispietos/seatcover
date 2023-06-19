// Inicjalizacja API Sketchfab
var iframe = document.getElementById('api-frame');
var version = '1.0.0';
var client = new Sketchfab(version, iframe);

// Funkcja do ładowania modelu na podstawie jego identyfikatora
function loadModel(id) {
    client.init(id, {
        success: function onSuccess(api) {
            api.start();
            api.addEventListener('viewerready', function() {
                console.log('Viewer is ready');
            });
        },
        error: function onError() {
            console.log('Viewer error');
        }
    });
}

// Dodanie zdarzenia onchange do elementu select
document.getElementById('material-select').addEventListener('change', function() {
    var material = this.value;
    if (material === 'synthetic') {
        loadModel('88add7a8826b4ba78452d5a4eab2ff73'); // Identyfikator modelu syntetycznego
    } else if (material === 'leather') {
        loadModel('aad2026933fe472b9a122a352b713a12'); // Identyfikator modelu skórzany
    } else if (material === 'cloth') {
        loadModel('e08defaa5f20428f81a61a05886e1034'); // Identyfikator modelu z tkaniny
    }
});
