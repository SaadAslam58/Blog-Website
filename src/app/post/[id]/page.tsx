"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

type Post = {
  id: number;
  title: string;
  content: string;
  image: string;
  comments: string[];
};

const PostDetails: React.FC = () => {
  const { id } = useParams() as { id: string }; // Ensure id is of type string

  const Detailed: Post[] = [
    {
      id: 1,
      title: "Hohenzollern Bridge",
      content:
        "The Hohenzollern Bridge in Cologne is one of Germany's most famous and beloved landmarks. Spanning the majestic Rhine River, this iconic bridge is known not only for its impressive engineering and striking views but also for the thousands of love locks adorning its railings. Couples from around the world flock to Hohenzollern Bridge to seal their love with a padlock and throw the key into the river, creating a romantic and enduring symbol of their commitment. As a vital railway and pedestrian crossing, the bridge seamlessly blends historical significance with modern functionality, serving as a testament to Germany's rich heritage and innovative spirit. Explore the heart of Cologne and experience the magic of the Hohenzollern Bridge with GermanyBridge.",
      comments: ["Great post!", "Very informative!"],
      image: "/germany.jpeg",
    },
    {
      id: 2,
      title: "KolDom",
      content:
        "KolDom offers a revolutionary approach to modern living with its innovative modular homes. Tailored for those who seek flexibility and sustainability, KolDom homes are designed to fit any lifestyle, whether you're looking for a permanent residence, a vacation retreat, or an off-grid sanctuary. Combining eco-friendly materials with customizable features, KolDom provides a seamless blend of comfort, quality, and contemporary design, ensuring your home is as unique as you are.",
      comments: ["Awesome!", "Nice post!"],
      image: "/Köln dom.jpeg",
    },
    {
      id: 3,
      title: "Aurora Majesty",
      content:
        "Aurora Majesty unveils the spectacular Northern Lights of Norway, where the night sky transforms into a mesmerizing canvas of vivid green hues and celestial dances. Journey to Norway's pristine landscapes and witness the awe-inspiring auroras that captivate the soul and ignite the imagination. From serene fjords to snowy mountains, experience the enchanting beauty of Norway's sky and discover the magic of the Arctic wonderland.",
      comments: ["I want to be there!", "How romantic they were!"],
      image: "/Norway.jpeg",
    },
    {
      id: 4,
      title: "Enchanted Forests",
      content:
        "Enchanted Forests takes you on a journey through the world's most mystical and untouched woodlands. Discover the diverse flora and fauna that thrive in these natural havens, and experience the serene beauty and ancient magic of forests that have stood the test of time. From dense, shadowy groves to sunlit clearings, Enchanted Forests offers a glimpse into the heart of nature's most captivating landscapes, where every tree and creature tells a story of harmony and wonder.",
      comments: ["Awesome!", "Nice post!"],
      image: "/forest.jpeg",
    },
    {
      id: 5,
      title: "Antarctic Whispers",
      content:
        "AntarcticWhispers invites you to explore the pristine and tranquil beauty of Antarctica's snow-covered landscapes. This untouched wilderness, with its vast expanses of white and serene silence, offers a glimpse into one of the planet's most remote and awe-inspiring regions. Discover the enchanting world of icebergs, glaciers, and the unique wildlife that thrives in this frozen paradise. Experience the magic of Antarctica, where the whispers of the snow tell stories of ancient times and the enduring spirit of nature.",
      comments: ["Awesome!", "Nice post!"],
      image: "/antartika.jpeg",
    },
    {
      id: 6,
      title: "Shadowed Groves",
      content:
        "Shadowed Groves takes you on a journey into the mysterious and enchanting world of dark forests. These ancient woodlands, shrouded in shadows and steeped in legends, offer a haven for those who seek adventure and solace. Explore the dense canopy and winding paths where light barely penetrates, revealing hidden wonders and untold secrets. From the rustling leaves to the whispering trees, Shadowed Groves invites you to experience the haunting beauty and mystical allure of the world's most enigmatic forests.",
      comments: ["I want to be there!", "How romantic they were!"],
      image: "/dark.jpeg",
    },
  ];

  const post = Detailed.find((post) => post.id === Number(id)); // Convert id to number for comparison

  const [comments, setComments] = useState<string[]>(post?.comments || []); // State for comments
  const [newComment, setNewComment] = useState(""); // State for new comment input

  // Handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim() === "") return; // Prevent empty comments
    setComments([...comments, newComment]); // Add new comment to state
    setNewComment(""); // Clear the input field
  };

  // Handle deleting a comment
  const handleDeleteComment = (index: number) => {
    setComments(comments.filter((_, i) => i !== index)); // Remove the comment at the specified index
  };

  if (!post) return <p>Post not found</p>;

  return (
    <div className="container mx-auto p-6 bg-[url(/main5.avif)]">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={800}
        className="w-full h-[44vh] object-cover rounded-md mb-4"
        priority
        quality={100}
      />
      <p className="text-gray-700 mb-4 text-justify">{post.content}</p>

      {/* Comments Section */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Comments</h2>
        <ul className="mb-4">
          {comments.map((comment, index) => (
            <li
              key={index}
              className="mb-2 flex justify-between items-center border-b pb-2"
            >
              <p>{comment}</p>
              <button
                onClick={() => handleDeleteComment(index)}
                className="text-red-500 text-sm focus:outline-none"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {/* Add Comment Input */}
        <div className="flex items-center">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="border p-2 rounded-md w-full"
          />
          <button
            onClick={handleAddComment}
            className="bg-green-500 text-white px-4 py-2 rounded-md ml-2"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
