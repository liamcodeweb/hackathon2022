import clsx from 'clsx'
import Link from 'next/link'
import { IconContainer } from '@/components/home/common'

let readNext = [
  {
    title: 'Trắc nghiệm hiểu biết',
    href: '/docs/utility-first',
    body: () => <p>Bộ 15 câu hỏi nhằm xác định kiến thức của bạn về thì hiện tại đơn.</p>,
    icon: {
      className: 'dark:bg-indigo-500 dark:highlight-white/20',
      light: require('@/img/icons/home/utility-first.png').default,
      dark: require('@/img/icons/home/dark/utility-first.png').default,
    },
  },
  {
    title: 'Bài tập thực hành',
    href: '/docs/responsive-design',
    body: () => <p>Luyện tập về thì hiện tại đơn qua các câu hỏi vận dụng.</p>,
    icon: {
      className: 'dark:bg-indigo-500 dark:highlight-white/20',
      light: require('@/img/icons/home/mobile-first.png').default,
      dark: require('@/img/icons/home/dark/mobile-first.png').default,
    },
  },
  {
    title: 'Trắc nghiệm hỗn hợp',
    href: '/docs/hover-focus-and-other-states',
    body: () => <p>Tổng hợp các câu hỏi lý thuyết và bài tập về thì hiện tại đơn.</p>,
    icon: {
      className: 'dark:bg-blue-500 dark:highlight-white/20',
      light: require('@/img/icons/home/state-variants.png').default,
      dark: require('@/img/icons/home/dark/state-variants.png').default,
    },
  },
  {
    title: 'Cheatsheet',
    href: '/docs/dark-mode',
    body: () => <p>Các thông tin cần nắm về thì hiện tại đơn gói gọn trong 1 trang A4.</p>,
    icon: {
      className: 'dark:bg-slate-600 dark:highlight-white/20',
      light: require('@/img/icons/home/dark-mode.png').default,
      dark: require('@/img/icons/home/dark/dark-mode.png').default,
    },
  },
]

export function Exercise() {
  return (
    <section className="relative not-prose mt-6">
      <ul className="mt-10 grid grid-cols-1 gap-x-16 gap-y-8 xl:grid-cols-2 xl:gap-y-10">
        {readNext.map((item) => (
          <li key={item.title} className="relative flex items-start">
            <IconContainer
              className={clsx('flex-none', item.icon.className)}
              light={item.icon.light}
              dark={item.icon.dark}
            />
            <div className="peer group flex-auto ml-6">
              <h3
                className="mb-2 font-semibold text-slate-900 dark:text-slate-200"
                style={{ marginBlockStart: 0 }}
              >
                <Link href={item.href}>
                  <a className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4">
                    {item.title}
                    <svg
                      viewBox="0 0 3 6"
                      className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                    >
                      <path
                        d="M0 0L3 3L0 6"
                        fill="none"
                        strokeWidth="2"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </Link>
              </h3>
              <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                <item.body />
              </div>
            </div>
            <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4" />
          </li>
        ))}
      </ul>
    </section>
  )
}
