import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps, router }: AppProps) {
  return <ThemeProvider attribute="class">
    <div className="grid grid-cols-12 gap-6 px-5 py-4 sm:py-14 lg:mb-0 md:mb-16 sm:px-15 md:px-20 lg:px-24 xl:px-30 2xl:px-36">
      <div className="col-span-12 p-4 text-base text-center bg-white h-fit dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark dark:border-t-2 dark:border-gray-600">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 overflow-y-scroll bg-white max-h-85vh shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-9 dark:bg-dark-500 dark:border-t-2 dark:border-gray-600">
        <Navbar />
        <Component {...pageProps} key={router.route} />
      </div>
    </div>
  </ThemeProvider>
}

export default MyApp
