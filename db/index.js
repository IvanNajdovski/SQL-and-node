const { Client } = require("pg");
const client = new Client({
    connectionString: "ivan://ivan_:dime@localhost/fishes-app"
});

client.connect();

module.exports = client;

