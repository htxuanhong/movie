import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FooterLayout from "../../components/FooterTheme/FooterLayout";
import { getMovieByTheaterSer } from "../../redux/actions/action";
import { movieService } from "../../services/movieService";
import "./homePage.css";
import MovieCarousel from "./MovieCarousel/MovieCarousel";
import MovieCarouselBanner from "./MovieCarousel/MovieCarouselBanner";
import MovieTabResponsive from "./MovieTabs/MovieTabResponsive";

export default function HomePage() {
  const [movieList, setMovieList] = useState([]);
  const [bannerList, setBannerList] = useState([]);

  const dispatch = useDispatch();

  dispatch(getMovieByTheaterSer());
  console.log("movieList: ", movieList);
  useEffect(() => {
    let fetchMoviesList = async () => {
      let result = await movieService.getMovieList();

      let chunkedList = _.chunk(result.data.content, 8);
      setMovieList(chunkedList);
    };

    fetchMoviesList();
  }, []);

  useEffect(() => {
    let fetchBannerList = async () => {
      let result = await movieService.getMovieListBanner();

      let chunkedBannerList = _.chunk(result.data.content, 1);

      console.log("result", result, "chunkedBannerList", chunkedBannerList);
      setBannerList(chunkedBannerList);
    };
    fetchBannerList();
  }, []);

  return (
    <div>
      <div id="banner_homepage">
        <MovieCarouselBanner chunkedBannerList={bannerList} />
      </div>
      <div className="container mx-auto" style={{ maxWidth: "1000px" }}>
        <div id="carousel_homepage">
          <MovieCarousel chunkedList={movieList} />
        </div>
        <div id="movie-tab" className="">
          <MovieTabResponsive />
        </div>
      </div>
      <FooterLayout />
    </div>
  );
}
