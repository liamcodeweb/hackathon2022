import { Testimonials } from '@/components/Testimonials'
import { DarkMode } from '@/components/home/DarkMode'
import { ConstraintBased } from '@/components/home/ConstraintBased'
import { BuildAnything } from '@/components/home/BuildAnything'
import { Performance } from '@/components/home/Performance'
import { MobileFirst } from '@/components/home/MobileFirst'
import { StateVariants } from '@/components/home/StateVariants'
import { ComponentDriven } from '@/components/home/ComponentDriven'
import { Customization } from '@/components/home/Customization'
import { ModernFeatures } from '@/components/home/ModernFeatures'
import { EditorTools } from '@/components/home/EditorTools'
import { ReadyMadeComponents } from '@/components/home/ReadyMadeComponents'
import { SearchButton } from '@/components/Search'
import { Hero } from '@/components/home/Hero'
import { Logo } from '@/components/Logo'
import { Footer } from '@/components/home/Footer'
import NextLink from 'next/link'
import Head from 'next/head'
import { NavItems, NavPopover } from '@/components/Header'
import styles from './index.module.css'
import clsx from 'clsx'
import { ThemeToggle } from '@/components/ThemeToggle'
import Header from './landing/header';

export default function Home() {
  return (
    <>
      <Head>
        <meta key="twitter:title" name="twitter:title" content="AIviCare" />
        <meta key="og:title" property="og:title" content="AIviCare" />
        <title>AIviCare</title>
      </Head>
      <div className="mb-20 space-y-20 overflow-hidden sm:mb-32 sm:space-y-32 md:mb-40 md:space-y-40">
        <Header />
        <section className="px-8 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Miễn phí nhưng cực kỳ chất lượng.
          </h2>
          <figure>
            <blockquote>
              <p className="max-w-3xl mx-auto mt-6 text-lg">
                "Mình rất bất ngờ với kiến thức mà GAMMA cung cấp. Tất cả đều từ các nguồn tài liệu
                rõ ràng, đều có đáp án và lời giải chi tiết. Cảm ơn đội ngũ GAMMA đã mang đến một
                sản phẩm chất lượng cho học sinh."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-4 text-left">
              <img
                src={require('@/img/adam.jpg').default}
                alt=""
                className="rounded-full w-14 h-14"
                loading="lazy"
              />
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">Vinh Nguyễn</div>
                <div className="mt-0.5 text-sm leading-6">Trường THPT Diễn Châu II</div>
              </div>
            </figcaption>
          </figure>
        </section>
      </div>
      <Testimonials />
      <div className="pt-20 mb-20 space-y-20 overflow-hidden sm:pt-32 sm:mb-32 sm:space-y-32 md:pt-40 md:mb-40 md:space-y-40">
        <ConstraintBased />
        <BuildAnything />
        <Performance />
        <MobileFirst />
        <StateVariants />
        <ComponentDriven />
        <DarkMode />
        <Customization />
        <ModernFeatures />
        <EditorTools />
        <ReadyMadeComponents />
      </div>
      <Footer />
    </>
  )
}
