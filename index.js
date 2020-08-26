let map
let bounds
let pageOne, pageTwo, pageThree

/* ***
 * Get page elements on load
 * ***/
window.addEventListener('load', _ => {
    pageOne = document.querySelector('.page-one')
    pageTwo = document.querySelector('.page-two')
    pageThree = document.querySelector('.page-three')
    
    showPageOne()
})

function showPageOne() {
    pageThree.style.display = 'none'
    pageTwo.style.display = 'none'
    pageOne.style.display = 'block'

}

function showPageTwo() {
    pageThree.style.display = 'none'
    pageOne.style.display = 'none'
    pageTwo.style.display = 'block'
}

function showPageThree() {
    pageTwo.style.display = 'none'
    pageOne.style.display = 'none'
    pageThree.style.display = 'block'
}

function submit() {
    alert('map bounds'+ bounds)
    /* TODO:
    * - submit object containing svg / label / bounds
    */
}

function initMap() {
    let styledMapType = new google.maps.StyledMapType(
    [
        {
        elementType: "geometry",
        stylers: [
            {
            color: "#f5f5f5",
            },
        ],
        },
        {
        elementType: "labels",
        stylers: [
            {
            visibility: "off",
            },
        ],
        },
        {
        elementType: "labels.icon",
        stylers: [
            {
            visibility: "off",
            },
        ],
        },
        {
        elementType: "labels.text.fill",
        stylers: [
            {
            color: "#616161",
            },
        ],
        },
        {
        elementType: "labels.text.stroke",
        stylers: [
            {
            color: "#f5f5f5",
            },
        ],
        },
        {
        featureType: "administrative.land_parcel",
        stylers: [
            {
            visibility: "off",
            },
        ],
        },
        {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
            {
            color: "#bdbdbd",
            },
        ],
        },
        {
        featureType: "administrative.locality",
        elementType: "labels.text",
        stylers: [
            {
            visibility: "on",
            },
        ],
        },
        {
        featureType: "administrative.neighborhood",
        stylers: [
            {
            visibility: "off",
            },
        ],
        },
        {
        featureType: "landscape.man_made",
        elementType: "geometry",
        stylers: [
            {
            color: "#ededed",
            },
        ],
        },
        {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
            {
            color: "#eeeeee",
            },
        ],
        },
        {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
            {
            color: "#757575",
            },
        ],
        },
        {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
            {
            color: "#b8f0b4",
            },
        ],
        },
        {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
            {
            color: "#9e9e9e",
            },
        ],
        },
        {
        featureType: "road",
        elementType: "geometry",
        stylers: [
            {
            color: "#ffffff",
            },
        ],
        },
        {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [
            {
            color: "#bfbfbf",
            },
        ],
        },
        {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
            {
            color: "#757575",
            },
        ],
        },
        {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
            {
            color: "#c4c4c4",
            },
        ],
        },
        {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
            {
            color: "#616161",
            },
        ],
        },
        {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
            {
            color: "#9e9e9e",
            },
        ],
        },
        {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
            {
            color: "#6c6c6c",
            },
        ],
        },
        {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
            {
            color: "#eeeeee",
            },
        ],
        },
        {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            {
            color: "#9ed2ee",
            },
        ],
        },
        {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
            {
            color: "#9e9e9e",
            },
        ],
        },
    ],
    { name: "Minimal Map" }
    );
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.3631595, lng: -0.1227972 },
    zoom: 15,
    gestureHandling: "none",
    disableDefaultUI: true
    });

    map.mapTypes.set("minimal_map", styledMapType);
    map.setMapTypeId("minimal_map");
    
    /* ***
    * Get map bounds
    */
    google.maps.event.addListener( map, 'idle', _ => {
        bounds = map.getBounds()
    })    
}



    