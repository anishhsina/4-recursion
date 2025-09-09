const problems = {
  factorial: {
    title: "1. Factorial using Recursion",
    description:
      "Calculate the factorial of a number using recursive approach.",
    code: {
      cpp: `#include <iostream>
using namespace std;

int factorial(int n) {
    // Base case
    if (n <= 1) return 1;
    // Recursive case
    return n * factorial(n - 1);
}

int main() {
    int num = 5;
    cout << "Factorial of " << num << " is " << factorial(num) << endl;
    return 0;
}`,
      java: `public class Factorial {
    public static int factorial(int n) {
        // Base case
        if (n <= 1) return 1;
        // Recursive case
        return n * factorial(n - 1);
    }
    
    public static void main(String[] args) {
        int num = 5;
        System.out.println("Factorial of " + num + " is " + factorial(num));
    }
}`,
      python: `def factorial(n):
    # Base case
    if n <= 1:
        return 1
    # Recursive case
    return n * factorial(n - 1)

# Test
num = 5
print(f"Factorial of {num} is {factorial(num)}")`,
      javascript: `function factorial(n) {
    // Base case
    if (n <= 1) return 1;
    // Recursive case
    return n * factorial(n - 1);
}

// Test
const num = 5;
console.log(\`Factorial of \${num} is \${factorial(num)}\`);`,
    },
    explanation:
      "Factorial of n is the product of all positive integers less than or equal to n. The base case is when n ≤ 1, and the recursive case multiplies n with factorial of (n-1).",
    complexity: "Time: O(n), Space: O(n) due to call stack",
  },

  fibonacci: {
    title: "2. Fibonacci using Recursion",
    description: "Generate Fibonacci sequence using recursive method.",
    code: {
      cpp: `#include <iostream>
using namespace std;

int fibonacci(int n) {
    // Base cases
    if (n <= 1) return n;
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int n = 10;
    cout << "Fibonacci sequence up to " << n << " terms:" << endl;
    for (int i = 0; i < n; i++) {
        cout << fibonacci(i) << " ";
    }
    return 0;
}`,
      java: `public class Fibonacci {
    public static int fibonacci(int n) {
        // Base cases
        if (n <= 1) return n;
        // Recursive case
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    public static void main(String[] args) {
        int n = 10;
        System.out.println("Fibonacci sequence up to " + n + " terms:");
        for (int i = 0; i < n; i++) {
            System.out.print(fibonacci(i) + " ");
        }
    }
}`,
      python: `def fibonacci(n):
    # Base cases
    if n <= 1:
        return n
    # Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2)

# Test
n = 10
print(f"Fibonacci sequence up to {n} terms:")
for i in range(n):
    print(fibonacci(i), end=" ")`,
      javascript: `function fibonacci(n) {
    // Base cases
    if (n <= 1) return n;
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test
const n = 10;
console.log(\`Fibonacci sequence up to \${n} terms:\`);
for (let i = 0; i < n; i++) {
    process.stdout.write(fibonacci(i) + " ");
}`,
    },
    explanation:
      "Fibonacci sequence where each number is the sum of the two preceding ones. F(0)=0, F(1)=1, and F(n)=F(n-1)+F(n-2) for n>1.",
    complexity:
      "Time: O(2^n), Space: O(n) - Exponential due to repeated calculations",
  },

  towerOfHanoi: {
    title: "3. Tower of Hanoi",
    description: "Solve the classic Tower of Hanoi puzzle recursively.",
    code: {
      cpp: `#include <iostream>
using namespace std;

void towerOfHanoi(int n, char from, char to, char aux) {
    // Base case
    if (n == 1) {
        cout << "Move disk 1 from " << from << " to " << to << endl;
        return;
    }
    
    // Move n-1 disks from source to auxiliary
    towerOfHanoi(n - 1, from, aux, to);
    
    // Move the largest disk from source to destination
    cout << "Move disk " << n << " from " << from << " to " << to << endl;
    
    // Move n-1 disks from auxiliary to destination
    towerOfHanoi(n - 1, aux, to, from);
}

int main() {
    int n = 3;
    towerOfHanoi(n, 'A', 'C', 'B');
    return 0;
}`,
      java: `public class TowerOfHanoi {
    public static void towerOfHanoi(int n, char from, char to, char aux) {
        // Base case
        if (n == 1) {
            System.out.println("Move disk 1 from " + from + " to " + to);
            return;
        }
        
        // Move n-1 disks from source to auxiliary
        towerOfHanoi(n - 1, from, aux, to);
        
        // Move the largest disk
        System.out.println("Move disk " + n + " from " + from + " to " + to);
        
        // Move n-1 disks from auxiliary to destination
        towerOfHanoi(n - 1, aux, to, from);
    }
    
    public static void main(String[] args) {
        int n = 3;
        towerOfHanoi(n, 'A', 'C', 'B');
    }
}`,
      python: `def tower_of_hanoi(n, from_rod, to_rod, aux_rod):
    # Base case
    if n == 1:
        print(f"Move disk 1 from {from_rod} to {to_rod}")
        return
    
    # Move n-1 disks from source to auxiliary
    tower_of_hanoi(n - 1, from_rod, aux_rod, to_rod)
    
    # Move the largest disk
    print(f"Move disk {n} from {from_rod} to {to_rod}")
    
    # Move n-1 disks from auxiliary to destination
    tower_of_hanoi(n - 1, aux_rod, to_rod, from_rod)

# Test
n = 3
tower_of_hanoi(n, 'A', 'C', 'B')`,
      javascript: `function towerOfHanoi(n, from, to, aux) {
    // Base case
    if (n === 1) {
        console.log(\`Move disk 1 from \${from} to \${to}\`);
        return;
    }
    
    // Move n-1 disks from source to auxiliary
    towerOfHanoi(n - 1, from, aux, to);
    
    // Move the largest disk
    console.log(\`Move disk \${n} from \${from} to \${to}\`);
    
    // Move n-1 disks from auxiliary to destination
    towerOfHanoi(n - 1, aux, to, from);
}

// Test
const n = 3;
towerOfHanoi(n, 'A', 'C', 'B');`,
    },
    explanation:
      "Classic puzzle where you move disks from one rod to another following rules: only move one disk at a time, never place a larger disk on a smaller one.",
    complexity: "Time: O(2^n), Space: O(n) - Each disk requires 2^n-1 moves",
  },

  subsets: {
    title: "4. Generate All Subsets",
    description:
      "Generate all possible subsets of an array using backtracking.",
    code: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void generateSubsets(vector<int>& nums, vector<int>& current, 
                    vector<vector<int>>& result, int index) {
    // Add current subset to result
    result.push_back(current);
    
    // Generate subsets by including elements from index onwards
    for (int i = index; i < nums.size(); i++) {
        current.push_back(nums[i]);  // Include element
        generateSubsets(nums, current, result, i + 1);
        current.pop_back();  // Backtrack
    }
}

int main() {
    vector<int> nums = {1, 2, 3};
    vector<vector<int>> result;
    vector<int> current;
    
    generateSubsets(nums, current, result, 0);
    
    cout << "All subsets:" << endl;
    for (auto& subset : result) {
        cout << "[";
        for (int i = 0; i < subset.size(); i++) {
            cout << subset[i];
            if (i < subset.size() - 1) cout << ", ";
        }
        cout << "]" << endl;
    }
    return 0;
}`,
      java: `import java.util.*;

public class Subsets {
    public static void generateSubsets(int[] nums, List<Integer> current, 
                                     List<List<Integer>> result, int index) {
        // Add current subset to result
        result.add(new ArrayList<>(current));
        
        // Generate subsets by including elements from index onwards
        for (int i = index; i < nums.length; i++) {
            current.add(nums[i]);  // Include element
            generateSubsets(nums, current, result, i + 1);
            current.remove(current.size() - 1);  // Backtrack
        }
    }
    
    public static void main(String[] args) {
        int[] nums = {1, 2, 3};
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> current = new ArrayList<>();
        
        generateSubsets(nums, current, result, 0);
        
        System.out.println("All subsets:");
        for (List<Integer> subset : result) {
            System.out.println(subset);
        }
    }
}`,
      python: `def generate_subsets(nums, current, result, index):
    # Add current subset to result
    result.append(current[:])
    
    # Generate subsets by including elements from index onwards
    for i in range(index, len(nums)):
        current.append(nums[i])  # Include element
        generate_subsets(nums, current, result, i + 1)
        current.pop()  # Backtrack

# Test
nums = [1, 2, 3]
result = []
current = []

generate_subsets(nums, current, result, 0)

print("All subsets:")
for subset in result:
    print(subset)`,
      javascript: `function generateSubsets(nums, current, result, index) {
    // Add current subset to result
    result.push([...current]);
    
    // Generate subsets by including elements from index onwards
    for (let i = index; i < nums.length; i++) {
        current.push(nums[i]);  // Include element
        generateSubsets(nums, current, result, i + 1);
        current.pop();  // Backtrack
    }
}

// Test
const nums = [1, 2, 3];
const result = [];
const current = [];

generateSubsets(nums, current, result, 0);

console.log("All subsets:");
result.forEach(subset => console.log(subset));`,
    },
    explanation:
      "Backtracking approach to generate all possible subsets. At each step, we have two choices: include the current element or skip it.",
    complexity: "Time: O(2^n), Space: O(2^n) - There are 2^n possible subsets",
  },

  nQueens: {
    title: "5. N-Queens Problem",
    description:
      "Place N queens on NxN chessboard such that no two queens attack each other.",
    code: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool isSafe(vector<vector<int>>& board, int row, int col, int n) {
    // Check column
    for (int i = 0; i < row; i++)
        if (board[i][col] == 1) return false;
    
    // Check diagonal (top-left)
    for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
        if (board[i][j] == 1) return false;
    
    // Check diagonal (top-right)
    for (int i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++)
        if (board[i][j] == 1) return false;
    
    return true;
}

bool solveNQueens(vector<vector<int>>& board, int row, int n) {
    // Base case: all queens placed
    if (row >= n) return true;
    
    for (int col = 0; col < n; col++) {
        if (isSafe(board, row, col, n)) {
            board[row][col] = 1;  // Place queen
            
            if (solveNQueens(board, row + 1, n))
                return true;
            
            board[row][col] = 0;  // Backtrack
        }
    }
    return false;
}

int main() {
    int n = 4;
    vector<vector<int>> board(n, vector<int>(n, 0));
    
    if (solveNQueens(board, 0, n)) {
        cout << "Solution exists:" << endl;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++)
                cout << board[i][j] << " ";
            cout << endl;
        }
    }
    return 0;
}`,
      java: `public class NQueens {
    public static boolean isSafe(int[][] board, int row, int col, int n) {
        // Check column
        for (int i = 0; i < row; i++)
            if (board[i][col] == 1) return false;
        
        // Check diagonal (top-left)
        for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
            if (board[i][j] == 1) return false;
        
        // Check diagonal (top-right)
        for (int i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++)
            if (board[i][j] == 1) return false;
        
        return true;
    }
    
    public static boolean solveNQueens(int[][] board, int row, int n) {
        if (row >= n) return true;
        
        for (int col = 0; col < n; col++) {
            if (isSafe(board, row, col, n)) {
                board[row][col] = 1;
                
                if (solveNQueens(board, row + 1, n))
                    return true;
                
                board[row][col] = 0;
            }
        }
        return false;
    }
    
    public static void main(String[] args) {
        int n = 4;
        int[][] board = new int[n][n];
        
        if (solveNQueens(board, 0, n)) {
            System.out.println("Solution exists:");
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++)
                    System.out.print(board[i][j] + " ");
                System.out.println();
            }
        }
    }
}`,
      python: `def is_safe(board, row, col, n):
    # Check column
    for i in range(row):
        if board[i][col] == 1:
            return False
    
    # Check diagonal (top-left)
    i, j = row - 1, col - 1
    while i >= 0 and j >= 0:
        if board[i][j] == 1:
            return False
        i -= 1
        j -= 1
    
    # Check diagonal (top-right)
    i, j = row - 1, col + 1
    while i >= 0 and j < n:
        if board[i][j] == 1:
            return False
        i -= 1
        j += 1
    
    return True

def solve_n_queens(board, row, n):
    if row >= n:
        return True
    
    for col in range(n):
        if is_safe(board, row, col, n):
            board[row][col] = 1
            
            if solve_n_queens(board, row + 1, n):
                return True
            
            board[row][col] = 0
    
    return False

# Test
n = 4
board = [[0] * n for _ in range(n)]

if solve_n_queens(board, 0, n):
    print("Solution exists:")
    for row in board:
        print(' '.join(map(str, row)))`,
      javascript: `function isSafe(board, row, col, n) {
    // Check column
    for (let i = 0; i < row; i++) {
        if (board[i][col] === 1) return false;
    }
    
    // Check diagonal (top-left)
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 1) return false;
    }
    
    // Check diagonal (top-right)
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 1) return false;
    }
    
    return true;
}

function solveNQueens(board, row, n) {
    if (row >= n) return true;
    
    for (let col = 0; col < n; col++) {
        if (isSafe(board, row, col, n)) {
            board[row][col] = 1;
            
            if (solveNQueens(board, row + 1, n))
                return true;
            
            board[row][col] = 0;
        }
    }
    return false;
}

// Test
const n = 4;
const board = Array(n).fill().map(() => Array(n).fill(0));

if (solveNQueens(board, 0, n)) {
    console.log("Solution exists:");
    board.forEach(row => console.log(row.join(' ')));
}`,
    },
    explanation:
      "Classic backtracking problem. Place queens row by row, checking if placement is safe (no conflicts in column or diagonals).",
    complexity:
      "Time: O(N!), Space: O(N) - Factorial due to decreasing choices per row",
  },

  ratMaze: {
    title: "6. Rat in a Maze",
    description:
      "Find path for rat to reach destination in a maze using backtracking.",
    code: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool isSafe(vector<vector<int>>& maze, int x, int y, int n) {
    return (x >= 0 && x < n && y >= 0 && y < n && maze[x][y] == 1);
}

bool solveMaze(vector<vector<int>>& maze, int x, int y, 
               vector<vector<int>>& sol, int n) {
    // Base case: reached destination
    if (x == n - 1 && y == n - 1) {
        sol[x][y] = 1;
        return true;
    }
    
    // Check if current cell is valid
    if (isSafe(maze, x, y, n)) {
        sol[x][y] = 1;  // Mark as part of solution
        
        // Move right
        if (solveMaze(maze, x, y + 1, sol, n))
            return true;
        
        // Move down
        if (solveMaze(maze, x + 1, y, sol, n))
            return true;
        
        // Backtrack
        sol[x][y] = 0;
    }
    
    return false;
}

int main() {
    vector<vector<int>> maze = {
        {1, 0, 0, 0},
        {1, 1, 0, 1},
        {0, 1, 0, 0},
        {1, 1, 1, 1}
    };
    
    int n = 4;
    vector<vector<int>> sol(n, vector<int>(n, 0));
    
    if (solveMaze(maze, 0, 0, sol, n)) {
        cout << "Solution path:" << endl;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++)
                cout << sol[i][j] << " ";
            cout << endl;
        }
    }
    return 0;
}`,
      java: `public class RatMaze {
    public static boolean isSafe(int[][] maze, int x, int y, int n) {
        return (x >= 0 && x < n && y >= 0 && y < n && maze[x][y] == 1);
    }
    
    public static boolean solveMaze(int[][] maze, int x, int y, 
                                   int[][] sol, int n) {
        if (x == n - 1 && y == n - 1) {
            sol[x][y] = 1;
            return true;
        }
        
        if (isSafe(maze, x, y, n)) {
            sol[x][y] = 1;
            
            if (solveMaze(maze, x, y + 1, sol, n))
                return true;
            
            if (solveMaze(maze, x + 1, y, sol, n))
                return true;
            
            sol[x][y] = 0;
        }
        
        return false;
    }
    
    public static void main(String[] args) {
        int[][] maze = {
            {1, 0, 0, 0},
            {1, 1, 0, 1},
            {0, 1, 0, 0},
            {1, 1, 1, 1}
        };
        
        int n = 4;
        int[][] sol = new int[n][n];
        
        if (solveMaze(maze, 0, 0, sol, n)) {
            System.out.println("Solution path:");
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++)
                    System.out.print(sol[i][j] + " ");
                System.out.println();
            }
        }
    }
}`,
      python: `def is_safe(maze, x, y, n):
    return (x >= 0 and x < n and y >= 0 and y < n and maze[x][y] == 1)

