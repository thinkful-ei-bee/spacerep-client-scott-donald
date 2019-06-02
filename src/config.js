export default {
<<<<<<< HEAD
  //API_ENDPOINT: "https://afternoon-cove-84498.herokuapp.com/api", // the local version "http://localhost:8000/api",
  API_ENDPOINT: "http://localhost:8000/api",
  TOKEN_KEY: "90820496-6a8f-48ca-8f6b-6baedcb3d027" // local version  "anyOtherToken"
=======
  API_ENDPOINT: "https://afternoon-cove-84498.herokuapp.com/api", // the local version "http://localhost:8000/api",
  TOKEN_KEY: process.env.REACT_APP_API_KEY // local version  "anyOtherToken"
>>>>>>> e70b04b98355469584ecdbf704382538c1465e77
};
