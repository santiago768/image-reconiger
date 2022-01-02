Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
Webcam.attach("#camera");

function takepic() {
    Webcam.snap(function (campic) {
        document.getElementById("result").innerHTML = '<img id="pic" src="' + campic + '">'
    })
}
console.log("ml5 version is ", ml5.version)
model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/DyzyfOcyp/model.json", modelloded)

