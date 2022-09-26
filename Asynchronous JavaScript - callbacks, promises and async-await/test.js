//Synchronous = happens at the same time. Asynchronous = doesn't happen at the same time. With synchronous learning, participants can receive immediate feedback.


// // asynchronous  joto para jay async system code likhte hobe and dekbe hobe code jeno block na hoy
// const processOrder = (customer) => {
//     console.log('processing order for customer 1');

//   setTimeout(() =>{
//     console.log('cooking is completed');
//   },3000);

//   console.log('order process for customer 1');
// }

// console.log('take order for customer 1');
// processOrder();
// console.log('completed order for customer 1');





//asynchronous callbacks              
const takeOrder = (customer,callback) => {
    console.log(`take order for ${customer}`);
    callback(customer)
}

const processOrder = (customer,callback) =>{
    console.log(`processing order for ${customer} `);


    //scync
    setTimeout(()=>{
        console.log(`cooking completed`);
        console.log(`order procesed for ${customer} `);
        callback(customer)
    },3000);
   
}
const completedOrder = (customer)=>{
    console.log(`completed order ${customer}`);
}

takeOrder('customer 1',(customer)=>{
    processOrder(customer, (customer)=>{
        completedOrder(customer)
    })
})