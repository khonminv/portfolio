'use client';

import React from 'react';
import './globals.css';
import Image from 'next/image';
import data from './data/data';
import { UserProvider } from './context/UserContext';
import { SocketProvider } from './context/SocketContext';
import Link from 'next/link';
import UiScript from './UiScript'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <UserProvider>
			<SocketProvider>
			<div id="wrapper">
				<UiScript />
				<Dim />
				<Gnb />
				{children}
			</div>
			</SocketProvider>
        </UserProvider>
      </body>
    </html>
  );
}

function Dim() {
  return <div className="dim"></div>;
}

interface GnbItem {
  off: string;
  href: string;
}

function Gnb() {
  return (
    <div id="gnbbar">
      <ul>
        {data.gnb.map((d: GnbItem, i: number) => (
          <li key={i} className="gnb">
            <Link href={d.href}>
              <Image
                src={`/images/${d.off}`}
                alt={d.off.split('.')[0]}
                width={50}
                height={50}
                priority={false}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
