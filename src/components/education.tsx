import EducationType from "../types/education"

export default function Education({ items }: { items: EducationType[] }) {
    return items?.length !== 0 && <section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">🎓 Education</h3>
        <div className="space-y-4">
            {items?.map((item) => {
                return <div key={item?.id}>
                    <h4 className="font-bold">{item.title}</h4>
                    {item.from && <p className="text-sm text-gray-500">{item.from.getFullYear()} - {item?.to?.getFullYear()}</p>}
                    <p className="text-sm text-gray-600">{item.description}</p>
                </div>
            })}
        </div>
    </section>

}