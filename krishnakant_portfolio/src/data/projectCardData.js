import vendorManagement from "../Assets/Projects/vendor-management.png";
import hubstaffProject from "../Assets/Projects/hubstaff-project.png";
import secretFineFoods from "../Assets/Projects/secret-fine-foods.png";
import dokifiaiIdeatorLight from "../Assets/Projects/dokifiai/ideator_light.png";

const dokifiaiImages = [];
const dokifiaicontext = require.context('../Assets/Projects/dokifiai', false, /(png|jpe?g|svg)$/);
dokifiaicontext.keys().forEach((key) => {
    const trimmedPath = key.replace(/^\.\//, '');
    const imagePath = `../../Assets/Projects/dokifiai/${trimmedPath}`;
    dokifiaiImages.push(imagePath);

  });

// Create an array to store tool information
const projectsCardData = [
    {
        image: hubstaffProject,
        title: "Employee activity and performance tracker",
        description: "Welcome to our Employee Performance and Time Tracking System, \
        a robust and feature-rich solution meticulously crafted using cutting-edge technologies. \
        This project leverages the power of Django Rest Framework, Celery, Redis, and JavaScript to deliver an unparalleled employee management experience.",
    },

    {
        image: secretFineFoods,
        title: "Food E-Commerce Web Application",
        description: "Together with the talented team, we successfully delivered a feature-rich \
        and innovative food e-commerce platform, showcasing the capabilities of modern web technologies \
        like django rest framework, django oscar, reactJS for frontend part.",
    },

    {
        image: vendorManagement,
        title: "Vendor Management System",
        description: "Vendor Management System using Django and Django REST Framework. This system will handle vendor profiles,\
         track purchase orders, and calculate vendor performance metrics.",
        ghLink: "https://github.com/KrishnakantSinghal/fatmug-designs"
    },

    {
        image: dokifiaiIdeatorLight,
        title: "dokifi.ai",
        description: "dokifi.ai focuses exclusively on optimising your RFP (Request for Proposal) response process. \
        It can provide you the highest quality input from a range of disparate global sources, and help you to reduce completion time by over 70%.\
        Access the broadest, most accurate source of content to help you craft your RFP response, using a solution built by respondents, for respondents..",
        detailed_description: "dokifi.ai focuses exclusively on optimising your RFP (Request for Proposal) response process. \
        It can provide you the highest quality input from a range of disparate global sources, and help you to reduce completion time by over 70%.\
        Access the broadest, most accurate source of content to help you craft your RFP response, using a solution built by respondents, for respondents..",
        project_detail_images: dokifiaiImages,
    },
];

export default projectsCardData;
