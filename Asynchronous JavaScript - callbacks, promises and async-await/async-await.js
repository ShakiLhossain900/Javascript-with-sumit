// //first function ta chilo sync than amara async keyword use kore ata async korlam tokhon ata akta promise er vitor akta object return korlo
// async function friendlyFunciton() { 
//     //return Promise.resolve('hello shakil!');
//     return `hello`;
  
// }
// console.log(friendlyFunciton()); 



//practice async await 
//this is one promise 
const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
  if (hasMeeting) {
    const MeetingDetails = {
      name: "technical meeting",
      location: "ss-blockChain-it",
      time: "10th of december",
    };

    resolve(MeetingDetails);
  } else {
    reject(new Error("Invalid meeting!"));
  }
});

//using another promise, return the promise 
const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time} `;
  return Promise.resolve(calender);
};


// meeting
//   .then(addToCalender)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
// console.log("hello");


//than block y chain na kore async await use kore korata best 
async function myMeeting (){
    // awit means here i need to wait meeting er data golo powa porjonto calender y jaite parbe na 
    //than calender await y means addTocalender y data na asa poorjonto log korbe na 
   try{
    
    const meetingDetails = await meeting;
    const calender = await addToCalender(meetingDetails);
    console.log(calender);
  
   } catch{
    console.log(`Someting wrong happened: `);
   }
}

myMeeting()

console.log("hello ");