def solve_maze(maze, x, y, sol, n):
    # Base case: reached destination
    if x == n - 1 and y == n - 1:
        sol[x][y] = 1
        return True
    
    # Check if current cell is valid
    if is_safe(maze, x, y, n):
        sol[x][y] = 1
        
        # Move right
        if solve_maze(maze, x, y + 1, sol, n):
            return True
        
        # Move down
        if solve_maze(maze, x + 1, y, sol, n):
            return True
        
        # Backtrack
        sol[x][y] = 0
    
    return False

# Test
maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1]
]

n = 4
sol = [[0] * n for _ in range(n)]

if solve_maze(maze, 0, 0, sol, n):
    print("Solution path:")
    for row in sol:
        print(' '.join(map(str, row)))`,
      javascript: `function isSafe(maze, x, y, n) {
    return (x >= 0 && x < n && y >= 0 && y < n && maze[x][y] === 1);
}

function solveMaze(maze, x, y, sol, n) {
    if (x === n - 1 && y === n - 1) {
        sol[x][y] = 1;
        return true;
    }
    
    if (isSafe(maze, x, y, n)) {
        sol[x][y] = 1;
        
        if (solveMaze(maze, x, y + 1, sol, n))
            return true;
        
        if (solveMaze(maze, x + 1, y, sol, n))
            return true;
        
        sol[x][y] = 0;
    }
    
    return false;
}

