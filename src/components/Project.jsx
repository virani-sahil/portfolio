
const Project = () => {
  const imagetheme = [
    {
      img: "/images/todotheme.png",
      title: "Todo App",
      link: "https://viranitodo.netlify.app",
      description:"Create a Todo App using JavaScript and CSS with enhanced functionality.",
    },
    {
      img: "/images/calc1.jpg",
      title: "Calculator",
      link:"https://calc-004.netlify.app/",
      description:"Create a Calculator using JavaScript, Html and CSS with fully responsive.",
    },
    {
      img: "/images/quiz1.jpg",
      title: "Quiz Game",
      link:"https://quizgame004.netlify.app",
      description:"Develop an engaging Quiz Game that allows users to play and receive detailed results.",
    },
  ]
  return (
    <div className='bg-secondaryBg text-textColor min-h-[calc(100vh-104px)] w-[100%] px-[10%]'>
      <h1 className="text-[60px] font-bold pt-10  w-[203px]">Proj<span className="text-mainColor">ect</span></h1>
      <div className="gap-10 grid sm:grid-cols-2 lg:grid-cols-3 py-28 justify-center">
        {
          imagetheme?.map((ele) => {
            return (
              <div key={ele?.img}>
                {/* bg-white w-full max-w-[450px] rounded-3xl */}
                <div className="w-full max-w-[450px]">
                  <a href={ele?.link} target="_blank"><img src={ele?.img} className="w-full max-w-[450px] h-[300px] rounded-3xl shadow-2xl hover:rounded-[80px]" alt={ele?.title} /></a>
                  <div className="px-5 py-2 mt-3 border-none rounded-3xl bg-mainBg shadow-2xl hover:text-[#0ef] hover:bg-black">
                    <h1 className="text-[30px] font-extrabold ">{ele?.title}</h1>
                    <p className="pt-5">{ele?.description}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Project