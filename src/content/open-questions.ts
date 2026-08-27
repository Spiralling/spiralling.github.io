// Open questions page — content only. Order runs from foundations to practice on purpose.

export interface Pointer {
  label: string;
  url: string;
}

export interface Question {
  lead: string;
  body: string;
  pointers?: Pointer[];
}

export interface Area {
  id: string;
  name: string;
  intro?: string;
  questions: Question[];
}

export const openQuestionsMeta = {
  title: "Open Questions",
  updated: "August 2026",
  intro: `My work couples across a lot of domains, so a list of "interests" doesn't say much. This is a list of the questions I'm actually stuck on. If one of them is yours too, write to me.`,
  order: "Six areas, roughly in order from foundations to practice.",
  closing: {
    title: "Working with me on these",
    body: `I don't need co-authors on all of them. Useful shapes: a pointer to a paper that already answers one; an hour at a whiteboard on section 4; a dataset or a municipality for section 6.`,
  },
};

export const areas: Area[] = [
  {
    id: "foundations",
    name: "Collective agent foundations",
    intro: `The base question: when does a collection of distributed information-processing systems become more than the sum of its parts? I've been approaching it through non-equilibrium steady-state processes, but I suspect there's better language for it.`,
    questions: [
      {
        lead: "When do many become one?",
        body: "What licenses drawing a boundary around a group and calling it one agent?",
        pointers: [
          { label: "Open Questions in Collective Agent Foundations (draft)", url: "/pdfs/open-questions-caf.pdf" },
          { label: "Markov Blanket Discovery via Minimum Cut (draft)", url: "/pdfs/markov-blanket-mincut.pdf" },
        ],
      },
      {
        lead: "A taxonomy of agents.",
        body: "If agency is relational and comes in levels, what are the main angles you'd want to look at these systems from? What does a phylogeny of agents look like?",
        pointers: [
          { label: "A Taxonomy of Agents From The Intentional Stance (draft)", url: "/pdfs/taxonomy-of-agents.pdf" },
          { label: "A Phylogeny of Agents (post)", url: "https://www.lesswrong.com/posts/vqfT5QCWa66gsfziB/a-phylogeny-of-agents" },
        ],
      },
      {
        lead: "What do the disciplines see differently?",
        body: "Biology, social science and psychology each describe agents at their own coarse-graining. What differs between their descriptions, and what does each have that the others lack?",
      },
      {
        lead: "How closed does a loop need to be?",
        body: "To what extent do feedback loops need to be closed, and on what timescale, for something to count as an agent?",
      },
      {
        lead: "Bayesian structure without mean-field reductionism.",
        body: "What foundations would you want for Bayes-net structure learning that can describe genuinely independent physical structures, without collapsing everything into Gaussian mean-field approximations?",
      },
    ],
  },
  {
    id: "cybernetics",
    name: "Cybernetics: variety, sufficient statistics, regulation",
    questions: [
      {
        lead: "What does variety mean here?",
        body: "For a collective, how do you measure the complexity of the thing being regulated, and the information complexity that has to be shared to regulate it?",
      },
      {
        lead: "Sufficient statistics for control.",
        body: "Often a few well-chosen variables are enough to steer a system. How do those variables relate to the full system? When is “good enough variables” actually good enough?",
      },
      {
        lead: "How much information makes a decision possible at all?",
        body: "Before any game theory: is there a floor of variety, bits, or world-model coupling below which coordination can't happen? How does sub-modules' access to each other's information affect their ability to cooperate?",
        pointers: [
          { label: "A Spectral Model of Collective Active Inference (draft)", url: "/pdfs/spectral-collective-ai.pdf" },
        ],
      },
      {
        lead: "System 5.",
        body: "In the Viable System Model, System 5 sets identity and policy. What does it mean, concretely, to set hierarchical priors? To set stories? What's the relationship between the “ought” layer and the layer of stories?",
        pointers: [
          { label: "Active Inference and The Viable Systems Model (draft)", url: "/pdfs/active-inference-vsm.pdf" },
        ],
      },
      {
        lead: "Dreams and preferences.",
        body: "What's the relation between dreaming (offline simulation) and the ability to model possible preference relations in the world?",
      },
    ],
  },
  {
    id: "social-systems",
    name: "Social systems as information processors",
    questions: [
      {
        lead: "How do democracy and markets build sufficient statistics?",
        body: "Both compress a huge amount of distributed information into something a system can coordinate on. How, and what do they throw away?",
      },
      {
        lead: "Commander's intent vs open-ended.",
        body: "In a distributed system, when do you give it a specific goal, when do you let it run open-endedly, and when do you throttle the feedback loops? Between a fully predictable steering mechanism at the top (predictive liquid democracy) and letting departments decide for themselves, what is the thing in the middle? A cell isn't micromanaged; some sufficient statistic lets the organism organise it.",
        pointers: [
          { label: "A Model of Predictive Governance (draft)", url: "/pdfs/predictive-governance.pdf" },
        ],
      },
      {
        lead: "Error-correcting codes in social systems.",
        body: "Biological systems (Michael Levin's regeneration work, planaria) are strikingly resilient; something like an error-correcting code seems to be at work. Is there a real analogue in social systems, and maybe in markets and power grids?",
      },
      {
        lead: "Exploration vs exploitation: networks vs hierarchies.",
        body: "How does the balance differ between networked and hierarchical systems? How does average information flow relate to a hierarchy's decision-making power? A company has bottom-up decision flows the way the brain has sensory signals flowing up to a controller in the prefrontal cortex.",
      },
      {
        lead: "Meso-level representations: emotions and polycentric governance.",
        body: "Emotions look like reflexively changing concepts, shaped by the levels above and below them. The middle layers are where a system gets its flexibility; that's where the adaptive-institutions idea comes from, and it's how the brain adapts to new environments. What's the relation between emotions in the brain and polycentric governance? Both look like ways to do distributed world-modelling.",
      },
    ],
  },
  {
    id: "duals",
    name: "Dynamical systems and game theory as duals",
    intro: "This is the one I'd most like to take another shot at.",
    questions: [
      {
        lead: "The claim.",
        body: "Dynamical systems theory is already time-dependent; game theory mostly isn't. If you build an information-theoretic dynamical-systems view that puts communication first, the game-theoretic view might fall out as an implied dual: systems that can communicate can coordinate, and systems that can coordinate end up in cooperative outcomes far more often.",
      },
      {
        lead: "Universal information-passing systems.",
        body: "Can social systems be described as universal message-passing systems, so that game-theoretic structure becomes a property of the communication graph?",
        pointers: [
          { label: "Towards a Langlands Program for Collective Intelligence (draft)", url: "/pdfs/towards-langlands-ci.pdf" },
        ],
      },
      {
        lead: "Symmetries.",
        body: "Social systems impose symmetries on top of models of reality: democracy's many-to-one-to-many mapping, markets' different mappings. Can we map those symmetries to mathematical properties, and from there to the axioms each system depends on? The parliament as a spectral object is a first attempt.",
      },
      {
        lead: "Importing proofs.",
        body: "If the symmetries are mathematical, results travel between fields. How does Condorcet's jury theorem interact with Hayek's knowledge-in-markets argument? What are the combined properties, and can we build information-processing systems more efficient than either alone?",
      },
    ],
  },
  {
    id: "simulation",
    name: "Simulation, evidence, and what replaces “evals”",
    questions: [
      {
        lead: "How do you model evidence in multi-agent simulations?",
        body: "If the approach is multidisciplinary, where does the box stop? What do we actually care about measuring?",
        pointers: [
          { label: "CI Lab: A Functional Simulation Engine (draft)", url: "/pdfs/ci-lab.pdf" },
        ],
      },
      {
        lead: "What's the adaptive version of an evaluation?",
        body: "Evaluations are relatively static. What's the thing instead of evals that allows continuous improvement: law, contracts, something else?",
      },
      {
        lead: "The separation-of-powers problem.",
        body: "If evaluators come from the labs and work closely with them, that's a revolving door, and we've watched that fail elsewhere. What structure keeps evaluation genuinely independent?",
      },
      {
        lead: "Phase spaces as the object.",
        body: "If we take the temporal-loop view, is the right object of a continuous evaluation a phase space rather than a score?",
      },
      {
        lead: "Optimisers over the simulation.",
        body: "Given a generalised, dynamical-systems simulation of these setups, can graph neural networks or similar optimisers run on top of it to optimise mechanisms across environments?",
      },
    ],
  },
  {
    id: "institutions",
    name: "Adaptive institutions in practice",
    intro: "If governance is going to keep up with AI, the boring functions matter most.",
    questions: [
      {
        lead: "Which functions make institutions adaptive?",
        body: "Candidates: auditing (writing down what was actually spent), data-enabled journalism (Our World in Data as the model: better factual access), and local-government decision-making.",
      },
      {
        lead: "Capacity-circle expansion.",
        body: "If local governments could make shared infrastructure decisions well, they'd spend less on quarrels and gain capacity for the next level up. Solve the basic cases, then go up the chain. Which basic cases first?",
      },
      {
        lead: "Thick values as a signal-processing problem.",
        body: "How well do politicians actually understand their constituents? Can we improve how information from constituents gets processed and fed into decision loops? Better models here give better contracts, interfaces and escalation points, and, done from several angles, a way of policing behaviour that avoids power concentration.",
      },
      {
        lead: "A CRM for local government.",
        body: "What would a constituent-relationship-management system for a municipality look like? Boring on purpose.",
      },
    ],
  },
];
