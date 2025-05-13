"use client"
import { SocialLinks } from "../SocialLinks"

const socials = [
  {
    name: "Instagram",
    image: "https://link-hover-lndev.vercel.app/instagram.png",
    url: "https://www.instagram.com/oliviawaang",
  },
  {
    name: "LinkedIn",
    image: "https://link-hover-lndev.vercel.app/linkedin.png",
    url:"https://www.linkedin.com/in/olivia-wang-060142246/",
  },
  {
    name: "Spotify",
    image: "https://link-hover-lndev.vercel.app/spotify.png",
    url: "https://open.spotify.com/user/qy0tkelhsvvav1njf2dh3x64v"
  },
]

export function SocialLinksDemo() {
  return (
    <div className="flex justify-center py-10">
      <SocialLinks socials={socials} />
    </div>
  )
}