// Test
const maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1]
];

const n = 4;
const sol = Array(n).fill().map(() => Array(n).fill(0));

if (solveMaze(maze, 0, 0, sol, n)) {
    console.log("Solution path:");
    sol.forEach(row => console.log(row.join(' ')));
}`,
    },
    explanation:
      "Find path from top-left to bottom-right in maze where 1 represents open path and 0 represents wall. Rat can move right or down only.",
    complexity: "Time: O(2^(n²)), Space: O(n²) - Exponential in worst case",
  },

  wordSearch: {
    title: "7. Word Search in Grid",
    description: "Search for a word in a 2D grid using backtracking.",
    code: {
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

bool dfs(vector<vector<char>>& board, string word, int i, int j, int index) {
    if (index == word.length()) return true;
    
    if (i < 0 || i >= board.size() || j < 0 || j >= board[0].size() || 
        board[i][j] != word[index]) return false;
    
    char temp = board[i][j];
    board[i][j] = '#';  // Mark as visited
    
    // Search in all 4 directions
    bool found = dfs(board, word, i+1, j, index+1) ||
                 dfs(board, word, i-1, j, index+1) ||
                 dfs(board, word, i, j+1, index+1) ||
                 dfs(board, word, i, j-1, index+1);
    
    board[i][j] = temp;  // Backtrack
    return found;
}

bool exist(vector<vector<char>>& board, string word) {
    for (int i = 0; i < board.size(); i++) {
        for (int j = 0; j < board[0].size(); j++) {
            if (dfs(board, word, i, j, 0)) return true;
        }
    }
    return false;
}

int main() {
    vector<vector<char>> board = {
        {'A','B','C','E'},
        {'S','F','C','S'},
        {'A','D','E','E'}
    };
    
    string word = "ABCCED";
    cout << "Word '" << word << "' " << (exist(board, word) ? "found" : "not found") << endl;
    return 0;
}`,
      java: `public class WordSearch {
    public static boolean dfs(char[][] board, String word, int i, int j, int index) {
        if (index == word.length()) return true;
        
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || 
            board[i][j] != word.charAt(index)) return false;
        
        char temp = board[i][j];
        board[i][j] = '#';
        
        boolean found = dfs(board, word, i+1, j, index+1) ||
                       dfs(board, word, i-1, j, index+1) ||
                       dfs(board, word, i, j+1, index+1) ||
                       dfs(board, word, i, j-1, index+1);
        
        board[i][j] = temp;
        return found;
    }
    
    public static boolean exist(char[][] board, String word) {
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (dfs(board, word, i, j, 0)) return true;
            }
        }
        return false;
    }
    
    public static void main(String[] args) {
        char[][] board = {
            {'A','B','C','E'},
            {'S','F','C','S'},
            {'A','D','E','E'}
        };
        
        String word = "ABCCED";
        System.out.println("Word '" + word + "' " + 
                          (exist(board, word) ? "found" : "not found"));
    }
}`,
      python: `def dfs(board, word, i, j, index):
    if index == len(word):
        return True
    
    if (i < 0 or i >= len(board) or j < 0 or j >= len(board[0]) or 
        board[i][j] != word[index]):
        return False
    
    temp = board[i][j]
    board[i][j] = '#'  # Mark as visited
    
    # Search in all 4 directions
    found = (dfs(board, word, i+1, j, index+1) or
             dfs(board, word, i-1, j, index+1) or
             dfs(board, word, i, j+1, index+1) or
             dfs(board, word, i, j-1, index+1))
    
    board[i][j] = temp  # Backtrack
    return found

def exist(board, word):
    for i in range(len(board)):
        for j in range(len(board[0])):
            if dfs(board, word, i, j, 0):
                return True
    return False

# Test
board = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
]

word = "ABCCED"
print(f"Word '{word}' {'found' if exist(board, word) else 'not found'}")`,
      javascript: `function dfs(board, word, i, j, index) {
    if (index === word.length) return true;
    
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || 
        board[i][j] !== word[index]) return false;
    
    const temp = board[i][j];
    board[i][j] = '#';
    
    const found = dfs(board, word, i+1, j, index+1) ||
                  dfs(board, word, i-1, j, index+1) ||
                  dfs(board, word, i, j+1, index+1) ||
                  dfs(board, word, i, j-1, index+1);
    
    board[i][j] = temp;
    return found;
}

function exist(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(board, word, i, j, 0)) return true;
        }
    }
    return false;
}

// Test
const board = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
];

const word = "ABCCED";
console.log(\`Word '\${word}' \${exist(board, word) ? 'found' : 'not found'}\`);`,
    },
    explanation:
      "Search for a word in 2D grid where word can be formed by sequentially adjacent cells. Uses DFS with backtracking to explore all paths.",
    complexity:
      "Time: O(N×M×4^L), Space: O(L) where N,M are grid dimensions and L is word length",
  },

  sudoku: {
    title: "8. Sudoku Solver",
    description: "Solve 9x9 Sudoku puzzle using backtracking algorithm.",
    code: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool isValid(vector<vector<char>>& board, int row, int col, char num) {
    // Check row
    for (int j = 0; j < 9; j++) {
        if (board[row][j] == num) return false;
    }
    
    // Check column
    for (int i = 0; i < 9; i++) {
        if (board[i][col] == num) return false;
    }
    
    // Check 3x3 box
    int startRow = (row / 3) * 3;
    int startCol = (col / 3) * 3;
    for (int i = startRow; i < startRow + 3; i++) {
        for (int j = startCol; j < startCol + 3; j++) {
            if (board[i][j] == num) return false;
        }
    }
    
    return true;
}

bool solveSudoku(vector<vector<char>>& board) {
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            if (board[i][j] == '.') {
                for (char num = '1'; num <= '9'; num++) {
                    if (isValid(board, i, j, num)) {
                        board[i][j] = num;
                        
                        if (solveSudoku(board)) return true;
                        
                        board[i][j] = '.';  // Backtrack
                    }
                }
                return false;
            }
        }
    }
    return true;
}

