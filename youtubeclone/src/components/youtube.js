import { useState } from "react";
import axios from "axios";
const Youtube = () => {
  const [vidList, setVidList] = useState([]);
  const [input, setInput] = useState("");

  const fetchVideos = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&key=${process.env.REACT_APP_API_KEY}`
      );
      // debugger
      setVidList(res.data);
    } catch (error) {
      setVidList([]);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    // debugger;
    fetchVideos();
    setInput("");
  };

  return (
    <section>
      <input onChange={handleChange} value={input} type="text" placeholder="Search..." />

      <button onClick={handleClick} className="searchbutton" type="submit">
        Search
      </button>
      <div className="noresultbox">
        <p>Please Submit a Search Above</p>
      </div>
    </section>
  );
};

export default Youtube;
