import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <div>
      <h1 className='text-3xl text-indigo-300'>Hello, Gsap Landing Page</h1>
    </div>
  )
}
