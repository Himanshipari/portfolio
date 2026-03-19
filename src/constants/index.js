import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import rcew from "../assets/rcew.webp"; 
import rcew1 from "../assets/rcew.jpeg";

export const HERO_CONTENT = `I am a Computer Science Engineering student at RCEW Jaipur with a strong interest in full-stack web development and problem solving. I have experience working with technologies such as React.js, Node.js, and databases like MongoDB and MySQL. Through various academic and personal projects, I have developed web applications that focus on clean design, functionality, and better user experience. I am passionate about technology and continuously work on improving my development skills while exploring new tools and frameworks in software development`;

export const ABOUT_TEXT = `As I advance in my career, my focus remains on expanding my technical expertise while staying up-to-date with the latest trends in software engineering. I actively pursue opportunities that challenge me to apply my problem-solving abilities and technical knowledge to real-world scenarios, ensuring that I continue to grow as a developer. My leadership roles have further developed my communication, adaptability, and decision-making skills, which help me effectively collaborate with teams on complex projects. Looking ahead, I am eager to explore new frontiers in technology, contribute to cutting-edge advancements, and make a meaningful impact through innovative solutions. My commitment to continuous learning and passion for software development drives me to seek out challenging opportunities where I can apply my skills and contribute to meaningful, long-lasting improvements. Ultimately, I aim to create solutions that not only address current needs but also push the boundaries of what technology can achieve in the future.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2028",
    image: rcew1,
    role: "BTech - Computer Science & Engineering",
    company: "Rajasthan College of Engineering for Women, Jaipur",
    description: `Pursuing a Bachelor of Technology (BTech) in Computer Science Engineering at Rajasthan College of Engineering for Women, Jaipur, with a current GPA of 8.90/10.00 (Absolute). Currently in the second year, I am honing my skills in software development.`,
    technologies: ["DBMS", "OOPS", "Data Structures & Algorithms"],
  },
];

export const PROJECTS = [
  {
    title: "Stock Trading Platform",
    image: project1,
    description:
      "Developed a Zerodha-inspired stock trading platform featuring simulated real-time stock price updates, interactive portfolio tracking, watchlist, and buy/sell order simulation. The platform offers a responsive and user-friendly interface, providing an engaging trading experience for learners and enthusiasts..",
    technologies: [
      "HTML", // Frontend structure
      "CSS  Tailwind", // Styling
      "Javascript", // Frontend logic
      "React.js", // Frontend framework for dynamic UI
      "Node.js", // Backend server
      "Express.js", // Backend framework
      "MongoDB", // Database for user info, orders, transactions
      "Socket.io", // Real-time stock price updates & chat
      "JWT", // Authentication & session management
      "Chart.js", // For stock charts visualization
      "REST APIs / WebSockets", // Data fetching & real-time updates
      "Razorpay API", // For payments (fund add, withdrawal)
    ],
  },
  {
    title: "Wanderlust",
    image: project2,
    description:
      "Architected and executed the Wanderlust travel booking website, achieving a 40% boost in overall performance and slashing page load times by 50% through advanced optimization techniques and responsive design practices.",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "EJS",
      "Passport",
      "Express.js",
      "MongoDB",
      "Node.js",
    ],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind", "React"],
  },
];

export const CONTACT = {
  phoneNo: "9137277903 ",
  email: "pariharhimanshi02@gmail.com",
};
