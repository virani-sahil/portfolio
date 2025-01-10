
const Skills = () => {
  return (
    <div className='bg-mainBg  text-textColor  min-h-[calc(100vh-104px)] w-[100%] px-[10%]'>
      <h1 className="text-[60px] font-bold pt-10 ">Ski<span className="text-mainColor">ll</span></h1>
      <div className="flex flex-wrap pt-16 pb-20 gap-40 max-skill-custom:justify-center max-skill-custom:gap-10">
        <img title="Html" src="/images/html.png" className="skill_img" alt="html" />
        <img title="Css" src="/images/css.png" className="skill_img" alt="css" />
        <img title="JavaScript" src="/images/js.png" className="skill_img" alt="javascript" />
        <img title="React" src="/images/react.png" className="skill_img" alt="react" />
        <img title="Tailwind" src="/images/tailwind.png" className="skill_img" alt="tailwind" />
        <img title="Bootstrap" src="/images/bootstrap.png" className="skill_img" alt="bootstrap" />
      </div>
    </div>
  )
}

export default Skills