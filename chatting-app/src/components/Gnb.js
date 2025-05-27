'use client';

import data from '../data/data';
import Image from 'next/image';

interface GnbItem {
  off: string;
}

export default function Gnb() {
  return (
    <div id="gnbbar">
      <ul>
        {data.gnb.map((d: GnbItem, i: number) => (
          <li key={i} className="gnb">
            <a href="">
              <Image
                src={`/images/${d.off}`}
                alt={d.off.split('.')[0]}
                width={50} // 적절한 값으로 수정
                height={50} // 적절한 값으로 수정
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
