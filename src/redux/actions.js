import axios from "axios";

export const GET_CHARS = "GET_CHARS";
export const SEARCH_CHARS = "SEARCH_CHARS";

export const getChars = () => {
  return async (dispatch) => {
    const pages = [
      "https://rickandmortyapi.com/api/character/?page=1",
      "https://rickandmortyapi.com/api/character/?page=2",
      "https://rickandmortyapi.com/api/character/?page=3",
      "https://rickandmortyapi.com/api/character/?page=4",
      "https://rickandmortyapi.com/api/character/?page=5",
      "https://rickandmortyapi.com/api/character/?page=6",
    ];

    const response = await axios.all(pages.map((page) => axios.get(page)));
    const chars = response.flatMap((res) => res.data.results);
    console.log(chars);
    return dispatch({
      type: GET_CHARS,
      payload: chars,
    });
  };
};

export const searchChars = (name) => {
  return async (dispatch) => {
    let searchChars = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    return dispatch({
      type: SEARCH_CHARS,
      payload: searchChars.data.results,
    });
  };
};
