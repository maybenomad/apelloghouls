import Image from 'next/image';
import Font from './fonts';

type LinkProps = {
  href: string;
  children: string;
};

function Link(props: LinkProps) {
  return (
    <a
      className={`${Font.barlow.className} hover:${Font.barlowLight.className}`}
      href={props.href}
    >
      {props.children}
    </a>
  );
}

type CheckerProps = {};

function Checker(props: CheckerProps) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`${Font.barlowLight.className} pb-4 text-white text-center`}
      >
        Paste your Archway address below to check if you&#39;re eligible to
        mint.
      </div>
      <input
        className="text-white border-2 border-white outline-none rounded-md py-2 px-4 w-[100%] text-center"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
        placeholder="Your Archway Address"
        type="text"
      />
    </div>
  );
}

// className={`${Font.barlow.className} py-2 px-4 text-[#f1490f] text-lg tracking-wide`}

type FilledRoadmapBoxProps = {
  image: string;
  title: string;
  description: string | React.ReactNode;
  children?: string | React.ReactNode;
  empty?: boolean;
  reversed?: boolean;
};

function FilledRoadmapBox(props: FilledRoadmapBoxProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
      className={`relative flex flex-row ${
        props.reversed && `flex-row-reverse`
      } w-[100%] md:w-[80%] py-4 items-center border-4 border-white rounded-xl`}
    >
      <div
        style={{
          background:
            'linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent 90%), linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent)',
        }}
        className="absolute h-[100%] w-[100%] z-1"
      ></div>
      <div className={`z-10 flex flex-col md:basis-2/3`}>
        <div
          className={`${
            Font.channelTuning.className
          } px-8 py-4 text-white text-3xl tracking-wide ${
            props.reversed ? 'text-right' : 'text-left'
          } border-b-4 border-white tracking-widest`}
        >
          {props.title}
        </div>
        <div
          className={`${Font.barlowLight.className} p-8 text-white text-lg ${
            props.reversed ? 'text-right' : 'text-left'
          }`}
        >
          {props.description}
        </div>
      </div>
    </div>
  );
}

type RoadmapBoxProps = {
  title: string;
  description: string | React.ReactNode;
  children?: string | React.ReactNode;
  image?: string;
  empty?: boolean;
  reversed?: boolean;
};

function RoadmapBox(props: RoadmapBoxProps) {
  return (
    <div
      className={`flex flex-row ${
        props.reversed && `flex-row-reverse`
      } w-[95%] md:w-[80%] py-4 items-center`}
    >
      <div className={`flex flex-col md:basis-2/3 items-`}>
        <div className="self-center block md:hidden">
          {/* {props.image && (
            <Image
              src={`/${props.image}`}
              height={150}
              width={150}
              alt="lmao"
            />
          )} */}
        </div>
        <div
          className={`${
            Font.channelTuning.className
          } p-8 text-white text-3xl tracking-wide text-center ${
            props.reversed ? 'md:text-right' : 'md:text-left'
          } border-b-4 border-white tracking-widest`}
        >
          {props.title}
        </div>
        <div
          className={`${
            Font.barlowLight.className
          } p-8 text-white text-lg text-center ${
            props.reversed ? 'md:text-right' : 'md:text-left'
          }`}
        >
          {props.description}
        </div>
      </div>
      <div
        className={`flex flex-col basis-1/3 items-center ${
          props.reversed ? 'border-r-0' : 'border-l-0'
        } border-white rounded-lg hidden md:block`}
      >
        {props.image && (
          <Image src={`/${props.image}`} height={300} width={300} alt="lmao" />
        )}
      </div>
    </div>
  );
}

type SneakpeekFrameProps = {
  url: string;
};

function SneakpeekFrame(props: SneakpeekFrameProps) {
  return (
    <div className="border-4 border-white rounded-xl">
      <Image
        className="w-[120px] md:w-[200px] rounded-md"
        src={props.url}
        height={200}
        width={200}
        alt="Hello"
      />
    </div>
  );
}

