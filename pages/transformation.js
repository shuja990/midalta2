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
          caption: "TRANSFORMATION",
          h1: "ASSURED DELIVERY – FROM MIDALTA INNOVATION TO YOU",
          p1: "New and advanced technologies. Shifting customers. Industry disruption. Regardless of how fast business moves, we are committed and specialize in working through change with you. \n Highlighted areas of expertise",
          cap: "",
          list1: [
            "Process optimization",
            "Business model change",
            "Cloud transformation",
          ],
          list2: [
            "Agile transformation",
            "Change management",
            "Employee engagement",
          ],
          image: "",
        },
        para2: {
          caption: "",
          h1: "Adapting to and Meeting New Demands",
          p1: "Demands may range from improved technologies, shifting customers, and ever-changing industries, but here at Midalta Innovation, we are not perturbed by the challenge. We see this as the perfect opportunity to adapt and make a remarkable impact that will cause your business to be unforgettable at every stage. \n We take a holistic approach to business transformation, considering everything from company culture to customer experience. Wherever you are on your journey, we’ll help scale your investments, empower innovation, and build agility for the future.",
        },
        para3: {
          caption: "OUR APPROACH",
          h1: "Defining and executing change with you",
          p1: "Transformation isn’t successful unless you set clear expectations and actively engage your organization to help drive the change. We work with you to break down complexities, define measurable milestones, and move quickly to execute, learn, and iterate. Agility is at the core of our approach. We work at speed and adapt often, always guided by the needs of your customers and employees.",
          image: "expertise",
        },
        list: false
      };
    render() {
        return (
            <>
                <Navbar />

                <PageTitleArea 
                    pageTitle="Transformation" 
                />

                <ServiceDetailsContent data={this.state}/>

                {/* <OurLovingClients /> */}
                
                <Footer />
            </>
        );
    }
}

export default ServiceDetails;