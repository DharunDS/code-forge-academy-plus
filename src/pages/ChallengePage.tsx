
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Clock, Trophy, Users, ThumbsUp, MessageSquare, Bookmark, Play } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function ChallengePage() {
  const [code, setCode] = useState(`function twoSum(nums, target) {
  // Your solution here
  
}`);

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-6">
            {/* Challenge header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">Array</Badge>
                <Badge variant="outline">Hash Table</Badge>
                <Badge variant="success">Easy</Badge>
              </div>
              <h1 className="text-3xl font-bold">Two Sum</h1>
              <div className="flex items-center gap-6 mt-3 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 mr-1" />
                  100 points
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  19.5K submissions
                </div>
                <div className="flex items-center">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  89% success rate
                </div>
              </div>
            </div>
            
            {/* Tabs */}
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="solution">Solution</TabsTrigger>
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
                <TabsTrigger value="submissions">Submissions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="prose dark:prose-invert max-w-none">
                      <p className="text-lg">
                        Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.
                      </p>
                      <p>
                        You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.
                      </p>
                      <p>
                        You can return the answer in any order.
                      </p>
                      
                      <h3 className="font-bold text-lg mt-6 mb-3">Example 1:</h3>
                      <div className="code-block">
                        <pre><code>
                          <span className="text-muted-foreground">Input:</span> nums = [2,7,11,15], target = 9<br/>
                          <span className="text-muted-foreground">Output:</span> [0,1]<br/>
                          <span className="text-muted-foreground">Explanation:</span> Because nums[0] + nums[1] == 9, we return [0, 1].
                        </code></pre>
                      </div>
                      
                      <h3 className="font-bold text-lg mt-6 mb-3">Example 2:</h3>
                      <div className="code-block">
                        <pre><code>
                          <span className="text-muted-foreground">Input:</span> nums = [3,2,4], target = 6<br/>
                          <span className="text-muted-foreground">Output:</span> [1,2]
                        </code></pre>
                      </div>
                      
                      <h3 className="font-bold text-lg mt-6 mb-3">Example 3:</h3>
                      <div className="code-block">
                        <pre><code>
                          <span className="text-muted-foreground">Input:</span> nums = [3,3], target = 6<br/>
                          <span className="text-muted-foreground">Output:</span> [0,1]
                        </code></pre>
                      </div>
                      
                      <h3 className="font-bold text-lg mt-6 mb-3">Constraints:</h3>
                      <ul className="list-disc pl-6">
                        <li>
                          <code>2 ≤ nums.length ≤ 10<sup>4</sup></code>
                        </li>
                        <li>
                          <code>-10<sup>9</sup> ≤ nums[i] ≤ 10<sup>9</sup></code>
                        </li>
                        <li>
                          <code>-10<sup>9</sup> ≤ target ≤ 10<sup>9</sup></code>
                        </li>
                        <li>
                          <strong>Only one valid answer exists.</strong>
                        </li>
                      </ul>
                      
                      <h3 className="font-bold text-lg mt-6 mb-3">Follow-up:</h3>
                      <p>Can you come up with an algorithm that is less than <code>O(n²)</code> time complexity?</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="solution" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="prose dark:prose-invert max-w-none">
                      <h3 className="font-bold text-lg mb-4">Solution Approaches</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold">Approach 1: Brute Force</h4>
                          <p>
                            The simplest approach is to use two nested loops to check every pair of numbers in the array.
                          </p>
                          <div className="code-block">
                            <pre><code>
                              {`function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}`}
                            </code></pre>
                          </div>
                          <p className="mt-2 text-muted-foreground">Time Complexity: O(n²), Space Complexity: O(1)</p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold">Approach 2: Hash Map</h4>
                          <p>
                            A more efficient approach uses a hash map to store the numbers we've seen so far along with their indices.
                          </p>
                          <div className="code-block">
                            <pre><code>
                              {`function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return null;
}`}
                            </code></pre>
                          </div>
                          <p className="mt-2 text-muted-foreground">Time Complexity: O(n), Space Complexity: O(n)</p>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <h3 className="font-bold text-lg mb-4">Video Explanation</h3>
                        <div className="relative pb-[56.25%] bg-code border rounded-lg">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <Play className="h-14 w-14 text-primary mx-auto" />
                              <p className="mt-2">Watch solution walkthrough</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="discussion" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold">Discussion (124 comments)</h3>
                      <Button>Post Comment</Button>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <span className="font-medium">JS</span>
                            </div>
                            <span className="font-medium">JohnSmith</span>
                          </div>
                          <span className="text-sm text-muted-foreground">2 days ago</span>
                        </div>
                        <p>
                          The hash map solution is really elegant! I was able to improve my solution's runtime from 98ms to 52ms by using this approach.
                        </p>
                        <div className="flex gap-4 mt-3 text-sm text-muted-foreground">
                          <button className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            45
                          </button>
                          <button className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            Reply
                          </button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <span className="font-medium">AL</span>
                            </div>
                            <span className="font-medium">AliceLee</span>
                          </div>
                          <span className="text-sm text-muted-foreground">1 week ago</span>
                        </div>
                        <p>
                          Has anyone tried using a two-pointer approach for this? It doesn't work directly because we need to return indices, not values, and sorting would change the original indices.
                        </p>
                        <div className="flex gap-4 mt-3 text-sm text-muted-foreground">
                          <button className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            32
                          </button>
                          <button className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            Reply
                          </button>
                        </div>
                        
                        <div className="ml-8 mt-4 border-l-2 pl-4">
                          <div className="flex justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                <span className="font-medium">RD</span>
                              </div>
                              <span className="font-medium">RobDev</span>
                            </div>
                            <span className="text-sm text-muted-foreground">6 days ago</span>
                          </div>
                          <p>
                            You could store the original indices along with the values in a separate array, then sort that array and use two pointers. But the hash map approach is more straightforward.
                          </p>
                          <div className="flex gap-4 mt-3 text-sm text-muted-foreground">
                            <button className="flex items-center gap-1">
                              <ThumbsUp className="h-4 w-4" />
                              18
                            </button>
                            <button className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" />
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Button variant="outline">Load More Comments</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="submissions" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-6">Your Submissions</h3>
                    
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <Badge variant="success">Accepted</Badge>
                            <span className="ml-2 text-sm text-muted-foreground">2023-08-15 14:23</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              52ms
                            </div>
                            <div>5.2MB</div>
                          </div>
                        </div>
                        <div className="code-block">
                          <pre><code>
                            {`function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return null;
}`}
                          </code></pre>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <Badge variant="destructive">Failed</Badge>
                            <span className="ml-2 text-sm text-muted-foreground">2023-08-15 14:21</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              --
                            </div>
                            <div>--</div>
                          </div>
                        </div>
                        <div className="code-block">
                          <pre><code>
                            {`function twoSum(nums, target) {
  const map = {};
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (complement in map) {
      return [map[complement], i];
    }
    
    map[nums[i]] = i;
  }
  
  return null;
}`}
                          </code></pre>
                        </div>
                        <div className="mt-2 p-3 bg-destructive/10 text-destructive rounded-lg">
                          <p className="font-medium">Error:</p>
                          <p>Input: [3,2,4], target = 6</p>
                          <p>Expected: [1,2]</p>
                          <p>Output: null</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Code Editor Section */}
        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle className="text-lg">Code Editor</CardTitle>
              <CardDescription>JavaScript</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="code-block min-h-[300px]">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-full min-h-[300px] bg-transparent focus:outline-none resize-none"
                  spellCheck="false"
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Reset
                  </Button>
                  <Button variant="outline" size="sm">
                    Format
                  </Button>
                </div>
                <Button variant="outline" size="icon">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button className="w-full">Run</Button>
              <Button variant="secondary" className="w-full">Submit</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
