
/**
 * loadscreen implemented on all the table windows, in case there is a slow connection to the database while fetching data, 
 * the user is aware, that they just need to be a little bit more patient with this screen
 * @returns Loadscreen
 */

const Loadscreen = () => {
  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
        <img src="https://pakhuset-odder.dk/oh_booking_frontend/static/img/loading.gif" alt="Loading" style={{ align: 'center' }}/>   
        <h3>Fetching data, wait time ~ 10 sec</h3>
    </div>
  );
};
export default Loadscreen;
