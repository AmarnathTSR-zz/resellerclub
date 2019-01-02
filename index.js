const axios = require("axios");
const Qs = require("qs");
const resellerclub = {};

resellerclub.connect = ({ clientID, clientSecret }) => {
  return new Promise((resolve, reject) => {
    if (!clientID) {
      reject("`clientID` is mandatory");
    }

    if (!clientSecret) {
      reject("ClientSecret is mandatory");
    } else {
      this.clientID = clientID;
      this.clientSecret = clientSecret;
      resolve("Connection Established");
    }
  });
};

resellerclub.domainSearch = ({ domainname, tlds }) => {
  return new Promise((resolve, reject) => {
    // Optionally the request above could also be done as
    if (!this.clientID) {
      reject("connection not establised");
    } else if (!this.clientSecret) {
      reject("connection not establised");
    } else {
      axios
        .get(`https://domaincheck.httpapi.com/api/domains/available.json`, {
          params: {
            "auth-userid": this.clientID,
            "api-key": this.clientSecret,
            "domain-name": domainname,
            tlds: tlds
          },
          paramsSerializer: function(params) {
            return Qs.stringify(params, { arrayFormat: "repeat" });
          }
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    }
  });
};

module.exports = resellerclub;
