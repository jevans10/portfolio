document.addEventListener('DOMContentLoaded', function () {
    const openPdfButton = document.getElementById('openPdfButton');
    const pdfPopup = document.getElementById('pdfPopup');
    const closeBtn = document.querySelector('.close-btn');
    const pdfViewer = document.getElementById('pdfViewer');

    openPdfButton.addEventListener('click', function () {
        pdfViewer.src = 'path/to/your/pdf.pdf'; // Replace with your PDF file path
        pdfPopup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function () {
        pdfPopup.style.display = 'none';
        pdfViewer.src = ''; // Clear the PDF src to stop loading when closed
    });

    window.addEventListener('click', function (event) {
        if (event.target === pdfPopup) {
            pdfPopup.style.display = 'none';
            pdfViewer.src = ''; // Clear the PDF src to stop loading when closed
        }
    });
});
