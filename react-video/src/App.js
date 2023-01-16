import React, { useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Boxlist from "./components/Boxlist";

function App() {
  const videoList = [
    {
      title: "Learn React in 20 Minutes!! (3 projects for beginners)",
      description:
        "Welcome to our new video about 3 React projects for beginners! In this video, we will be showing you how to create three simple but useful React projects that are perfect for those new to the React framework.",
      url: "https://www.youtube.com/embed/rQyB5yA13gE",
      category: "react",
    },
    {
      title: "Learn React in 20 Minutes!! (3 projects for beginners)",
      description:
        "Welcome to our new video about 3 React projects for beginners! In this video, we will be showing you how to create three simple but useful React projects that are perfect for those new to the React framework.",
      url: "https://www.youtube.com/embed/rQyB5yA13gE",
      category: "react",
    },
    {
      title: "Learn React in 20 Minutes!! (3 projects for beginners)",
      description:
        "Welcome to our new video about 3 React projects for beginners! In this video, we will be showing you how to create three simple but useful React projects that are perfect for those new to the React framework.",
      url: "https://www.youtube.com/embed/rQyB5yA13gE",
      category: "react",
    },
  ];

  const category = [
    { category: "All", name: "All Videos" },
    { category: "react", name: "React" },
    { category: "angular", name: "Angular" },
    { category: "vue", name: "Vue" },
  ];
  const [useVideos, setVideos] = useState(videoList);
  const [useCategory, setCategories] = useState("empty");

  const filterHandler = (filteredVideos) => {
    setVideos(filteredVideos);
  };

  const categoryHandler = (category) => {
    setCategories(category);
  };

  return (
    <div className="App ">
      <CssBaseline />
      <Container maxWidth="lg">
        <Intro />
        <header
          filterFunction={filterHandler}
          videos={videoList}
          filteredVideos={useVideos}
          activateCat={categoryHandler}
          className="App-header"
        >
          <Header categories={category} />
        </header>
        <main>
          <Boxlist items={useVideos} title="All Items" />
        </main>
      </Container>
    </div>
  );
}

export default App;
