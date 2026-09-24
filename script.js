
const PROJECTS = [
  {
    id: "american-gangster",
    title: "American Gangster — Fan Key Art",
    image: "assets/images/americangangster.jpeg",
    alt: "American Gangster movie poster with five vertical character panels on a red and black background",
    category: "Movie Poster",
    tags: ["poster", "cinematic", "graphic-design"],
    concept: "A theatrical one-sheet built around an ensemble crime drama, using a \"based on a true story\" framing device to set stakes before a single character is shown.",
    direction: "Five vertical panels each isolate one character in a different emotional beat, unified by a single red-to-black colour grade and a distressed, weathered texture across the whole frame. The title sits in bold condensed type at the base, anchoring the composition the way a real theatrical poster would.",
    style: "Cinematic, dramatic, editorial poster design.",
    tools: "Adobe Photoshop — photo compositing, colour grading, and poster typography.",
    outcome: "A poster that reads instantly as a crime-thriller one-sheet, demonstrating the panel-based key-art format used across the film and OTT industry."
  },
  {
    id: "welcome-simulation",
    title: "\"Welcome to the Simulation\"",
    image: "assets/images/welcome-simulation.jpeg",
    alt: "Surreal poster of a city skyline and airplane emerging from a coffee cup on a cream background",
    category: "AI Image Branding",
    tags: ["ai-art", "poster", "cinematic", "graphic-design"],
    concept: "A surreal, single-image visual essay built around the line \"Welcome to the simulation\" — a city skyline, clouds, and an aircraft rising out of an ordinary coffee cup to suggest that everyday reality is smaller, and stranger, than it appears.",
    direction: "An oversized negative-space cream background isolates the composited scene, with quote-style type set above and a credit line below — treating the artwork like an editorial print or gallery poster rather than a conventional ad.",
    style: "Surreal, minimal, experimental.",
    tools: "AI-assisted image generation combined with Photoshop compositing.",
    outcome: "A stand-alone visual experiment that shows how AI-generated elements can be composited with traditional design principles to produce a conceptual, thought-provoking image."
  },
  {
    id: "book-cover",
    title: "\"Lost in My Own Thoughts\" — Book Cover",
    image: "assets/images/bookcover.jpeg",
    alt: "Red hardcover book titled Lost in My Own Thoughts mocked up on a wooden café table",
    category: "Book & Café Mockup",
    tags: ["graphic-design", "poster", "cinematic"],
    concept: "A book cover built around a single visual metaphor — a figure falling into a spotlight where another figure stands with arms raised — to illustrate the idea of being \"lost in your own thoughts.\"",
    direction: "A bold red field carries a serif title and a spotlight silhouette illustration as the sole visual event, then the finished cover is presented as a realistic hardcover mockup on a sunlit café table for a lifestyle-style presentation shot.",
    style: "Minimal, dramatic, editorial.",
    tools: "Adobe Photoshop, as credited directly on the artwork.",
    outcome: "A complete book-cover concept and presentation mockup, showing design work carried from a flat cover file through to a realistic in-context product shot."
  },
  {
    id: "kings-juice",
    title: "King's Juice — \"Fresh Feel\" Campaign",
    image: "assets/images/kings-juice.jpeg",
    alt: "Orange-themed advertisement for King's Juice orange flavoured drink with the headline Fresh Feel",
    category: "Brand Advertising Post",
    tags: ["advertising", "branding", "product", "graphic-design"],
    concept: "A concept beverage-brand advertisement built to sell a single sensory idea — freshness — through colour, texture, and motion rather than copy.",
    direction: "Hand-painted brush-style headline type, water-droplet product renders, flying citrus wedges and leaves, and a \"100% Natural\" badge work together inside a saturated orange field, with the King's Juice crown logo anchoring the top right corner.",
    style: "Commercial, vibrant, energetic.",
    tools: "Adobe Photoshop — product compositing, typography, and colour treatment.",
    outcome: "A shelf-ready style social/print advertisement concept for a beverage brand, demonstrating packaging-led product advertising design."
  },
  {
    id: "iphone17",
    title: "iPhone 17 — \"Magichromatic\" Concept Ad",
    image: "assets/images/iphone17.jpeg",
    alt: "Apple iPhone 17 advertisement concept showing five colourways with the headline Magichromatic",
    category: "AI Image Branding",
    tags: ["ai-art", "product", "advertising", "graphic-design"],
    concept: "A concept product-launch advertisement exploring how a premium tech brand might announce a new colourway lineup, built as a personal design exercise rather than official client work.",
    direction: "A rendered five-device colour lineup sits beneath a gradient wordmark treatment on a stark white field — a minimal, type-led layout in the style of a flagship tech launch page.",
    style: "Minimal, futuristic, commercial.",
    tools: "AI-assisted product rendering combined with Photoshop layout and typography.",
    outcome: "A polished concept ad demonstrating product-launch styling: gradient wordmark treatment, device staging, and restrained white-space layout."
  },
  {
    id: "fujifilm",
    title: "Fujifilm X-T30 — \"See Beyond the Ordinary\"",
    image: "assets/images/fujifilm.jpeg",
    alt: "Fujifilm X-T30 camera advertisement with an AI-generated lion photo shown on the viewfinder screen",
    category: "AI Image Branding",
    tags: ["ai-art", "product", "advertising"],
    concept: "A camera-brand concept advertisement that proves the product's capability by showing what it can capture — in this case, an AI-generated wildlife portrait framed inside the camera's own viewfinder interface.",
    direction: "A realistic viewfinder overlay (histogram, focus points, exposure readout) frames the hero image, while the physical product sits below alongside a clean feature-icon breakdown of sensor, video, autofocus, and battery specs.",
    style: "Commercial, technical, editorial.",
    tools: "AI image generation for the featured wildlife shot, combined with Photoshop for the interface overlay and product layout.",
    outcome: "A concept ad that merges generative AI imagery with traditional product-advertising layout — a direct example of AI-assisted creative production."
  },
  {
    id: "louis-vuitton",
    title: "Louis Vuitton — \"Timeless Style\" Campaign",
    image: "assets/images/louisvuitton.jpeg",
    alt: "Louis Vuitton Neverfull MM handbag advertisement with a model walking on a European street",
    category: "Fashion & E-commerce Branding",
    tags: ["branding", "advertising", "cinematic", "graphic-design"],
    concept: "A luxury fashion e-commerce advertisement concept built around a single lifestyle photograph, positioning a handbag through aspiration and everyday elegance rather than a plain product shot.",
    direction: "Editorial street photography is paired with a serif headline (\"Timeless style. Everyday icon.\"), three benefit call-outs with line icons, and a clear call-to-action band — a layout modelled on real luxury e-commerce landing pages.",
    style: "Editorial, luxury, minimal.",
    tools: "Photoshop layout, typography, and photo retouching.",
    outcome: "A concept fashion campaign layout demonstrating e-commerce and luxury branding design conventions."
  },
  {
    id: "cetaphil",
    title: "Cetaphil — \"Deep Hydration\" Product Ad",
    image: "assets/images/cetaphil.jpeg",
    alt: "Cetaphil skincare product advertisement with a lineup of lotion bottles on a green botanical background",
    category: "Brand Advertising Post",
    tags: ["advertising", "branding", "product"],
    concept: "A skincare product-lineup advertisement designed around the reassurance of a dermatology-style brand — soft, clean, and \"made for sensitive skin.\"",
    direction: "A tiered green-block product display staggers five bottle sizes by height, framed with hand-drawn heart doodles and botanical leaf textures to keep the mood warm rather than clinical.",
    style: "Soft, natural, commercial.",
    tools: "Photoshop — product arrangement, colour grading, and layout.",
    outcome: "A concept product-range advertisement demonstrating category-appropriate tone: gentle, botanical, and trust-driven for a personal-care brand."
  },
  {
    id: "amazon",
    title: "Amazon — \"Shop Prime\" Lifestyle Ad",
    image: "assets/images/amazon.jpeg",
    alt: "Amazon Prime advertisement with a stacked collage of shopping products on an orange background",
    category: "Brand Advertising Post",
    tags: ["advertising", "branding", "product"],
    concept: "A concept lifestyle advertisement for an e-commerce platform, built to communicate variety and everyday convenience through a single dense product collage rather than one hero product.",
    direction: "Sneakers, a guitar, a lamp, a coffee maker, a smart speaker and delivery boxes are stacked into one balanced pyramid composition on a saturated brand-orange field, with the wordmark and \"Shop / Prime\" lockup anchoring the page.",
    style: "Commercial, playful, high-energy.",
    tools: "Photoshop compositing and product arrangement.",
    outcome: "A concept retail advertisement demonstrating multi-product collage composition for e-commerce marketing."
  },
  {
    id: "dell-xps",
    title: "Dell XPS 16 — \"Power. Beauty. Precision.\"",
    image: "assets/images/dellxps.jpeg",
    alt: "Dell XPS 16 laptop advertisement in a dark luxury studio setting with a colourful abstract wallpaper",
    category: "Product Design",
    tags: ["product", "advertising", "graphic-design"],
    concept: "A concept premium-laptop advertisement aimed at creative professionals, positioning the device through a moody studio environment rather than a plain product cutout.",
    direction: "The laptop is staged on a dark marble surface inside a softly lit studio, paired with a left-aligned spec column and a bottom strip of Adobe Creative Cloud app icons — signalling \"built for creators\" without needing a headline to say it.",
    style: "Luxury, minimal, futuristic.",
    tools: "Photoshop compositing, product rendering, and layout design.",
    outcome: "A concept technology advertisement demonstrating premium product staging for a creative-professional audience."
  },
  {
    id: "starbucks",
    title: "Starbucks Maison Café — Espresso Packaging",
    image: "assets/images/starbucks.jpeg",
    alt: "Starbucks Maison Café espresso packaging advertisement with a coffee bag and steaming espresso cup",
    category: "Product Design",
    tags: ["product", "branding", "advertising"],
    concept: "A concept packaging and promotional ad for a premium espresso product line, built to communicate ritual and quality (\"single origin,\" \"100% Arabica\") rather than a discount-driven message.",
    direction: "A matte black stand-up pouch with gold botanical line art sits beside a glass espresso cup on a dark wood surface scattered with coffee beans, with a gold \"Order Now\" call-to-action and social engagement icons framing it as a social-ready promotional post.",
    style: "Luxury, warm, editorial.",
    tools: "Photoshop — packaging mockup, product photography compositing, and typography.",
    outcome: "A concept packaging design and matching promotional ad, showing packaging design carried through to a finished social-media-ready post."
  },
  {
    id: "nike-sneaker",
    title: "Sneaker Drop — \"New Arrival\" Ad Template",
    image: "assets/images/nike-sneaker.jpeg",
    alt: "Blue sneaker advertisement template with bold Sneaker headline and flat fifty percent off badge",
    category: "Billboard Design",
    tags: ["advertising", "product", "graphic-design"],
    concept: "A bold, large-format promotional layout for a footwear drop, designed to work at billboard or out-of-home scale where a message needs to land in seconds.",
    direction: "A dramatic diagonal product angle, oversized outlined type, and a striped blue gradient background maximise contrast and shelf/street impact, with a discount badge and call-to-action placed for instant readability from a distance.",
    style: "Bold, dynamic, commercial.",
    tools: "Photoshop — product cutout, typography, and layout.",
    outcome: "A large-format promotional template demonstrating high-impact advertising design suited to billboard and out-of-home placement."
  },
  {
    id: "aurora-v1",
    title: "Aurora Digital — Agency Ad (First Pass)",
    image: "assets/images/aurora-v1.jpeg",
    alt: "Early version of Aurora Digital marketing agency advertisement with a service icon grid and dashboard mockup",
    category: "Brand & Advertising",
    tags: ["branding", "advertising", "graphic-design"],
    concept: "The first design pass for a digital-marketing agency's promotional advertisement, establishing the core layout: a service grid, a growth-focused headline, and a dashboard visual as proof of results.",
    direction: "A dark, dashboard-style aesthetic with gold accents positions the agency as data-driven and premium; icons stand in for each service line while a laptop-and-phone mockup shows a sample analytics dashboard.",
    style: "Corporate, modern, premium.",
    tools: "Photoshop — layout, iconography, and mockup compositing.",
    outcome: "An initial creative concept for an agency's advertising asset, later refined into a more detailed second version (see \"Agency Ad — Final Version\")."
  },
  {
    id: "aurora-v2",
    title: "Aurora Digital — Agency Ad (Final Version)",
    image: "assets/images/aurora-v2.jpeg",
    alt: "Final version of Aurora Digital marketing agency advertisement with detailed service descriptions, dashboard, and trust indicators",
    category: "Brand & Advertising",
    tags: ["branding", "advertising", "graphic-design"],
    concept: "The refined, final version of the Aurora Digital agency advertisement — expanding the first pass with fuller service descriptions, a detailed live-metrics dashboard, trust indicators, and an industries-served strip.",
    direction: "Every service icon now carries a short benefit line, the dashboard mockup shows specific revenue and conversion figures for credibility, and a bottom band of value propositions and a phone number closes the layout the way a real agency landing page or pitch deck would.",
    style: "Corporate, premium, data-driven.",
    tools: "Photoshop — full layout refinement, iconography, and dashboard UI mockup design.",
    outcome: "A polished, presentation-ready agency advertisement that shows the design progressing from an initial concept to a client-ready final layout — a direct example of the idea-to-execution process."
  }
];

