export const profile = {
  name: "Jonas Hallgren",
  tagline: "Connecting ideas across fields to build compositional foundations for collective intelligence",
  bio: `I study how groups of agents — human, AI, or mixed — can coordinate better. My work sits at the intersection of multi-agent systems, AI safety, and democratic mechanism design. Rather than reducing everything to one framework, I try to connect perspectives from game theory, active inference, computational social science, and category theory to find where they compose. I'm building simulation infrastructure to test whether coordination mechanisms actually work before deploying them in the real world.`,
  philosophy: `A quick way to explain what I do: if individual agents are trees and game theory is about how trees interact, I'm looking at forest-level properties. How do interaction networks look? What are the ecosystem-level effects within specific niches like democracies and markets? How can we protect these systems? I assume someone already solved my problem in a different field — so I read across disciplines looking for patterns that repeat across contexts. I take play seriously as a learning mechanism, and I try to make the implicit explicit.`,
  personal: `I'm outgoing when something interests me, otherwise I sit and read books. If I say something that makes you wonder if it was irony, assume it is. I'm a good listener, but if you bring up something I've thought about a lot, I will go on a five-minute rant. Known for these rants in certain circles.`,
  interests: "Metal music, strategy games, meditation, nature, sci-fi & fantasy, applied math, history, info hazards, and literally any subfield of science except thermodynamics.",
  affiliations: ["Equilibria Network", "Uppsala University"],
  photo: "/photo.jpg",
  links: {
    email: "jonas@eq-network.org",
    scholar: "https://scholar.google.com/citations?user=uJLG7dcAAAAJ&hl=en",
    github: "https://github.com/spiralling",
    linkedin: "https://www.linkedin.com/in/jonas-hallgren/",
    lesswrong: "https://www.lesswrong.com/users/jonas-hallgren",
  },
};

// --- Published Research ---

export interface Paper {
  title: string;
  description: string;
  status: "published" | "draft";
  year: number;
  url?: string;
}

export const publishedPapers: Paper[] = [
  {
    title: "Democratic Mechanisms Under Pressure: An LLM Simulation Study of Organizational Resilience",
    description: "Master's thesis — simulating how democratic governance mechanisms hold up under adversarial conditions using LLM-based agents.",
    status: "published",
    year: 2025,
  },
  {
    title: "A Langlands Program for Collective Intelligence",
    description: "A mathematical framework bridging game theory, social physics, and collective intelligence through categorical foundations.",
    status: "draft",
    year: 2025,
  },
];

// --- Current Drafts ---

export type DraftStage = "1st" | "2nd" | "final";

export interface Draft {
  title: string;
  pdf: string;
  stage: DraftStage;
}

export const currentDrafts: Draft[] = [
  {
    title: "Towards a Langlands Program for Collective Intelligence",
    pdf: "/pdfs/towards-langlands-ci.pdf",
    stage: "final",
  },
  {
    title: "Procedural Alignment",
    pdf: "/pdfs/procedural-alignment.pdf",
    stage: "1st",
  },
  {
    title: "Active Inference and The Viable Systems Model",
    pdf: "/pdfs/active-inference-vsm.pdf",
    stage: "1st",
  },
  {
    title: "Open Questions in Collective Agent Foundations",
    pdf: "/pdfs/open-questions-caf.pdf",
    stage: "2nd",
  },
  {
    title: "Open Problems in AI-Mediated Epistemic Resilience",
    pdf: "/pdfs/open-problems-epistemic.pdf",
    stage: "1st",
  },
  {
    title: "The Spectral Theory of Memetic Evolution",
    pdf: "/pdfs/spectral-memetic-evolution.pdf",
    stage: "1st",
  },
  {
    title: "A Spectral Model of Collective Active Inference",
    pdf: "/pdfs/spectral-collective-ai.pdf",
    stage: "2nd",
  },
  {
    title: "A Model of Predictive Governance",
    pdf: "/pdfs/predictive-governance.pdf",
    stage: "2nd",
  },
  {
    title: "A Taxonomy of Agents From The Intentional Stance",
    pdf: "/pdfs/taxonomy-of-agents.pdf",
    stage: "2nd",
  },
  {
    title: "A Natural History of Agency",
    pdf: "/pdfs/natural-history-agency.pdf",
    stage: "2nd",
  },
  {
    title: "Cultural Evolution of Cognitive Tools in Multi-Agent AI Systems",
    pdf: "/pdfs/cultural-evolution-cognitive.pdf",
    stage: "1st",
  },
  {
    title: "Scalar Properties of Agency",
    pdf: "/pdfs/scalar-agency.pdf",
    stage: "1st",
  },
  {
    title: "Adaptive Resolution Modelling",
    pdf: "/pdfs/adaptive-resolution.pdf",
    stage: "1st",
  },
  {
    title: "Markov Blanket Discovery via Minimum Cut",
    pdf: "/pdfs/markov-blanket-mincut.pdf",
    stage: "2nd",
  },
  {
    title: "Convergent Structures in Collective Intelligence",
    pdf: "/pdfs/convergent-structures.pdf",
    stage: "1st",
  },
  {
    title: "Modelling Bottlenecks in Decentralised Science",
    pdf: "/pdfs/bottlenecks-desci.pdf",
    stage: "1st",
  },
  {
    title: "Agent Identification through TPMs & Markov Blankets",
    pdf: "/pdfs/agent-id-tpm.pdf",
    stage: "1st",
  },
  {
    title: "CI Lab: A Functional Simulation Engine for Large-Scale CI Experiments",
    pdf: "/pdfs/ci-lab.pdf",
    stage: "1st",
  },
  {
    title: "Improving High Output Management through Predictions",
    pdf: "/pdfs/improving-hom-predictions.pdf",
    stage: "1st",
  },
];

