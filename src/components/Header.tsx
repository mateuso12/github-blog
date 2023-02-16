import Logo from '../assets/Logo.svg'
import EffectLeft from '../assets/effect-left.svg'
import EffectRight from '../assets/effect-right.svg'

export function Header() {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="flex justify-between">
        <img src={EffectLeft} alt="" className="mt-[70px] mb-[38px]" />
        <img src={Logo} alt="Logo" className="w-[148px] mx-[17.0625rem]" />
        <img src={EffectRight} alt="" className="my-6" />
      </div>
    </div>
  )
}
