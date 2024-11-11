// ads.js

// Function to load an ad script dynamically
function loadAdScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
}

// Load Media.net and PropellerAds scripts in hidden divs
function loadInvisibleAds() {
    for (let i = 0; i < 5; i++) {
        // Create container divs for ads
        const mediaNetAdDiv = document.createElement('div');
        mediaNetAdDiv.className = "hidden-ad media-net-ad";
        document.body.appendChild(mediaNetAdDiv);

        const propellerAdDiv = document.createElement('div');
        propellerAdDiv.className = "hidden-ad propeller-ad";
        document.body.appendChild(propellerAdDiv);

        // Load ads
        mediaNetAdDiv.innerHTML = `<ins class="mediaad" data-width="300" data-height="250"></ins>`;
        propellerAdDiv.innerHTML = `<ins class="propellerad" style="display:inline-block;width:300px;height:250px"></ins>`;
    }
}

// Function to run invisible ads every second
setInterval(() => {
    loadInvisibleAds();
}, 1000);

// Load ad network scripts (replace YOUR_MEDIA_NET_ID and YOUR_ZONE_ID)
loadAdScript("https://contextual.media.net/dmedianet.js?cid=YOUR_MEDIA_NET_ID");
loadAdScript("https://propellerads.com/api/v1/ads.js?zone_id=YOUR_ZONE_ID");
