import React, { useEffect, useState } from "react";
import axios from "axios";

const useSpotifyAuth = (code) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_SERVER}/spot/spotifyLogin`, {
        code,
      })
      .then((res) => {
        console.log(res)
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        //     remove code from url
        window.history.pushState({}, null, "/");

      })
      .catch((err) => {
        console.log(err);
        // window.location = "/";
      });
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) {return};
    const interval = setInterval(() => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_SERVER}/spot/spotifyRefresh`, {
          refreshToken,
        })
        .then((res) => {
          setAccessToken(res.data.accessToken);
          setExpiresIn(res.data.expiresIn);
        })
        .catch(() => {
          // window.location = "/";
        });

    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn]);

  console.log(accessToken, '::::::', refreshToken, '....', expiresIn)
  return accessToken;
};

export default useSpotifyAuth;
