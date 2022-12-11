const qrCode = new QRCodeStyling({
    width: 280,
    height: 280,
    type: "svg",
    data: "www.linkedin.com/in/kseniia-markiv",
    image: "image2vector400.svg",
    dotsOptions: {
        gradient: { type: "linear", rotation: 0, colorStops: [{ offset: 0, color: "#00DB6D" }] },
        color: "#6a1a4c",
        type: "extra-rounded"
    },
    backgroundOptions: {
        color: "white",
    },
    qrOptions: { typeNumber: "0", mode: "Byte", errorCorrectionLevel: "Q" },
    imageOptions: {
        hideBackgroundDots: false,
        imageSize: 0.4,
        margin: 0
    },
    dotsOptionsHelper: {
        colorType: { single: true, gradient: false },
        gradient: { linear: true, radial: false, color1: "#6a1a4c", color2: "#6a1a4c", rotation: "0" }
    },
    cornersSquareOptions: { type: "", color: "#00DB6D", gradient: null },
    // cornersSquareOptionsHelper: { colorType: { single: true, gradient: false }, gradient: { linear: true, radial: false, color1: "#000000", color2: "#000000", rotation: "0" } },
    cornersDotOptions: { type: "", color: "#0474b4" },
    // cornersDotOptionsHelper: { colorType: { single: true, gradient: false }, gradient: { linear: true, radial: false, color1: "#000000", color2: "#000000", rotation: "0" } },
    // backgroundOptionsHelper: { colorType: { single: true, gradient: false }, gradient: { linear: true, radial: false, color1: "#ffffff", color2: "#ffffff", rotatio: "0" } }
});

qrCode.append(document.getElementById("qrcode"));

document.addEventListener("DOMContentLoaded",
    function(event) {
        function generateQRCode(event) {
            let website = document.getElementById("website").value;
            if (website) {
                let qrcodeContainer = document.getElementById("qrcode");
                qrcodeContainer.innerHTML = "";
                const qrCode = new QRCodeStyling({
                    width: 280,
                    height: 280,
                    data: website,
                    dotsOptions: {
                        gradient: { type: "linear", rotation: 0, colorStops: [{ offset: 0, color: "#00DB6D" }] },
                        color: "#6a1a4c",
                        type: "extra-rounded"
                    },
                    backgroundOptions: {
                        color: "white",
                    },
                    qrOptions: { typeNumber: "0", mode: "Byte", errorCorrectionLevel: "Q" },
                    imageOptions: {
                        hideBackgroundDots: false,
                        imageSize: 0.4,
                        margin: 0
                    },
                    dotsOptionsHelper: {
                        colorType: { single: true, gradient: false },
                        gradient: { linear: true, radial: false, color1: "#6a1a4c", color2: "#6a1a4c", rotation: "0" }
                    },
                    cornersSquareOptions: { type: "", color: "#00DB6D", gradient: null },
                    cornersDotOptions: { type: "", color: "#0474b4" },

                });

                qrCode.append(document.getElementById("qrcode"));
                // qrCode.download({ name: "qr", extension: "svg" });

                document.getElementById("qrcode-container").style.display = "block";
                document.getElementById("my-link").style.display = "none";
                this.textContent = "Your QR Code, please";
            } else {
                alert("Please writing your URL");
            }
        }
        document.getElementById("generateBtn").addEventListener("click", generateQRCode);

    });