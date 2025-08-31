import { Categories } from "@/components/Categories"
import {Hero} from "@/components/Hero"



export default function Home() {
  return (
    <main>
      <div className="bg-[radial-gradient(ellipse_at_top_left,_#6b4423,_#f5deb3_90%),radial-gradient(ellipse_at_top_right,_#6b4423,_#f5deb3_60%)]">
              <Hero />  
          <Categories />
      </div>

    </main>
  )
}