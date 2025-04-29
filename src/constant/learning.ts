import { BadgeCheck, Code, Rocket } from "lucide-react";

export const learning = [
  {
    id: "1",
    title: "HTML & CSS Fundamentalls",
    xp: 300,
    totalXp: 300,
    status: "completed",
    achievedBadge: Code,
    achievedTitle: "Code Master",
    updated: "2025/04/15",
  },
  {
    id: "2",
    title: "JavaScript Basics",
    xp: 150,
    totalXp: 250,
    status: "progress",
    achievedBadge: Rocket,
    achievedTitle: "Quick Learner",
    updated: "2025/04/20",
  },
  {
    id: "3",
    title: "React JS Framework",
    xp: 0,
    totalXp: 500,
    status: "locked",
    achievedBadge: BadgeCheck,
    achievedTitle: "CSS Expert",
    updated: "2025/04/10",
  },
];

// export const learningPath = {
//   learningTrack: "Frontend Development",
//   duration: "4 weeks",
//   goal: "",
//   beginner: {
//     icon: "",
//     modules: [
//       {
//         id: "",
//         number: 1,
//         title: "",
//         subtitle: "",
//         duration: "",
//         status: "", // locked, in progress, completed, not started
//         objective: [""],
//         contents: [
//           {
//             title: "",
//             duration: "",
//             status: "",
//             contentType: "",
//             contentLink: "", // external link to the content
//             contentAssessment:[
//               {
//                 question: "",
//                 options:[""],
//                 answer: ""
//               }
//             ],
//           }

//         ],
//         challenge: {

//         },
//         acheivementBadgeIcon: "",
//         xp: 0,
//         mentorComment: ""
//       },

//     ],
//   },

//   intermediate: {
//     icon: "",
//   },

//   advance: {
//     icon: "",
//   },
// };

