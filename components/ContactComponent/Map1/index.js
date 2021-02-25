import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  import styles from "../contact.module.css";
  
  
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap defaultZoom={5} defaultCenter={{ lat: 17.4291, lng: 78.4541 }}>
        <Marker position={{ lat: 17.4291, lng: 78.4541 }} />
        <Marker position={{ lat: 12.9889251, lng: 77.6871631 }} />
      </GoogleMap>
    ))
  );
  
  const ContactComponent = () => {
    return (
      <> 
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCxZlpDt6yJWXjHqVQYa__pHusnmbY7YSo&libraries=places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `500px`}} />}
            mapElement={<div style={{ height: `100%` }} />}
            
          />  
      </>
    );
  };
  
  export default ContactComponent;
  