// asynchronous  joto para jay async system code likhte hobe and dekbe hobe code jeno block na hoy
const processOrder = (customer) => {
    console.log('processing order for customer 1');

  setTimeout(() =>{
    console.log('cooking is completed');
  },3000);

  console.log('order process for customer 1');
}

console.log('take order for customer 1');
processOrder();
console.log('completed order for customer 1');

