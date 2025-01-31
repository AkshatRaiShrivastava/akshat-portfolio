import pr1 from "../assets/pr1.png";
import pr2 from "../assets/pr2.png";
import pr3 from "../assets/pr3.png";
import pr4 from "../assets/pr4.png";
import pr5 from "../assets/pr5.png";
import pr6 from "../assets/pr6.png";
import pr7 from "../assets/pr7.png";
import pr8 from "../assets/pr8.png";

export const HERO_CONTENT = `I am a passionate and dedicated professional with a strong background in Java, Spring Boot, Android Development, Web Development and SCADA Development. With hands-on experience in TypeScript, Next.js, Spring Boot, Java, Kotlin, Flutter.`;

export const CONTACT_CONTENT = `Contact me for potential projects and collaborations.`;

export const projects = [
  {
    title: "Jotify",
    description:
      "An online note taking app with offline caching capability, secure sign-in, and image uploading feature.",
    imageUrl: pr2,
    technologies: ["Flutter", "Dart", "Firebase", "Cloudinary"],
    githubUrl: "https://github.com/AkshatRaiShrivastava/jotify",
    liveUrl: "https://github.com/AkshatRaiShrivastava/jotify/releases",
    timePer: "Jan 2025 - Jan 2025",
  },
  {
    title: "Portfolio",
    description: "My Portfolio",
    imageUrl: pr1,
    technologies: ["React", "MongoDB", "Node.js"],
    githubUrl: "https://github.com/AkshatRaiShrivastava/akshat-portfolio",
    liveUrl: "/",
    timePer: "Dec 2024 - Jan 2025",
  },
  {
    title: "Minimal Chat App",
    description:
      "Built a cross-platform Chatting App using Flutter and Firebase, leveraging real-time capabilities for a seamless messaging experience!",
    imageUrl: pr4,
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Cloudinary",
      "Provider",
      "Android",
    ],
    githubUrl: "https://github.com/AkshatRaiShrivastava/minimal-chat-app",
    liveUrl:
      "https://github.com/AkshatRaiShrivastava/minimal-chat-app/releases",
    timePer: "Dec 2024 - Jan 2025",
  },
  {
    title: "Realtime Code Editor",
    description:
      "Online code editor on which the users can collaborate and code.",
    imageUrl: pr3,
    technologies: ["React", "MongoDB", "Express", "Socket IO", "Node.js"],
    liveUrl: "https://realtime-code-editor-omdg.onrender.com/",
    githubUrl: "https://github.com/AkshatRaiShrivastava/realtime-code-editor",
    timePer: "Nov 2024 - Dec 2024",
  },

  {
    title: "Music Streaming App",
    description:
      "A music streaming app which fetches music from spotify track id and also syncs the lyrics.",
    imageUrl: pr6,
    technologies: ["Flutter", "Dart", "Spotify", "Firebase", "MusixMatch API"],
    githubUrl:
      "https://github.com/AkshatRaiShrivastava/music-player-application-in-flutter",
    timePer: "Oct 2024 - Nov 2024",
  },
  {
    title: "Learning App UI",
    description: "UI of a learning app.",
    imageUrl: pr7,
    technologies: ["Flutter", "Dart"],
    githubUrl: "https://github.com/AkshatRaiShrivastava/coding-juniors",
    timePer: "Sept 2024 - Oct 2024",
  },
  {
    title: "Wee Wear",
    description:
      "It is a clothing app, which shows the latest and trendy clothing styles and wears.",
    imageUrl: pr5,
    technologies: ["Android", "Java", "XML", "Firebase","Firestore","Android Studio"],
    githubUrl: "https://github.com/AkshatRaiShrivastava/wee-wear",
    liveUrl: "https://github.com/AkshatRaiShrivastava/wee-wear/releases",
    timePer: "Aug 2024 - Sept 2024",
  },
  {
    title: "Music Stream",
    description:
      "This is a music streaming application which fetches songs, playlists and lyrics from the database, includes add to favourite option, secure firebase login, repeat songs.",
    imageUrl: pr8,
    technologies: [
      "Android",
      "Kotlin",
      "XML",
      "Firebase",
      "Firestore",
      "Android Studio",
    ],
    githubUrl: "https://github.com/AkshatRaiShrivastava/music_stream",
    liveUrl: "https://github.com/AkshatRaiShrivastava/music_stream/releases",
    timePer: "Aug 2024 - Sept 2024",
  },
  // Add more projects as needed
];
