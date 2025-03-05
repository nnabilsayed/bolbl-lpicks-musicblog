import React from "react";
import {
  Headphones,
  ListMusic,
  Info,
  Clock,
  Star,
  BarChart2,
} from "lucide-react";

const MusicboardFeatures = () => {
  const features = [
    {
      icon: <Headphones size={20} className="text-muted-foreground" />,
      text: "Keep track of all the music you have listened to (or just start from the day you join)",
    },
    {
      icon: <ListMusic size={20} className="text-muted-foreground" />,
      text: "Write reviews and rate music to share your opinions with friends and our community",
    },
    {
      icon: <Info size={20} className="text-muted-foreground" />,
      text: "Collect music into lists and show off your favorite albums, rank an artist's discography, and more",
    },
    {
      icon: <Clock size={20} className="text-muted-foreground" />,
      text: "Save music you haven't listened to yet and stay up to date as new albums are being released",
    },
    {
      icon: <Star size={20} className="text-muted-foreground" />,
      text: "Browse our Top 250 and Most Popular sections to discover great music and new artists",
    },
    {
      icon: <BarChart2 size={20} className="text-muted-foreground" />,
      text: "Unlock in-depth statistics about your musical interests and more with Musicboard Pro",
    },
  ];

  return (
    <section className="container mx-auto py-6">
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium text-foreground">
          Bolbol Picks Lets You...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 rounded-md bg-background/95 p-5 transition-all hover:scale-[1.02] hover:bg-accent hover:shadow-md"
            >
              <div className="flex items-center gap-2">{feature.icon}</div>
              <p className="text-sm text-muted-foreground">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicboardFeatures;
