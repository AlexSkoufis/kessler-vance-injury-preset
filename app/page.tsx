import SmoothScroll from '@/components/SmoothScroll';
import Reveal from '@/components/Reveal';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Cases from '@/components/Cases';
import Estimator from '@/components/Estimator';
import Deadline from '@/components/Deadline';
import Results from '@/components/Results';
import Attorneys from '@/components/Attorneys';
import Review from '@/components/Review';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <SmoothScroll />
      <Reveal />
      <Nav />
      <main id="main">
        <Hero />
        <Cases />
        <Estimator />
        <Deadline />
        <Results />
        <Attorneys />
        <Review />
      </main>
      <Footer />
    </>
  );
}
