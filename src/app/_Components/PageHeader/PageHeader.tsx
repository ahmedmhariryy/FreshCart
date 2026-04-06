import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PageHeader({
  bgColor,
  container,
  flexNav,
  link,
  linkTwo,
  nameOfLinkTwo,
  nameOfLink,
  linkName,
  iconStyle,
  icon,
  image,
  imageStyle,
  h1,
  desc,
}: {
  bgColor: string;
  container: string;
  flexNav: string;
  link?: string;
  nameOfLink?: string;
  linkTwo?: string;
  nameOfLinkTwo?: string;
  linkName?: string;
  iconStyle?: string;
  icon?: React.ElementType;
  image?: string;
  imageStyle?: string;
  h1?: string;
  desc?: string;
}) {
  const Icon = icon;
  return (
    <>
      <div className={bgColor}>
        <div className={container}>
          <nav className={flexNav}>
            <Link className="hover:text-white transition-colors" href="/">
              Home
            </Link>
            {link && (
              <>
                <span className="text-white/40">/</span>
                <Link className="hover:text-white transition-colors" href={link}>
                  {nameOfLink}
                </Link>
              </>
            )}
            {linkTwo && (
              <>
                <span className="text-white/40">/</span>
                <Link className="hover:text-white transition-colors" href={linkTwo}>
                  {nameOfLinkTwo}
                </Link>
              </>
            )}
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">{linkName}</span>
          </nav>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30 overflow-hidden">
              {image ? (
                <Image src={image} className={imageStyle} alt="icon" width={32} height={32} />
              ) : Icon ? (
                <Icon className={iconStyle} />
              ) : null}
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{h1}</h1>
              <p className="text-white/80 mt-1">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
