import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{ lat: 33.090479, lng: -90.797305 }}
    >
      <Marker position={{ lat: 40.744666, lng: -73.987432 }} />
      <Marker position={{ lat: 40.3291028, lng: -74.5743204 }} />
      <Marker position={{ lat: 33.090479, lng: -96.797305 }} />
      <Marker position={{ lat: 41.9087827, lng: -72.6134075 }} />
      <Marker position={{ lat: 28.1696005, lng: -82.7489345 }} />
      <Marker position={{ lat: 38.9440773, lng: -77.414739 }} />
    </GoogleMap>
  ))
);

const ContactComponent = () => {
  return (
    <div>
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCxZlpDt6yJWXjHqVQYa__pHusnmbY7YSo&libraries=places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `800px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default ContactComponent;