function SectionHeader(props: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.45)), url('/banner.jpg')",
        backgroundSize: 'cover',
      }}
      className="flex flex-col w-[100%] gap-y-8 text-white md:mt-12 mb-4 border-white border-4 rounded-lg"
    >
      <div
        style={{ backdropFilter: 'blur(3px)' }}
        className={`${Font.channelTuning.className} text-center text-3xl md:text-left md:text-4xl font-bold uppercase tracking-widest text-white h-[100%] px-8 pt-6 pb-4`}
      >
        {props.children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-[100%] md:w-[1100px] px-8 py-2 md:py-8">
      <div className="fixed w-[100%] h-[100%] bg-[url('/background.png')] bg-cover"></div>
      <section
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.45)), url('/banner.jpg')",
          backgroundSize: 'cover',
        }}
        className="flex flex-col w-[100%] gap-y-8 text-white md:mt-12 mb-4 border-white border-4 rounded-lg px-8 py-4"
      >
        <div className="flex flex-row flex-wrap-reverse md:flex-nowrap items-center justify-center w-[100%]">
          <Image
            className="w-[150px] md:w-[250px]"
            src="/logo_transparent.png"
            height={200}
            width={200}
            alt="Hello"
          />
          <div
            className={`${Font.headhunter.className} text-6xl md:text-8xl text-white text-center pt-6 pr-0 md:pr-12`}
          >
            Ghouls
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-between w-[100%] mt-0 px-4 gap-y-4">
        <div
          className={`${Font.channelTuning.className} flex flex-row flex-wrap justify-center md:flex-nowrap md:justify-between gap-x-8 uppercase tracking-wider text-xl md:text-2xl text-white`}
        >
          <a className="NavLink" href="">
            Info
          </a>
          <a className="NavLink" href="">
            Roadmap
          </a>
          <a className="NavLink" href="">
            Sneakpeeks
          </a>
          <a className="NavLink" href="https://archflip.com">
            Archflip
          </a>
        </div>
        <div className="flex flex-row justify-center gap-x-8 h-[30px]">
          <a
            href="https://x.com/TheGhouls_NFT"
            target="_blank"
            className="NavLink"
          >
            <Image
              className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]"
              src="/logo_x.svg"
              height={30}
              width={30}
              alt="X"
            />
          </a>
          <a
            href="https://discord.gg/theghouls"
            target="_blank"
            className="NavLink"
          >
            <Image
              className="relative top-[-3px] md:top-0 h-[25px] w-[25px] md:h-[35px] md:w-[35px]"
              src="/logo_discord.svg"
              height={35}
              width={35}
              alt="X"
            />
          </a>
        </div>
      </section>
      <section
        style={{
          background: '#f1490f',
          boxShadow: 'inset 0px 0px 15px 5px rgba(0,0,0,0.1)',
        }}
        className="relative flex flex-col gap-y-8 text-white my-8 md:my-12 border-white border-4 rounded-xl px-8 py-8 md:py-16"
      >
        <div
          className={`${Font.barlow.className} pb-4 flex flex-col text-xl md:text-2xl`}
        >
          <p className="text-center">
            <Link href="">Ghouls</Link> is a collection launching on{' '}
            <Link href="https://x.com/amburxyz">Ambur</Link> supported by{' '}
            <Link href="https://x.com/archwayHQ">Archway</Link>. Join our
            community and be part of the revolution!
          </p>
        </div>
        <div
          className={`${Font.barlowLight.className} flex flex-col text-lg items-center`}
        >
          <Checker />
        </div>
        <Image
          className="hidden md:block absolute top-[150px] left-[-90px]"
          src="/yzkiobones.png"
          width={240}
          height={240}
          alt="whatever"
        />
        {/* <div className="flex flex-row gap-2">
            <div className={`${Font.barlow.className}`}>Mint Date:</div>
            <div>TBA</div>
          </div>
          <div className="flex flex-row gap-2">
            <div className={`${Font.barlow.className}`}>Mint Price:</div>
            <div>TBA</div>
          </div>
          <div className="flex flex-row gap-2">
            <div className={`${Font.barlow.className}`}>Supply:</div>
            <div>3210</div>
          </div>
          <div className="flex flex-row gap-2">
            <div className={`${Font.barlow.className}`}>Marketplace:</div>
            <div>
              <Link href="https://ambur.xyz">Ambur</Link>
            </div>
          </div> */}
      </section>
      <section>
        <SectionHeader>Roadmap</SectionHeader>
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          <RoadmapBox
            reversed
            title="Sniper Bot"
            description={`
            Receive access to NFT sniper bots for automatically minting and
            sniping NFT collections on Archway.`}
            image="ghoul_robot.png"
          ></RoadmapBox>
          <FilledRoadmapBox
            title="Charity"
            description={`
            A percentage of revenue will be accumulated for humanitarian aid.
            Charity to be picked by the team and community.`}
            image="ghoul_charity.png"
          ></FilledRoadmapBox>
          <RoadmapBox
            reversed
            title="Memecoin"
            description={`
            The Ghouls community will launch a memecoin on Archway to celebrate
            the launch of our token creator.`}
          ></RoadmapBox>
          <FilledRoadmapBox
            title="Revenue Share"
            description={`
            Each NFT grants a share of the revenue from our token creator, coin
            flip game, and any other future projects.`}
            image="ghoul_flip.png"
          ></FilledRoadmapBox>
          <RoadmapBox
            title="Airdrops"
            description={`
            Each Ghoul qualifies for a free mint of ????, a free stack of the
            upcoming community memecoin, and more...`}
          ></RoadmapBox>
        </div>
      </section>
      <section className="w-full">
        <SectionHeader>Sneakpeeks</SectionHeader>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          <SneakpeekFrame url="/preview1.jpg" />
          <SneakpeekFrame url="/preview2.png" />
          <SneakpeekFrame url="/sneakpeek3.png" />
          <SneakpeekFrame url="/sneakpeek4.png" />
          <SneakpeekFrame url="/sneakpeek5.png" />
          <SneakpeekFrame url="/sneakpeek6.png" />
          <SneakpeekFrame url="/sneakpeek7.png" />
          <SneakpeekFrame url="/sneakpeek8.png" />
        </div>
      </section>
    </main>
  );
}
