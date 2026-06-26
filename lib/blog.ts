export interface BlogAuthor {
    name: string;
    role: string;
    avatar: string;
}

export type BlockType = 'paragraph' | 'heading' | 'list' | 'quote' | 'callout' | 'code';

export interface ContentBlock {
    type: BlockType;
    text?: string;
    items?: string[];
    level?: number;
    code?: string;
    language?: string;
    variant?: 'info' | 'warning' | 'tip';
}

export interface BlogPost {
    slug: string;
    tag: string;
    title: string;
    desc: string;
    date: string;
    readTime: string;
    author: BlogAuthor;
    color: string; // Tailwind gradient classes
    image: string; // Unsplash or local image URL
    content: ContentBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "pcb-design-tips-signal-integrity",
        tag: "Design",
        title: "PCB Design Tips for Signal Integrity",
        desc: "Essential trace routing, impedance matching, and ground plane strategies for high-speed designs.",
        date: "June 24, 2026",
        readTime: "6 min read",
        author: {
            name: "Dr. Aris Thorne",
            role: "Principal Signal Integrity Engineer",
            avatar: "AT"
        },
        color: "from-primary/10 to-emerald-50",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
        content: [
            {
                type: "paragraph",
                text: "As system bus speeds and edge rates continue to escalate, maintaining signal integrity (SI) has shifted from a specialty field to a core requirement of standard PCB layout. In modern circuits, signal traces behave as transmission lines, where capacitive and inductive effects dominate behavior. Understanding and mitigating these effects is the difference between a functional product and an expensive revision cycle."
            },
            {
                type: "heading",
                level: 2,
                text: "Controlled Impedance Matching"
            },
            {
                type: "paragraph",
                text: "To prevent signal reflections, the characteristic impedance of a transmission line must match the source and load impedances. A mismatch creates a reflection boundary, causing signal distortion, overshoot, undershoot, and increased electromagnetic emissions."
            },
            {
                type: "callout",
                variant: "info",
                text: "Always consult your PCB manufacturer's stackup details before finalizing trace widths. Copper thickness, dielectric thickness, and dielectric constants directly determine the required trace widths for 50Ω single-ended or 100Ω differential pairs."
            },
            {
                type: "heading",
                level: 3,
                text: "Practical Routing Tips for Impedance Control"
            },
            {
                type: "list",
                items: [
                    "Route high-speed traces over solid, continuous reference planes (GND or Power). Avoid routing over splits in plane layers, which creates a huge impedance discontinuity.",
                    "Match trace lengths for differential pairs strictly. Skew between positive and negative traces turns differential signals into common-mode signals, increasing noise and EMI.",
                    "Keep traces as short as possible. Lower length reduces parasitic inductance and resistance."
                ]
            },
            {
                type: "heading",
                level: 2,
                text: "Crosstalk Mitigation Strategies"
            },
            {
                type: "paragraph",
                text: "Crosstalk is the unwanted electromagnetic coupling between adjacent traces. It is dictated by the distance between traces, the distance to the reference plane, and the length over which the traces run parallel."
            },
            {
                type: "code",
                language: "javascript",
                code: "// Rule of Thumb for Spacing (3W Rule):\n// To minimize crosstalk, keep the spacing between traces at least three times \n// the width of the trace (3W) measured from center to center.\nconst spacing = traceWidth * 3;"
            },
            {
                type: "quote",
                text: "In signal integrity, the path of least impedance is the path directly underneath the trace on the reference plane. If you interrupt that path, the return current will find a longer loop, creating crosstalk and radiation."
            },
            {
                type: "paragraph",
                text: "In summary, maintaining signal integrity requires meticulous attention to trace widths, spacing rules, and ground routing. Incorporating these techniques from the very beginning of the layout stage ensures robust, reliable high-speed circuit boards."
            }
        ]
    },
    {
        slug: "complete-pcb-manufacturing-process-guide",
        tag: "Manufacturing",
        title: "Complete PCB Manufacturing Process Guide",
        desc: "From bare substrate to finished board: understanding every step of the PCB fabrication process.",
        date: "June 20, 2026",
        readTime: "8 min read",
        author: {
            name: "Marcus Vance",
            role: "Director of PCB Fabrication",
            avatar: "MV"
        },
        color: "from-blue-50 to-sky-50/50",
        image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=600&auto=format&fit=crop",
        content: [
            {
                type: "paragraph",
                text: "Behind every modern device lies a complex substrate that connects and powers active components: the Printed Circuit Board (PCB). While engineers spend weeks in CAD software designing traces and vias, the physical fabrication process requires a delicate dance of chemistry, optics, metallurgy, and extreme precision. Let's trace a PCB's journey from a digital Gerber file to a physical board."
            },
            {
                type: "heading",
                level: 2,
                text: "Step 1: Front-End Engineering & CAM Check"
            },
            {
                type: "paragraph",
                text: "Before production begins, manufacturing engineers perform a Design for Manufacture (DFM) analysis. Computer-Aided Manufacturing (CAM) tools inspect files for trace spacing, minimum hole sizes, ring dimensions, and overall board dimensions to prevent manufacturing failures."
            },
            {
                type: "heading",
                level: 2,
                text: "Step 2: Preparing the Substrate & Inner Layer Imaging"
            },
            {
                type: "paragraph",
                text: "For multilayer boards, inner layers are processed first. The starting material is a glass-reinforced epoxy substrate (like FR-4) clad with thin copper sheets. A photo-sensitive dry film resist is applied, exposed to UV light through a laser photoplotter, and then developed to leave the circuit pattern protected."
            },
            {
                type: "callout",
                variant: "warning",
                text: "Any dust particle during inner layer exposure can lead to an open or short circuit on the board. This step must be performed in a certified cleanroom environment."
            },
            {
                type: "heading",
                level: 2,
                text: "Step 3: Lamination and Pressing"
            },
            {
                type: "paragraph",
                text: "Once the inner layers are etched and verified using Automated Optical Inspection (AOI), they are stacked with alternating sheets of prepreg (resin-impregnated fiberglass) and outer copper foil. The stack is placed in a heavy lamination press at high temperatures and pressures to cure the resin, bonding the layers into a single solid panel."
            },
            {
                type: "heading",
                level: 2,
                text: "Step 4: Drilling and Plating"
            },
            {
                type: "paragraph",
                text: "The laminated panel is drilled using high-speed mechanical or laser drills to create holes for component leads and electrical vias. These holes are then chemically plated with a thin layer of copper to establish electrical continuity through the different layers of the board."
            },
            {
                type: "quote",
                text: "Modern microvias can be as small as 100 microns (0.1mm) and are drilled using CO2 or UV lasers, vaporizing the glass and resin with extreme positioning accuracy."
            },
            {
                type: "paragraph",
                text: "Following drilling and plating, the outer layer circuitry is imaged and etched, solder mask is applied to protect the board, and a surface finish (such as ENIG or HASL) is applied. Electrical testing ensures the final product matches the engineering schematics perfectly."
            }
        ]
    },
    {
        slug: "smt-assembly-best-practices",
        tag: "Assembly",
        title: "SMT Assembly Best Practices",
        desc: "Stencil design, paste deposition, reflow profiles, and defect prevention in surface-mount assembly.",
        date: "June 15, 2026",
        readTime: "7 min read",
        author: {
            name: "Elena Rostova",
            role: "Lead SMT Assembly Specialist",
            avatar: "ER"
        },
        color: "from-purple-50 to-violet-50/50",
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop",
        content: [
            {
                type: "paragraph",
                text: "Surface Mount Technology (SMT) has revolutionized electronics manufacturing, allowing automated machines to place components at rates exceeding 50,000 components per hour. However, high throughput demands strict process control. A minor variance in solder paste deposition or reflow temperature can result in assembly defects such as tombstoning, solder bridging, or voiding."
            },
            {
                type: "heading",
                level: 2,
                text: "Solder Paste Printing: The Critical 60%"
            },
            {
                type: "paragraph",
                text: "Studies show that over 60% of SMT assembly defects originate during the solder paste printing stage. Stencil aperture design, stencil thickness, squeegee pressure, and paste chemistry must be carefully optimized."
            },
            {
                type: "list",
                items: [
                    "Aperture Aspect Ratio: Keep the ratio of aperture width to stencil thickness above 1.5 to ensure clean paste release.",
                    "Squeegee Angle & Speed: Typically set between 45° to 60° angle, traveling at 20-50mm/sec to fill apertures consistently.",
                    "Regular Cleaning: Clean the stencil underside automatically every few print cycles to prevent paste smearing."
                ]
            },
            {
                type: "heading",
                level: 2,
                text: "Reflow Profile Optimization"
            },
            {
                type: "paragraph",
                text: "The reflow profile consists of four distinct zones: preheat, soak, reflow (time above liquidus), and cooling. A thermal profile that heats the board too fast can shock components, while too slow cooling can result in brittle solder joints."
            },
            {
                type: "callout",
                variant: "tip",
                text: "For lead-free solders (like SAC305), the peak reflow temperature must reach 235°C to 245°C. Keep the Time Above Liquidus (TAL, 217°C) between 45 to 90 seconds to build a strong intermetallic layer without damaging component packages."
            },
            {
                type: "heading",
                level: 3,
                text: "Avoiding Common SMT Defects"
            },
            {
                type: "paragraph",
                text: "To avoid 'tombstoning'—where a small passive chip resistor or capacitor stands upright on one terminal due to unbalanced surface tension forces during reflow—ensure that both copper pads have equal thermal mass. Traces connected to the pads should have thermal relief to prevent one side from melting before the other."
            }
        ]
    },
    {
        slug: "component-selection-for-harsh-environments",
        tag: "Components",
        title: "Component Selection for Harsh Environments",
        desc: "How to choose components rated for automotive, industrial, and military temperature ranges.",
        date: "June 08, 2026",
        readTime: "5 min read",
        author: {
            name: "Jameson Stark",
            role: "Senior Component Engineer",
            avatar: "JS"
        },
        color: "from-orange-50 to-amber-50/50",
        image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=600&auto=format&fit=crop",
        content: [
            {
                type: "paragraph",
                text: "Designing an electronic system that functions on a laboratory bench is relatively simple. Designing that same system to survive for 10 years inside a high-temperature automotive engine bay, an oil drilling rig, or a deep-space satellite is another story. Ambient temperatures, vibration, moisture, and chemical exposure all place extreme stresses on electronic components."
            },
            {
                type: "heading",
                level: 2,
                text: "Understanding Temperature Classifications"
            },
            {
                type: "paragraph",
                text: "The primary criteria for component grade selection is the operating temperature range. Off-the-shelf components are classified into standard categories:"
            },
            {
                type: "list",
                items: [
                    "Commercial Grade: 0°C to +70°C (Best for consumer devices, smart home appliances).",
                    "Industrial Grade: -40°C to +85°C (For factory automation, outdoor sensors, and grid infrastructure).",
                    "Automotive Grade: -40°C to +125°C or +150°C (Governed by standards like AEC-Q100 for ICs).",
                    "Military / Aerospace Grade: -55°C to +125°C (Enhanced reliability, hermetic packaging)."
                ]
            },
            {
                type: "heading",
                level: 2,
                text: "Mitigating Physical Shock and Vibration"
            },
            {
                type: "paragraph",
                text: "In high-vibration applications, heavy surface-mount components (like large electrolytic capacitors or inductors) can tear off their pads. Mechanical stabilization techniques like structural adhesives, underfills, or through-hole components must be selected. Lead-free solder alloy additives, such as bismuth or nickel, are also used to improve thermal cycle fatigue resistance."
            },
            {
                type: "callout",
                variant: "warning",
                text: "Ceramic capacitors (MLCCs) are highly brittle and susceptible to cracking under board flexure or mechanical shock. In critical environments, specify soft-termination MLCCs which utilize a flexible conductive polymer layer to absorb board stress."
            },
            {
                type: "quote",
                text: "Selecting the correct component is not just about electrical characteristics: it is about matching the device packaging, chemical compatibility, and thermal expansion properties to the environment it will live in."
            }
        ]
    }
];
