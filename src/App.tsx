import Education from "./components/education";
import Experience from "./components/experience";
import Project from "./components/project";
import Skill from "./components/skill";
import { educations, experiences, projects, skills, user } from "./resume";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6f7fb] font-sans w-full">
      <div className="relative h-64 w-full">
        <img
          src="image_header.jpg"
          alt="bg"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-2xl px-6 md:px-8 py-6 flex flex-col md:flex-row items-center md:space-x-6 w-[95%] max-w-7xl">
          <img
            src={user.avatar}
            alt={`${user.firstName} ${user.lastName}`}
            className="w-28 h-28 md:w-36 md:h-36 -mt-20 rounded-3xl border-4 border-white object-cover"
          />
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
            <div><div className="font-semibold">Birthday:</div> {user.birthDate.toDateString()}</div>
            <div><div className="font-semibold">Location:</div> {user.location}</div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 xl:px-0 mt-44 xs:mt-10 sm:mt-40 md:mt-10">
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
            <Education items={educations} />
            <Experience items={experiences} />
            <Skill items={skills} />
            <Project items={projects} />
          </div>
        </div>
      </div>
    </div>
  );
}