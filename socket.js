const net = require('net');
const { queryHotelPrices } = require('./config/database'); 


const server = net.createServer((socket) => {
    console.log('Client connected');

    socket.on('data', (data) => {
        const { hotel_location, hotel_roomtype, days_of_stay } = JSON.parse(data);

        
        queryHotelPrices(hotel_location, hotel_roomtype, days_of_stay)
            .then((hotels) => {
                
                hotels.forEach((hotel) => {
                    socket.write(JSON.stringify(hotel) + '\n');
                });
            })
            .catch((error) => {
                console.error('Error querying database:', error);
            });
    });

    
    socket.on('end', () => {
        console.log('Client disconnected');
    });
});


const PORT = 9999;
server.listen(SOCKET_PORT, () => {
    console.log(`Socket server listening on port ${PORT}`);
});
