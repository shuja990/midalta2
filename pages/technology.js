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
      caption: "TECHNOLOGY",
      h1: "Analyze, Engineer, and Generate ",
      p1: "We spend the time to learn from your data and become your business architect. For you, we create phenomenal digital experiences by maximizing new tech. Midalta Innovation blends design, engineering, and analytics expertise to help you build the future for your business.",
      cap: "expertise",
      list1: [
        "Mobile and Web Development",
        "Web Development",
        "Product engineering",
        "Startup Strategy",
      ],
      list2: [
        "UX/UI design",
        "Data architecture",
        "Project Management",
        "Data and Analytics",
      ],
      image: "",
    },
    para2: {
      caption: "Modernize. Accelerate. Transform.",
      h1: "MIDALTA INNOVATION – WE MODERNIZE. ACCELERATE. TRANSFORM.",
      p1: "Midalta Innovation has incorporated the modernized approach to further accelerate customers' migration to the era of the cloud computing service. You can temporarily relocate your teams and reap the benefit of working directly with experts in a secure, immersive, and collaborative environment that prioritizes a culture of innovation and learning.",
    },
    para3: {
      caption: "",
      h1: "Transform The Future With Data",
      p1: "The truth is data transforms lives; it's our future. Whether it be streamlining supply chains to curing cancer, data is the key to a better future. \n Midalta Innovation stands with you every step of the journey. We partner deeply with you, our beloved clients, to understand your business priorities and translate data into real-world results. \n We can help you deliver modern data platforms, beautiful dashboards, and game-changing AI solutions grounded in strategic thinking. \n By unlocking new opportunities, we cut costs, accelerate innovation, and win the loyalty of your customers.",
      image: "expertise",
    },
    list: null,
  };
  render() {
    return (
      <>
        <Navbar />

        <PageTitleArea pageTitle="Technology" />

        <ServiceDetailsContent data={this.state} />

        {/* <OurLovingClients /> */}

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
