const connect = require('./connection');

class data {
    constructor(connect) {
        this.connect = connect;
    }
 
    findEmployees() {
        return this.connect.promise().query(
          'SELECT * from Employee'  
        )
        }

}
