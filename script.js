function volume_sphere(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get the radius from the input field
    let radius = document.getElementById('radius').value;

    // Parse the radius as a float number
    let r = parseFloat(radius);

    // Get the volume output field
    let volumeField = document.getElementById('volume');

    // Validate the radius input: it should be a non-negative number
    if (isNaN(r) || r < 0) {
        // Set the volume to 'NaN' if the input is invalid
        volumeField.value = 'NaN';
    } else {
        // Calculate the volume of the sphere: V = (4/3) * π * r^3
        let volume = (4 / 3) * Math.PI * Math.pow(r, 3);

        // Set the calculated volume rounded to 4 decimal places in the volume field
        volumeField.value = volume.toFixed(4);
    }
}

// Attach the event listener to the form's submit event
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
