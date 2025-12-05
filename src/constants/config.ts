type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    education: TSection;
    feedbacks: TSection;
    Works: Required<TSection>;
  };
};
export const links = {
  github: "https://github.com/Ajay16code",
  linkedin: "https://www.linkedin.com/in/ajay162006",
  resume: "/AjayS_Resume.pdf",
};

export const config: TConfig = {
  html: {
    title: "Ajay — 3D Portfolio",
    fullName: "Ajay",
    email: "mailxajay@gmail.com",
  },
  hero: {
    name: "Ajay",
    p: [
      "I am an AI & Data Science student, Full Stack Developer, and Data Analyst.",
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: {
        span: "Your Email",
        placeholder: "What's your email?",
      },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content:
        "I’m Ajay, an AI & Data Science student from Coimbatore with a strong passion for building intelligent systems and full-stack web applications. I Work with technologies like React, Node.js, Python, SQL, TensorFlow, OpenCV, and MongoDB, combining analytics and software development to create practical, impactful solutions. My interests span full-stack development, machine learning, data analytics, dashboards, and automation tools. I enjoy learning new technologies, solving real-world problems, and developing projects that make a meaningful difference.",
    },
    experience: {
      p: "What I have done so far",
      h2: "Experience.",
    },
    education: {
      p: "Where I studied",
      h2: "Education.",
    },
    feedbacks: {
      p: "What I write",
      h2: "Blogs.",
    },
    Works: {
      p: "My Work",
      h2: "Projects.",
      content:
        "The following projects showcase my skills and experience through real-world examples of my Work. Each project is briefly described with links to code repositories and live demos. They reflect my ability to solve complex problems, Work with different technologies, and manage projects effectively.",
    },
  },
};