int main() {
    vector<vector<char>> board = {
        {'5','3','.','.','7','.','.','.','.'},
        {'6','.','.','1','9','5','.','.','.'},
        {'.','9','8','.','.','.','.','6','.'},
        {'8','.','.','.','6','.','.','.','3'},
        {'4','.','.','8','.','3','.','.','1'},
        {'7','.','.','.','2','.','.','.','6'},
        {'.','6','.','.','.','.','2','8','.'},
        {'.','.','.','4','1','9','.','.','5'},
        {'.','.','.','.','8','.','.','7','9'}
    };
    
    if (solveSudoku(board)) {
        cout << "Sudoku solved:" << endl;
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                cout << board[i][j] << " ";
            }
            cout << endl;
        }
    }
    return 0;
}`,
      java: `public class SudokuSolver {
    public static boolean isValid(char[][] board, int row, int col, char num) {
        // Check row
        for (int j = 0; j < 9; j++) {
            if (board[row][j] == num) return false;
        }
        
        // Check column
        for (int i = 0; i < 9; i++) {
            if (board[i][col] == num) return false;
        }
        
        // Check 3x3 box
        int startRow = (row / 3) * 3;
        int startCol = (col / 3) * 3;
        for (int i = startRow; i < startRow + 3; i++) {
            for (int j = startCol; j < startCol + 3; j++) {
                if (board[i][j] == num) return false;
            }
        }
        
        return true;
    }
    
    public static boolean solveSudoku(char[][] board) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] == '.') {
                    for (char num = '1'; num <= '9'; num++) {
                        if (isValid(board, i, j, num)) {
                            board[i][j] = num;
                            
                            if (solveSudoku(board)) return true;
                            
                            board[i][j] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    
    public static void main(String[] args) {
        char[][] board = {
            {'5','3','.','.','7','.','.','.','.'},
            {'6','.','.','1','9','5','.','.','.'},
            {'.','9','8','.','.','.','.','6','.'},
            {'8','.','.','.','6','.','.','.','3'},
            {'4','.','.','8','.','3','.','.','1'},
            {'7','.','.','.','2','.','.','.','6'},
            {'.','6','.','.','.','.','2','8','.'},
            {'.','.','.','4','1','9','.','.','5'},
            {'.','.','.','.','8','.','.','7','9'}
        };
        
        if (solveSudoku(board)) {
            System.out.println("Sudoku solved:");
            for (int i = 0; i < 9; i++) {
                for (int j = 0; j < 9; j++) {
                    System.out.print(board[i][j] + " ");
                }
                System.out.println();
            }
        }
    }
}`,
      python: `def is_valid(board, row, col, num):
    # Check row
    for j in range(9):
        if board[row][j] == num:
            return False
    
    # Check column
    for i in range(9):
        if board[i][col] == num:
            return False
    
    # Check 3x3 box
    start_row = (row // 3) * 3
    start_col = (col // 3) * 3
    for i in range(start_row, start_row + 3):
        for j in range(start_col, start_col + 3):
            if board[i][j] == num:
                return False
    
    return True

def solve_sudoku(board):
    for i in range(9):
        for j in range(9):
            if board[i][j] == '.':
                for num in '123456789':
                    if is_valid(board, i, j, num):
                        board[i][j] = num
                        
                        if solve_sudoku(board):
                            return True
                        
                        board[i][j] = '.'  # Backtrack
                return False
    return True

# Test
board = [
    ['5','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
]

if solve_sudoku(board):
    print("Sudoku solved:")
    for row in board:
        print(' '.join(row))`,
      javascript: `function isValid(board, row, col, num) {
    // Check row
    for (let j = 0; j < 9; j++) {
        if (board[row][j] === num) return false;
    }
    
    // Check column
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === num) return false;
    }
    
    // Check 3x3 box
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (board[i][j] === num) return false;
        }
    }
    
    return true;
}

function solveSudoku(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') {
                for (let num = '1'; num <= '9'; num++) {
                    if (isValid(board, i, j, num)) {
                        board[i][j] = num;
                        
                        if (solveSudoku(board)) return true;
                        
                        board[i][j] = '.';
                    }
                }
                return false;
            }
        }
    }
    return true;
}

