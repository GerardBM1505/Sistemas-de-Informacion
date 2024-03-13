function generarQR() {
    const nombre = document.getElementById('Nombre').value;
    const apellido = document.getElementById('Apellido').value;
    const numeroCuenta = document.getElementById('NumeroCuenta').value;
    const carrera = document.getElementById('Carrera').value;

    const datosCompletos = `${nombre}\n${apellido}\n${numeroCuenta}\n${carrera}`;

    const contenedorQr = document.getElementById('qrCode');

    contenedorQr.innerHTML = '';

    const QR = new QRCode(contenedorQr, {
        text: datosCompletos,
        width: 250,
        height: 250
    });
}
