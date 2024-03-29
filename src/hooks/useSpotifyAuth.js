import React, { useEffect, useState } from "react";
import axios from "axios";

const useSpotifyAuth = () => {
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    axios
      .post(process.env.REACT_APP_BACKEND_SERVER+"/spot/spotifyLogin")
      .then((res) => {
        setAccessToken(res.data.accessToken);
        window.history.pushState({}, null, "/");

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return accessToken;
};

export default useSpotifyAuth;
