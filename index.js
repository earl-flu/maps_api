function initMap() {
  const catanduanes = { lat: 13.7999968, lng: 124.2666656 };
  const municipalities = [
    {
      coords: { lat: 13.586264, lng: 124.236922 },
      municipality: "Virac",
      icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      content: `<h1 style='color:#007EA7;'>Virac is the capital of Catanduanes</h1><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, tempora.<br><br><a href="#">Visit Virac Page</a>`,
    },
    { coords: { lat: 13.606, lng: 124.3 }, municipality: "Bato" },
    { coords: { lat: 13.659, lng: 124.37 }, municipality: "Baras" },
    {
      coords: { lat: 13.7833302, lng: 124.3833318 },
      municipality: "Gigmoto",
    },
    { coords: { lat: 13.873, lng: 124.307 }, municipality: "Viga" },
    { coords: { lat: 13.909, lng: 124.299 }, municipality: "Panganiban" },
    {
      coords: { lat: 13.9333296, lng: 124.2833322 },
      municipality: "Bagamanoc",
    },
    { coords: { lat: 14.046, lng: 124.17 }, municipality: "Pandan" },
    {
      coords: { lat: 13.9833294, lng: 124.1333328 },
      municipality: "Caramoran",
    },
    { coords: { lat: 13.6, lng: 124.1 }, municipality: "San Andres" },
    {
      coords: { lat: 13.637997448, lng: 124.300498798 },
      municipality: "San Miguel",
    },
  ];

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: catanduanes,
  });

  for (let i = 0; i < municipalities.length; i++) {
    addMarker(municipalities[i]);
  }

  function addMarker(props) {
    const marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      title: props.municipality,
    });

    if (props.icon) {
      marker.setIcon(props.icon);
    }

    if (props.content) {
      const infowindow = new google.maps.InfoWindow({
        content: props.content,
        ariaLabel: "Yow",
        // maxWidth:"100",
      });
      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map: map,
        });
      });
    }
  }
}

window.initMap = initMap;
