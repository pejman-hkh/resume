import SkillType from "../types/skills";

export default function Skill({ items }: { items: SkillType[] }) {
    return <section className="rounded-xl mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
            🧠
            My Skills
        </h2>
        <div className="space-y-4 border p-5 rounded-xl border-gray-200">
            {items?.map((item) => (
                <div key={item.id} className="w-full">
                    <span className="font-bold">{item.title} : </span>
                    <span>{item.description}</span>
                </div>
            ))}

        </div>
    </section>
}