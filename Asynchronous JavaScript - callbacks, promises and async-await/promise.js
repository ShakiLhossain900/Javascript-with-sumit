// todays plan to need complete the task of this video seris learn with sumit

//callback ke reduce korar jonnu amara promise use korbu

//this video i need to complete tonight

// const hasMeeting = false;
// const metting = new Promise((resolve, reject) => {
//   if (!hasMeeting) {
//     const mettingDetails = {
//       name: "Technical Meeting",
//       location: "Google Meet",
//       time: "10.00 PM",
//     };
//     resolve(mettingDetails);
//   } else {
//     reject(new Error("meeting already scheduled"));
//   }
// });

// metting
//   .then((res) => {
//     console.log(JSON.stringify(res));
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

//   console.log("hello");

const hasMeeting = false;
const metting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const MeetingDetails = {
      name: "technical meeting",
      location: "ss-blockChain-it",
      time: new Date(),
    };

    resolve(MeetingDetails);
  } else {
    reject(new Error("Invalid meeting!"));
  }
});

console.log("hey shakil i am started working ");
metting
.then((res) => {
  console.log(JSON.stringify(res));
})
.catch((err) => {
    console.log(err.message);
})
console.log("hey i am the last log");
