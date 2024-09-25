function Skills({skill,color,level}){
    return(
      <div style={{backgroundColor:color}} className='skills'>
        <span className='paragraph'>{skill}</span>
        <span>
          {level==="beginner" && "👶"}
          {level==="intermediate" && "👍"}
          {level==="advanced" && "💪"}
        </span>
      </div>
    )
  }

export default Skills