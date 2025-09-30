const milestones = [
  {
    name: "Difference Engine",
    year: 1822,
    description: "Designed by Charles Babbage, the Difference Engine was the first mechanical computer concept. It was intended to automate polynomial calculations, replacing manual methods.",
    impact: "Although never fully completed, it introduced the idea of automated computation. It laid the foundation for later mechanical and electronic computers.",
    image: "assets/difference_engine.jpg",
    reference: "https://en.wikipedia.org/wiki/Difference_engine"
  },
  {
    name: "Differential Analyzer",
    year: 1930,
    description: "An analog computer built to solve differential equations using mechanical integrators. Developed by Vannevar Bush and his team.",
    impact: "It greatly advanced scientific research by automating complex mathematical calculations. Its concepts influenced later electronic computers.",
    image: "assets/differential_analyzer.jpg",
    reference: "https://en.wikipedia.org/wiki/Differential_analyser"
  },
  {
    name: "Atanasoff-Berry Computer (ABC)",
    year: 1942,
    description: "Built by John Atanasoff and Clifford Berry, it was the first electronic digital computer using binary representation.",
    impact: "The ABC introduced the use of binary arithmetic and electronic switching, which became standard in modern computers.",
    image: "assets/abc.jpg",
    reference: "https://en.wikipedia.org/wiki/Atanasoff%E2%80%93Berry_Computer"
  },
  {
    name: "ENIAC",
    year: 1945,
    description: "The first general-purpose electronic digital computer. It used vacuum tubes for computation.",
    impact: "ENIAC could perform thousands of operations per second, drastically reducing calculation times for military and scientific problems.",
    image: "assets/eniac.jpg",
    reference: "https://en.wikipedia.org/wiki/ENIAC"
  },
  {
    name: "Transistor",
    year: 1947,
    description: "Invented at Bell Labs, it replaced vacuum tubes with smaller, more efficient semiconductor devices.",
    impact: "The transistor reduced size, cost, and power consumption. It revolutionized electronics and paved the way for modern computing.",
    image: "assets/transistor.jpg",
    reference: "https://en.wikipedia.org/wiki/Transistor"
  },
  {
    name: "Integrated Circuit",
    year: 1958,
    description: "Developed by Jack Kilby and Robert Noyce, the integrated circuit combined multiple transistors on a single chip.",
    impact: "ICs increased reliability, reduced size, and made computers cheaper, enabling the rise of personal and portable devices.",
    image: "assets/integrated_circuit.jpg",
    reference: "https://en.wikipedia.org/wiki/Integrated_circuit"
  },
  {
    name: "Microprocessor",
    year: 1971,
    description: "The Intel 4004 was the first commercially available microprocessor, placing a CPU on a single chip.",
    impact: "Microprocessors revolutionized performance and accessibility, powering personal computers, embedded devices, and smartphones.",
    image: "assets/microprocessor.jpg",
    reference: "https://en.wikipedia.org/wiki/Microprocessor"
  },
  {
    name: "Personal Computer",
    year: "1970s–1980s",
    description: "Affordable, user-friendly computers for homes and businesses, such as the Apple II and IBM PC.",
    impact: "PCs brought computing power to millions of people, creating industries for software, games, and office productivity.",
    image: "assets/pc.png",
    reference: "https://en.wikipedia.org/wiki/Personal_computer"
  },
  {
    name: "Internet",
    year: 1983,
    description: "The official adoption of TCP/IP created the modern Internet, connecting networks globally.",
    impact: "It transformed communication, commerce, and research, allowing worldwide connectivity and data exchange.",
    image: "assets/internet.png",
    reference: "https://en.wikipedia.org/wiki/History_of_the_Internet"
  },
  {
    name: "Graphical User Interface (GUI)",
    year: 1984,
    description: "Popularized by Apple’s Macintosh, the GUI replaced command-line input with windows, icons, and menus.",
    impact: "It made computers more user-friendly and accessible, helping drive widespread adoption in homes and businesses.",
    image: "assets/gui.png",
    reference: "https://en.wikipedia.org/wiki/Graphical_user_interface"
  },
  {
    name: "World Wide Web",
    year: 1991,
    description: "Invented by Tim Berners-Lee, the Web used HTTP and HTML to share information globally.",
    impact: "The Web made the Internet accessible to the public, transforming it into a powerful platform for communication, education, and business.",
    image: "assets/www.png",
    reference: "https://en.wikipedia.org/wiki/World_Wide_Web"
  },
  {
    name: "Cloud Computing",
    year: 2006,
    description: "Services like Amazon Web Services enabled storage and processing power over the Internet.",
    impact: "Cloud computing allowed businesses and individuals to access scalable resources without owning physical hardware, reducing costs and boosting efficiency.",
    image: "assets/cloud.png",
    reference: "https://en.wikipedia.org/wiki/Cloud_computing"
  },
  {
    name: "Smartphone",
    year: 2007,
    description: "The iPhone revolutionized mobile computing by combining phone, internet, and apps in one device.",
    impact: "Smartphones put powerful computing in people’s pockets, reshaping industries like communication, commerce, and entertainment.",
    image: "assets/smartphone.jpg",
    reference: "https://en.wikipedia.org/wiki/Smartphone"
  },
  {
    name: "Artificial Intelligence & Machine Learning",
    year: "2010s",
    description: "AI and ML systems, powered by big data and GPUs, became mainstream in search engines, assistants, and self-driving cars.",
    impact: "AI transformed performance by enabling automation, pattern recognition, and decision-making beyond human speed and accuracy. It continues to redefine industries worldwide.",
    image: "assets/ai.png",
    reference: "https://en.wikipedia.org/wiki/Artificial_intelligence"
  }
];

const timeline = document.getElementById("timeline");

milestones.forEach(m => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${m.image}" alt="${m.name}">
    <div class="card-content">
      <h2>${m.name} (${m.year})</h2>
      <div class="card-details">
        <p><strong>Description:</strong> ${m.description}</p>
        <p><strong>Performance Impact:</strong> ${m.impact}</p>
        <p><a href="${m.reference}" target="_blank">📖 Read more</a></p>
      </div>
    </div>
  `;

  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });

  timeline.appendChild(card);
});
