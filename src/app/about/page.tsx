'use client';

import { Info, Lightbulb, Palette, Wrench, AlertTriangle } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-16">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] flex items-center gap-4">
          <Info className="w-10 h-10 text-[var(--color-primary)]" />
          About This Project
        </h1>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-[var(--color-text-primary)] flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--color-primary-light)]">
              <Info className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            What is this?
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            This is a fictional website created as a thesis project by me, Linus Zackrisson, 
            as part of my Frontend Development studies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-[var(--color-text-primary)] flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--color-primary-light)]">
              <Lightbulb className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            The Purpose
          </h2>
          <div className="space-y-4">
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              This project brings an old idea of mine to life. I first attempted to create 
              something similar when I was just learning HTML and CSS, but at that time, 
              I had no idea how to work with databases.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              The core idea is to create a collection of free software alternatives. I believe 
              it's unnecessary to spend hundreds of dollars monthly on expensive programs for 
              tasks like video or image editing when there are many great free alternatives 
              available. While some people unfortunately turn to piracy, that comes with its 
              own risks.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-[var(--color-text-primary)] flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--color-primary-light)]">
              <Palette className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            Design Approach
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            While I enjoy design, I prefer not to spend hours in Figma creating mockups. 
            Instead, I visualize designs in my head and then bring them to life through 
            code. I often find inspiration by browsing sites like Pinterest. For example, 
            the hero section and grid at the beginning of the site were inspired by designs 
            I've seen - I tried my best to recreate them. I'm not a designer and never 
            will be, but I enjoy working with design through code.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-[var(--color-text-primary)] flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--color-primary-light)]">
              <Wrench className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            Technology Choices
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            My good friend Adréan recommended Next.js to me, and I was amazed by how good 
            it was once I tried it. For the backend, I stumbled upon Supabase by chance 
            and fell in love with its simplicity. It's especially perfect for someone like 
            me who prefers spending more time on frontend than backend development.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-[var(--color-text-primary)] flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--color-primary-light)]">
              <AlertTriangle className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            Challenges Faced
          </h2>
          <div className="space-y-4">
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              While I'm very satisfied with the final result, this project came with its 
              share of challenges. Setting up the database in Supabase was straightforward, 
              but populating it with meaningful data proved to be more complex than anticipated.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              I attempted to generate software lists using AI, but consistently ran into 
              issues with broken icon links. Since icons were a crucial element of the 
              software cards, I had to manually input the links. This is why we don't have 
              hundreds of programs listed - the manual process was time-consuming but 
              necessary to maintain quality.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Another significant challenge was making the site feel alive and engaging 
              beyond just listing software. While it would have been simpler to create 
              just a basic list of programs, that wouldn't have been very exciting to 
              develop or interesting for users to explore. This pushed me to focus on 
              creating a more dynamic and interactive experience.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 