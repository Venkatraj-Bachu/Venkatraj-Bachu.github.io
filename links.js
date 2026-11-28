const portfolioLinks = {
  linkedin: "https://www.linkedin.com/in/venkatbachu/",
  github: "https://github.com/Venkatraj-Bachu",
  leetcode: "https://leetcode.com/u/Venkatbachu/",
  instagram: "https://www.instagram.com/venkatraj07",
  email: "mailto:venkatraj.bachu98@gmail.com",
  resume: "./resume_VenkatrajBachu.pdf"
};

for (const link of document.querySelectorAll("a[data-link]")) {
  link.href = portfolioLinks[link.dataset.link];
}
