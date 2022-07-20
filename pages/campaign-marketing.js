import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageTitleArea from '../components/Common/PageTitleArea';
import ServiceDetailsContent from '../components/Services/ServiceDetailsContent';
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo';
import OurLovingClients from '../components/Common/OurLovingClients';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    state = {
        para1: {
          caption: "",
          h1: "Campaign Marketing ",
          p1: "Have a campaign? \n\n Let us market it! From the inception of the campaign to Election Day, we work to strategize and devote in-depth planning in an effort to develop and execute a comprehensive plan to win! \n Also operating as general consultants, we gather data and target strategies to maximize your operation's efficiency while delivering a message to our key target audience. Most importantly, we get down into the 'nitty-gritty' of campaign operations, creating metrics to track our progress.\n\n Throughout the entire process, we never leave your side; we work with you on a daily basis to make sure every component is seamlessly driving toward your envisioned success.",
          cap: "",
          list1: [
            "Search Engine Optimization (SEO)",
            "Social Media Marketing",
            "Content Marketing ",
          ],
          list2: [
            "Email Marketing",
            "Mobile Marketing",
            "Marketing Analytics",
          ],
          image: "",
        },
        para2: {
          caption: "",
          h1: "DIGITAL",
          p1: "Every day, more and more of our social engagement takes place online, from our home to the office to our mobile phones. Engaging in smart digital campaigns necessitates targeting an audience based on where they are and who they are. In the short-attention-span of the digital world, our eye-catching artwork and animation, humor, and provocative messages engage voters before they scroll down or swipe away.",
        },
        para3: {
          caption: "",
          h1: "ISSUE ADVOCACY",
          p1: "When you need to educate, activate, and mobilize voters around a key issue, no one knows how to bring the heat like Midalta Innovation. We know how to drive public opinion and win the debate on the ground, online, and in the air. Elected officials can’t ignore grassroots pressure. \n\n Midalta Innovation creates smartly targeted campaigns to steer the hearts and minds and compel voters to make their voices heard. We work with you to determine the suitable targets for action, the right voters to contact, and the right path for engagement. From sophisticated digital and social media campaigns, we ensure that your issue is being heard by the people elected officials fear most – the voters.",
          image: "expertise",
        },
        list: false
      };
    render() {
        return (
            <>
                <Navbar />

                <PageTitleArea 
                    pageTitle="Campaign Marketing" 
                />

                <ServiceDetailsContent data={this.state} />

                {/* <OurLovingClients /> */}
                
                <Footer />
            </>
        );
    }
}

export default ServiceDetails;