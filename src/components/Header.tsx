import Logo from '../assets/Logo.svg'
import EffectLeft from '../assets/effect-left.svg'
import EffectRight from '../assets/effect-right.svg'

export function Header() {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="flex justify-between py-8 bg-[#0B1F33]">
        <img
          src={EffectLeft}
          alt=""
          className="lg:mt-[70px] lg:mb-[38px] w-[80px] md:w-[200px] lg:w-[409px] md:block lg:block"
        />
        <img
          src={Logo}
          alt="Logo"
          className=" w-[90px] md:w-[120px] lg:w-[148px]"
        />
        <img
          src={EffectRight}
          alt=""
          className="lg:my-6 w-[80px] md:w-[200px] lg:w-[371px] md:block lg:block"
        />
      </div>
    </div>
  )
}
