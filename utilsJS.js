/**
 * Libreria simple con funciones utiles.
 * @author Audomaro Glez.
 * @createDate 2016.05.08
 * @lastmodifiedBy Audomaro Glez.
 * @lastmodifiedDate 2016.05.08
 * @version 1.0.0
 */
(function (window) {
    'use strict';

    /**
     * Libreria utilsJS
     * @returns {object} Funciones de la libreria.
     */
    function utilsJS() {
        // Contenedor de atributos y funciones.
        var lib = {};

        /**
         * Version.
         */
        lib.version = "1.0.0";

        /**
         * Autor.
         */
        lib.autor = "Audomaro Glez.";

        /**
         * Verifica la conectividad a internet.
         * @method verificarConexionInternet.
         * @returns {boolean} true indica que hay conexion; false que no la hay.
         */
        lib.verificarConexionInternet = function () {
            var xhr = new XMLHttpRequest(),
                check = 'favicon.ico?_=' + Math.floor(1e9 * Math.random());

            xhr.open('HEAD', check, false);

            try {
                xhr.send();

                if (xhr.status >= 200 && xhr.status < 304) {
                    return true;
                } else {
                    return false;
                }
            } catch (e) {
                return false;
            }
        };

        return lib;
    }

    /**
     * Verifica que no se haya definido la libreria con anterioridad.
     */
    if (typeof (window.utilsJS) === 'undefined') {
        window.utilsJS = utilsJS();
        console.info('Libreria agregada, version: ' + window.utilsJS.version + '.');
    } else {
        console.warn('Ya se ha definido la libreria.');
    }
}(window));
