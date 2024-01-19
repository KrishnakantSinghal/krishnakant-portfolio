import vendorManagement from "../../Assets/Projects/vendor-management.png";
import hubstaffProject from "../../Assets/Projects/hubstaff-project.png";
import secretFineFoods from "../../Assets/Projects/secret-fine-foods.png";

  
  // Create an array to store tool information
  const projectscarddata = [
    { 
        image: hubstaffProject,
        title: "Employee activity and performance tracker",
        description:"Welcome to our Employee Performance and Time Tracking System, \
        a robust and feature-rich solution meticulously crafted using cutting-edge technologies. \
        This project leverages the power of Django Rest Framework, Celery, Redis, and JavaScript to deliver an unparalleled employee management experience.", 
    },

    {
        image: secretFineFoods, 
        title: "Food E-Commerce Web Application", 
        description:"Together with the talented team, we successfully delivered a feature-rich \
        and innovative food e-commerce platform, showcasing the capabilities of modern web technologies \
        like django rest framework, django oscar, reactJS for frontend part.", 
    },

    { 
        image: vendorManagement, 
        title: "Vendor Management System", 
        description:"Vendor Management System using Django and Django REST Framework. This system will handle vendor profiles,\
         track purchase orders, and calculate vendor performance metrics.", 
        ghLink:"https://github.com/KrishnakantSinghal/fatmug-designs" 
    },

];
    
export default projectscarddata;
