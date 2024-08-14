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
      <div className={`${Font.barlowLight.className} pb-4 text-white`}>
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

type RoadmapBoxProps = {
  title: string;
  children: string | React.ReactNode;
};

function RoadmapBox(props: RoadmapBoxProps) {
  return (
    <div
      className={`flex flex-col border-white border-2 rounded-md max-w-[300px]`}
    >
      <div
        className={`${Font.barlow.className} bg-white py-2 px-4 text-[#f1490f] text-lg tracking-wide`}
      >
        {props.title}
      </div>
      <div className={`${Font.barlowLight.className} p-4 text-white`}>
        {props.children}
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
        className="rounded-md"
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
      className="flex flex-col w-[100%] gap-y-8 text-white md:mt-12 mb-4 border-white border-4 rounded-lg px-8 py-4"
    >
      <div
        className={`${Font.channelTuning.className} text-4xl font-bold uppercase tracking-widest text-white mt-3`}
      >
        {props.children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-[100%] md:w-[1000px] px-8 py-8">
      <div className="fixed w-[100%] h-[100%] bg-[url('/background.png')] bg-cover"></div>
      <section
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.45)), url('/banner.jpg')",
          backgroundSize: 'cover',
        }}
        className="flex flex-col w-[100%] gap-y-8 text-white md:mt-12 mb-4 border-white border-4 rounded-lg px-8 py-4"
      >
        <div className="flex flex-row items-center justify-center w-[100%]">
          <Image
            className="w-[200px] md:w-[250px]"
            src="/logo_transparent.png"
            height={200}
            width={200}
            alt="Hello"
          />
          <div
            className={`${Font.headhunter.className} text-7xl md:text-8xl text-white text-center pt-6 pr-12`}
          >
            Ghouls
          </div>
        </div>
      </section>
      <section className="flex flex-row justify-between w-[100%] mt-0 px-4">
        <div
          className={`${Font.channelTuning.className} flex flex-row justify-between gap-x-8 uppercase tracking-wider text-xl md:text-3xl text-white`}
        >
          <a href="">Info</a>
          <a href="">Roadmap</a>
          <a href="">Sneakpeeks</a>
        </div>
        <div className="flex flex-row justify-center gap-x-8 h-[30px]">
          <a href="https://x.com/TheGhouls_NFT" target="_blank">
            <Image src="/logo_x.svg" height={30} width={30} alt="X" />
          </a>
          <a href="https://discord.gg/caalabs" target="_blank">
            <Image src="/logo_discord.svg" height={35} width={35} alt="X" />
          </a>
        </div>
      </section>
      <section
        style={{
          background: '#f1490f',
          boxShadow: 'inset 0px 0px 15px 5px rgba(0,0,0,0.1)',
        }}
        className="relative flex flex-col gap-y-8 text-white my-8 md:my-12 border-white border-4 rounded-xl px-8 py-16"
      >
        <div className={`${Font.barlow.className} pb-4 flex flex-col text-2xl`}>
          <p className="text-center">
            <Link href="">Ghouls</Link> is a collection launching on{' '}
            <Link href="https://ambur.xyz">Ambur</Link> supported by{' '}
            <Link href="https://archway.io/">Archway</Link>. Join our community
            and be part of the revolution!
          </p>
        </div>
        <div
          className={`${Font.barlowLight.className} flex flex-col text-lg items-center`}
        >
          <Checker />
        </div>
        <Image
          className="absolute top-[150px] left-[-90px]"
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
          <RoadmapBox title="Charity 💸">
            A percentage of revenue will be accumulated for humanitarian aid.
            Charity to be picked by the team and community.
          </RoadmapBox>
          <RoadmapBox title="Sniper Bot 🤖">
            Receive access to NFT sniper bots for automatically minting and
            sniping NFT collections on Archway.
          </RoadmapBox>
          <RoadmapBox title="Revenue Share 💰">
            Each NFT grants a share of the revenue from our token creator, coin
            flip game, and any other future projects.
          </RoadmapBox>
          <RoadmapBox title="Other Surprises 🪂">
            Qualify for airdrops within the Archway community, participate in
            our memecoin launch, and more...
          </RoadmapBox>
        </div>
      </section>
      <section className="w-full">
        <SectionHeader>Sneakpeeks</SectionHeader>
        <div className="flex flex-row gap-4">
          <SneakpeekFrame url="/preview1.jpg" />
          <SneakpeekFrame url="/preview2.png" />
        </div>
      </section>
    </main>
  );
}
