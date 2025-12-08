import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface YoutubeVideo {
  videoId: string;
  title: string;
}

// Fetch videos from YouTube Data API (public API requires API key)
// For demo, we'll use a static list, but you can replace with API fetch
const CHANNEL_ID = 'UCwQvQwQwQwQwQwQwQwQwQw'; // Placeholder, will be replaced
const DEMO_VIDEOS: YoutubeVideo[] = [
  { videoId: 'ByeiS0VgOIE', title: 'CSS ERP System Overview' },
  { videoId: 'FCUwz7J6--4', title: 'Smart POS Features & Benefits' },
  { videoId: 'Iwe52JYeKLA', title: 'Electronic Invoice Integration' },
  { videoId: 'roEbzfPBRk0', title: 'Cloud Solutions for Business' },
  { videoId: 'AP92ZUfmBbo', title: 'Cybersecurity & Risk Management' },
];

// Helper to get video title from YouTube API
async function fetchVideoTitle(videoId: string): Promise<string> {
  try {
    const res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
    const data = await res.json();
    return data.title;
  } catch {
    return 'YouTube Video';
  }
}

export default function YoutubeVideos({ channelId = CHANNEL_ID }: { channelId?: string }) {
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);

  useEffect(() => {
    // TODO: Replace with YouTube Data API fetch for all channel videos
    // For now, use DEMO_VIDEOS
    Promise.all(
      DEMO_VIDEOS.map(async (v) => ({
        ...v,
        title: await fetchVideoTitle(v.videoId),
      }))
    ).then(setVideos);
  }, [channelId]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
      {videos.map((video, idx) => (
        <motion.div
          key={video.videoId}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="rounded-xl shadow-lg bg-white p-4 flex flex-col items-center"
        >
          <iframe
            width="100%"
            height="250"
            src={`https://www.youtube.com/embed/${video.videoId}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg mb-4"
          ></iframe>
          <div className="font-bold text-lg text-center text-[var(--color-navy)]">{video.title}</div>
        </motion.div>
      ))}
    </div>
  );
}
