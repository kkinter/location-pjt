import React, { useEffect, useState } from "react";
import Axios from "axios";

function Testing() {
  const [count, setCount] = useState(1);
  // useEffect(() => {
  //   console.log("First use Effect");
  // }, []);

  useEffect(() => {
    console.log(`The current count is : ${count}`);
  }, [count]);

  function IncreaseCount() {
    setCount(current => current + 1);
  }

  function DecreaseCount() {
    setCount(current => current - 1);
  }

  // const response = Axios.get("http://127.0.0.1:8000/api/listings/");
  // console.log(response);

  // async function GetAllListings() {
  //   const response = await Axios.get("http://127.0.0.1:8000/api/listings/");
  //   console.log(response.data);
  // }
  // GetAllListings();

  const [allListings, setAllListings] = useState([]);
  const [dataisLoading, setDataisLoading] = useState(true);

  useEffect(() => {
    // async function GetAllListings() {
    //   const response = await Axios.get("http://127.0.0.1:8000/api/listings/");
    //   console.log(response.data);
    //   setAllListings(response.data);
    // }

    const source = Axios.CancelToken.source();

    async function GetAllListings() {
      try {
        const response = await Axios.get(
          "http://127.0.0.1:8000/api/listings/",
          { cancelToken: source.token }
        );
        console.log(response.data);
        setAllListings(response.data);
        setDataisLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    }
    GetAllListings();
    return () => {
      source.cancel();
    };
  }, []);

  if (dataisLoading === false) {
    console.log(`Array : ${allListings[0].location}`);
  }

  if (dataisLoading === true) {
    return <h1>Loading...</h1>;
  }

  //

  return (
    <>
      <h1>The current count is : {count}</h1>
      <button onClick={IncreaseCount}>increase</button>
      <button onClick={DecreaseCount}>decrease</button>
    </>
  );
}

export default Testing;