const CATEGORY_ICON = {
  "Movie Poster": "🎬",
};

/* ---------------------------------------------------------
   RENDER PROJECT GRID
--------------------------------------------------------- */
const grid = document.getElementById("projectGrid");

function renderProjects(){
  grid.innerHTML = PROJECTS.map(p => `
    <article class="project-card" data-tags="${p.tags.join(' ')}" data-id="${p.id}" tabindex="0">
      <img src="${p.image}" alt="${p.alt}" loading="lazy">
      <div class="project-overlay">
        <span class="project-category">${p.category}</span>
        <h3 class="project-title">${p.title}</h3>
        <span class="project-view">View Project Details →</span>
      </div>
    </article>
  `).join("");

  // reveal-on-scroll for cards
  document.querySelectorAll(".project-card").forEach(card => cardObserver.observe(card));

  // click / keyboard to open modal
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.id));
    card.addEventListener("keypress", (e) => {
      if(e.key === "Enter") openModal(card.dataset.id);
    });
  });
}

/* ---------------------------------------------------------
   INTERSECTION OBSERVER — card reveal
--------------------------------------------------------- */
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("in-view");
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

/* ---------------------------------------------------------
   FILTERING
--------------------------------------------------------- */
const filterBar = document.getElementById("filterBar");

filterBar.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if(!btn) return;

  filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  const filter = btn.dataset.filter;
  document.querySelectorAll(".project-card").forEach(card => {
    const tags = card.dataset.tags.split(" ");
    const match = filter === "all" || tags.includes(filter);
    card.classList.toggle("hidden-card", !match);
  });
});

