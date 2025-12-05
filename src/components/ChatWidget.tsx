import React, { useEffect, useRef, useState } from "react";

type Message = {
  from: "user" | "bot";
  text: string;
};
const extraQA = [
  { q: "who is ajay", a: "Ajay Sivakumar is an AI & Data Science student at KGiSL Institute of Technology (KITE) from Coimbatore. He focuses on full-stack development, AI/ML, data analytics, and building practical projects." },
  { q: "where are you from", a: "Ajay is from Coimbatore / Tiruppur region in Tamil Nadu, India." },
  { q: "what is your cgpa", a: "Ajay's CGPA is 8.8 (B.Tech in Artificial Intelligence & Data Science at KGiSL Institute of Technology)." },
  { q: "what do you study", a: "Ajay studies Artificial Intelligence & Data Science (B.Tech) and is learning topics like Data Science, Machine Learning, SQL, and Computer Networks." },
  { q: "which college", a: "He studies at KGiSL Institute of Technology (KITE)." },
  { q: "what languages do you know", a: "Ajay uses JavaScript, TypeScript, Python and also has skills with SQL and shell tooling." },
  { q: "frontend skills", a: "Ajay's frontend skills: HTML, CSS, JavaScript, React.js, Tailwind CSS, and Flutter (for mobile UI)." },
  { q: "backend skills", a: "Backend skills include Node.js, Express, Python (Flask), and databases like MongoDB and SQL." },
  { q: "databases", a: "He uses MongoDB for many projects and knows SQL for relational databases." },
  { q: "devops / hosting", a: "Ajay knows Git/GitHub and can deploy apps; he's worked with hosting and deployment workflows (e.g., Vercel / Render hints in the repo)." },
  { q: "what ml tools", a: "Machine learning tools: TensorFlow (and general ML/AI knowledge). He also uses OpenCV for computer vision projects." },
  { q: "what libraries do you use", a: "Common libraries: React, TensorFlow, OpenCV, @react-three/fiber/@react-three/drei for 3D, and common npm packages." },
  { q: "what projects did you build", a: "Notable projects: File Authenticity & Extension Validator, Crop Field Detection Dashboard, Document Masking Tool (Flask + OCR + OpenCV), Restaurant Ordering System (Vue + Node + MongoDB), Tailor Work Tracker (React + Supabase), Bus Tracking System (three interfaces), and more." },
  { q: "tell me about the restaurant project", a: "The Restaurant Ordering System is a full-stack project built with Vue.js for the frontend and Node + MongoDB for the backend. It handles orders, menus, and checkout flows." },
  { q: "tell me about the document masking tool", a: "Document Masking Tool: Flask + OCR + OpenCV pipeline to detect and mask sensitive information in documents for privacy-preserving sharing." },
  { q: "what is volume hand control", a: "VolumeHandControl is a Python + OpenCV project (you mentioned it earlier) that controls volume using hand gestures detected by the camera." },
  { q: "do you have internships", a: "Yes — Ajay completed a one-month internship at a private limited company working on full-stack web development (restaurant ordering system). He also completed internships at Thennai Tech and CodTech." },
  { q: "what was your internship project", a: "Internship project: a restaurant ordering system built with Vue.js (frontend) and JavaScript (backend) — details included in the internship report." },
  { q: "do you have an internship report", a: "Yes — Ajay needs an internship report around 20–25 pages. He prefers text-based content with sections like introduction, objectives, tools used, system architecture, coding snippets, and conclusion." },
  { q: "what events did you join", a: "Ajay participated in IntelliFlow 2025 (RPA & automation) and the AI Negotiator Showdown (an event building AI negotiation agents)." },
  { q: "what is ai negotiator showdown", a: "An event where teams build AI agents that negotiate over goods (e.g., mangoes) using Llama-3-8B API — focused on persona, strategy, and speed." },
  { q: "do you write blogs", a: "Yes — Ajay writes blogs on Medium about web server case studies, data science basics, and AI concepts. His Medium handle is medium.com/@ajay527946494." },
  { q: "where is your github", a: "GitHub: https://github.com/Ajay16code — he has 80+ repositories covering full-stack apps, ML models, dashboards, and automation projects." },
  { q: "resume", a: "Ajay's resume is downloadable from the hero section of his portfolio. For the latest version, contact mailxajay@gmail.com." },
  { q: "how to contact ajay", a: "You can reach Ajay at mailxajay@gmail.com or via LinkedIn: linkedin.com/in/ajay162006." },
  { q: "what is ajay's startup", a: "Ajay is working on a startup idea called 'Stress-Free Networking' to help students and young professionals manage career-related stress via networking, mentorship, and skill-building content (YouTube and LinkedIn)." },
  { q: "what side projects", a: "Side projects: YearCount.com (website idea), tourist-themed site on lovable.dev, tailor work tracking app, bus tracking system, and more." },
  { q: "what is lovable.dev project", a: "A tourist-themed website featuring continents and tourist places, with original and AI-generated images, hotels, beaches, maps and a Q&A feature — integrating Gemini and SuperAPI." },
  { q: "what is yearcount", a: "YearCount.com is a website project Ajay planned (details vary) — a learning/build project to practice full-stack skills." },
  { q: "what is tailor work tracker", a: "A React + Supabase app that helps tailors log stitched pieces and calculate daily salary using piece-rate logic." },
  { q: "what languages did you study", a: "In school Ajay studied Biology & Mathematics in higher secondary. In college he studies AI & Data Science subjects." },
  { q: "what are your strengths", a: "Strengths: practical full-stack development, problem solving, quick prototyping, and applying ML/AI to real problems." },
  { q: "what are your weaknesses", a: "Ajay is actively improving production-hardening, cloud deployment experience, and soft real-world scaling details." },
  { q: "what tools do you use for web dev", a: "Common tools: VS Code / PyCharm, Git/GitHub, Tailwind CSS, React, Vue, Node.js, Express, and Supabase." },
  { q: "what do you want in future", a: "Ajay’s goal: become a strong Full-Stack / AI Engineer building scalable apps and intelligent systems for automation, analytics, and smart city use cases." },
  { q: "do you have a preferred voice", a: "Yes — Ajay prefers a male voice for audio/voice outputs." },
  { q: "do you give tutorials", a: "Ajay creates content and tutorials (YouTube/LinkedIn planned for the 'Stress-Free Networking' startup), focused on career & tech skills." },
  { q: "how do you practice coding", a: "Ajay practices LeetCode daily and studies aptitude and coding, splitting time across topics (he mentioned ~30 minutes per sector earlier)." },
  { q: "what subjects are you studying", a: "Subjects include SQL, computer networks, OS, statistics, non-parametric tests, control charts, and other AI/DS coursework." },
  { q: "how can i view projects", a: "Visit the Projects section on the portfolio or check Ajay's GitHub for live demos and repositories." },
  { q: "what is your bus tracking system", a: "A Bus Tracking System with three interfaces: Bus Driver, Admin, and Public — built as a web app (frontend + backend + map integration)." },
  { q: "are you in any tech community", a: "Yes — Ajay is a member of the IPS Tech Community and participates in events and contributions." },
  { q: "how many repos do you have", a: "Ajay has 80+ GitHub repositories covering many small and medium projects (full-stack, ML, automation)." },
  { q: "can you help with college assignments", a: "Yes — Ajay can help with assignments; he had a 40-mark assignment covering geothermal energy, solid waste management case study, and green materials/green buildings." }
];

