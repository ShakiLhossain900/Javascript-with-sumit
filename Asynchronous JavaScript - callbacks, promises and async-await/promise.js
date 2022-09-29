// todays plan to need complete the task of this video seris learn with sumit

//callback ke reduce korar jonnu amara promise use korbu


//this is one promise 
const hasMeeting = false;
const metting = new Promise((resolve, reject) => {
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

console.log("hey shakil i am started working ");
metting
  .then((res) => {
    console.log(JSON.stringify(res));
  })
  .catch((err) => {
    console.log(err.message);
  });
console.log("hey i am the last log");