/* ---------------------------------------------------------
   MODAL
--------------------------------------------------------- */
const overlay = document.getElementById("modalOverlay");
const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalConcept = document.getElementById("modalConcept");
const modalDirection = document.getElementById("modalDirection");
const modalStyle = document.getElementById("modalStyle");
const modalTools = document.getElementById("modalTools");
const modalOutcome = document.getElementById("modalOutcome");

function openModal(id){
  const p = PROJECTS.find(proj => proj.id === id);
  if(!p) return;

  modalImage.src = p.image;
  modalImage.alt = p.alt;
  modalCategory.textContent = p.category;
  modalTitle.textContent = p.title;
  modalConcept.textContent = p.concept;
  modalDirection.textContent = p.direction;
  modalStyle.textContent = p.style;
  modalTools.textContent = p.tools;
  modalOutcome.textContent = p.outcome;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => { if(e.target === overlay) closeModal(); });
document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeModal(); });

/* ---------------------------------------------------------
   HEADER SCROLL STATE
--------------------------------------------------------- */
const header = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });

/* ---------------------------------------------------------
   MOBILE NAV
--------------------------------------------------------- */
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileNav = document.getElementById("mobileNav");

function toggleMobileNav(open){
  const isOpen = open !== undefined ? open : !mobileNav.classList.contains("open");
  mobileNav.classList.toggle("open", isOpen);
  hamburgerBtn.classList.toggle("open", isOpen);
  hamburgerBtn.setAttribute("aria-expanded", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
}

hamburgerBtn.addEventListener("click", () => toggleMobileNav());
document.querySelectorAll(".mobile-nav-link, .mobile-nav-cta").forEach(link => {
  link.addEventListener("click", () => toggleMobileNav(false));
});

/* ---------------------------------------------------------
   ACTIVE NAV LINK ON SCROLL
--------------------------------------------------------- */
const sections = ["home","about","work","skills","experience","contact"]
  .map(id => document.getElementById(id))
  .filter(Boolean);

const navLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle("active-link", link.getAttribute("href") === `#${id}`);
      });
    }
  });
}, { threshold: 0.4, rootMargin: "-80px 0px -50% 0px" });

