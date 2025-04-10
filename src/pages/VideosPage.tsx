import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, Filter, Video, Users, Clock, ChevronRight } from "lucide-react";

export default function VideosPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter videos based on search query
  const filteredVideos = videos.filter(
    (video) => 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Video Tutorials</h1>
          <p className="text-muted-foreground max-w-3xl">
            Master coding concepts through our extensive library of video tutorials taught by industry experts.
          </p>
        </div>
        
        {/* Search and filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search videos..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </Button>
        </div>
        
        {/* Tabs for video categories */}
        <Tabs defaultValue="all">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 w-full">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="algorithms">Algorithms</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="system-design">System Design</TabsTrigger>
            <TabsTrigger value="interview">Interview Prep</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Featured Videos</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.slice(0, 3).map((video) => (
                  <FeaturedVideoCard key={video.id} video={video} />
                ))}
              </div>
              
              <div className="mt-12">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">All Videos</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      Showing {filteredVideos.length} of {videos.length} videos
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredVideos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button variant="outline">Load More</Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="algorithms" className="mt-6">
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">Algorithms Videos</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Coming soon! We're currently producing high-quality algorithm tutorial videos.
              </p>
            </div>
          </TabsContent>
          
          {/* Other tab content would be similar */}
          <TabsContent value="frontend" className="mt-6">
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">Frontend Development Videos</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Coming soon! We're currently producing high-quality frontend development tutorial videos.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="backend" className="mt-6">
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">Backend Development Videos</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Coming soon! We're currently producing high-quality backend development tutorial videos.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="system-design" className="mt-6">
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">System Design Videos</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Coming soon! We're currently producing high-quality system design tutorial videos.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="interview" className="mt-6">
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">Interview Prep Videos</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Coming soon! We're currently producing high-quality interview preparation tutorial videos.
              </p>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Video Series Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Popular Video Series</h2>
          
          <div className="space-y-4">
            {videoSeries.map((series) => (
              <Card key={series.id} className="hover-card">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative h-40 md:h-auto md:w-64 flex-shrink-0">
                      <img 
                        src={series.thumbnail} 
                        alt={series.title}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{series.title}</h3>
                      <p className="text-muted-foreground mb-4">{series.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {series.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center">
                          <Video className="h-4 w-4 mr-1" />
                          {series.videoCount} videos
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {series.totalDuration}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {series.students} students
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Button asChild>
                        <Link to={`/video-series/${series.id}`} className="flex items-center gap-2">
                          Watch Series
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedVideoCard({ video }) {
  return (
    <Card className="overflow-hidden hover-card">
      <div className="relative pt-[56.25%]">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Link to={`/video/${video.id}`}>
            <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center">
              <Video className="h-8 w-8 text-white" />
            </div>
          </Link>
        </div>
        <div className="absolute top-2 right-2">
          <Badge>Featured</Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{video.title}</CardTitle>
        <CardDescription>{video.instructor}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {video.views}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {video.duration}
          </div>
        </div>
        <Link to={`/video/${video.id}`} className="text-primary hover:underline text-sm">
          Watch Now
        </Link>
      </CardFooter>
    </Card>
  );
}

function VideoCard({ video }) {
  return (
    <Card className="hover-card overflow-hidden">
      <div className="relative pt-[56.25%]">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Link to={`/video/${video.id}`}>
            <div className="h-14 w-14 rounded-full bg-primary/90 flex items-center justify-center">
              <Video className="h-6 w-6 text-white" />
            </div>
          </Link>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
        {video.level && (
          <div className="absolute top-2 left-2">
            <Badge variant="outline" className="bg-black/50 border-0 text-white">
              {video.level}
            </Badge>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-lg line-clamp-1">{video.title}</CardTitle>
        <CardDescription>{video.instructor}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {video.views}
          </div>
          <div>
            {video.postedOn}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

// Sample data
const videos = [
  {
    id: 1,
    title: "Mastering React Hooks",
    instructor: "Jane Doe",
    description: "Learn how to use React Hooks effectively in your applications. We'll cover useState, useEffect, useContext, and custom hooks.",
    thumbnail: "https://via.placeholder.com/640x360?text=React+Hooks",
    duration: "32:15",
    views: "45K",
    postedOn: "2 weeks ago",
    level: "Intermediate",
  },
  {
    id: 2,
    title: "System Design Interview Prep",
    instructor: "John Smith",
    description: "Prepare for system design interviews with this comprehensive guide. We'll cover scaling, databases, caching, and more.",
    thumbnail: "https://via.placeholder.com/640x360?text=System+Design",
    duration: "48:30",
    views: "32K",
    postedOn: "1 month ago",
    level: "Advanced",
  },
  {
    id: 3,
    title: "Advanced TypeScript Patterns",
    instructor: "Alex Johnson",
    description: "Take your TypeScript skills to the next level with advanced types, utility types, and patterns for large-scale applications.",
    thumbnail: "https://via.placeholder.com/640x360?text=TypeScript",
    duration: "41:20",
    views: "28K",
    postedOn: "3 weeks ago",
    level: "Advanced",
  },
  {
    id: 4,
    title: "Data Structures: Arrays and Strings",
    instructor: "Michael Brown",
    description: "Mastering fundamental data structures is essential for coding interviews. In this tutorial, we dive deep into arrays and strings.",
    thumbnail: "https://via.placeholder.com/640x360?text=Data+Structures",
    duration: "36:45",
    views: "52K",
    postedOn: "1 month ago",
    level: "Beginner",
  },
  {
    id: 5,
    title: "Modern CSS Techniques",
    instructor: "Sarah Wilson",
    description: "Learn modern CSS techniques like Grid, Flexbox, Custom Properties, and more to create responsive and maintainable layouts.",
    thumbnail: "https://via.placeholder.com/640x360?text=CSS+Techniques",
    duration: "28:10",
    views: "39K",
    postedOn: "2 months ago",
    level: "Intermediate",
  },
  {
    id: 6,
    title: "Introduction to GraphQL",
    instructor: "David Miller",
    description: "Get started with GraphQL and understand how it differs from REST. We'll build a simple API to demonstrate its power.",
    thumbnail: "https://via.placeholder.com/640x360?text=GraphQL",
    duration: "45:30",
    views: "31K",
    postedOn: "3 weeks ago",
    level: "Intermediate",
  }
];

const videoSeries = [
  {
    id: 1,
    title: "Mastering Data Structures & Algorithms",
    description: "A complete course on data structures and algorithms with practical examples and interview questions.",
    thumbnail: "https://via.placeholder.com/640x360?text=DSA+Course",
    tags: ["DSA", "Interviews", "Problem Solving"],
    videoCount: 42,
    totalDuration: "18 hours",
    students: "25.5K",
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    description: "Build modern web applications with React, Node.js, Express, and MongoDB from scratch to deployment.",
    thumbnail: "https://via.placeholder.com/640x360?text=Full+Stack",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    videoCount: 68,
    totalDuration: "32 hours",
    students: "34.2K",
  },
  {
    id: 3,
    title: "System Design for Engineers",
    description: "Learn how to design scalable systems for millions of users. From databases to caching, load balancing, and more.",
    thumbnail: "https://via.placeholder.com/640x360?text=System+Design",
    tags: ["Architecture", "Scalability", "Interviews"],
    videoCount: 28,
    totalDuration: "15 hours",
    students: "18.7K",
  },
];