// Test
const board = [
    ['5','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
];

if (solveSudoku(board)) {
    console.log("Sudoku solved:");
    board.forEach(row => console.log(row.join(' ')));
}`,
    },
    explanation:
      "Fill 9x9 grid so each row, column, and 3x3 box contains digits 1-9 exactly once. Uses backtracking to try all possibilities.",
    complexity:
      "Time: O(9^(n²)), Space: O(n²) where n=9 - Exponential worst case",
  },

  permutations: {
    title: "9. Permutations of Array",
    description:
      "Generate all possible permutations of an array using backtracking.",
    code: {
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void generatePermutations(vector<int>& nums, vector<vector<int>>& result, int start) {
    // Base case: reached end
    if (start == nums.size()) {
        result.push_back(nums);
        return;
    }
    
    // Generate permutations by swapping
    for (int i = start; i < nums.size(); i++) {
        swap(nums[start], nums[i]);  // Choose
        generatePermutations(nums, result, start + 1);  // Recurse
        swap(nums[start], nums[i]);  // Backtrack
    }
}

vector<vector<int>> permute(vector<int>& nums) {
    vector<vector<int>> result;
    generatePermutations(nums, result, 0);
    return result;
}

int main() {
    vector<int> nums = {1, 2, 3};
    vector<vector<int>> result = permute(nums);
    
    cout << "All permutations:" << endl;
    for (auto& perm : result) {
        cout << "[";
        for (int i = 0; i < perm.size(); i++) {
            cout << perm[i];
            if (i < perm.size() - 1) cout << ", ";
        }
        cout << "]" << endl;
    }
    return 0;
}`,
      java: `import java.util.*;

public class Permutations {
    public static void generatePermutations(int[] nums, List<List<Integer>> result, int start) {
        if (start == nums.length) {
            List<Integer> perm = new ArrayList<>();
            for (int num : nums) perm.add(num);
            result.add(perm);
            return;
        }
        
        for (int i = start; i < nums.length; i++) {
            swap(nums, start, i);
            generatePermutations(nums, result, start + 1);
            swap(nums, start, i);
        }
    }
    
    private static void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    
    public static List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        generatePermutations(nums, result, 0);
        return result;
    }
    
    public static void main(String[] args) {
        int[] nums = {1, 2, 3};
        List<List<Integer>> result = permute(nums);
        
        System.out.println("All permutations:");
        for (List<Integer> perm : result) {
            System.out.println(perm);
        }
    }
}`,
      python: `def generate_permutations(nums, result, start):
    # Base case: reached end
    if start == len(nums):
        result.append(nums[:])
        return
    
    # Generate permutations by swapping
    for i in range(start, len(nums)):
        nums[start], nums[i] = nums[i], nums[start]  # Choose
        generate_permutations(nums, result, start + 1)  # Recurse
        nums[start], nums[i] = nums[i], nums[start]  # Backtrack

def permute(nums):
    result = []
    generate_permutations(nums, result, 0)
    return result

# Test
nums = [1, 2, 3]
result = permute(nums)

print("All permutations:")
for perm in result:
    print(perm)`,
      javascript: `function generatePermutations(nums, result, start) {
    if (start === nums.length) {
        result.push([...nums]);
        return;
    }
    
    for (let i = start; i < nums.length; i++) {
        [nums[start], nums[i]] = [nums[i], nums[start]];  // Swap
        generatePermutations(nums, result, start + 1);
        [nums[start], nums[i]] = [nums[i], nums[start]];  // Backtrack
    }
}

function permute(nums) {
    const result = [];
    generatePermutations(nums, result, 0);
    return result;
}

// Test
const nums = [1, 2, 3];
const result = permute(nums);

console.log("All permutations:");
result.forEach(perm => console.log(perm));`,
    },
    explanation:
      "Generate all possible arrangements of array elements. Uses swapping approach with backtracking to generate all n! permutations.",
    complexity:
      "Time: O(n!×n), Space: O(n!×n) - n! permutations, each taking O(n) space",
  },
};