sections.forEach(sec => sectionObserver.observe(sec));

/* ---------------------------------------------------------
   GENERIC SCROLL-REVEAL for [data-reveal] and .fade-up
--------------------------------------------------------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("revealed");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll("[data-reveal]").forEach(el => revealObserver.observe(el));

// Auto fade-up for common section blocks (single orchestrated pattern, not scattered per-card)
document.querySelectorAll(
  ".about-content, .about-media, .areas-grid, .skills-grid, .process-track, .experience-grid, .career-grid, .contact-grid, .work-intro, .filter-bar"
).forEach(el => {
  el.classList.add("fade-up");
  revealObserver.observe(el);
});

/* ---------------------------------------------------------
   HERO LOAD-IN SEQUENCE
--------------------------------------------------------- */
window.addEventListener("DOMContentLoaded", () => {
  renderProjects();

  // staggered hero reveal
  const heroReveals = document.querySelectorAll(".hero [data-reveal]");
  heroReveals.forEach((el, i) => {
    setTimeout(() => el.classList.add("revealed"), 200 + i * 140);
  });

  const heroLines = document.querySelectorAll(".hero-title .reveal-line span");
  heroLines.forEach((el, i) => {
    el.style.transform = "translateY(110%)";
    el.style.opacity = "0";
    el.style.transition = `transform .9s cubic-bezier(.22,.68,0,1) ${0.15 + i * 0.12}s, opacity .9s ease ${0.15 + i * 0.12}s`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transform = "translateY(0)";
        el.style.opacity = "1";
      });
    });
  });
});