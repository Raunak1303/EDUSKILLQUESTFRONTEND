'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/moving-border";

function UpcomingWebinars() {

    const featuredWebinars = [
      {
        title: "Unlocking the Power of Education",
        description: "Join us to explore how education can empower individuals and communities to achieve their full potential.",
        slug: "unlocking-power-education",
        isFeatured: true,
    },
    {
        title: "Innovative Teaching Strategies for the Digital Age",
        description: "Discover cutting-edge teaching methods and technologies to engage students in the digital era.",
        slug: "innovative-teaching-strategies",
        isFeatured: true,
    },
    {
        title: "Building Resilience Through Education",
        description: "Learn how education plays a crucial role in fostering resilience and overcoming challenges in life.",
        slug: "building-resilience-education",
        isFeatured: true,
    },
    {
        title: "STEM Education: Inspiring Future Innovators",
        description: "Explore the world of STEM education and its impact on nurturing creativity and innovation among students.",
        slug: "stem-education-future-innovators",
        isFeatured: true,
    },
    {
        title: "Cultivating Critical Thinking Skills in Students",
        description: "Discover strategies for promoting critical thinking abilities among students to prepare them for success.",
        slug: "cultivating-critical-thinking-skills",
        isFeatured: true,
    },
    {
        title: "Empowering Girls Through Education",
        description: "Join us in a discussion on the importance of education in empowering girls and promoting gender equality.",
        slug: "empowering-girls-education",
        isFeatured: true,
    },
    // {
    //     "title": "The Future of Online Learning: Trends and Opportunities",
    //     "description": "Explore emerging trends and opportunities in online education that are shaping the future of learning.",
    //     "slug": "future-online-learning-trends"
    // },
    // {
    //     "title": "Promoting Multicultural Education in Schools",
    //     "description": "Learn about the benefits of promoting multicultural education and fostering inclusivity in schools.",
    //     "slug": "promoting-multicultural-education"
    // },

        // {
        //   title: 'Understanding Music Theory',
        //   description:
        //     'Dive deep into the fundamentals of music theory and enhance your musical skills.',
        //   slug: 'understanding-music-theory',
        //   isFeatured: true,
        // },
        // {
        //   title: 'The Art of Songwriting',
        //   description:
        //     'Learn the craft of songwriting from experienced musicians and songwriters.',
        //   slug: 'the-art-of-songwriting',
        //   isFeatured: true,
        // },
        // {
        //   title: 'Mastering Your Instrument',
        //   description:
        //     'Advanced techniques to master your musical instrument of choice.',
        //   slug: 'mastering-your-instrument',
        //   isFeatured: true,
        // },
        // {
        //   title: 'Music Production Essentials',
        //   description:
        //     'Get started with music production with this comprehensive overview.',
        //   slug: 'music-production-essentials',
        //   isFeatured: true,
        // },
        // // Added two more webinars
        // {
        //   title: 'Live Performance Techniques',
        //   description:
        //     'Enhance your live performance skills with expert tips and strategies.',
        //   slug: 'live-performance-techniques',
        //   isFeatured: true,
        // },
        // {
        //   title: 'Digital Music Marketing',
        //   description:
        //     'Learn how to promote your music effectively in the digital age.',
        //   slug: 'digital-music-marketing',
        //   isFeatured: true,
        // },
      ];


    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Educational Journey</p>
                </div>

                <div className="mt-10">
                <HoverEffect
                 items={featuredWebinars.map(webinar => (
                   {
                     title: webinar.title,
                     description: webinar.description,
                     link: '/'
                   }
                 ))}
                 />
                </div>
                <div className="mt-10 text-center">
                    {/* <Link href={"/"} 
                    className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                    >
                        View All webinars
                    </Link> */}
                    <Link href={"/"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    View All Webinars
                    </Button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinars