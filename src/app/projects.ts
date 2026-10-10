export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  tools: string[];
  summary: string;
  description: string;
  /** Image paths relative to /public, e.g. 'projects/pcb/board.png'. Leave empty for a placeholder. */
  images: string[];
  /** Optional link to a model viewer, GrabCAD, Onshape, GitHub, etc. */
  link?: string;
  /** Opens this in-app page instead of the detail window. */
  route?: string;
}

export interface Job {
  role: string;
  company: string;
  sector: string;
  location: string;
  dates: string;
  bullets: string[];
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Figure {
  src: string;
  title: string;
  caption: string;
  tags: string[];
}

export const profile = {
  name: 'Berdan Stamov',
  title: 'Mechanical Engineering | Mechatronics & Manufacturing',
  intro:
    'Mechanical engineering student at the University of Toronto with hands-on experience in design release, quality engineering and PCB design.',
  email: 'berdanstamov05@gmail.com',
  phone: '647-460-6524',
  linkedin: 'https://linkedin.com/in/berdan-stamov',
  education: {
    school: 'University of Toronto',
    degree: 'BASc Mechanical Engineering, Mechatronics & Manufacturing Specialization',
    date: 'Expected 2028',
  },
  certification: { name: 'Certified SolidWorks Associate (CSWA)', date: 'December 2024' },
};

export const skills: SkillGroup[] = [
  {
    name: 'CAD & Simulation',
    items: [
      'SolidWorks (CSWA)',
      'AutoCAD',
      'Revit',
      'ANSYS Workbench',
      'Eagle CAD',
      'SPICE',
      'MATLAB/Simulink',
    ],
  },
  {
    name: 'Quality & Manufacturing',
    items: [
      'GD&T (ASME Y14.5)',
      'SPC',
      'PPAP',
      'APQP',
      'FMEA',
      'Control Plans',
      'MSA',
      '8D',
      'Root Cause Analysis',
      'CNC Machining',
    ],
  },
  {
    name: 'Metrology & Programming',
    items: [
      'CMM',
      'Optical Comparator',
      'Micrometers & Verniers',
      'Height Gauges',
      'Go/No-Go Gauges',
      'Rockwell Hardness',
      'Python',
      'R',
      'C',
      'Java',
      'Arduino',
      'Excel',
    ],
  },
];

export const experience: Job[] = [
  {
    role: 'Mechanical Design Engineer Intern',
    company: 'Skyjack Inc.',
    sector: 'Aerial Work Platform Manufacturer',
    location: 'Guelph, ON',
    dates: 'Sep. 2026 – Dec. 2026',
    bullets: [
      'Authored and processed ECOs, EPOs and deviations to release design changes while maintaining revision accuracy on released production documentation.',
      'Updated 3D models and assemblies in SolidWorks and managed revision control, approval routing and release through EPDM, evaluating manufacturability and cost impact.',
      'Revised engineering drawings and schematics in DraftSight to implement design changes.',
    ],
  },
  {
    role: 'Quality Engineering Intern',
    company: 'Linamar Corporation',
    sector: 'Automotive Tier 1 Supplier',
    location: 'Guelph, ON',
    dates: 'May 2026 – Aug. 2026',
    bullets: [
      'Performed first-off, receiving and in-process inspections on high-volume machining lines using CMM, shadowgraph, micrometers and verniers.',
      'Interpreted GD&T callouts to disposition nonconforming parts and communicate findings to production and engineering.',
      'Applied SPC control charts to track Cp/Cpk and escalate out-of-control conditions; ran Rockwell and micro-hardness tests to validate heat treatment.',
    ],
  },
  {
    role: 'Research Assistant',
    company: 'Frederickson Lab, University of Toronto',
    sector: 'AI image recognition',
    location: 'Toronto, ON',
    dates: 'Sep. 2024 – Jan. 2025',
    bullets: [
      'Validated the hardware and imaging pipeline of an AI image recognition system, improving classification accuracy by 40% through debugging and sensor calibration.',
      'Automated test benchmarking in Python and built image data extraction and cleaning workflows in R.',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'skyjack',
    title: 'Skyjack Design Work',
    category: 'Mechanical Design',
    date: 'Sep. 2026 – Dec. 2026',
    tools: ['SolidWorks', 'EPDM', 'DraftSight'],
    summary: 'Drawings, weldments and assemblies from my design engineering internship.',
    description: '',
    images: ['projects/Skyjack/IMG_3204.png'],
    route: '/skyjack',
  },
  {
    id: 'cnc-router',
    title: 'CNC Router',
    category: 'Mechanical Design',
    date: 'Team project',
    tools: ['SolidWorks', 'Ball Screws', 'Stepper Motors'],
    summary: 'Upper transmission system and gantry for a CNC router.',
    description: '',
    images: ['projects/CNC ROUTER PROJECT/Screenshot 2026-10-09 211202.png'],
    route: '/cnc-router',
  },
  {
    id: 'jansen-linkage',
    title: 'Jansen Linkage Walking Robot',
    category: 'Mechanical Design',
    date: 'Team project',
    tools: ['SolidWorks', 'FEA', 'Linkage design'],
    summary: 'Five-legged Jansen linkage design for delivery robots, with FEA stress analysis.',
    description: '',
    images: ['projects/Jansen Linkage/Screenshot 2026-10-09 213908.png'],
    route: '/jansen-linkage',
  },
  {
    id: 'current-sense-pcb',
    title: 'Current Sense PCB',
    category: 'Electronics',
    date: 'Jan. 2025',
    tools: ['Eagle CAD', 'SPICE', 'Soldering'],
    summary: 'Current-sense amplifier mapping 0–3 A to 0.25–3.3 V.',
    description: '',
    images: ['projects/current sense/image.png'],
    route: '/current-sense',
  },
  {
    id: 'lie-detector',
    title: 'Lie Detector System',
    category: 'Electronics',
    date: 'Feb. 2026',
    tools: ['Arduino', 'Python'],
    summary: 'MakeUofT hackathon: 36-hour sensor fusion build.',
    description:
      'Integrated heartbeat and GSR sensors with Python facial-expression recognition to fuse physiological and visual stress signals in real time.',
    images: [],
  },
];

export const skyjackIntro =
  'During my Mechanical Design Engineer internship at Skyjack I worked on released production documentation: updating SolidWorks models and assemblies, revising drawings in DraftSight, and routing changes through EPDM with ECOs and EPOs. These are representative drawings and models from that work.';

export const skyjackFigures: Figure[] = [
  {
    src: 'projects/Skyjack/IMG_3204.png',
    title: 'Engine Pulley (D1305)',
    caption:
      'Machined pulley drawing with section and detail views, GD&T (position, runout, flatness), alternate material table and a three-revision ECO history.',
    tags: ['GD&T', 'ECO', 'Machined part'],
  },
  {
    src: 'projects/Skyjack/IMG_3205.png',
    title: 'Engine Tray Weldment',
    caption:
      'Prototype welded sheet-metal tray with weld symbols, section and detail views, balloon callouts and a weighted BOM.',
    tags: ['Weldment', 'Sheet metal', 'BOM'],
  },
  {
    src: 'projects/Skyjack/IMG_3239.png',
    title: 'Control Box Assembly',
    caption:
      'Electrical control box with section views, balloons, wiring references and a full parts list.',
    tags: ['Assembly', 'Electrical'],
  },
  {
    src: 'projects/Skyjack/Screenshot 2026-10-09 210301.png',
    title: 'Dual-Fuel Engine Group',
    caption:
      'Engine group drawing showing the subgroup structure, fuel system routing and the initial-release ECO.',
    tags: ['Engine', 'Fuel system', 'Release'],
  },
  {
    src: 'projects/Skyjack/Screenshot 2026-10-09 210548.png',
    title: 'Wiring Harness',
    caption:
      'Harness layout with connectors, branches, splices and construction notes for manufacturing.',
    tags: ['Harness', 'Schematic'],
  },
  {
    src: 'projects/Skyjack/Screenshot 2026-10-09 210835.png',
    title: 'Pivot Assembly Detail',
    caption: 'Close-up of a pivot and bushing joint inside the 3D SolidWorks assembly.',
    tags: ['SolidWorks', '3D model'],
  },
];

export const cncRouter = {
  image: 'projects/CNC ROUTER PROJECT/Screenshot 2026-10-09 211202.png',
  overview:
    'The upper transmission system of the CNC router is a critical subsystem that ensures precise and efficient motion transfer for the cutting tool. It was designed to integrate seamlessly with the router’s overall framework, focusing on durability, accuracy and ease of maintenance. The design uses a combination of shafts, ball screws and support structures to provide reliable motion transmission.',
  contributions: [
    'Collaborated on the CAD modeling of the router’s frame and components, ensuring structural stability and precision in operation.',
    'Optimized the motion control system by selecting appropriate stepper motors and drive mechanisms to achieve high accuracy and repeatability.',
    'Implemented design modifications to improve the system’s rigidity, reducing vibration during operation for better machining results.',
    'Assembled and designed the gantry to make sure it was ready for functional purposes and had enough structural integrity to hold the spindle.',
  ],
  tags: ['SolidWorks', 'Ball screws', 'Stepper motors', 'Gantry', 'Frame design'],
};

export const jansen = {
  overview:
    'Our proposed design addresses navigation and climbing issues in existing delivery robots by incorporating Jansen linkages in place of wheels for traversing terrain. They are incorporated into the form of five ‘legs’, placed around the body an equal distance apart to ensure stability.',
  contributions: [
    'Modeled and dimensioned the modified Jansen linkage in SolidWorks, including the kneeling pose.',
    'Performed FEA stress analysis on the full linkage and on the crank to check the design under load.',
  ],
  tags: ['SolidWorks', 'FEA', 'Jansen linkage', 'Stress analysis', 'Mechanism design'],
  figures: [
    {
      src: 'projects/Jansen Linkage/Screenshot 2026-10-09 213850.png',
      title: 'Linkage Sketch',
      caption: 'Leg linkage layout with the joints and members of the modified Jansen mechanism.',
      tags: ['Sketch', 'Mechanism'],
    },
    {
      src: 'projects/Jansen Linkage/Screenshot 2026-10-09 213908.png',
      title: 'Dimensioned Leg (Kneeling Pose)',
      caption: 'Fully dimensioned linkage in the kneeling configuration.',
      tags: ['Dimensions', 'SolidWorks'],
    },
    {
      src: 'projects/Jansen Linkage/Screenshot 2026-10-09 213923.png',
      title: 'FEA: Linkage and Crank',
      caption:
        'Stress tests on the proposed modified Jansen linkage (left) and on the crank (right), showing stress distribution under load.',
      tags: ['FEA', 'Stress analysis'],
    },
  ] as Figure[],
};

export const currentSense = {
  image: 'projects/current sense/image.png',
  overview:
    'A current-sense amplifier and low-pass filter built around an LM324 op-amp, mapping a 0–3 A load current to a 0.25–3.3 V output. The circuit was verified in SPICE before fabrication, then laid out as a two-layer PCB.',
  contributions: [
    'Designed the current-sense amplifier and low-pass filter around an LM324 op-amp and verified it in SPICE prior to fabrication.',
    'Routed a two-layer PCB in Eagle CAD (copper pour, vias, keepouts) and released Gerber files for CNC milling.',
    'Hand-soldered the board and validated a linear VOUT–ISENSE response on the bench.',
  ],
  goal: 'The goal was to design a current-sense circuit for a power supply, then build and validate it. It used an LM324 op-amp as a current-sense amplifier with a low-pass filter. The circuit had to map a 0–3 A load current linearly to a 0.25–3.3 V output signal.',
  stages: [
    { name: 'Simulation', text: 'Verified the design in SPICE before fabrication.' },
    {
      name: 'Layout',
      text: 'Did the schematic and a two-layer PCB layout in Eagle CAD, with copper pour, vias, keepout regions and Gerber files for CNC milling.',
    },
    {
      name: 'Build and test',
      text: 'Hand-soldered the milled board and checked it on the bench with power supplies and an oscilloscope. The checks confirmed a linear VOUT vs. ISENSE response and the correct filter step response.',
    },
  ],
  tags: ['Eagle CAD', 'SPICE', 'LM324', 'Two-layer PCB', 'Gerber', 'Soldering'],
};
