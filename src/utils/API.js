import axios from "axios";


const BASEURL = "https://randomuser.me/api/?results=100&nat=us";

// Export an object with a "search" method that searches the API for the passed query
export default {
  search: function() {
       return axios.get(BASEURL);
  }
};

