import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageTitleArea from "../components/Common/PageTitleArea";
import ServiceDetailsContent from "../components/Services/ServiceDetailsContent";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import OurLovingClients from "../components/Common/OurLovingClients";
import Footer from "../components/Layouts/Footer";

class ServiceDetails extends Component {
  state = {
    para1: {
      caption: "STRATEGY",
      h1: "Go beyond the expected",
      p1: "TOGETHER WE ADVANCE – Let's Go Beyond the Expected \n Redefining the impossible, Redesigning the future —with the guarantee of expertise ",
      // cap: "expertise",
      list1: [
        "Futurism & innovation",
        "New business model & concept development",
        "Concept-to-commercialization",
        "Product strategy",
      ],
      list2: [
        "Customer experience strategy",
        "Omni-channel commerce",
        "Enterprise architecture",
        "Digital strategy",
      ],
      image: "",
    },
    para2: {
      caption: "OUR APPROACH            ",
      h1: "ACTION – We Take you There ",
      p1: "Midalta Innovation doesn't just talk about where your business should be; we take the hands-on approach of making it a reality without the excuses. \n Every step of the way, we keep the most critical data and trends that will impact your business needs. Therefore, we specialize in crafting a complete experience that involves connecting your stakeholders and maximizing your possibilities. \n We employ this approach because it will encourage responsible decision-making to support and maintain alignment. \n This experiential approach fosters vital decisions and sustainable alignment. From there, we'll co-create actionable plans and stay connected all the way through to real-world results.",
      image: "expertise",
    },
    para3: {
      caption: "",
      h1: "MOTION- WE CONFIDENTLY GUIDE YOU THROUGH AMBIGUITY AND RISK",
      p1: "We connect with where you are because we have experienced it. Making intelligent, future-forward choices can be confusing amidst limited valuable inputs and empty insights. \n\n Midalta Innovation's team of consultants are devoted to providing deep, cross-industry expertise with a courageous point of view to navigate your barriers and establish a clear path forward.",
      image: "expertise",
    },
    list: {
      heading: "HOW WE STARTEGZIE WITH GUARANTEED EXPERTISE – Plan, Grow, Adapt",
      item1: {
        icon: "",
        title: "Plan",
        text: "Grasp future opportunities and design a flexible roadmap to welcome innovation and growth.",
      },
      item2: {
        icon: "",
        title: "Grow",
        text: "Pinpointing focus and enabling rapid, revenue-driving transformations.",
      },
      item3: {
        icon: "",
        title: "Adapt",
        text: "Modernize teams and capabilities for long-term resilience and competitive advantage.",
      },
    },
  };
  render() {
    return (
      <>
        <Navbar />

        <PageTitleArea pageTitle="Strategy" />

        <ServiceDetailsContent data={this.state} />

        {/* <OurLovingClients /> */}

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
