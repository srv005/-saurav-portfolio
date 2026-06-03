"use client";

const skills = [
  {
    category: "Languages",
    items: ["C++", "JavaScript", "Python", "Java", "SQL"],
  },
  {
    category: "Web Technologies",
    items: ["React", "Node.js", "Express", "Tailwind CSS", "Next.js"],
  },
  {
    category: "AI & Data",
    items: ["Pandas", "NumPy", "OpenAI APIs"],
  },
  {
    category: "Databases & Tools",
    items: ["MongoDB", "MySQL", "Git", "GitHub", "VS Code", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-[#0f0f0f] border-t border-[#2e2e2e]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-xl font-bold text-white mb-6 font-mono tracking-tight">
          02. SKILLS
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="p-5 rounded bg-[#1a1a1a] border border-[#2e2e2e]"
            >
              <h3 className="text-sm font-bold mb-4 text-[#e0e0e0] font-mono">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="px-2.5 py-1 bg-[#0f0f0f] border border-[#2e2e2e] rounded text-xs text-[#a0a0a0] font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
