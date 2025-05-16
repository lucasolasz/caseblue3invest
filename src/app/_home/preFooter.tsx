import Image from "next/image";

export default function PreFooter() {
  return (
    <div className="h-[103px] bg-[#002060] md:flex md:items-center ">
      <div className="md:max-w-[1140px] md:mx-auto md:w-full ">
        <div className="flex justify-between">
          <div className="w-full">
            <Image
              className="object-contain"
              src="/assets/logo-blue3-white.png"
              alt="Logo branca da Blue3"
              width={200}
              height={39}
            />
          </div>
          <div className="w-full flex justify-end">
            <Image
              className="object-contain h-full"
              src="/assets/social-logos/icon-instagram-round.png"
              alt="Logo azul instagram"
              width={32}
              height={32}
            />
            <Image
              className="object-contain h-full ml-4"
              src="/assets/social-logos/icon-facebook-round.png"
              alt="Logo azul facebook"
              width={32}
              height={32}
            />
            <Image
              className="object-contain h-full ml-4"
              src="/assets/social-logos/icon-linkedin-round.png"
              alt="Logo azul linkedin"
              width={32}
              height={32}
            />

            <Image
              className="object-contain h-full ml-4"
              src="/assets/social-logos/icon-youtube-round.png"
              alt="Logo azul youtube"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
