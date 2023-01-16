import React, { useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Boxlist from "./components/Boxlist";

const clientTheme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#04691f",
      darker: "#053e85",
    },
    secondary: {
      main: "#04691f",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

function App() {
  const videoList = [
    {
      title: "Vue.js Course for Beginners [2021 Tutorial]",
      description:
        "Learn Vue 3 by in this full course. Vue.js is an open-source model–view–view model front end JavaScript framework for building user interfaces and single-page applications.",
      url: "https://www.youtube.com/embed/FXpIoQ_rT_c",
      category: "vue",
    },
    {
      title: "Learn React in 20 Minutes!! (3 projects for beginners)",
      description:
        "Welcome to our new video about 3 React projects for beginners! In this video, we will be showing you how to create three simple but useful React projects that are perfect for those new to the React framework.",
      url: "https://www.youtube.com/embed/rQyB5yA13gE",
      category: "react",
    },
    {
      title:
        "Angular for Beginners Course [Full Front End Tutorial with TypeScript]",
      description:
        "Learn Angular in this complete course for beginners. First you will learn the basics of Typescript and then you will learn about important Angular concepts such as binding, dependency injection, forms, routing, and more. ",
      url: "https://www.youtube.com/embed/3qBXWUpoPHo",
      category: "angular",
    },
    {
      title: "Vue.js Course for Beginners [2021 Tutorial]",
      description:
        "Learn Vue 3 by in this full course. Vue.js is an open-source model–view–view model front end JavaScript framework for building user interfaces and single-page applications.",
      url: "https://www.youtube.com/embed/FXpIoQ_rT_c",
      category: "vue",
    },
    {
      title: "Learn React in 20 Minutes!! (3 projects for beginners)",
      description:
        "Welcome to our new video about 3 React projects for beginners! In this video, we will be showing you how to create three simple but useful React projects that are perfect for those new to the React framework.",
      url: "https://www.youtube.com/embed/rQyB5yA13gE",
      category: "react",
    },
    {
      title:
        "Angular for Beginners Course [Full Front End Tutorial with TypeScript]",
      description:
        "Learn Angular in this complete course for beginners. First you will learn the basics of Typescript and then you will learn about important Angular concepts such as binding, dependency injection, forms, routing, and more. ",
      url: "https://www.youtube.com/embed/3qBXWUpoPHo",
      category: "angular",
    },
    {
      title: "Learn React in 20 Minutes!! (3 projects for beginners)",
      description:
        "Welcome to our new video about 3 React projects for beginners! In this video, we will be showing you how to create three simple but useful React projects that are perfect for those new to the React framework.",
      url: "https://www.youtube.com/embed/rQyB5yA13gE",
      category: "react",
    },
    {
      title:
        "Angular for Beginners Course [Full Front End Tutorial with TypeScript]",
      description:
        "Learn Angular in this complete course for beginners. First you will learn the basics of Typescript and then you will learn about important Angular concepts such as binding, dependency injection, forms, routing, and more. ",
      url: "https://www.youtube.com/embed/3qBXWUpoPHo",
      category: "angular",
    },
    {
      title: "Vue.js Course for Beginners [2021 Tutorial]",
      description:
        "Learn Vue 3 by in this full course. Vue.js is an open-source model–view–view model front end JavaScript framework for building user interfaces and single-page applications.",
      url: "https://www.youtube.com/embed/FXpIoQ_rT_c",
      category: "vue",
    },
  ];

  const category = [
    { value: "-1", name: "All Videos" },
    { value: "react", name: "React" },
    { value: "angular", name: "Angular" },
    { value: "vue", name: "Vue" },
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
      <ThemeProvider theme={clientTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Intro />
          <header className="App-header">
            <Header
              allCategories={category}
              filterFunction={filterHandler}
              filterCat={categoryHandler}
              videos={videoList}
            />
          </header>
          <main>
            <Boxlist items={useVideos} title="All Items" />
          </main>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
