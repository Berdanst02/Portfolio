export interface Project {
  id: string;
  title: string;
  category: string;
  year: number;
  tools: string[];
  summary: string;
  description: string;
  /** Image paths relative to /public, e.g. 'projects/bracket-1.png'. Leave empty for a placeholder. */
  images: string[];
  /** Optional link to a model viewer, GrabCAD, Onshape, GitHub, etc. */
  link?: string;
}

export const profile = {
  name: 'Your Name',
  title: 'CAD Designer & Mechanical Engineer',
  intro:
    'I design and model mechanical parts, assemblies and enclosures. Below is a selection of my CAD work.',
  about:
    'Write a short paragraph about your background, what you specialise in, and what you are looking for.',
  email: 'you@example.com',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  tools: ['SolidWorks', 'Fusion 360', 'AutoCAD', 'Onshape', 'KeyShot', 'Blender'],
};

// Replace these sample entries with your own projects.
// Drop images into /public/projects and list them in `images`.
export const projects: Project[] = [
  {
    id: 'gearbox',
    title: 'Two-Stage Planetary Gearbox',
    category: 'Assembly',
    year: 2025,
    tools: ['SolidWorks'],
    summary: '24:1 reduction gearbox sized for a NEMA 23 stepper.',
    description:
      'Fully parametric planetary gearbox with helical gears, a split housing and bearing seats. Includes exploded view and BOM drawings.',
    images: [],
  },
  {
    id: 'enclosure',
    title: 'Sensor Enclosure',
    category: 'Product Design',
    year: 2025,
    tools: ['Fusion 360', 'KeyShot'],
    summary: 'Snap-fit IP54 enclosure designed for FDM printing.',
    description:
      'Two-part enclosure with snap-fit lid, gasket groove, PCB standoffs and cable glands. Rendered in KeyShot.',
    images: [],
  },
  {
    id: 'bracket',
    title: 'Topology-Optimised Bracket',
    category: 'Part Design',
    year: 2024,
    tools: ['Fusion 360'],
    summary: '38% lighter than the baseline bracket at equal stiffness.',
    description:
      'Generative design study of a mounting bracket, followed by manual cleanup for CNC machining.',
    images: [],
  },
  {
    id: 'drawings',
    title: 'Machine Frame Drawings',
    category: 'Technical Drawing',
    year: 2024,
    tools: ['AutoCAD'],
    summary: 'Full manufacturing drawing set with GD&T.',
    description:
      'Fabrication drawings for a welded steel frame: weld symbols, tolerances, BOM and assembly sequence.',
    images: [],
  },
];
