'use client'

import { useState } from 'react'
import { eyebrow, heading, LINE, section, wrap } from '../../app/styles'

const steps = [
  {
    title: 'Understand',
    summary: 'Identify the problem',
    details: ['Business', 'People', 'Goal', 'Needs', 'Pain points', 'Environment'],
  },
  {
    title: 'Design',
    summary: 'Plan the solution',   
    details: ['System Architecture', 'User Interface', 'Entity Relationship', 'User Workflow', 'Data Flow'],
  },
  {
    title: 'Build',
    summary: 'Develop and test',
    details: ['User Interface', 'API endpoints', 'Database'],
  },
  {
    title: 'Deploy',
    summary: 'Deliver to users',
    details: ['Application', 'Data', 'Infrastructure', 'Secure', 'Monitor'],
  },
  {
    title: 'Maintainance',
    summary: 'Improve continuously',
    details: ['Bug fixes', 'Upgrades', 'Customer Support', 'Technical Debt']
  },
 
]

function HowIWork() {
  // First step is open by default. Clicking the open step closes it, and
  // opening another step closes the previous one (only one open at a time).
  const [active, setActive] = useState<number | null>(0)
  const current = active === null ? null : steps[active]
  const toggle = (i: number) => setActive((prev) => (prev === i ? null : i))

  // Phone list: every step starts collapsed, still only one open at a time.
  const [mobileActive, setMobileActive] = useState<number | null>(null)
  const toggleMobile = (i: number) =>
    setMobileActive((prev) => (prev === i ? null : i))

  return (
    <section className={section} id="how-i-work">
      <div className={wrap}>
        <div className="mb-[30px]">
          <div className={eyebrow}>Process</div>
          <h2 className={heading}>People Problems, Web Apps</h2>
        </div>

        <div
          className="rounded-2xl border bg-surface p-5 max-[620px]:p-4"
          style={{ borderColor: LINE }}
        >
          <div
            className="grid grid-cols-5 gap-4 max-[850px]:grid-cols-3 max-[620px]:hidden"
            role="tablist"
            aria-label="People Problems, Web Apps"
          >
            {steps.map((step, i) => {
              const isActive = i === active
              return (
                <button
                  key={step.title}
                  type="button"
                  role="tab"
                  id={`how-tab-${i}`}
                  aria-selected={isActive}
                  aria-controls="how-panel"
                  onClick={() => toggle(i)}
                  className="text-left cursor-pointer bg-transparent text-inherit"
                >
                  <div
                    className={`text-[28px] font-semibold ${
                      isActive ? 'text-green' : 'text-muted'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div
                    className={`h-[3px] rounded-full my-3 transition-colors duration-200 ${
                      isActive ? 'bg-green' : ''
                    }`}
                    style={isActive ? undefined : { background: LINE }}
                  />
                  <div className="font-bold text-[15px]">{step.title}</div>
                  <div className="text-muted text-[13px] mt-1">
                    {step.summary}
                  </div>
                </button>
              )
            })}
          </div>

          {current && (
            <div
              id="how-panel"
              role="tabpanel"
              aria-labelledby={`how-tab-${active}`}
              className="mt-6 pt-5 border-t max-[620px]:hidden"
              style={{ borderColor: LINE }}
            >
              <div className="text-green font-bold mb-3">{current.title}</div>
              <ul className="flex flex-wrap gap-2.5 list-none p-0 m-0">
                {current.details.map((detail) => (
                  <li
                    key={detail}
                    className="px-4 py-2 rounded-full border text-sm"
                    style={{ borderColor: LINE }}
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Phones: vertical list, details open directly under the tapped step */}
          <div className="hidden max-[620px]:flex flex-col">
            {steps.map((step, i) => {
              const isActive = i === mobileActive
              return (
                <div
                  key={step.title}
                  className={i > 0 ? 'border-t' : ''}
                  style={{ borderColor: LINE }}
                >
                  <button
                    type="button"
                    aria-expanded={isActive}
                    onClick={() => toggleMobile(i)}
                    className="w-full flex items-center gap-4 py-4 text-left cursor-pointer bg-transparent text-inherit min-h-[44px]"
                  >
                    <span
                      className={`text-[24px] font-semibold ${
                        isActive ? 'text-green' : 'text-muted'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1">
                      <span className="block font-bold text-[15px]">
                        {step.title}
                      </span>
                      <span className="block text-muted text-[13px] mt-0.5">
                        {step.summary}
                      </span>
                    </span>
                    <span
                      className={`text-muted transition-transform duration-200 ${
                        isActive ? 'rotate-180' : ''
                      }`}
                      aria-hidden
                    >
                      ▾
                    </span>
                  </button>
                  {isActive && (
                    <ul className="flex flex-wrap gap-2 list-none p-0 m-0 pb-4">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="px-3 py-1.5 rounded-full border text-[13px]"
                          style={{ borderColor: LINE }}
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowIWork
