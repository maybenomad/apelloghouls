'use client';

import { useState } from 'react';
import WHITELIST from './whitelist';
import Font from './fonts';

function csx(...args: (string | undefined)[]) {
  return args.filter(Boolean).join(' ');
}

type CheckerProps = {};

type CheckerStatus = 'Inactive' | 'Eligible' | 'Ineligible';

export default function Checker(props: CheckerProps) {
  const [status, setStatus] = useState<CheckerStatus>('Inactive');

  const handleWhitelistCheck = (e: any) => {
    const testAddress = e.target.value as string;

    if (!testAddress) {
      setStatus('Inactive');
    } else if (WHITELIST.includes(testAddress)) {
      setStatus('Eligible');
    } else {
      setStatus('Ineligible');
    }
  };

  return (
    <div className="flex flex-col items-center relative">
      <div
        className={`${Font.barlowLight.className} pb-4 text-white text-center`}
      >
        Paste your Archway address below to check if you&#39;re eligible to
        mint.
      </div>
      <input
        onChange={handleWhitelistCheck}
        className={csx(
          'text-white border-2',
          status === 'Eligible'
            ? 'border-[#708c35] rounded-t-md'
            : status === 'Ineligible'
            ? 'border-[#c40a2b] rounded-t-md'
            : 'border-white rounded-md',
          'outline-none py-2 px-4 w-[100%] text-center'
        )}
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
        placeholder="Your Archway Address"
        type="text"
      />
      {status === 'Eligible' && (
        <div
          className={csx(
            Font.barlowLight.className,
            'absolute flex bg-[#708c35] text-sm rounded-b-md w-[100%] justify-center pt-1 pb-2',
            'top-[90px]'
          )}
        >
          This address is eligible!
        </div>
      )}
      {status === 'Ineligible' && (
        <div
          className={csx(
            Font.barlowLight.className,
            'absolute flex bg-[#c40a2b] text-sm rounded-b-md w-[100%] justify-center pt-1 pb-2',
            'top-[90px]'
          )}
        >
          This address is not on the whitelist.
        </div>
      )}
    </div>
  );
}
