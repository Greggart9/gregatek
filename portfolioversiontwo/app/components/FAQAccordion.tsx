'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'We design websites, brands, and digital products. Full UI/UX, strategy, and development support.',
  },
  {
    question: 'How long does a typical web project take?',
    answer:
      'Most projects take between 3–6 weeks depending on scope, complexity, and feedback cycles.',
  },
  {
    question: 'Do you offer custom solutions?',
    answer:
      'Yes. Every solution is tailored to your business goals, users, and technical needs.',
  },
  {
    question: 'Will I also be involved in the design process?',
    answer:
      'Absolutely. We collaborate closely with you throughout the design and iteration process.',
  },
  {
    question: 'Can you work with my existing brand or product?',
    answer:
      'Yes, we can build on top of existing brands, products, or redesign where needed.',
  },
]

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="pt-15 md:pt-25 pb-12.5 flex flex-col lg:flex-row w-full gap-8 lg:gap-16">
      {/* Left */}
      <div className="w-60 md:w-85 flex-1">
        <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white">
          Everything you need to know
        </p>
      </div>

      {/* Right */}
      <div className="flex-2">
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index

            return (
              <div
                key={index}
                className="w-full rounded-2xl border border-white/10 bg-gray-600/20 px-6 py-5"
              >
                {/* Header */}
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <h3 className="text-lg font-medium text-white">
                    {faq.question}
                  </h3>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xl text-neutral-400"
                  >
                    +
                  </motion.span>
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
