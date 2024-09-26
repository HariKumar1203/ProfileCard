import Skills from "./Skills"

function Skillset({skills}){
    return(
      <div className='skill-card-1'>
        {
          skills.map((items)=>(
            <Skills skill={items.skill} level={items.level} color={items.color}/>
          ))
        }      
      </div>
    )
  }

export default Skillset