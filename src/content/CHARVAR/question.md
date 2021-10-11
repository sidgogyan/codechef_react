Given an array C of M integers and a square matrix A (with integer entries) of dimension N×N, verify whether the following equation is true,


       C0IN+C1A+C2A2+…CM−1AM−1≡0N(mod998244353)


where 0N is the square null matrix (matrix in which all elements are zero) and IN is the identity matrix, both having dimensions N×N.

<br>

**Note:**

* Two matrices A,B each with integer entries are said to be congruent modulo M iff all entries of A−B are divisible by M. This is denoted as A≡B(modM).
* Since the input-output is large, prefer using fast input-output methods.



<br>
<hr/>
<br>

### Input Format

* The first line contains T denoting the number of test cases. Then the test cases follow.

* The first line of each test case contains a single integer M denoting the length of C.

* The second line of each testcase contains M space separated integers, C0,C1,…CM−1 representing the array C.

* The third line of each testcase contains a single integer N denoting the size of the square matrix A.

* The i-th line of the next N lines contains N space-separated integers Ai,1,Ai,2,…,Ai,N denoting the elements of the i-th row of the matrix A.

<br>
<hr/>
<br>

### Output Format

For each test case, output on a single line YES if the equation C0In+C1A+C2A2+…CM−1AM−1≡0N(mod998244353) satisfies, and NO otherwise.


Output is case insensitive, i.e., you may print each character of the string in uppercase or lowercase (for example, the strings "yEs", "yes", "Yes" and "YES" will all be treated as identical).
<br>
<hr/>
<br>

### Constraints
* 1≤T≤105 
* 1≤N≤109


<br>
<hr/>
<br>

### Subtasks
**Subtask 1 (100 points):** Original constraints

<br>
<hr/>
<br>

### Sample Input 1 
2

3

998244351 998244348 1

2

1 2

3 4

3

998244351 998244348 1

2

1 1

1 1


<br>
<hr/>
<br>

### Sample Output 1 
YES

NO

<br>
<hr/>
<br>

### Explanation
* **Test case 1**: N=21  does not contain the digit D=5. Hence there is no need to add any integers to N.

* **Test case 2**: If 1 is added to N=8, it becomes equal to 9, which does not contain the digit D=8.

* **Test case 3**: The minimum integer you should add to N=100 such that the final value of N does not contain the digit D=0 is 11.

