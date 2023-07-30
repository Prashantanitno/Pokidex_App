import { Box, Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import axios from "axios";
import Loading from "../components/Loading";
import "../index.scss";
import { Input } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState();
  const [mainUrl, setMainUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=500`
  );

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setMainUrl(url);
        // console.log(
        //   "this is the next url inside teh handle function --> ",
        //   url
        // );
        setLoading(true);
        // setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    axios.get(mainUrl).then((res) => {
      const result = res.data;
      // console.log(
      //   "this is the main data ---> result of the first pai ",
      //   result.next
      // );
      setUrl(result.next);

      const details = result.results;
      details.map((item, index) => {
        // console.log("this is the second details api url ", item);
        axios.get(item.url).then((res) => {
          // return {
          //   res:res,hes
          // }
          console.log(res.data.id);
          const obj = {
            id: res.data.id,
            name: res.data.name,
            height: res.data.height,
            weight: res.data.weight,
            type: res.data.types[0].type.name,
          };

          // console.log(obj);d

          setData((prev) => [...prev, obj]);
        });
      });

      // basically appending in the prev data
      // setData((prev) => [...prev, ...result]);
      setLoading(false);
    });
  }, [mainUrl, url]);

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, [handelInfiniteScroll]);

  // console.log("------------------------> ", data);

  return (
    <Box>
      <Box mt={3}>
        <Typography className="pro-heading" variant="h4">
          PokeDex Cards
        </Typography>
      </Box>
      <Box>
        <Box sx={{ backgroundColor: "white" , width:"15%" }}>
          <form>
            <Input
              placeholder="Enter your name"
              fullWidth={false}
              color="primary"
              variant="outlined"
            />
          </form>
        </Box>
          <SearchIcon/>
      </Box>
      <Cards pokeInfo={data} />
      {loading && <Loading />}
    </Box>
  );
};

export default Home;


