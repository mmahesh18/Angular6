function getCustomers(){

        let promise = new Promise(
                function (resolve, reject){
                    console.log("Getting customers");
                    // Emulate an async server call here
                    setTimeout(function(){
                        let success = true;
                        if (success){
                            resolve( "Sriram Murthy"); 
                            // got the customer
                        }else{
                            reject("Can't get customers");
                        }
                    },2000);
                }
        );
        return promise;
    }

    function getOrders(customer){

        let promise =  new Promise(
                function (resolve, reject){

                    // Emulate an async server call here
                    setTimeout(function(){
                        let success = true;
                        if (success){
                            resolve(
                             `Found the order 123 
                             for ${customer}`); 
                            // got the order
                        }else{
                            reject("Can't get orders");
                        }
                    },2000);
                }
        );
        return promise;
    }

    getCustomers()
            .then((cust) => {console.log(cust);return cust;})
            .then((cust) => getOrders(cust))
            .then((order) => console.log(order))
            .catch((err) => console.error(err));
            
    console.log("Chained getCustomers and getOrders. Waiting for results");