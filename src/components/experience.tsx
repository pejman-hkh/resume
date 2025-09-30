import ExperienceType from "../types/experience";

export default function Experience({ items }: { items: ExperienceType[] }) {
    return <section className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
            💼
            Experience
        </h3>
        <div className="relative border-l border-gray-300 ml-4 space-y-8">
            {items?.map((item) => (
                <div key={item.id} className="relative pl-6">
                    <span className="absolute left-[-6px] top-1.5 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-md"></span>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.company}</p>
                    <p className="text-sm text-gray-500 mb-1">{(item.from.getMonth() + 1) + "/" + item.from.getFullYear()} - {(item.to.getMonth() + 1) + "/" + item.to.getFullYear()}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                </div>
            ))}

        </div>
    </section>
}