const getBotReply = (message: string): string => {
  const text = message.toLowerCase().trim();

  if (!text) {
    return "Please type something. You can ask about Ajay, his skills, projects, education, blogs, or contact.";
  }

  // --- Your original quick rules (keep as before) ---
  if (/(hi|hello|hey)/.test(text)) {
    return "Hey! I am Ajay's portfolio chatbot. You can ask me about his skills, projects, education, blogs, or contact details.";
  }

  if (text.includes("about") || text.includes("who are you") || text.includes("ajay")) {
    return "Ajay is an AI & Data Science student from Coimbatore, interested in full-stack development, AI/ML, and data analytics. He enjoys building useful tools, dashboards, and web applications that solve real problems.";
  }

  if (text.includes("skill") || text.includes("tech") || text.includes("stack")) {
    return "Ajay's tech stack includes React, Node.js, JavaScript, TypeScript, Python, SQL, MongoDB, TensorFlow, OpenCV, Tailwind CSS, Git, and GitHub.";
  }

  if (text.includes("project")) {
    return "Some of Ajay's projects:\n• File Authenticity & Extension Validator\n• Crop Field Detection Dashboard\n• Document Masking Tool (Flask + OCR + OpenCV)\n• Restaurant Ordering System (Vue + Node + MongoDB)\n\nYou can scroll to the Projects section or visit his GitHub: github.com/Ajay16code";
  }

  if (text.includes("experience") || text.includes("intern") || text.includes("work")) {
    return "Ajay has done Full Stack Development internships at Thennai Tech and CodTech, contributed to the IPS Tech Community, and volunteered at InPyExpo for Python and AI events.";
  }

  if (text.includes("education") || text.includes("college") || text.includes("study")) {
    return "Ajay is pursuing B.Tech in Artificial Intelligence and Data Science at KGiSL Institute of Technology (KITE) with a CGPA of 8.8. He completed his higher secondary at Municipal Higher Secondary School, Tiruppur in the Biology and Mathematics group, scoring 81.1%.";
  }

  if (text.includes("blog") || text.includes("medium")) {
    return "Ajay writes blogs on Medium about Web Server case studies, Data Science basics, and Artificial Intelligence concepts. You can check the Blogs section on this portfolio or visit: medium.com/@ajay527946494.";
  }

  if (text.includes("resume") || text.includes("cv")) {
    return "Ajay's resume contains his skills, projects, internships, and achievements. You can download it from the hero section or contact him at mailxajay@gmail.com for the latest version.";
  }
  // linkedin
  if (
    text.includes("linkedin") ||
    text.includes("linked in") ||
    text.includes("linkdin") ||
    text.includes("connect") && text.includes("linkedin")
  ) {
    return "Sure! Here is Ajay's LinkedIn profile:\n\n👉 https://www.linkedin.com/in/ajay162006";
  }

  if (text.includes("hobby") || text.includes("interest")) {
    return "Apart from coding, Ajay likes exploring new technologies, watching tech content, and experimenting with automation, dashboards, and small side projects.";
  }

  if (text.includes("goal") || text.includes("future") || text.includes("aim")) {
    return "Ajay’s goal is to become a strong Full Stack / AI Engineer who can build scalable applications and intelligent systems for real-world use cases such as automation, analytics, and smart cities.";
  }

  if (text.includes("contact") || text.includes("reach") || text.includes("email")) {
    return "You can reach Ajay at mailxajay@gmail.com or on LinkedIn: linkedin.com/in/ajay162006. Feel free to connect for internships, collaborations, or projects.";
  }

  if (text.includes("github") || text.includes("repo") || text.includes("repositories")) {
    return "Ajay has 80+ repositories on GitHub, including full-stack applications, AI/ML models, dashboards, and automation projects. You can explore them here: https://github.com/Ajay16code.";
  }

  // --- ExtraQA lookup: token-based fuzzy match ---
  for (const item of extraQA) {
    const key = item.q.toLowerCase();
    const keyTokens = key.split(/\W+/).filter(Boolean).map((t) => t.trim());
    // count matching strong tokens (length > 3)
    const strongMatches = keyTokens.filter((tk) => tk.length > 3 && text.includes(tk));
    if (strongMatches.length >= 1) {
      return item.a;
    }
  }

  // fallback / default
  return "I couldn't find that exact answer. Try asking: 'Tell me about Ajay', 'What are your skills?', 'Show your projects', 'Your education?', 'How can I contact you?'.";
};

