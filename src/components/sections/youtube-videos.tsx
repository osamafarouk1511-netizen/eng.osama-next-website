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
    <div className="mt-16">
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Mobile: stacked narrow cards (one per row) centered */}
      <div className="md:hidden px-4 pb-8">
        <div className="flex flex-col gap-4">
          {videos.map((video, idx) => (
            <motion.a
              key={video.videoId}
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="w-full max-w-[120px] mx-auto flex flex-col items-center bg-transparent border-2 border-white rounded-2xl p-2"
            >
              <div className="w-full h-40 bg-black rounded-md overflow-hidden mb-3 flex items-center justify-center relative border-2 border-white/10">
                <img
                  src={`https://i.ytimg.com/vi/${video.videoId}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="text-[12px] text-center text-white font-semibold leading-tight">{video.title}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
