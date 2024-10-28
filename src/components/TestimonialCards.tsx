'use client'
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const testimonials = [
    {
        quote: "Our e-learning platform has never been more engaging. The chatbot's personalized learning paths and instant feedback have truly enhanced our students' experience.",
        name: "John Doe",
        title: "Online Education Director",
    },
    {
        quote: "Integrating the AI chatbot into our sales process has streamlined operations. It handles multiple customer inquiries at once, leaving our team to focus on high-value tasks.",
        name: "David L.",
        title: "E-Commerce Executive",
    },
    {
        quote: "Our users love the AI chatbot! It answers their questions instantly, guiding them through our services and making interactions so much smoother.",
        name: "Emily R.",
        title: "Product Manager",
    },
    {
        quote: "The chatbot has revolutionized our internal communication. It's quick, efficient, and provides accurate answers to employee queries in real-time.",
        name: "Jessica M.",
        title: "HR Specialist",
    }
]

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-small-white/[0.2] relative flex flex-col justify-center items-center overflow-hidden px-4 ">
        <h2 className="text-4xl font-bold text-center mb-8 z-10">Hear our Users : Voices of Success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-0">
            <div className="max-w-full">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    </div>
  )
}

export default TestimonialCards