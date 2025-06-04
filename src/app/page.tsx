import { ClipboardDocumentListIcon, BeakerIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import WaitlistForm from '@/components/WaitlistForm'
import ScrollToWaitlist from '@/components/ScrollToWaitlist'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <div className="relative isolate">
      {/* Hero section */}
      <div className="relative pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-supp-red-500 to-supp-red-200 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Your Personalized Supplement Stack Starts Here
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                SuppStack uses real science to recommend stacks that fit your goals — from sleep to performance.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <ScrollToWaitlist />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works section */}
      <div id="how-it-works" className="py-24 sm:py-32 scroll-mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-supp-red-600">Personalized Recommendations</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How SuppStack Works
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get personalized supplement recommendations backed by science, not marketing hype.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <ClipboardDocumentListIcon className="h-8 w-8 flex-none text-supp-red-600" aria-hidden="true" />
                  Tell us your goals
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Share your health and fitness goals, current supplements, and lifestyle factors.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <BeakerIcon className="h-8 w-8 flex-none text-supp-red-600" aria-hidden="true" />
                  Get a science-backed stack
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Receive personalized supplement recommendations based on peer-reviewed research.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <ChartBarIcon className="h-8 w-8 flex-none text-supp-red-600" aria-hidden="true" />
                  Log what works for you
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Track your progress and fine-tune your stack based on your results.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* About section */}
      <div id="about" className="py-24 sm:py-32 bg-gray-50 scroll-mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-supp-red-600">About SuppStack</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Science-Based Supplement Recommendations
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We believe in evidence-based supplementation. Our recommendations are backed by peer-reviewed research and real-world data, helping you make informed decisions about your health and wellness journey.
            </p>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div id="contact" className="py-24 sm:py-32 scroll-mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-supp-red-600">Get in Touch</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Have Questions?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're here to help you make the best decisions for your health. Reach out to our team with any questions about SuppStack or supplement recommendations.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Waitlist section */}
      <div id="waitlist" className="py-24 sm:py-32 bg-gray-50 scroll-mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get 3 Months Free Access</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Join our exclusive founding members waitlist today. Be first to experience personalized, science-backed supplement recommendations when we launch.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </div>
  )
}