// --- LessWrong Posts ---

export interface Post {
  title: string;
  url: string;
  date?: string;
}

export const lesswrongPosts: Post[] = [
  {
    title: "Have You Tried Thinking About It As Crystals?",
    url: "https://www.lesswrong.com/posts/vqfT5QCWa66gsfziB/have-you-tried-thinking-about-it-as-crystals",
    date: "Dec 2025",
  },
  {
    title: "A Phylogeny of Agents",
    url: "https://www.lesswrong.com/posts/vqfT5QCWa66gsfziB/a-phylogeny-of-agents",
    date: "Aug 2025",
  },
  {
    title: "Spectral Signatures of Gradual Disempowerment",
    url: "https://www.lesswrong.com/users/jonas-hallgren",
    date: "Feb 2026",
  },
  {
    title: "Systemic Risks and Where to Find Them",
    url: "https://www.lesswrong.com/users/jonas-hallgren",
    date: "Feb 2026",
  },
  {
    title: "The Atoms of Knowledge Aren't Universal",
    url: "https://www.lesswrong.com/users/jonas-hallgren",
    date: "Feb 2026",
  },
  {
    title: "Crystals in NNs: Technical Companion Piece",
    url: "https://www.lesswrong.com/users/jonas-hallgren",
    date: "Dec 2025",
  },
  {
    title: "Intuition Pump: The AI Society",
    url: "https://www.lesswrong.com/users/jonas-hallgren",
    date: "Dec 2025",
  },
  {
    title: "Cancer; A Crime Story (and Other Tales of Optimization Gone Wrong)",
    url: "https://www.lesswrong.com/users/jonas-hallgren",
    date: "Nov 2025",
  },
  {
    title: "System Level Safety Evaluations",
    url: "https://www.lesswrong.com/users/jonas-hallgren",
    date: "Sep 2025",
  },
  {
    title: "A Lens on the Sharp Left Turn: Optimization Slack",
    url: "https://www.lesswrong.com/users/jonas-hallgren",
    date: "Sep 2025",
  },
  {
    title: "The Alignment Mapping Program: Forging Independent Thinkers in AI Safety",
    url: "https://www.lesswrong.com/users/jonas-hallgren",
    date: "Jan 2025",
  },
  {
    title: "Meditation Insights as Phase Shifts in Your Self-Model",
    url: "https://www.lesswrong.com/users/jonas-hallgren",
    date: "Jan 2025",
  },
  {
    title: "Model Integrity: MAI's Fresh Take on Value Alignment",
    url: "https://www.lesswrong.com/posts/5You9pSKXEjhrDmrq/model-integrity-mai-s-fresh-take-on-value-alignment",
    date: "Dec 2024",
  },
  {
    title: "Reprogramming the Mind: Meditation as a Tool for Cognitive Optimization",
    url: "https://www.lesswrong.com/posts/zzGCE2PqNEjmH58ZB/reprograming-the-mind-meditation-as-a-tool-for-cognitive",
    date: "Jan 2024",
  },
  {
    title: "How Well Does Your Research Address the Theory-Practice Gap?",
    url: "https://www.lesswrong.com/users/jonas-hallgren",
    date: "Nov 2023",
  },
  {
    title: "Advice for New Alignment People: Info Max",
    url: "https://www.lesswrong.com/users/jonas-hallgren",
    date: "May 2023",
  },
  {
    title: "Respect for Boundaries as Non-Arbitrary Coordination Norms",
    url: "https://www.lesswrong.com/posts/ndNHxbkStrfLfQHuA/respect-for-boundaries-as-non-arbirtrary-coordination-norms",
    date: "May 2023",
  },
  {
    title: "Power-Seeking = Minimising Free Energy",
    url: "https://www.lesswrong.com/users/jonas-hallgren",
    date: "Feb 2023",
  },
  {
    title: "The Benefits of Distillation in Research",
    url: "https://www.lesswrong.com/users/jonas-hallgren",
    date: "Mar 2023",
  },
];

// --- Substacks ---

export const substacks = [
  {
    name: "Collective Wizardry Weekly",
    url: "https://wizardryweekly.substack.com/",
    description: "Weekly research notes on collective intelligence foundations — mathematics, simulations, and mechanism design.",
  },
  {
    name: "The Hitchhiker's Guide to Nirvana",
    url: "https://hitchhikersnirvana.substack.com/",
    description: "Explorations at the intersection of philosophy, mind, and language.",
  },
];

// --- Projects ---

export const projects = [
  {
    name: "Equilibria Network",
    url: "https://eq-network.org",
    description: "Simulation infrastructure for testing coordination mechanisms — democracy, markets, governance — before deploying them in the real world.",
    role: "Co-Director",
  },
];

// --- Background ---

export interface Role {
  title: string;
  org: string;
  period: string;
  description?: string;
  url?: string;
}

export const background: Role[] = [
  {
    title: "Co-Director",
    org: "Equilibria Network",
    period: "Oct 2024 – Present",
    url: "https://eq-network.org",
  },
  {
    title: "AI Researcher",
    org: "Digital Democracy World",
    period: "Jun 2023 – Present",
    description: "Designing AI algorithms for Predictive Liquid Democracy.",
  },
  {
    title: "Co-Founder",
    org: "AI Safety Sweden",
    period: "Sep 2022 – Present",
  },
  {
    title: "CSO",
    org: "The Collective Intelligence Company",
    period: "Jan 2024 – Jul 2024",
  },
  {
    title: "Lead Organizer",
    org: "Effektiv Altruism Uppsala",
    period: "Sep 2021 – Sep 2022",
  },
];