let currentLanguage = "cpp";

function createProblemCard(problem) {
  return `
                <div class="problem-card">
                    <div class="problem-title">${problem.title}</div>
                    <div class="problem-description">${
                      problem.description
                    }</div>
                    
                    <div class="code-container">
                        <div class="code-header">
                            <span class="language-tag">${getLanguageDisplayName(
                              currentLanguage
                            )}</span>
                        </div>
                        <pre><code>${highlightSyntax(
                          problem.code[currentLanguage],
                          currentLanguage
                        )}</code></pre>
                    </div>
                    
                    <div class="explanation">
                        <h4>💡 Explanation:</h4>
                        <p>${problem.explanation}</p>
                        <div class="complexity">
                            <strong>Complexity:</strong> ${problem.complexity}
                        </div>
                    </div>
                </div>
            `;
}

function getLanguageDisplayName(lang) {
  const names = {
    cpp: "C++",
    java: "Java",
    python: "Python",
    javascript: "JavaScript",
  };
  return names[lang] || lang;
}

function highlightSyntax(code, language) {
  // Basic syntax highlighting
  let highlighted = code
    .replace(
      /(#include|using|namespace|class|public|private|static|void|int|char|bool|return|if|else|for|while|do|switch|case|break|continue|struct|enum)/g,
      '<span class="keyword">$1</span>'
    )
    .replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/gm, '<span class="comment">$1</span>')
    .replace(/(".*?"|'.*?')/g, '<span class="string">$1</span>')
    .replace(/\b(\d+)\b/g, '<span class="number">$1</span>');

  if (language === "python") {
    highlighted = highlighted.replace(
      /(def|class|import|from|if|elif|else|for|while|try|except|finally|with|as|lambda|yield|return|pass|break|continue|and|or|not|in|is)/g,
      '<span class="keyword">$1</span>'
    );
  } else if (language === "javascript") {
    highlighted = highlighted.replace(
      /(function|var|let|const|if|else|for|while|do|switch|case|break|continue|return|try|catch|finally|throw|new|this|typeof|instanceof)/g,
      '<span class="keyword">$1</span>'
    );
  }

  return highlighted;
}

function renderProblems() {
  const grid = document.getElementById("problemsGrid");
  grid.innerHTML = Object.values(problems).map(createProblemCard).join("");
}

function switchLanguage(language) {
  currentLanguage = language;

  // Update active button
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.querySelector(`[data-lang="${language}"]`).classList.add("active");

  // Re-render problems
  renderProblems();
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  renderProblems();

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      switchLanguage(btn.dataset.lang);
    });
  });
});
