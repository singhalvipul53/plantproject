import axios from 'axios';
import {useEffect, useState} from 'react';

function apiHook() {
  const [data, setdata] = useState([]);

  const getData = async path => {
    try {
      const response = await axios.get(path);
      setdata(response.data);
    } catch (e) {
      setdata([]);
    }
  };

  return {getData, data};
}

export default apiHook;
