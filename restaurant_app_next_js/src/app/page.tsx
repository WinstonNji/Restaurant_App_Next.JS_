import Slider from '@/components/Slider'
import Featured from '@/components/Featured'
import Offer from "@/components/Offer"
import {PrefetchModalTree} from "@/components/PrefetchModalTree"
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <Slider />
      <Suspense fallback = {
        <div className='flex gap-4'>
          {[...Array(9)].map((_,index) => (
            <div key={index} className="flex w-52 h-full flex-col gap-4 min-w-[80vw] md:min-w-[30vw]">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          ))}
        </div>
        
      }>
        <Featured />
      </Suspense>
      <Offer />
      <PrefetchModalTree />
    </>
    
  );
}
