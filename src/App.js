import './App.css';
import Skillset from './Skillset';

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="main-card">
      <img src="https://images.blog.airmason.com/wp-content/uploads/2023/10/Which-is-Correct-A-Employee-or-An-Employee-Exploring-the-Difference.png" alt="employee" className='image'/>
      <div className='card-1'>
        <h1 className='heading'>Edward Newgate</h1>
        <p>Full stack wed devloper and Project manager. When not coding i like to play games and have a stroll in the night</p>
        <Skillset skills={skills}/>
      </div>
    </div>
  );
}

export default App;
