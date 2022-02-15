import React, { useEffect, useState } from "react";
import axios from "axios";

const useSpotifyAuth = () => {
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    axios
      .post(process.env.REACT_APP_BACKEND_SERVER+"/spot/spotifyLogin")
      .then((res) => {
        console.log(res)
        setAccessToken(res.data.accessToken);
        //  remove code from url
        window.history.pushState({}, null, "/");

      })
      .catch((err) => {
        console.log(err);
        // window.location = "/";
      });
  }, []);
  return accessToken;
};

export default useSpotifyAuth;
