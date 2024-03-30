'use client';

import Image from 'next/image'

export default function Footer() {
  return (
    <div>
      <div className="socials">
        <div className="bg-white rounded-full">
          <Image className="social-platform" src="/twitter-logo.png" alt="twitter-logo" />
        </div>
        <div className="bg-white rounded-full ml-3">
          <Image className="social-platform" src="/telegram-logo.png" alt="telegram-logo" />
        </div>
      </div>
    </div>
  );
}
