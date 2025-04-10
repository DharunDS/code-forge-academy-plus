
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, BookOpen, Video, Trophy, Users, Zap, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary/10 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Level Up Your Coding Skills
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
            Practice with 1000+ coding challenges, watch expert video tutorials, and join a community of developers dedicated to continuous improvement.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/challenges">Start Coding</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/learn">Explore Learning Paths</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Challenges */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">Featured Challenges</h2>
              <p className="text-muted-foreground mt-1">Sharpen your skills with these popular problems</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/challenges">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredChallenges.map((challenge) => (
              <Card key={challenge.id} className="hover-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant={getDifficultyVariant(challenge.difficulty)}>{challenge.difficulty}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Trophy className="h-4 w-4 mr-1" />
                      {challenge.points} pts
                    </div>
                  </div>
                  <CardTitle>{challenge.title}</CardTitle>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {challenge.submissions} submissions
                  </div>
                  <Button asChild>
                    <Link to={`/challenge/${challenge.id}`}>Solve</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Learning Paths */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">Learning Paths</h2>
              <p className="text-muted-foreground mt-1">Structured roadmaps to master different tech stacks</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/learn">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.map((path) => (
              <Card key={path.id} className="hover-card">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge>{path.level}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {path.duration}
                    </div>
                  </div>
                  <CardTitle>{path.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex items-center gap-2 mb-4">
                    {path.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{path.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to={`/learn/${path.id}`}>Start Path</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Videos */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">Featured Videos</h2>
              <p className="text-muted-foreground mt-1">Learn from expert instructors</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/videos">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVideos.map((video) => (
              <Card key={video.id} className="hover-card">
                <div className="relative pb-[56.25%]">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Link to={`/video/${video.id}`}>
                      <div className="h-14 w-14 rounded-full bg-primary/90 flex items-center justify-center">
                        <Video className="h-6 w-6 text-white" />
                      </div>
                    </Link>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                  <CardDescription>{video.instructor}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {video.views}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {video.postedOn}
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Code Forge Academy?</h2>
            <p className="text-muted-foreground">Our platform combines the best features to help you become a better programmer faster.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Interactive Challenges</h3>
              <p className="text-muted-foreground">Practice with over 1000 coding problems across different difficulty levels and topics.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Video Tutorials</h3>
              <p className="text-muted-foreground">Learn through high-quality video content created by industry experts.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Structured Learning</h3>
              <p className="text-muted-foreground">Follow curated learning paths designed to take you from beginner to expert.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Community</h3>
              <p className="text-muted-foreground">Connect with other developers, share solutions, and learn together.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Progress Tracking</h3>
              <p className="text-muted-foreground">Monitor your growth with detailed statistics and achievements.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Mock Interviews</h3>
              <p className="text-muted-foreground">Prepare for technical interviews with realistic coding scenarios.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper function for difficulty badge color
function getDifficultyVariant(difficulty: string) {
  switch (difficulty.toLowerCase()) {
    case "easy":
      return "success";
    case "medium":
      return "warning";
    case "hard":
      return "destructive";
    default:
      return "default";
  }
}

// Sample data
const featuredChallenges = [
  {
    id: 1,
    title: "Two Sum",
    description: "Find two numbers in an array that add up to a target.",
    difficulty: "Easy",
    points: 100,
    submissions: "19.5K",
  },
  {
    id: 2,
    title: "Longest Substring Without Repeating Characters",
    description: "Find the length of the longest substring without repeating characters.",
    difficulty: "Medium",
    points: 200,
    submissions: "12.8K",
  },
  {
    id: 3,
    title: "Median of Two Sorted Arrays",
    description: "Find the median of two sorted arrays in O(log(n+m)) time.",
    difficulty: "Hard",
    points: 350,
    submissions: "6.2K",
  },
];

const learningPaths = [
  {
    id: 1,
    title: "Frontend Web Development",
    level: "Beginner to Advanced",
    duration: "12 weeks",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    description: "Master modern frontend development with HTML, CSS, JavaScript, and React.",
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    level: "Intermediate",
    duration: "10 weeks",
    tags: ["DSA", "Problem Solving", "Interviews"],
    description: "Build a strong foundation in data structures and algorithms for coding interviews.",
  },
  {
    id: 3,
    title: "Backend Development with Node.js",
    level: "Intermediate",
    duration: "8 weeks",
    tags: ["Node.js", "Express", "MongoDB", "API"],
    description: "Learn server-side development with Node.js, Express and MongoDB.",
  },
];

const featuredVideos = [
  {
    id: 1,
    title: "Mastering React Hooks",
    instructor: "Jane Doe",
    thumbnail: "https://via.placeholder.com/640x360?text=React+Hooks",
    duration: "32:15",
    views: "45K",
    postedOn: "2 weeks ago",
  },
  {
    id: 2,
    title: "System Design Interview Prep",
    instructor: "John Smith",
    thumbnail: "https://via.placeholder.com/640x360?text=System+Design",
    duration: "48:30",
    views: "32K",
    postedOn: "1 month ago",
  },
  {
    id: 3,
    title: "Advanced TypeScript Patterns",
    instructor: "Alex Johnson",
    thumbnail: "https://via.placeholder.com/640x360?text=TypeScript",
    duration: "41:20",
    views: "28K",
    postedOn: "3 weeks ago",
  },
];
