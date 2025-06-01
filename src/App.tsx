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
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-2xl px-8 py-6 flex items-center space-x-6 w-6xl">
          <img
            src={user.avatar}
            alt={`${user.firstName} ${user.lastName}`}
            className="w-36 h-36 mt-[-5rem] rounded-4xl border-4 border-white"
          />
          <div className="flex-1">
            <h2 className="text-xl font-bold">{user.firstName} {user.lastName}</h2>
            <p className="text-sm text-gray-500">{user.description}</p>
            <div className="flex space-x-2 mt-2">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
          <div className="text-sm text-gray-500 grid grid-cols-2 gap-4">
            <div><div>Email:</div> {user.email}</div>
            <div><div>Phone:</div> {user.phone}</div>
            <div><div>Birthday:</div> {user.birthDate.toDateString()}</div>
            <div><div>Location:</div> {user.location}</div>
          </div>
        </div>
      </div>
      <div className="w-7xl mx-auto">
        <div className="flex mt-10 px-4 md:px-12 gap-6">
          <div className="flex-1 bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Resume</h2>
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
