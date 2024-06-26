import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaNetworkWired } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import "./Experiences.css";

export function Experiences() {
  return (
    <section
      id="experiences"
      className="text-white p-4 h-screen text-center sm:text-start flex flex-col justify-center items-center"
    >
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work font-bold"
          date="2023 - presente"
          iconStyle={{ background: "black", color: "#7DD3FC" }}
          icon={<FaNetworkWired />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title text-sky-300">
            NicNet Fibra Óptica
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Cravinhos</h4>
          <p>Desenvolvedor Fullstack</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work font-bold"
          date="2022 - presente"
          iconStyle={{ background: "black", color: "#7DD3FC" }}
          icon={<FaBookOpen />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title text-sky-300">
            Universidade de Ribeirão Preto
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Ribeirão Preto</h4>
          <p className="decoration-blue-500">Engenharia de Software</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}
