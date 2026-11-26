import type { StaticImageData } from "next/image";

import srijana from "../../public/photos/srijana.jpg";
import prakriti from "../../public/photos/prakriti.jpg";
import anisha from "../../public/photos/anisha.jpg";
import aarav from "../../public/photos/aarav.jpg";
import rohan from "../../public/photos/rohan.jpg";

export type Profile = {
  name: string;
  age: number;
  place: string;
  km: number;
  match: number;
  bio: string;
  tags: string[];
  photo: StaticImageData;
  job: string;
  lookingFor: string;
  prompt: { q: string; a: string };
};

// Demo profiles: fictional names on free Unsplash photos (see public/photos/CREDITS.md).
export const profiles: Profile[] = [
  {
    name: "Srijana", age: 24, place: "Kathmandu", km: 2, match: 94,
    bio: "Momo critic, sunset chaser. Looking for someone to explore Patan with.",
    tags: ["Travel", "Momo", "Photography"], photo: srijana,
    job: "Graphic designer", lookingFor: "Long-term partner",
    prompt: { q: "My perfect Saturday", a: "Bhaktapur bike ride, juju dhau, then rooftop sunset." },
  },
  {
    name: "Rohan", age: 27, place: "Lalitpur", km: 4, match: 89,
    bio: "Weekend hiker, weekday coder. Will plan the Nagarkot trip.",
    tags: ["Hiking", "Coffee", "Guitar"], photo: rohan,
    job: "Software engineer", lookingFor: "Something serious",
    prompt: { q: "Green flag I look for", a: "You say yes to a 5am sunrise hike." },
  },
  {
    name: "Prakriti", age: 23, place: "Pokhara", km: 6, match: 91,
    bio: "Lakeside walks and long playlists. Teach me your favourite song.",
    tags: ["Music", "Yoga", "Books"], photo: prakriti,
    job: "Yoga instructor", lookingFor: "Long-term partner",
    prompt: { q: "I'm overly competitive about", a: "Carrom. Don't test me." },
  },
  {
    name: "Aarav", age: 28, place: "Bhaktapur", km: 3, match: 87,
    bio: "Architect by day, street-food explorer by night.",
    tags: ["Design", "Food", "Football"], photo: aarav,
    job: "Architect", lookingFor: "Still figuring it out",
    prompt: { q: "Best spot in the valley", a: "The chatamari place behind Taumadhi — I'll take you." },
  },
  {
    name: "Anisha", age: 25, place: "Kathmandu", km: 1, match: 92,
    bio: "Fashion, films and chiya. Tell me your best movie pick.",
    tags: ["Fashion", "Movies", "Chiya"], photo: anisha,
    job: "Fashion stylist", lookingFor: "Something serious",
    prompt: { q: "Let's debate", a: "Masala chiya beats coffee. Every time." },
  },
];
