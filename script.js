document.getElementById('trackButton').addEventListener('click', async () => {
    const trackingNumber = document.getElementById('trackingNumber').value;
    const trackingInfo = document.getElementById('trackingInfo');

    if (trackingNumber.trim() === "") {
        trackingInfo.textContent = "Please enter a tracking number.";
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/track/${trackingNumber}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        trackingInfo.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        trackingInfo.textContent = `Error: ${error.message}`;
    }
});
