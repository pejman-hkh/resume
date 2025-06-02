import SkillType from "../types/skills";

export default function Skill({ items }: { items: SkillType[] }) {
    return <section className="rounded-xl mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
            🧠
            My Skills
        </h2>
        <div className="space-y-4 border p-5 rounded-xl border-gray-200">
            {items?.map((item) => (
                <div key={item.id} className="w-full bg-gray-100 rounded-full h-6">
                    <div className={`bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm h-6 rounded-full flex items-center justify-between px-3`} style={{ width: item?.percent + '%' }}>
                        <span>{item.title}</span>
                        <span>{item.percent}%</span>
                    </div>
                </div>
            ))}

        </div>
    </section>
}