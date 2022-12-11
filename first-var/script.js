new QRCode(document.getElementById("qrcode"), {
    text: "www.linkedin.com/in/kseniia-markiv",
    width: 260,
    height: 260,
    colorDark: "#0707a0e0",
    // colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});


document.addEventListener("DOMContentLoaded",
    function(event) {
        function generateQRCode(event) {
            let website = document.getElementById("website").value;
            if (website) {
                let qrcodeContainer = document.getElementById("qrcode");
                qrcodeContainer.innerHTML = "";
                var qrcode = new QRCode(document.getElementById("qrcode"), {
                    text: website,
                    colorDark: "#0707a0e0",
                    // colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H
                });
                // new QRCode(qrcodeContainer, website);

                document.getElementById("qrcode-container").style.display = "block";
                this.textContent = "Your QR Code, please";
            } else {
                alert("Please enter a valid URL");
            }
        }
        document.getElementById("generateBtn").addEventListener("click", generateQRCode);

    }
);