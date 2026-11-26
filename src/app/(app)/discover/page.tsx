import type { Metadata } from "next";
import { profiles } from "@/lib/profiles";
import DiscoverView from "./discover-view";

export const metadata: Metadata = {
  title: "Discover — Amora",
  description: "Swipe through verified singles near you.",
};

export default function DiscoverPage() {
  return <DiscoverView profiles={profiles} />;
}
