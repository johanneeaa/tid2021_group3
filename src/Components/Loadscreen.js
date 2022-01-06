
// Loadscreen, only implimented in transfer table, as that is slow to fecth/calculate the data
// loading .gif is fetched from internet, might be deleted at some point, should be local

const Loadscreen = () => {
  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
        <img src="https://pakhuset-odder.dk/oh_booking_frontend/static/img/loading.gif" alt="Loading" style={{ align: 'center' }}/>   
        <h1>Fetching data...</h1>
    </div>
  );
};
export default Loadscreen;
