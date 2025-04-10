
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart, 
  Calendar, 
  Trophy, 
  Star, 
  Clock, 
  BookOpen, 
  Code, 
  Video, 
  Check, 
  CheckCircle,
  Medal,
  Award,
  Flame
} from "lucide-react";
import { 
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function ProfilePage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold">
                CM
              </div>
              <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center">
                <Trophy className="h-4 w-4" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold">CodeMaster42</h1>
              <p className="text-muted-foreground">Joined April 2023</p>
            </div>
          </div>
          <div>
            <Button variant="outline">Edit Profile</Button>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Score</CardDescription>
              <CardTitle className="text-3xl">3,250</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">Rank: 1,245 / 34,582</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Problems Solved</CardDescription>
              <CardTitle className="text-3xl">147</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                  <span>42 Easy</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span>78 Medium</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span>27 Hard</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Current Streak</CardDescription>
              <CardTitle className="text-3xl">14</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Flame className="h-4 w-4 text-orange-500" />
                <span className="text-sm">Longest: 23 days</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Badges Earned</CardDescription>
              <CardTitle className="text-3xl">12</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm">3 new this month</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Main Content Tabs */}
        <Tabs defaultValue="progress">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="progress">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {/* Activity Chart */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl">Activity Overview</CardTitle>
                    <CardDescription>Your coding activity in the past 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsBarChart data={activityData}>
                          <XAxis dataKey="day" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="problems" fill="hsl(var(--primary))" />
                        </RechartsBarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Learning Progress */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl">Learning Paths Progress</CardTitle>
                      <Button variant="outline" size="sm">View All</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {learningPathsProgress.map((path) => (
                        <div key={path.id} className="space-y-2">
                          <div className="flex justify-between">
                            <div className="font-medium">{path.title}</div>
                            <div className="text-sm text-muted-foreground">{path.completedVideos} / {path.totalVideos} videos</div>
                          </div>
                          <Progress value={path.progress} />
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {path.estimatedTimeLeft} left
                            </div>
                            <div>
                              {path.lastAccessed}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-8">
                {/* Skill Breakdown */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Skill Breakdown</CardTitle>
                    <CardDescription>Areas where you've practiced</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {skillBreakdown.map((skill) => (
                        <div key={skill.name} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.count} problems</span>
                          </div>
                          <Progress value={skill.percentage} />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Recent Achievements */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Recent Achievements</CardTitle>
                    <CardDescription>Badges and milestones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentAchievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-3 pb-4 border-b last:border-0">
                          <div className={`h-10 w-10 rounded-full flex items-center justify-center ${achievement.iconBg}`}>
                            {achievement.icon}
                          </div>
                          <div>
                            <div className="font-medium">{achievement.title}</div>
                            <div className="text-sm text-muted-foreground">{achievement.description}</div>
                            <div className="text-xs text-muted-foreground mt-1">{achievement.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" className="w-full mt-4">View All Achievements</Button>
                  </CardContent>
                </Card>
                
                {/* Upcoming Contests */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Upcoming Contests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingContests.map((contest) => (
                        <div key={contest.id} className="border rounded-lg p-3">
                          <div className="font-medium">{contest.title}</div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                            <Calendar className="h-4 w-4" />
                            {contest.date}, {contest.time}
                          </div>
                          <div className="mt-3 flex justify-between">
                            <Badge variant="outline">{contest.difficulty}</Badge>
                            <Button size="sm">Register</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Activity History</CardTitle>
                <CardDescription>Your recent coding activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {activityHistory.map((activity, index) => (
                    <div key={index} className="flex gap-4 border-b pb-4 last:border-0">
                      <div className={`h-10 w-10 rounded-full flex-shrink-0 flex items-center justify-center ${getActivityIconBg(activity.type)}`}>
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="space-y-1">
                        <div className="font-medium">{activity.title}</div>
                        <div className="text-sm text-muted-foreground">{activity.description}</div>
                        <div className="text-xs text-muted-foreground">{activity.timestamp}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full mt-6">Load More</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="achievements">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allAchievements.map((achievement) => (
                <Card key={achievement.id} className={!achievement.unlocked ? "opacity-50" : ""}>
                  <CardHeader>
                    <div className="flex justify-between">
                      <Badge variant={achievement.unlocked ? "default" : "outline"}>
                        {achievement.unlocked ? "Unlocked" : "Locked"}
                      </Badge>
                      <div className="text-muted-foreground text-sm">{achievement.points} pts</div>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center py-6">
                    <div className={`h-20 w-20 rounded-full mx-auto flex items-center justify-center ${achievement.iconBg}`}>
                      {achievement.icon}
                    </div>
                    <h3 className="font-bold text-lg mt-4">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{achievement.description}</p>
                    
                    {achievement.progress && (
                      <div className="mt-4">
                        <Progress value={achievement.progress.current / achievement.progress.required * 100} className="h-2" />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>{achievement.progress.current} / {achievement.progress.required}</span>
                          <span>{Math.round(achievement.progress.current / achievement.progress.required * 100)}%</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="settings">
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">Profile Settings</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Coming soon! You'll be able to customize your profile, notification preferences, and more.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function getActivityIcon(type: string) {
  switch (type) {
    case 'problem':
      return <Code className="h-5 w-5 text-white" />;
    case 'video':
      return <Video className="h-5 w-5 text-white" />;
    case 'learning':
      return <BookOpen className="h-5 w-5 text-white" />;
    case 'achievement':
      return <Trophy className="h-5 w-5 text-white" />;
    default:
      return <Check className="h-5 w-5 text-white" />;
  }
}

function getActivityIconBg(type: string) {
  switch (type) {
    case 'problem':
      return 'bg-blue-500';
    case 'video':
      return 'bg-purple-500';
    case 'learning':
      return 'bg-green-500';
    case 'achievement':
      return 'bg-amber-500';
    default:
      return 'bg-gray-500';
  }
}

// Sample data
const activityData = [
  { day: '01', problems: 3 },
  { day: '02', problems: 5 },
  { day: '03', problems: 2 },
  { day: '04', problems: 0 },
  { day: '05', problems: 1 },
  { day: '06', problems: 4 },
  { day: '07', problems: 6 },
  { day: '08', problems: 2 },
  { day: '09', problems: 3 },
  { day: '10', problems: 5 },
  { day: '11', problems: 1 },
  { day: '12', problems: 0 },
  { day: '13', problems: 2 },
  { day: '14', problems: 4 },
  { day: '15', problems: 5 },
  { day: '16', problems: 3 },
  { day: '17', problems: 2 },
  { day: '18', problems: 0 },
  { day: '19', problems: 1 },
  { day: '20', problems: 3 },
  { day: '21', problems: 5 },
  { day: '22', problems: 4 },
  { day: '23', problems: 3 },
  { day: '24', problems: 2 },
  { day: '25', problems: 4 },
  { day: '26', problems: 6 },
  { day: '27', problems: 3 },
  { day: '28', problems: 2 },
  { day: '29', problems: 4 },
  { day: '30', problems: 5 },
];

const learningPathsProgress = [
  {
    id: 1,
    title: 'Data Structures & Algorithms',
    progress: 68,
    completedVideos: 24,
    totalVideos: 35,
    estimatedTimeLeft: '4.5 hours',
    lastAccessed: '2 days ago'
  },
  {
    id: 2,
    title: 'Frontend Web Development',
    progress: 42,
    completedVideos: 15,
    totalVideos: 36,
    estimatedTimeLeft: '12 hours',
    lastAccessed: '1 week ago'
  },
  {
    id: 3,
    title: 'System Design',
    progress: 20,
    completedVideos: 5,
    totalVideos: 25,
    estimatedTimeLeft: '18 hours',
    lastAccessed: '3 days ago'
  }
];

const skillBreakdown = [
  { name: 'Arrays', count: 42, percentage: 28 },
  { name: 'Strings', count: 38, percentage: 26 },
  { name: 'Dynamic Programming', count: 25, percentage: 17 },
  { name: 'Trees', count: 22, percentage: 15 },
  { name: 'Graphs', count: 12, percentage: 8 },
  { name: 'Other', count: 8, percentage: 6 }
];

const recentAchievements = [
  {
    icon: <Trophy className="h-5 w-5 text-white" />,
    iconBg: 'bg-yellow-500',
    title: '30-Day Streak Master',
    description: 'Solved at least one problem every day for 30 days',
    date: '3 days ago'
  },
  {
    icon: <Star className="h-5 w-5 text-white" />,
    iconBg: 'bg-purple-500',
    title: 'Graph Explorer',
    description: 'Completed 15 graph problems',
    date: '1 week ago'
  },
  {
    icon: <Medal className="h-5 w-5 text-white" />,
    iconBg: 'bg-blue-500',
    title: 'Algorithm Apprentice',
    description: 'Solved 50 algorithm challenges',
    date: '2 weeks ago'
  }
];

const upcomingContests = [
  {
    id: 1,
    title: 'Weekly Coding Challenge',
    date: 'April 15, 2023',
    time: '7:00 PM',
    difficulty: 'All Levels'
  },
  {
    id: 2,
    title: 'Frontend Hackathon',
    date: 'April 22, 2023',
    time: '10:00 AM',
    difficulty: 'Intermediate'
  }
];

const activityHistory = [
  {
    type: 'problem',
    title: 'Solved "Two Sum"',
    description: 'Easy challenge completed successfully',
    timestamp: 'Today at 3:45 PM'
  },
  {
    type: 'video',
    title: 'Watched "Advanced TypeScript Patterns"',
    description: 'Completed 41 min video',
    timestamp: 'Today at 1:20 PM'
  },
  {
    type: 'problem',
    title: 'Attempted "Median of Two Sorted Arrays"',
    description: 'Hard challenge - Partial solution submitted',
    timestamp: 'Yesterday at 7:15 PM'
  },
  {
    type: 'learning',
    title: 'Continued "Data Structures & Algorithms" Path',
    description: 'Completed 3 modules',
    timestamp: 'Yesterday at 4:30 PM'
  },
  {
    type: 'achievement',
    title: 'Earned "30-Day Streak Master" Badge',
    description: 'Completed 30 day coding streak',
    timestamp: '3 days ago'
  }
];

const allAchievements = [
  {
    id: 1,
    title: 'Problem Solver',
    description: 'Solve your first coding problem',
    points: 10,
    unlocked: true,
    iconBg: 'bg-green-500',
    icon: <CheckCircle className="h-8 w-8 text-white" />
  },
  {
    id: 2,
    title: '7-Day Streak',
    description: 'Solve at least one problem daily for a week',
    points: 25,
    unlocked: true,
    iconBg: 'bg-yellow-500',
    icon: <Flame className="h-8 w-8 text-white" />
  },
  {
    id: 3,
    title: '30-Day Streak Master',
    description: 'Solve at least one problem daily for 30 days',
    points: 100,
    unlocked: true,
    iconBg: 'bg-yellow-500',
    icon: <Trophy className="h-8 w-8 text-white" />
  },
  {
    id: 4,
    title: 'Algorithm Apprentice',
    description: 'Solve 50 algorithm challenges',
    points: 75,
    unlocked: true,
    iconBg: 'bg-blue-500',
    icon: <Medal className="h-8 w-8 text-white" />
  },
  {
    id: 5,
    title: 'Dynamic Programming Guru',
    description: 'Solve 25 dynamic programming problems',
    points: 150,
    unlocked: false,
    progress: {
      current: 18,
      required: 25
    },
    iconBg: 'bg-purple-500',
    icon: <Star className="h-8 w-8 text-white" />
  },
  {
    id: 6,
    title: 'Hard Problem Master',
    description: 'Solve 30 hard difficulty problems',
    points: 200,
    unlocked: false,
    progress: {
      current: 27,
      required: 30
    },
    iconBg: 'bg-red-500',
    icon: <Award className="h-8 w-8 text-white" />
  }
];
