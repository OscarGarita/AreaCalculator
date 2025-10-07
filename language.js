

console.log(navigator.languages);
const idioma = navigator.language.split('-')[0]; // "es-CR" -> "es", "en-US" -> "en"


const resources = {
    es: {
        translation: {
            "title": "Calculadora de Área",
            "area-name": "Nombre del Área",
            "button": "Limpiar",
            "area": "Área",
            "length": "Largo",
            "width": "Ancho",
            "delete": "Borrar"

        }
    }
};

i18next.init({
    lng: navigator.language.startsWith('es') ? 'es' : 'en', // Detect language,
    resources
}, (err, t) => {
    if (err) return console.error(err);
    if (idioma === 'es') {
        document.getElementById('title').innerText = t('title');
        document.getElementById('txtName').placeholder = t('area-name');
        document.getElementById('btnClean').innerText = t('button');

        document.getElementById('txtArea').innerText = t('area');
        document.getElementById('txtLength').placeholder = t('length');
        document.getElementById('txtWidth').placeholder = t('width');

        document.getElementById('tableLength').innerHTML = t('length');
        document.getElementById('tableWidth').innerHTML = t('width');

        document.getElementById('txtDelete').innerText = t('delete');
    }
});
