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
        Paste your Archway address below to check if you're eligible to mint.
      </div>
      <input
        className="text-white border-2 border-white bg-transparent outline-none rounded-md py-2 px-4 w-[100%] text-center"
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

type SectionHeaderProps = {
  children: string;
};

function SectionHeader(props: SectionHeaderProps) {
  return (
    <div
      className={`${Font.barlow.className} text-3xl uppercase tracking-widest text-center py-6 text-white`}
    >
      {props.children}
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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-[100%] md:w-[1000px] px-8 py-16">
      <section className="flex flex-col items-center justify-center w-[100%]">
        <div
          className={`${Font.headhunter.className} text-7xl md:text-8xl text-white text-center`}
        >
          Ghouls
        </div>
        <Image
          className="w-[400px] md:w-[450px]"
          src="/logo.jpg"
          height={450}
          width={450}
          alt="Hello"
        />
        <div
          className={`${Font.barlow.className} border-b-2 border-white pb-8 flex flex-row justify-between gap-x-12 uppercase tracking-wider text-lg md:text-xl text-white`}
        >
          <a href="">Benefits</a>
          <a href="">Sneakpeeks</a>
          <a href="">Checker</a>
        </div>
      </section>
      <section className="text-white my-8 md:my-12">
        <div
          className={`${Font.barlowLight.className} pb-4 flex flex-col text-xl`}
        >
          <p className="text-center">
            <Link href="">Ghouls</Link> is a new collection launching on{' '}
            <Link href="https://archway.io/">Archway</Link> created by{' '}
            <Link href="">CAA Labs</Link>, the team behind{' '}
            <Link href="https://apello.xyz">Apello</Link>. Join our
            multi-collection cross-chain family and access exclusive benefits
            across the <Link href="https://cosmos.network">Cosmos</Link>{' '}
            ecosystem.
          </p>
        </div>
        <div
          className={`${Font.barlowLight.className} flex flex-col text-lg items-center`}
        >
          <div className="flex flex-row gap-2">
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
          </div>
        </div>
      </section>
      <section>
        <SectionHeader>Benefits</SectionHeader>
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
      <section>
        <SectionHeader>Sneakpeeks</SectionHeader>
        <div className="flex flex-row gap-4">
          <SneakpeekFrame url="/preview1.jpg" />
          <SneakpeekFrame url="/preview2.png" />
        </div>
      </section>
      <section>
        <SectionHeader>Checker</SectionHeader>
        <Checker />
      </section>
    </main>
  );
}
