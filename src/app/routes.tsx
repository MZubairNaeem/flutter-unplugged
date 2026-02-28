import { createBrowserRouter } from "react-router";
import PresentationLayout from "./components/PresentationLayout";
import TitleSlide from "./components/slides/TitleSlide";
import SpeakerSlide from "./components/slides/SpeakerSlide";
import AgendaSlide from "./components/slides/AgendaSlide";
import ComparisonSlide from "./components/slides/ComparisonSlide";
import Flutter2026Slide from "./components/slides/Flutter2026Slide";
import StartupSlide from "./components/slides/StartupSlide";
import CareerSlide from "./components/slides/CareerSlide";
import QASlide from "./components/slides/QASlide";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PresentationLayout,
    children: [
      { index: true, Component: TitleSlide },
      { path: "speaker", Component: SpeakerSlide },
      { path: "agenda", Component: AgendaSlide },
      { path: "comparison", Component: ComparisonSlide },
      { path: "flutter-2026", Component: Flutter2026Slide },
      { path: "startup", Component: StartupSlide },
      { path: "career", Component: CareerSlide },
      { path: "qa", Component: QASlide },
    ],
  },
]);
