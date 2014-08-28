$(document).ready(function() {
    $("#gumb").click(function() {
        html2canvas(document.body, {
            onrendered: function(canvas) {
                document.body.appendChild(canvas);
                Canvas2Image.saveAsJPEG(canvas);
            }
        });
    });
});