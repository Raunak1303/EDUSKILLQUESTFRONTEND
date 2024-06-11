'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
      quote:
      "Education is the most powerful weapon which you can use to change the world.",
      name: 'Nelson Mandela',
      title: '123',
    },
    {
      quote:
      "The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education." ,
      name: 'Martin Luther King Jr',
      title: '456',
    },
    {
      quote:
      "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
      name: 'Malcolm X',
      title: '789',
    },
    {
      quote:
        'The more that you read, the more things you will know. The more that you learn, the more places you will go.',
      name: 'Dr.Seuss',
      title: '1011',
    },
    {
      quote:
        "The beautiful thing about learning is that no one can take it away from you.",
      name: 'B.B. King',
      title: '1213',
    },
  ];


function MusicSchoolTestimonials() {
    return (
      <div className="h-[45rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
          <h2 className="text-3xl font-bold text-center mb-8 z-10">Voices of success</h2>
          <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-6xl">
              <InfiniteMovingCards
                  items={musicSchoolTestimonials}
                  direction="right"
                  speed="slow"
        />
              </div>
          </div>
      </div>
    )
}

export default MusicSchoolTestimonials