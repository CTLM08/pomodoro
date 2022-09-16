import React from 'react'

const About = () => {
  return (
    <div className='bg-slate-400 h-screen w-full flex items-center justify-center flex-col'>
      <div className='w-96'>
        <div className='text-xl'>What is Pomofocus</div>
        <div className='w-32 h-1 bg-black'></div>
        <div className='text-slate-800'>Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.</div>
      </div>
      <div className='w-96 mt-5'>
        <div className='text-xl'>What is Pomodoro Technique?</div>
        <div className='w-32 h-1 bg-black'></div>
        <div className='text-slate-800'>The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student.</div>
      </div>
    </div>
  )
}

export default About