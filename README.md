# Resellerclub API for nodejs

A Resellerclub API helps to integrate domain avaliability search, domain registration and transfer.

<a href="https://www.buymeacoffee.com/amarnath" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

# Install

```js

npm i resellerclub

```

# example

```js
const resellerclub = require("resellerclub");

resellerclub
  .connect({
    clientID: " YOUR CLIENT ID",
    clientSecret: "YOUR CLIENT SECRET"
  })
  .then(res => console.log(res))
  .catch(err => console.log(err));

//  Check Domain Availability

resellerclub
  .domainSearch({ domainname: "ENTER DOMAIN NAME", tlds: ["com", "net", "in"] })
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

# cli

- Install [node](http://nodejs.org/download).
- Run `npm i resellerclub`

# Author

- Amarnath TSR (https://www.amarnath.xyz)

# license

MIT
