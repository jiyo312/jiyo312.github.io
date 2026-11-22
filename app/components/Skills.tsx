'use client'

import { useState } from 'react'
import { skillCategories, type SkillItem } from '../../app/portfolio-data'
import { eyebrow, heading, LINE, section, wrap } from '../../app/styles'

// Only these skills are shown, grouped into stacks. Names must match portfolio-data.ts.
const stacks = [
  {
    label: 'Stack 1',
    sub: 'Modern full stack',
    names: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'AWS'],
  },
  {
    label: 'Stack 2',
    sub: 'Next.js full stack',
    names: ['Next.js', 'React', 'TypeScript', 'API Routes', 'PostgreSQL'],
  },
  {
    label: 'Stack 3',
    sub: 'Cross-platform full stack',
    names: ['Angular', 'Ionic', 'Slim PHP', 'MySQL', 'Nginx'],
  },
  {
    label: 'Stack 4',
    sub: 'Traditional full stack',
    names: ['Laravel', 'MySQL', 'Apache'],
  },
  {
    label: 'Stack 5',
    sub: 'Serverless full stack',
    names: ['React', 'API Gateway', 'AWS Lambda', 'DynamoDB', 'S3', 'SQS'],
  },
  {
    label: 'Extra',
    sub: 'Tools I use across all stacks',
    names: ['Git', 'Docker', 'Liquibase', 'Terraform', 'Kiro'],
  },
]

const allItems = skillCategories.flatMap((category) => category.items)
const findItem = (name: string) => allItems.find((item) => item.name === name)

function SkillCard({ item }: { item: SkillItem }) {
  const ItemIcon = item.icon
  return (
    <div
      className="shrink-0 w-[120px] snap-start flex flex-col items-center justify-center text-center px-2 py-[18px] bg-surface border rounded-xl text-sm"
      style={{ borderColor: LINE }}
    >
      {item.fullColor ? (
        <ItemIcon size={30} className="rounded-[4px] mb-2" aria-hidden />
      ) : (
        <ItemIcon
          className="text-[28px] mb-2"
          style={{ color: item.color ?? 'var(--color-green)' }}
          aria-hidden
        />
      )}
      {item.name}
    </div>
  )
}

function Skills() {
  const [active, setActive] = useState(0)
  const current = stacks[active]

  return (
    <section className={`${section} bg-[#0d1a2a]`} id="skills">
      <div className={wrap}>
        <div className="mb-[30px]">
          <div className={eyebrow}>Technical skills</div>
          <h2 className={heading}>Tools and Technologies I Work With</h2>
          <p className="text-muted max-w-[720px] mt-3">
            Five full-stack setups I build with, plus the tools I use across
            all of them.
          </p>
        </div>

        <div
          className="flex gap-2 overflow-x-auto pb-1 skill-scroll"
          role="tablist"
          aria-label="Technology stacks"
        >
          {stacks.map((stack, i) => {
            const isActive = i === active
            return (
              <button
                key={stack.label}
                type="button"
                role="tab"
                id={`stack-tab-${i}`}
                aria-selected={isActive}
                aria-controls="stack-panel"
                onClick={() => setActive(i)}
                className={`shrink-0 cursor-pointer px-[18px] py-[10px] min-h-[44px] rounded-full border font-semibold text-sm transition duration-200 ${
                  isActive
                    ? 'bg-green-dark text-white border-green'
                    : 'bg-transparent text-[#d8e1ed] hover:border-green hover:text-green'
                }`}
                style={isActive ? undefined : { borderColor: LINE }}
              >
                {stack.label}
              </button>
            )
          })}
        </div>

        <div
          id="stack-panel"
          role="tabpanel"
          aria-labelledby={`stack-tab-${active}`}
          className="mt-5"
        >
          <p className="text-muted text-sm mb-3">{current.sub}</p>
          <div className="flex gap-3 overflow-x-auto pb-3 skill-scroll snap-x">
            {current.names.map((name) => {
              const item = findItem(name)
              return item ? <SkillCard item={item} key={name} /> : null
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
