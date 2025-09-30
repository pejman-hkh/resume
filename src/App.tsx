import Education from "./components/education";
import Experience from "./components/experience";
import Project from "./components/project";
import Skill from "./components/skill";
import { educations, experiences, projects, skills, user } from "./resume";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6f7fb] font-sans w-full">

      <div className="w-full max-w-7xl mx-auto px-4 xl:px-0 pt-10">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full bg-white shadow-lg rounded-2xl px-6 md:px-8 py-6 flex flex-col md:flex-row items-center mb-5">

            <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
              <h2 className="text-xl font-bold">{user.firstName} {user.lastName}</h2>
              <p className="text-sm text-gray-500">{user.description}</p>
              <p className="text-sm text-gray-500">
                <a href={"https://github.com/" + user.github}>https://github.com/{user.github}</a><br />
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-2 text-blue-500 text-lg">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
            <div className="text-sm text-gray-500 grid grid-cols-2 gap-4 mt-4 md:mt-0">
              <div><div className="font-semibold">Email:</div> {user.email}</div>
              <div><div className="font-semibold">Phone:</div> {user.phone}</div>
              <div><div className="font-semibold">Location:</div> {user.location}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-8">
            <h1 className="text-2xl font-bold mb-6">Resume</h1>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                📝‌ About me
              </h3>
              <p>
                {user.about}
              </p>
            </section>
            <Skill items={skills} />
            <Education items={educations} />
            <Experience items={experiences} />
            <Project items={projects} />
          </div>
        </div>
      </div>
    </div>
  );
}