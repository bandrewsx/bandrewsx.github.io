// Load the Google AdSense script
function loadGoogleAdsense() {
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-ad-client", "ca-pub-8378518272728116"); // Replace with your AdSense Publisher ID
    document.head.appendChild(script);
}

// Function to create a hidden ad unit
function createHiddenAd() {
    const ad = document.createElement('ins');
    ad.className = 'adsbygoogle';
    ad.style.display = 'none'; // Hide the ad
    ad.style.width = '300px';
    ad.style.height = '250px';
    ad.setAttribute('data-ad-client', 'ca-pub-8378518272728116'); // Your AdSense Publisher ID
    ad.setAttribute('data-ad-slot', '1234567890'); // Replace with your actual ad slot ID
    document.body.appendChild(ad);
    (adsbygoogle = window.adsbygoogle || []).push({});
}

// Load Google AdSense script and set interval to create ads
loadGoogleAdsense();
setInterval(() => {
    for (let i = 0; i < 5; i++) {
        createHiddenAd();
    }
}, 1000); // Adds 5 hidden ads every second
