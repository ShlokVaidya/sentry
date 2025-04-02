"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface Blog {
  id: number
  title: string
  author: string
  date: string
  image: string
  avatar: string
  link: string
}

const blogs: Blog[] = [
  {
    id: 1,
    title: 'This is bento grid in vercel blog',
    author: 'Michael Jordan',
    date: '12.10.1999',
    image: 'https://picsum.photos/seed/1/600/400',
    avatar: 'https://i.pravatar.cc/150?img=1',
    link: '/',
  },
  {
    id: 2,
    title: 'Exploring the Future of Web Development',
    author: 'Jane Doe',
    date: '05.07.2023',
    image: 'https://picsum.photos/seed/2/600/400',
    avatar: 'https://i.pravatar.cc/150?img=2',
    link: '/',
  },
  {
    id: 3,
    title: 'How to Build Scalable Applications',
    author: 'John Smith',
    date: '18.03.2021',
    image: 'https://picsum.photos/seed/3/600/400',
    avatar: 'https://i.pravatar.cc/150?img=3',
    link: '/',
  },
  {
    id: 4,
    title: 'Mastering React with Next.js',
    author: 'Alice Johnson',
    date: '24.12.2022',
    image: 'https://picsum.photos/seed/4/600/400',
    avatar: 'https://i.pravatar.cc/150?img=4',
    link: '/',
  },
  {
    id: 5,
    title: 'Understanding TypeScript in 2024',
    author: 'Robert Brown',
    date: '02.11.2024',
    image: 'https://picsum.photos/seed/5/600/400',
    avatar: 'https://i.pravatar.cc/150?img=5',
    link: '/',
  },
]

export default function SolidBento() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
    <div className="px-8">
      <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
        Packed with thousands of features
      </h4>

      <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
        From Image generation to video generation, Everything AI has APIs for
        literally everything. It can even create this website copy for you.
      </p>
    </div>

    <div className="grid max-h-screen h-auto p-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-4">
      {blogs.map((blog, index) => (
        <Link
          key={blog.id}
          href={blog.link}
          className={`group relative flex overflow-hidden rounded-2xl  transition-all duration-300 hover:scale-[1.02] ${
            index === 0
              ? 'md:col-span-2 md:row-span-2'
              : index === 1
              ? 'md:col-span-1 md:row-span-1'
              : 'md:col-span-1 md:row-span-1 lg:row-span-2'
          }`}
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="transition-all duration-300 group-hover:scale-110 group-hover:opacity-50 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="relative flex h-full w-full flex-col justify-end p-6 text-white">
            <h2 className="mb-2 text-2xl font-bold leading-tight">{blog.title}</h2>
            <div className="flex items-center space-x-2">
              <Image
                src={blog.avatar}
                alt={blog.author}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm font-medium">{blog.author}</span>
              <span className="text-xs text-gray-300">{blog.date}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
  )
}