const quickQuestions = [
  "Tell me about Ajay",
];

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false); // ❗ closed by default
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // auto scroll to bottom when new message comes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text?: string) => {
    const messageText = (text ?? input).trim();
    if (!messageText) return;

    const userMsg: Message = { from: "user", text: messageText };
    const botMsg: Message = { from: "bot", text: getBotReply(messageText) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const handleOpen = () => {
    setOpen(true);
    // show welcome message only the first time
    setMessages((prev) =>
      prev.length
        ? prev
        : [
            {
              from: "bot",
              text: "Hi! I am Ajay's portfolio chatbot. You can ask me about his skills, projects, education, blogs, or contact details.",
            },
          ]
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating button when closed */}
      {!open && (
        <button
          onClick={handleOpen}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-600 text-2xl text-white shadow-xl hover:bg-purple-500"
        >
          💬
        </button>
      )}

      {open && (
        <div className="flex h-[460px] w-[360px] flex-col rounded-2xl border border-purple-500/60 bg-[#050816] shadow-2xl md:h-[480px] md:w-[380px]">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-2xl bg-purple-700 px-4 py-2">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">
                Ajay’s Chatbot
              </span>
              <span className="text-xs text-purple-100">
                Ask something about the portfolio
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-lg font-bold text-white"
            >
              ✕
            </button>
          </div>

          {/* Messages area */}
          <div className="flex-1 space-y-2 overflow-y-auto px-3 py-3 text-[13px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 leading-relaxed ${
                    msg.from === "user"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-800 text-gray-100"
                  }`}
                >
                  {msg.text.split("\n").map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions */}
          <div className="flex flex-wrap gap-1 px-3 pb-2">
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="mb-1 rounded-full bg-purple-900 px-2 py-1 text-[11px] text-purple-100 hover:bg-purple-700"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            className="flex border-t border-gray-700 px-2 py-2"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <input
              className="mr-2 flex-1 rounded-lg bg-gray-900 px-3 py-2 text-xs text-white outline-none"
              placeholder="Type here… e.g. 'What are your skills?'"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="rounded-lg bg-purple-600 px-3 text-xs font-semibold text-white hover:bg-purple-500"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
