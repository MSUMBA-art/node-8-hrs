const os = require("os")

// infor about current user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds
console.log(`The sysyem has been running for: ${os.uptime()} minutes`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
   network:os.networkInterfaces(),
   version:os.version(),
}

console.log(currentOS);