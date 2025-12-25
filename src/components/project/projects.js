import erp from './images/erp.png'
import ndc from './images/ndc.png'
import food from './images/food.png'
import aura from './images/aura.png'
import bd from './images/bd.png'

import foodv from "./videos/food.mp4"
import aurav from "./videos/aura.mp4"

export const projects = [
  {
    title: "Modern ERP",
    short: "Custom ERP for Amity International",
    description:
      "A custom ERP for Amity International (Multipurpose distribution company). ERP that you have never seen before!",
    media: [{ type: "image", src: erp }],
    tech: [],
  },
  {
    title: "Lab Software",
    short: "Student monitoring & task management",
    description:
      "A system built for monitoring the activities of the students on their computer and for task management",
    description2: "A private high school was facing trouble with controlling their students' activities in their ICT Lab. Students were barely concentrating to their task. I was tasked to develop a system which could monitor their screen as well as manage their lab data. This performs all the native desktop tasks, transparency of the students' activities. The authority can give tasks directly to students requiring it to be done by them in time. Like them if you want to solve your existing problems, I'm available to know your story. Let's collaborate!",
    media: [{ type: "image", src: ndc }],
    tech: [],
  },
  {
    title: "Food Court Technology",
    short: "Inventory & order tracking",
    description:
      "A food court management software with real time inventory and order tracking.",
    description2: "It was essentially a real-time communication system enabling seamless interaction between the cashier, the loaded-chips maestros, and the customers all at once. Despite the massive crowd, which made proper filming nearly impossible, the tech kept orders flowing and conversations connected without missing a beat.",
    media: [{ type: "image", src: food }, { type: "video", src: foodv}],
    tech: ["React", "Node.js", "PHP", "Realtime", "Maps"],
  },
  {
    title: "Project Aura",
    short: "Mobile app for home automation",
    description:
      "An Android and iOS based mobile app for home automation. For an ongoing wireless power transmission project.",
    media: [{ type: "image", src: aura }, , { type: "video", src: aurav}],
    tech: ["React Native", "Node.js", "Android", "IoT"],
  },
  {
    title: "Website Automation Bot",
    short: "Web scraping & automation",
    description: "A software for BD Trippers for web scrapping and automation",
    media: [{ type: "image", src: bd }],
    tech: [],
  },
];
