// import Axios from "./Axios"
// import SummaryApi from "../common/SummaryApi"

// const fetchUserDetails = async()=>{
//     try {
//         const response = await Axios({
//             ...SummaryApi.userDetails
//         })
//         return response.data
//     } catch (error) {
//         console.log(error)
//     }
// }

// export default fetchUserDetails

import Axios from "./Axios";
import SummaryApi from "../common/SummaryApi";

const fetchUserDetails = async () => {
  try {
    const response = await Axios({
      ...SummaryApi.userDetails,
      withCredentials: true, // ✅ Ensures cookies (accessToken) are sent with the request
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    return null; // ✅ Return null to handle errors gracefully
  }
};

export default fetchUserDetails;