export const careerPath = {
  id: "career-frontend",
  name: "Frontend Development",
  description:
    "Learn how to build stunning, interactive web interfaces using HTML, CSS, JavaScript, and frameworks like React.",
  duration: "12 Weeks",

  modules: [
    {
      id: "mod-1",
      number: 1,
      title: "HTML & CSS Fundamentals",
      description: "Module about html & css fundamentals",
      level: "BEGINNER",
      durationWeeks: 3,
      status: "NOT_STARTED",
      objective: [
        "Understand HTML document structure and semantic elements",
        "Master CSS selectors, properties, and layout techniques",
        "Learn responsive design principles and media queries",
        "Practice building accessible and well-structured web pages",
      ],
      acheivementBadgeIcon: "FaHtml5",
      mentorComment:
        "Focus on writing clean and semantic HTML with well-structured CSS.",
      xp: 60,
      content: [
        {
          id: "content-1-1",
          title: "HTML & CSS Fundamentals Part 1",
          number: 1,
          status: "NOT_STARTED",
          contentType: "video",
          contentLink: "https://www.youtube.com/watch?v=qz0aGYrrlhU",
          contentAssessment: [
            {
              question:
                "What is the primary purpose of HTML in web development?",
              options: [
                "To style web pages and add visual effects",
                "To structure and organize web content",
                "To handle server-side logic",
              ],
              answer: "To structure and organize web content",
            },
            {
              question: "What is semantic HTML and why is it important?",
              options: [
                "HTML that looks visually appealing",
                "HTML elements that provide meaning and structure to content",
                "HTML that loads faster in browsers",
              ],
              answer:
                "HTML elements that provide meaning and structure to content",
            },
            {
              question:
                "What is the purpose of the alt attribute in HTML img tags?",
              options: [
                "To make images load faster",
                "To provide alternative text for accessibility and SEO",
                "To style the image with CSS",
              ],
              answer: "To provide alternative text for accessibility and SEO",
            },
          ],
        },
        {
          id: "content-1-2",
          title: "HTML & CSS Fundamentals Part 2",
          number: 2,
          status: "NOT_STARTED",
          contentType: "article",
          contentLink: "https://www.w3schools.com/html/html_css.asp",
          contentAssessment: [
            {
              question:
                "What is the difference between margin and padding in CSS?",
              options: [
                "Margin is the space inside an element, padding is the space outside",
                "Margin is the space outside an element, padding is the space inside",
                "Margin and padding are the same thing",
              ],
              answer:
                "Margin is the space outside an element, padding is the space inside",
            },
            {
              question: "What is the box model in CSS?",
              options: [
                "A model that only includes content and padding",
                "A model that describes how elements are structured with content, padding, border, and margin",
                "A model that only deals with borders",
              ],
              answer:
                "A model that describes how elements are structured with content, padding, border, and margin",
            },
            {
              question: "What is the purpose of CSS specificity?",
              options: [
                "To determine which CSS rules take precedence when multiple rules target the same element",
                "To make CSS files smaller",
                "To organize CSS properties alphabetically",
              ],
              answer:
                "To determine which CSS rules take precedence when multiple rules target the same element",
            },
          ],
        },
        {
          id: "content-1-3",
          title: "HTML & CSS Fundamentals Part 3",
          number: 3,
          status: "NOT_STARTED",
          contentType: "video",
          contentLink: "https://www.youtube.com/watch?v=yfoY53QXEnI",
          contentAssessment: [
            {
              question:
                "What is the purpose of CSS Grid and how does it differ from Flexbox?",
              options: [
                "Grid is for 1D layouts while Flexbox is for 2D layouts",
                "Grid is for 2D layouts while Flexbox is for 1D layouts",
                "Grid and Flexbox are exactly the same",
              ],
              answer: "Grid is for 2D layouts while Flexbox is for 1D layouts",
            },
            {
              question:
                "What is the purpose of CSS media queries in responsive design?",
              options: [
                "To create animations and transitions",
                "To apply different styles based on device characteristics",
                "To handle JavaScript events",
              ],
              answer:
                "To apply different styles based on device characteristics",
            },
            {
              question: "What is the mobile-first design approach?",
              options: [
                "Designing exclusively for mobile devices",
                "Starting with desktop design and scaling down",
                "Starting with mobile design and progressively enhancing for larger screens",
              ],
              answer:
                "Starting with mobile design and progressively enhancing for larger screens",
            },
          ],
        },
      ],
      challenges: [
        {
          id: "challenge-mod-1",
          title: "Challenge for HTML & CSS Fundamentals",
          description: "Complete the assigned task and submit your code.",
          contentUrl: "",
          submissionType: "code",
          createdAt: "2025-01-10T00:00:00",
          updatedAt: "2025-01-15T00:00:00",
        },
      ],
    },
    {
      id: "mod-2",
      number: 2,
      title: "JavaScript Basics",
      description: "Module about javascript basics",
      level: "BEGINNER",
      durationWeeks: 3,
      status: "NOT_STARTED",
      objective: [
        "Understand JavaScript fundamentals including variables, data types, and operators",
        "Master control structures like loops and conditional statements",
        "Learn functions, scope, and basic DOM manipulation",
        "Practice working with arrays, objects, and basic algorithms",
      ],
      acheivementBadgeIcon: "FaJsSquare",
      mentorComment:
        "Pay attention to variable scope and mastering basic data types.",
      xp: 60,
      content: [
        {
          id: "content-2-1",
          title: "JavaScript Basics Part 1",
          number: 1,
          status: "NOT_STARTED",
          contentType: "video",
          contentLink: "https://example.com/javascript-basics-1",
          contentAssessment: [
            {
              question:
                "What is the difference between var, let, and const in JavaScript?",
              options: [
                "var is block-scoped, let is function-scoped, const is global-scoped",
                "var is function-scoped, let is block-scoped, const is block-scoped and immutable",
                "They are all the same with different names",
              ],
              answer:
                "var is function-scoped, let is block-scoped, const is block-scoped and immutable",
            },
            {
              question: "What is hoisting in JavaScript?",
              options: [
                "Moving all variable declarations to the bottom of the scope",
                "Moving all variable declarations to the top of the scope",
                "Moving all function declarations to another file",
              ],
              answer:
                "Moving all variable declarations to the top of the scope",
            },
            {
              question:
                "What is the purpose of the 'this' keyword in JavaScript?",
              options: [
                "To reference the current function",
                "To reference the global object",
                "To reference the current object context",
              ],
              answer: "To reference the current object context",
            },
          ],
        },
        {
          id: "content-2-2",
          title: "JavaScript Basics Part 2",
          number: 2,
          status: "NOT_STARTED",
          contentType: "article",
          contentLink: "https://javascript.info/data-types",
          contentAssessment: [
            {
              question: "How do JavaScript arrays differ from objects?",
              options: [
                "Arrays use numbered indexes while objects use named properties",
                "Arrays can only store numbers while objects can store any data type",
                "Arrays are slower than objects for data storage",
              ],
              answer:
                "Arrays use numbered indexes while objects use named properties",
            },
            {
              question:
                "What is the purpose of the map() method in JavaScript arrays?",
              options: [
                "To filter out elements from an array",
                "To create a new array by transforming each element",
                "To sort array elements in ascending order",
              ],
              answer: "To create a new array by transforming each element",
            },
            {
              question:
                "What is the difference between null and undefined in JavaScript?",
              options: [
                "They are exactly the same",
                "null is assigned by JavaScript while undefined is assigned by developers",
                "undefined means a variable is declared but not assigned, null is an explicitly assigned value representing no value",
              ],
              answer:
                "undefined means a variable is declared but not assigned, null is an explicitly assigned value representing no value",
            },
          ],
        },
        {
          id: "content-2-3",
          title: "JavaScript Basics Part 3",
          number: 3,
          status: "NOT_STARTED",
          contentType: "video",
          contentLink: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
          contentAssessment: [
            {
              question:
                "What is event delegation in JavaScript and why is it useful?",
              options: [
                "A technique where event handlers are attached to parent elements to handle events on descendants",
                "A way to prevent event bubbling in the DOM",
                "A method to create custom events in JavaScript",
              ],
              answer:
                "A technique where event handlers are attached to parent elements to handle events on descendants",
            },
            {
              question: "What is the purpose of event bubbling in JavaScript?",
              options: [
                "A way to stop events from propagating",
                "The process where events propagate from child to parent elements",
                "A method to create custom events",
              ],
              answer:
                "The process where events propagate from child to parent elements",
            },
            {
              question: "How can you prevent event bubbling in JavaScript?",
              options: [
                "Using event.preventDefault()",
                "Using event.stopPropagation()",
                "Using event.cancelBubble()",
              ],
              answer: "Using event.stopPropagation()",
            },
          ],
        },
      ],
      challenges: [
        {
          id: "challenge-mod-2",
          title: "Challenge for JavaScript Basics",
          description: "Complete the assigned task and submit your code.",
          contentUrl: "",
          submissionType: "code",
          createdAt: "2025-01-10T00:00:00",
          updatedAt: "2025-01-15T00:00:00",
        },
      ],
    },
    {
      id: "mod-3",
      number: 3,
      title: "Responsive Design & Flexbox",
      description: "Module about responsive design & flexbox",
      level: "BEGINNER",
      durationWeeks: 3,
      status: "NOT_STARTED",
      objective: [
        "Master responsive design principles and techniques",
        "Learn Flexbox layout system for building flexible layouts",
        "Understand mobile-first design approach",
        "Practice creating responsive navigation patterns",
      ],
      acheivementBadgeIcon: "FaCss3Alt",
      mentorComment:
        "Understand how layout systems like flexbox and grid work.",
      xp: 60,
      content: [
        {
          id: "content-3-1",
          title: "Responsive Design & Flexbox Part 1",
          number: 1,
          status: "NOT_STARTED",
          contentType: "video",
          contentLink: "https://www.youtube.com/watch?v=fYq5PXgSsbE",
          contentAssessment: [
            {
              question: "What is the main purpose of Flexbox in CSS?",
              options: [
                "To handle server-side operations",
                "To create one-dimensional layouts and align items within a container",
                "To store data in the browser",
              ],
              answer:
                "To create one-dimensional layouts and align items within a container",
            },
            {
              question:
                "Which property is used to define the direction of flex items?",
              options: ["flex-direction", "flex-flow", "flex-wrap"],
              answer: "flex-direction",
            },
            {
              question: "What is the default value of flex-direction?",
              options: ["column", "row", "row-reverse"],
              answer: "row",
            },
          ],
        },
        {
          id: "content-3-2",
          title: "Responsive Design & Flexbox Part 2",
          number: 2,
          status: "NOT_STARTED",
          contentType: "article",
          contentLink:
            "https://www.freecodecamp.org/news/learn-flexbox-and-responsive-design/",
          contentAssessment: [
            {
              question: "What are the key principles of responsive design?",
              options: [
                "Using fixed pixel widths and absolute positioning",
                "Mobile-first approach, fluid grids, and flexible media",
                "Only using desktop layouts and scaling them down",
              ],
              answer: "Mobile-first approach, fluid grids, and flexible media",
            },
            {
              question:
                "What is the purpose of media queries breakpoints in responsive design?",
              options: [
                "To define specific points where layout changes should occur based on screen size",
                "To break the webpage into smaller sections",
                "To stop the website from loading on mobile devices",
              ],
              answer:
                "To define specific points where layout changes should occur based on screen size",
            },
            {
              question:
                "What is the mobile-first approach in responsive design?",
              options: [
                "Designing only for mobile devices",
                "Starting with desktop design and scaling down",
                "Designing for mobile devices first, then progressively enhancing for larger screens",
              ],
              answer:
                "Designing for mobile devices first, then progressively enhancing for larger screens",
            },
          ],
        },
        {
          id: "content-3-3",
          title: "Responsive Design & Flexbox Part 3",
          number: 3,
          status: "NOT_STARTED",
          contentType: "video",
          contentLink: "https://www.youtube.com/watch?v=K74l26pE4YA",
          contentAssessment: [
            {
              question:
                "What are the main advantages of using Flexbox for layout in responsive design?",
              options: [
                "Easy alignment and distribution of space between items",
                "Better support for older browsers than CSS Grid",
                "More suitable for complex grid-based layouts",
              ],
              answer: "Easy alignment and distribution of space between items",
            },
            {
              question:
                "What is the role of media queries in responsive design?",
              options: [
                "To change styles based on device characteristics like screen size",
                "To handle media file uploads",
                "To play audio and video content",
              ],
              answer:
                "To change styles based on device characteristics like screen size",
            },
            {
              question:
                "What is the purpose of the flex-grow property in Flexbox?",
              options: [
                "To make elements shrink when space is limited",
                "To specify how much an element can grow relative to other flex items",
                "To set the initial size of flex items",
              ],
              answer:
                "To specify how much an element can grow relative to other flex items",
            },
          ],
        },
      ],
      challenges: [
        {
          id: "challenge-mod-3",
          title: "Challenge for Responsive Design & Flexbox",
          description: "Complete the assigned task and submit your code.",
          contentUrl: "",
          submissionType: "code",
          createdAt: "2025-01-10T00:00:00",
          updatedAt: "2025-01-15T00:00:00",
        },
      ],
    },
    {
      id: "mod-4",
      number: 4,
      title: "React Essentials",
      description: "Module about react essentials",
      level: "BEGINNER",
      durationWeeks: 3,
      status: "NOT_STARTED",
      objective: [
        "Understand React fundamentals and component-based architecture",
        "Master JSX syntax and component lifecycle methods",
        "Learn state management and props in React",
        "Practice building reusable components and handling events",
      ],
      acheivementBadgeIcon: "FaReact",
      mentorComment:
        "Learn the component-driven approach and JSX syntax in React.",
      xp: 60,
      content: [
        {
          id: "content-4-1",
          title: "React Essentials Part 1",
          number: 1,
          status: "NOT_STARTED",
          contentType: "video",
          contentLink: "https://www.youtube.com/watch?v=Tn6-PIqc4UM",
          contentAssessment: [
            {
              question:
                "What is the key difference between React components and regular JavaScript functions?",
              options: [
                "React components must return JSX while JavaScript functions can return any value",
                "React components can only accept string parameters",
                "React components cannot have state",
              ],
              answer:
                "React components must return JSX while JavaScript functions can return any value",
            },
            {
              question: "What is the purpose of the 'key' prop in React lists?",
              options: [
                "To style list items differently",
                "To help React identify which items have changed, been added, or been removed",
                "To specify the order of list items",
              ],
              answer:
                "To help React identify which items have changed, been added, or been removed",
            },
            {
              question: "What is the virtual DOM in React?",
              options: [
                "A direct copy of the browser's DOM",
                "A lightweight copy of the DOM that React uses to optimize rendering",
                "A special browser feature only available to React applications",
              ],
              answer:
                "A lightweight copy of the DOM that React uses to optimize rendering",
            },
          ],
        },
        {
          id: "content-4-2",
          title: "React Essentials Part 2",
          number: 2,
          status: "NOT_STARTED",
          contentType: "article",
          contentLink: "https://reactjs.org/docs/getting-started.html",
          contentAssessment: [
            {
              question:
                "What is the difference between props and state in React?",
              options: [
                "Props are mutable while state is immutable",
                "Props are passed from parent components while state is managed internally",
                "Props are for styling only while state handles data",
              ],
              answer:
                "Props are passed from parent components while state is managed internally",
            },
            {
              question: "When should you use the useEffect hook in React?",
              options: [
                "Only for handling click events",
                "For performing side effects like data fetching, subscriptions, or DOM mutations",
                "For defining component styles",
              ],
              answer:
                "For performing side effects like data fetching, subscriptions, or DOM mutations",
            },
            {
              question: "What is the purpose of React's useState hook?",
              options: [
                "To create global state management",
                "To handle form submissions",
                "To add state management capabilities to functional components",
              ],
              answer:
                "To add state management capabilities to functional components",
            },
          ],
        },
        {
          id: "content-4-3",
          title: "React Essentials Part 3",
          number: 3,
          status: "NOT_STARTED",
          contentType: "video",
          contentLink: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
          contentAssessment: [
            {
              question: "What are React hooks and why were they introduced?",
              options: [
                "Functions that let you use state and lifecycle features in functional components",
                "Special CSS classes for styling React components",
                "Tools for debugging React applications",
              ],
              answer:
                "Functions that let you use state and lifecycle features in functional components",
            },
            {
              question:
                "What is the difference between controlled and uncontrolled components in React?",
              options: [
                "Controlled components have their state managed by React while uncontrolled components store state in the DOM",
                "Controlled components are class-based while uncontrolled are functional",
                "There is no difference between them",
              ],
              answer:
                "Controlled components have their state managed by React while uncontrolled components store state in the DOM",
            },
            {
              question:
                "What is the purpose of React.memo() and when should you use it?",
              options: [
                "To memoize expensive calculations and prevent unnecessary re-renders",
                "To create memory leaks in React applications",
                "To handle form submissions in React",
              ],
              answer:
                "To memoize expensive calculations and prevent unnecessary re-renders",
            },
          ],
        },
      ],
      challenges: [
        {
          id: "challenge-mod-4",
          title: "Challenge for React Essentials",
          description: "Complete the assigned task and submit your code.",
          contentUrl: "",
          submissionType: "code",
          createdAt: "2025-01-10T00:00:00",
          updatedAt: "2025-01-15T00:00:00",
        },
      ],
    },
  ],
};
