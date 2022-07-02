const os = require("os");

// info about the current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in secs
console.log(`the system uptime in seconds is ${os.uptime()}`);
